import React, { useState } from "react";
import { uploadModel } from "../api/modelApi";

export default function UploadCard() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) return alert("Choose file");
    await uploadModel(file);
    window.location.reload();
  };

  return (
    <div className="backdrop-blur-xl bg-white/40 shadow-lg p-6 rounded-xl max-w-lg">
      <h2 className="text-xl font-bold mb-4">Upload 3D Model</h2>

      <input
        type="file"
        accept=".glb,.gltf,.fbx"
        className="mb-4"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={upload}
      >
        Upload
      </button>
    </div>
  );
}
