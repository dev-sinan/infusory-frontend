import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/Uploadpage";
import ModelsPage from "./pages/Modelspage";
import Viewer from "./pages/viewer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/models" element={<ModelsPage />} />
      <Route path="/viewer/:id" element={<Viewer />} />
    </Routes>
  );
}
