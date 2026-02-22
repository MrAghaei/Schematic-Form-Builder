import { useState } from "react";
import { Canvas } from "./components/Canvas";
import { PropertiesPanel } from "./components/PropertiesPanel";
import { Sidebar } from "./components/Sidebar";
import { Blocks, Menu } from "lucide-react";
import clsx from "clsx"; // Make sure to import clsx

function App() {
  // State to track if the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Closed by default on mobile is usually better

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 font-sans antialiased overflow-hidden">
      {/* Header */}
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
      </header>

      {/* Main Area */}
      <main className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
        {/* TOP/LEFT Wrapper */}
        <div className="flex flex-row flex-1 min-h-[65vh] lg:min-h-0 border-b lg:border-b-0 border-slate-200">
          {/* Collapsible Sidebar */}
          <aside
            className={clsx(
              "shrink-0 bg-white flex flex-col z-10 transition-all duration-300 ease-in-out border-slate-200 relative",
              isSidebarOpen
                ? "w-20 lg:w-64 border-r opacity-100"
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
        <aside className="w-full lg:w-80 xl:w-96 shrink-0 bg-white flex flex-col lg:border-l border-slate-200 lg:overflow-y-auto z-20 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] lg:shadow-none">
          <PropertiesPanel />
        </aside>
      </main>
    </div>
  );
}

export default App;
