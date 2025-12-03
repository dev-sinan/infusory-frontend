import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getModels, deleteModel } from "../api/modelApi";
import { useNavigate } from "react-router-dom";

export default function ModelsPage() {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  const load = async () => {
    const res = await getModels();
    setModels(res.models);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Models</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m._id} className="bg-white shadow p-5 rounded-xl">
              <h2 className="text-xl font-semibold">{m.name}</h2>

              <p className="text-gray-500 text-sm mb-4">
                {new Date(m.createdAt).toLocaleString()}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/viewer/${m._id}`)}
                  className="flex-1 bg-green-600 text-white py-2 rounded"
                >
                  View
                </button>

                <button
                  onClick={async () => {
                    await deleteModel(m._id);
                    load();
                  }}
                  className="flex-1 bg-red-600 text-white py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
