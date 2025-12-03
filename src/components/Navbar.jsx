import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0F172A] text-white py-4 px-8 shadow-xl flex justify-between items-center">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide text-white hover:text-blue-400 transition"
      >
        Infusory <span className="text-blue-500">3D</span>
      </Link>

      {/* Navigation */}
      <div className="flex gap-8 text-lg font-medium">
        
        <Link
          to="/"
          className="hover:text-blue-400 transition duration-200"
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="hover:text-blue-400 transition duration-200"
        >
          Upload
        </Link>

        <Link
          to="/models"
          className="hover:text-blue-400 transition duration-200"
        >
          Models
        </Link>
      </div>
    </nav>
  );
}

