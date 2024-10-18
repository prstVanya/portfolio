import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group } from 'three';

import glb from 'assets/3dmodels/ultramarine.glb';

const ThreeModel = () => {
  const ref = useRef<Group | null>(null);
  const gltf = useLoader(GLTFLoader, glb);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 602) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0085;
    }
  });

  return (
    <>
      <ambientLight intensity={3} />
      <pointLight position={[2, 7, 5]} intensity={1.2} />
      <pointLight position={[4, 8, 9]} intensity={0.8} />
      <pointLight position={[4, 0, 0]} intensity={0.8} />
      <pointLight position={[-4, 0, 0]} intensity={0.8} />
      {isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} />}
      <primitive object={gltf.scene} ref={ref} scale={2.3} />
    </>
  );
};

export default ThreeModel;
