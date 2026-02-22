import { Type, Hash, Mail, FileText, CheckSquare, List } from "lucide-react";
import { useFormStore } from "../stores/useFormStore";

const FIELD_TYPES = [
  { type: "text", icon: Type, label: "Text Input" },
  { type: "number", icon: Hash, label: "Number" },
  { type: "email", icon: Mail, label: "Email" },
  { type: "textarea", icon: FileText, label: "Textarea" },
  { type: "checkbox", icon: CheckSquare, label: "Checkbox" },
  { type: "select", icon: List, label: "Select" },
] as const;

export const Sidebar = () => {
  const addField = useFormStore((state) => state.addField);

  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4 flex flex-col gap-4 h-full">
      <h2 className="font-bold text-slate-700 text-sm uppercase tracking-wider">
        Toolbox
      </h2>
      <div className="grid gap-3">
        {FIELD_TYPES.map((item) => (
          <button
            key={item.type}
            onClick={() => addField(item.type)}
            className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all text-left group cursor-pointer"
          >
            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
            <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};
