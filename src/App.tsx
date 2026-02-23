import { useState } from "react";
import { Canvas } from "./components/Canvas";
import { PropertiesPanel } from "./components/PropertiesPanel";
import { Sidebar } from "./components/Sidebar";
import clsx from "clsx";
import { useExport } from "./hooks/useExport";
import { generateZodSchema } from "./utils/code-generator";
import { useFormStore } from "./stores/useFormStore";
import Header from "./components/Header";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { copyToClipboard, exportJSON, exportZodCode } = useExport();
  const { fields } = useFormStore();

  function handleCopyToClipboard() {
    const zodSchema = generateZodSchema(fields);
    copyToClipboard(zodSchema);
  }

  function handleExportJSON() {
    exportJSON(fields);
  }

  function handleExportSchema() {
    exportZodCode(fields);
  }

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 font-sans antialiased overflow-hidden">
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleCopyToClipboard={handleCopyToClipboard}
        handleExportJSON={handleExportJSON}
        handleExportSchema={handleExportSchema}
      />

      {/* Main Area */}
      <main className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        {/* TOP/LEFT Wrapper */}
        <div className="flex flex-row flex-1 min-h-[65vh] lg:min-h-0 border-b lg:border-b-0 border-slate-200">
          {/* Collapsible Sidebar */}
          <aside
            className={clsx(
              "shrink-0 bg-gray-800 flex flex-col z-10 transition-all duration-300 ease-in-out relative",
              isSidebarOpen
                ? "w-20 lg:w-64 opacity-100"
                : "w-0 border-r-0 opacity-0 overflow-hidden",
            )}
          >
            <div className="w-64 h-full overflow-y-auto absolute top-0 left-0">
              <Sidebar />
            </div>
          </aside>

          {/* Canvas */}
          <section className="flex-1 relative bg-slate-50/50 flex flex-col overflow-y-auto min-w-0">
            <Canvas />
          </section>
        </div>

        {/* Properties Panel */}
        <aside className="w-full lg:w-80 xl:w-96 shrink-0 bg-gray-800 flex flex-col lg:border-l border-slate-600 lg:overflow-y-auto overflow-x-hidden z-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] lg:shadow-none">
          <PropertiesPanel />
        </aside>
      </main>
    </div>
  );
}

export default App;
