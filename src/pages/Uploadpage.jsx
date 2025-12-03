import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { uploadModel } from "../api/modelApi";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");
    await uploadModel(file);
    alert("Uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Upload a 3D Model</h1>

        <input
          type="file"
          accept=".glb,.gltf,.fbx"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
