import { create } from "zustand";
import type { FormField } from "../types/form";

interface FormState {
  fields: FormField[];
  selectedFieldId: string | null;

  // Actions
  addField: (type: FormField["type"]) => void;
  removeField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  setSelectedField: (id: string | null) => void;
  reorderFields: (newOrder: FormField[]) => void;
}

export const useFormStore = create<FormState>((set) => ({
  fields: [],
  selectedFieldId: null,

  addField: (type) =>
    set((state) => {
      const newField: FormField = {
        id: crypto.randomUUID(),
        type,
        label: `New ${type}`,
        name: `field_${state.fields.length + 1}`,
        validation: { required: false },
      };
      return {
        fields: [...state.fields, newField],
        selectedFieldId: newField.id,
      };
    }),
  removeField: (id) =>
    set((state) => ({

      fields: state.fields.filter((f) => f.id !== id),

      selectedFieldId:
        state.selectedFieldId === id ? null : state.selectedFieldId,
    })),

  updateField: (id, updates) =>
    set((state) => ({
      fields: state.fields.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    })),

  setSelectedField: (id) => set({ selectedFieldId: id }),

  reorderFields: (newOrder) => set({ fields: newOrder }),
}));
