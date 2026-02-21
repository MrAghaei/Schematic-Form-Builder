import type { FormField } from "../types/form";

export const generateZodSchema = (fields: FormField[]): string => {
  if (fields.length === 0) return "Add fields to generate a schema";

  let code = `import { z } from "zod";\n\n`;
  code += `export const forSchema = z.object({\n`;

  fields.forEach((field) => {
    let line = ` ${field.name}: z`;

    switch (field.type) {
      case "number":
        line += `.number()`;
        break;
      case "checkbox":
        line += `.boolean()`;
        break;
      case "email":
        line += `.string().email()`;
        break;
      default:
        line += `.string()`;
    }

    if (!field.validation.required) {
      line += `.optional()`;
    } else {
      if (["text", "textarea", "email"].includes(field.type)) {
        line += `.min(1, "Field is required")`;
      }
    }

    if (field.validation.min) line += `.min(${field.validation.min}`;
    if (field.validation.max) line += `.max(${field.validation.max}`;

    code += `${line})\n`;
  });

  code += `});\n\nexport type FormValues = z.infer<typeof formSchema>`;
  return code;
};
