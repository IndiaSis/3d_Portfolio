import { Suspense, useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {

  const Computer=useGLTF("./desktop_pc/scene.gltf");
  return (
   <mesh>
    <hemisphereLight intensity={0.15} groundColor="black" />
    <pintLight intensity={1} />
    <primitive object={Computer.scene} />

   </mesh> 
  )
}

export default Computers