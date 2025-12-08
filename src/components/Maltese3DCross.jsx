import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MalteseCrossGeometry = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.002;
    }
  });

  useEffect(() => {
    if (!meshRef.current) return;

    // Create the 2D Maltese Cross shape
    const shape = new THREE.Shape();
    
    // Parameters for the cross
    const innerRadius = 0.3;
    const outerRadius = 1;
    const armCount = 4;
    const armWidth = 0.5;
    
    // Function to create a star/cross shape
    const points = [];
    
    for (let i = 0; i < armCount * 2; i++) {
      const angle = (i / (armCount * 2)) * Math.PI * 2;
      
      // Alternate between outer and inner points for the arrowhead effect
      if (i % 2 === 0) {
        // Outer point (tip of arm)
        const x = Math.cos(angle) * outerRadius;
        const y = Math.sin(angle) * outerRadius;
        points.push(new THREE.Vector2(x, y));
      } else {
        // Inner point (between arms)
        const x = Math.cos(angle) * innerRadius;
        const y = Math.sin(angle) * innerRadius;
        points.push(new THREE.Vector2(x, y));
      }
    }
    
    // Add center points for the concave notches
    const detailedPoints = [];
    for (let i = 0; i < points.length; i++) {
      detailedPoints.push(points[i]);
      
      // Add intermediate point for smoother curves
      const nextPoint = points[(i + 1) % points.length];
      const midX = (points[i].x + nextPoint.x) * 0.5;
      const midY = (points[i].y + nextPoint.y) * 0.5;
      
      // Adjust intermediate points to create concave effect
      const angle = Math.atan2(points[i].y, points[i].x);
      const adjustX = midX * 0.85;
      const adjustY = midY * 0.85;
      
      detailedPoints.push(new THREE.Vector2(adjustX, adjustY));
    }
    
    // Create the shape from points
    shape.moveTo(detailedPoints[0].x, detailedPoints[0].y);
    for (let i = 1; i < detailedPoints.length; i++) {
      shape.lineTo(detailedPoints[i].x, detailedPoints[i].y);
    }
    shape.closePath();
    
    // Extrude the shape with bevel for 3D effect
    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 8,
      steps: 3,
    };
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    
    // Apply smooth shading
    geometry.computeVertexNormals();
    geometry.normalizeNormals();
    
    meshRef.current.geometry = geometry;
  }, []);

  return (
    <mesh ref={meshRef}>
      <meshPhysicalMaterial
        color="#00cc66"
        metalness={0.8}
        roughness={0.15}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        emissive="#005533"
        emissiveIntensity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default function Maltese3DCross() {
  return (
    <MalteseCrossGeometry />
  );
}
