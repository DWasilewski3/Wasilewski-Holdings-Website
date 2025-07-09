'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const AnimatedMesh = () => {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    console.log('AnimatedMesh mounted');
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.5;
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.5;
      meshRef.current.position.z = Math.sin(time * 0.2) * 1;
      console.log('Frame updated:', time);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[6, 3]} />
      <meshStandardMaterial
        color="#0066cc"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10" style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedMesh />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground; 