'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import Card from '../components/Card.js';
import { projects, investments } from '../data/content.js';
import AnimatedBackground from '../components/AnimatedBackground.js';
import CSSAnimatedBackground from '../components/CSSAnimatedBackground.js';
import FloatingParticles from '../components/FloatingParticles.js';
import AnimatedStats from '../components/AnimatedStats.js';
import AnimatedTimeline from '../components/AnimatedTimeline.js';
import FloatingCard from '../components/FloatingCard.js';
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
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* CSS Animated Background */}
        <CSSAnimatedBackground />
        
        {/* 3D Animated Background */}
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
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 204, 102, 0.5)",
                  "0 0 40px rgba(0, 204, 102, 0.8)",
                  "0 0 20px rgba(0, 204, 102, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Wasilewski Holdings
            </motion.h1>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building the future through strategic investments and innovative projects
          </motion.p>
          
          {/* Floating action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Explore Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              View Investments
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Projects Preview Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="section-title mb-0">Featured Projects</h2>
            <Link 
              href="/projects"
              className="text-accent hover:text-accent-light transition-colors"
            >
              View All Projects →
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects?id=${project.id}`}>
                  <Card
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Timeline Section */}
      <AnimatedTimeline />

      {/* Investments Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="section-title mb-0">Our Investments</h2>
            <Link 
              href="/investments"
              className="text-accent hover:text-accent-light transition-colors"
            >
              View All Investments →
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/investments?id=${investment.id}`}>
                  <Card
                    title={investment.title}
                    description={investment.description}
                    imageUrl={investment.imageUrl}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FloatingCard delay={0.2}>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Build the Future?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join us in creating innovative solutions and strategic investments that shape tomorrow's world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
} 