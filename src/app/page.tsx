'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { projects, investments } from '@/data/content';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';

const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#00cc66"
            metalness={0.5}
            roughness={0.2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="relative w-full h-32 flex items-center justify-center">
            <AnimatedBackground />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
              Wasilewski Holdings
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Building the future through strategic investments and innovative projects
          </p>
        </motion.div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Featured Projects</h2>
            <Link 
              href="/projects"
              className="text-accent hover:text-accent-light transition-colors"
            >
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects?id=${project.id}`}>
                <Card
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investments Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Our Investments</h2>
            <Link 
              href="/investments"
              className="text-accent hover:text-accent-light transition-colors"
            >
              View All Investments →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((investment) => (
              <Link key={investment.id} href={`/investments?id=${investment.id}`}>
                <Card
                  title={investment.title}
                  description={investment.description}
                  imageUrl={investment.imageUrl}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 