import { Blocks, Menu } from "lucide-react";
import Button from "./ui/Button";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  handleCopyToClipboard: () => void;
  handleExportJSON: () => void;
  handleExportSchema: () => void;
}

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  handleCopyToClipboard,
  handleExportJSON,
  handleExportSchema,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 lg:px-6 h-14 bg-white border-b border-slate-200 shrink-0 z-20">
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 -ml-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-blue-600">
          <Blocks className="w-6 h-6" />
          <h1 className="font-bold text-lg tracking-tight hidden sm:block">
            Schematic Form Builder
          </h1>
        </div>
      </div>
      <div className="flex gap-3">
        <Button onClick={handleCopyToClipboard}>Copy To Clipboard</Button>
        <Button onClick={handleExportJSON}>Export JSON</Button>
        <Button onClick={handleExportSchema}>Export Schema.ts</Button>
      </div>
    </header>
  );
}
