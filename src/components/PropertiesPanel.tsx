import { useFormStore } from "../stores/useFormStore";
import { generateZodSchema } from "../utils/code-generator";
import { Settings2, Code2 } from "lucide-react";

export const PropertiesPanel = () => {
  const { fields, selectedFieldId, updateField } = useFormStore();
  const selectedField = fields.find((f) => f.id === selectedFieldId);

  return (
    <aside className="w-96 border-l border-slate-200 bg-white flex flex-col h-full shadow-xl shadow-slate-200/50 z-10">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center gap-2 mb-6 text-slate-700">
          <Settings2 className="w-5 h-5" />
          <h2 className="font-bold">Properties</h2>
        </div>

        {selectedField ? (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1.5">
                  Label
                </label>
                <input
                  type="text"
                  value={selectedField.label}
                  onChange={(e) =>
                    updateField(selectedField.id, { label: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1.5">
                  Variable Name
                </label>
                <input
                  type="text"
                  value={selectedField.name}
                  onChange={(e) =>
                    updateField(selectedField.id, {
                      name: e.target.value.replace(/\s+/g, ""),
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="border-t border-slate-100 my-4"></div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">
                Validation
              </label>

              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedField.validation.required}
                  onChange={(e) =>
                    updateField(selectedField.id, {
                      validation: {
                        ...selectedField.validation,
                        required: e.target.checked,
                      },
                    })
                  }
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  Required Field
                </span>
              </label>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
            <Settings2 className="w-12 h-12 mb-3 opacity-20" />
            <p>
              Select a field on the canvas
              <br />
              to edit properties
            </p>
          </div>
        )}
      </div>

      <div className="h-1/3 bg-slate-900 border-t border-slate-800 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/50 bg-slate-950/30">
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Generated Output
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            schema.ts
          </span>
        </div>
        <div className="flex-1 overflow-auto p-4 custom-scrollbar">
          <pre className="text-xs text-blue-300 font-mono leading-relaxed">
            {generateZodSchema(fields)}
          </pre>
        </div>
      </div>
    </aside>
  );
};
