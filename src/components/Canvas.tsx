import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Trash2, GripVertical } from "lucide-react";
import clsx from "clsx";
import { useFormStore } from "../stores/useFormStore";
import type { FormField } from "../types/form";

const SortableField = ({ field }: { field: FormField }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });
  const { selectedFieldId, setSelectedField, removeField } = useFormStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "relative flex items-center gap-4 p-4 bg-slate-950 rounded-xl shadow-sm transition-colors group cursor-pointer",
        isDragging ? "z-50 opacity-50 scale-105 shadow-xl" : "z-0",
        selectedFieldId === field.id
          ? "border-blue-500 ring-2 ring-blue-900"
          : "border-slate-200 hover:border-slate-300",
      )}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedField(field.id);
      }}
    >
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-white hover:text-slate-500 p-1"
      >
        <GripVertical className="w-5 h-5" />
      </button>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase text-white bg-gray-700 px-2 py-0.5 rounded">
            {field.type}
          </span>
          {field.validation.required && (
            <span className="text-xs text-red-500 font-medium">*Required</span>
          )}
        </div>
        <p className="font-medium text-white">{field.label}</p>
        <p className="text-xs text-slate-400 font-mono mt-0.5">
          name: {field.name}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          removeField(field.id);
        }}
        className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export const Canvas = () => {
  const { fields, reorderFields, setSelectedField } = useFormStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id);
      const newIndex = fields.findIndex((f) => f.id === over.id);
      reorderFields(arrayMove(fields, oldIndex, newIndex));
    }
  };

  return (
    <main
      className="flex-1 bg-gray-900 p-8 overflow-y-auto"
      onClick={() => setSelectedField(null)}
    >
      <div className="max-w-2xl mx-auto">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-3 min-h-125">
              {fields.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 text-slate-400">
                  <p>Drag & Drop fields from the toolbox</p>
                </div>
              ) : (
                fields.map((field) => (
                  <SortableField key={field.id} field={field} />
                ))
              )}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
};
