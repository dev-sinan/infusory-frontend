import { NavLink } from "react-router-dom";
import { Home, Upload, Box } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6 flex flex-col gap-6 shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Infusory 3D</h1>

      <NavLink to="/" className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded">
        <Home size={20} /> Dashboard
      </NavLink>

      <NavLink to="/" className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded">
        <Upload size={20} /> Upload Models
      </NavLink>

      <NavLink to="/" className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded">
        <Box size={20} /> All Models
      </NavLink>
    </div>
  );
}
