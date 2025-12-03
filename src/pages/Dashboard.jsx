import React, { useState, useEffect } from "react";
import { uploadModel, getModels, deleteModel } from "../api/modelApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    const res = await getModels();
    setModels(res.models);
  };

  useEffect(() => {
    load();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");
    await uploadModel(file);
    setFile(null);
    load();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />

      <div className="w-full max-w-6xl mt-10 px-5">

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome back, Sinan 👋
        </h1>
        <p className="text-gray-600 mb-8">Manage your 3D models easily.</p>

        {/* Summary Cards (Storage Removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-600">Total Models</h3>
            <p className="text-3xl font-bold">{models.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-gray-600">Last Upload</h3>
            <p className="text-xl font-bold">
              {models[0]
                ? new Date(models[0].createdAt).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Upload a 3D Model</h2>

          <div className="flex gap-3 items-center">
            <input
              type="file"
              accept=".glb,.gltf,.fbx"
              className="border p-2 rounded w-full"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              onClick={handleUpload}
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Recent Uploads */}
        <h2 className="text-xl font-bold mb-3">Recent Uploads</h2>
        <div className="bg-white p-4 rounded-xl shadow border mb-8">
          {models.slice(0, 5).map((m) => (
            <div className="flex justify-between p-2 border-b" key={m._id}>
              <span>{m.name}</span>
              <span className="text-gray-500 text-sm">
                {new Date(m.createdAt).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>

        {/* Model Grid */}
        <h2 className="text-3xl font-semibold mb-5">All Models</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m._id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-gray-500 text-sm mb-3">
                  {new Date(m.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => navigate(`/viewer/${m._id}`)}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Preview
                </button>

                <button
                  onClick={async () => {
                    await deleteModel(m._id);
                    load();
                  }}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Upload Button */}
      <button
        onClick={() => document.querySelector("input[type=file]").click()}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        + Upload
      </button>
    </div>
  );
}
