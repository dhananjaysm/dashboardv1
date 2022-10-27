import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-500">
      <div id="navbar">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
}

export default App;
