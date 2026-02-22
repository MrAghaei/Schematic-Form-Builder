import "./App.css";
import { Canvas } from "./components/Canvas";
import { PropertiesPanel } from "./components/PropertiesPanel";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex justify-between items-center h-screen">
      <Sidebar />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
}

export default App;
