import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";

function LoadModel({ url }) {
  const extension = url.split(".").pop().toLowerCase();

  let loader;
  if (extension === "glb" || extension === "gltf") {
    loader = GLTFLoader;
  } else if (extension === "fbx") {
    loader = FBXLoader;
  } else {
    throw new Error("Unsupported file type: " + extension);
  }

  const model = useLoader(loader, url);

  return (
    <group>
      {model.scene ? (
        <primitive object={model.scene} />
      ) : (
        <primitive object={model} />
      )}
    </group>
  );
}

export default function ModelViewer({ url }) {
  if (!url) return <div className="p-4">Model not selected</div>;

  return (
    <div className="w-full h-[600px] bg-gray-100 rounded">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense
          fallback={
            <Html>
              <div>Loading 3D model…</div>
            </Html>
          }
        >
          <LoadModel url={url} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}
