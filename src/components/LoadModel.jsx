import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function LoadModel({ url }) {
  const ext = url.split(".").pop().toLowerCase();
  const loader = ext === "fbx" ? FBXLoader : GLTFLoader;

  const model = useLoader(loader, url);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const box = new THREE.Box3().setFromObject(ref.current);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;

    ref.current.scale.setScalar(scale);

    const center = new THREE.Vector3();
    box.getCenter(center);
    ref.current.position.sub(center);
  }, [model]);

  return (
    <group ref={ref}>
      <primitive object={model.scene || model} />
    </group>
  );
}
