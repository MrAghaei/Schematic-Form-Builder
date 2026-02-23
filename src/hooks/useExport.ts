import type { FormField } from "../types/form";
import { generateZodSchema } from "../utils/code-generator";

export const useExport = () => {
  const downloadFile = (fileName: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportJSON = (fields: FormField[]) => {
    const jsonString = JSON.stringify(fields, null, 2);
    downloadFile("schematic-form-builder.json", jsonString, "application/json");
  };

  const exportZodCode = (fields: FormField[]) => {
    const codeString = generateZodSchema(fields);
    downloadFile("schema.ts", codeString, "text/typescript");
  };

  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.log("Failed to copy to clipboard", error);
      return false;
    }
  };
  return { exportJSON, exportZodCode, copyToClipboard };
};
