import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const AnimatedMesh = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.5;
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.5;
      meshRef.current.position.z = Math.sin(time * 0.2) * 1;
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

const FloatingParticles = () => {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(time * 0.5 + index) * 2;
        child.rotation.z = time * 0.2 + index;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 2.5]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color="#00cc66"
            emissive="#00cc66"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

const FloatingShapes = () => {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.children.forEach((child, index) => {
        child.position.x = Math.sin(time * 0.3 + index) * 3;
        child.position.y = Math.cos(time * 0.4 + index) * 2;
        child.rotation.z = time * 0.1 + index;
        child.scale.setScalar(1 + Math.sin(time * 0.5 + index) * 0.2);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cubes */}
      {[...Array(5)].map((_, i) => (
        <mesh key={`cube-${i}`} position={[Math.random() * 8 - 4, Math.random() * 6 - 3, Math.random() * 4 - 2]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#ff6b6b"
            emissive="#ff6b6b"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Floating pyramids */}
      {[...Array(3)].map((_, i) => (
        <mesh key={`pyramid-${i}`} position={[Math.random() * 8 - 4, Math.random() * 6 - 3, Math.random() * 4 - 2]}>
          <coneGeometry args={[0.2, 0.4, 4]} />
          <meshStandardMaterial
            color="#4ecdc4"
            emissive="#4ecdc4"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

const WaveEffect = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const geometry = meshRef.current.geometry;
      const positions = geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(x * 2 + time) * 0.5 + Math.sin(z * 2 + time * 0.5) * 0.3;
      }
      
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 20, 20]} />
      <meshStandardMaterial
        color="#00cc66"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

const _OrbitingRings = () => {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.children.forEach((child, index) => {
        child.rotation.z = time * (0.1 + index * 0.05);
        child.rotation.x = Math.sin(time * 0.2 + index) * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <mesh key={`ring-${i}`} position={[0, 0, i * 2 - 2]}>
          <ringGeometry args={[1 + i * 0.5, 1.2 + i * 0.5, 32]} />
          <meshStandardMaterial
            color="#ffd93d"
            emissive="#ffd93d"
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10" style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00cc66" />
        
        <AnimatedMesh />
        <FloatingParticles />
        <FloatingShapes />
        <WaveEffect />
        {/* <OrbitingRings /> */}
      </Canvas>
    </div>
  );
};

export default AnimatedBackground; 