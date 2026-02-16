import type { FormField } from "../types/form";

interface FormState {
  field: FormField[];
  selectedFieldId: string | null;
}
