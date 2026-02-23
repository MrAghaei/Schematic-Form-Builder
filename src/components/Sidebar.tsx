import {
  Type,
  Hash,
  Mail,
  FileText,
  CheckSquare,
  List,
  Plus,
} from "lucide-react";
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
    <aside className="w-64  bg-gray-800 p-4 flex flex-col gap-4 h-full">
      <h2 className="font-bold text-white text-sm uppercase tracking-wider">
        Toolbox
      </h2>
      <div className="grid gap-3">
        {FIELD_TYPES.map((item) => (
          <button
            key={item.type}
            onClick={() => addField(item.type)}
            className="flex items-center justify-between gap-3 p-3 bg-slate-950 rounded-lg hover:bg-blue-50  hover:border-blue-200 hover:text-gray-900 transition-all duration-300 text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3 justify-center">
              <item.icon className="w-5 h-5 text-white group-hover:text-gray-900" />
              <span className="text-sm font-medium text-white group-hover:text-gray-900">
                {item.label}
              </span>
            </div>

            <Plus className="text-white group-hover:text-gray-900" />
          </button>
        ))}
      </div>
    </aside>
  );
};
