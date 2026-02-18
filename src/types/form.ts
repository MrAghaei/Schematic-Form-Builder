export type FieldType =
  | "text"
  | "number"
  | "email"
  | "textarea"
  | "checkbox"
  | "select";

export interface ValidationRules {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  name: string;
  placeholder?: string;
  validation: ValidationRules;
}
