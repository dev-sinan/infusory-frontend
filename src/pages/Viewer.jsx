import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getModels } from "../api/modelApi";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import LoadModel from "../components/LoadModel";

export default function Viewer() {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    getModels().then((res) => {
      setModel(res.models.find((x) => x._id === id));
    });
  }, []);

  return (
    <div className="h-screen bg-gray-900">
      <Navbar />

      {model && (
        <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />

          <React.Suspense fallback={<Html className="text-white">Loading…</Html>}>
            <LoadModel url={model.url} />
          </React.Suspense>

          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
}
