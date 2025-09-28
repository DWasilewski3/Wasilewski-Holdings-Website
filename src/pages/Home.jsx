import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { investments } from '../data/content.js';
import Card from '../components/Card.jsx';
import CompanyLogo from '../components/CompanyLogo.jsx';
import AnimatedBackground from '../components/AnimatedBackground.jsx';
import CSSAnimatedBackground from '../components/CSSAnimatedBackground.jsx';
import AnimatedStats from '../components/AnimatedStats.jsx';
import AnimatedTimeline from '../components/AnimatedTimeline.jsx';
import FloatingCard from '../components/FloatingCard.jsx';

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
    <div className="relative">
      <CSSAnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-accent to-gray-300 bg-clip-text text-transparent">
              Wasilewski Holdings
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Driving innovation and sustainable growth through strategic investments in cutting-edge technology companies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/investments"
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Investments
            </Link>
            <Link
              to="/goals"
              className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Goals
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </div>
      </section>

      {/* Company Logos Showcase */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Portfolio Companies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the innovative companies we're proud to invest in and support.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {investments.map((investment, index) => (
              <motion.div
                key={investment.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <CompanyLogo 
                    logoUrl={investment.logoUrl} 
                    title={investment.title}
                    className="w-32 h-32"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{investment.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{investment.description}</p>
                <a
                  href={investment.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent/20 text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Track our progress and milestones as we build a world-class technology portfolio.
            </p>
          </motion.div>
          <AnimatedTimeline />
        </div>
      </section>

      {/* Floating Cards Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Innovation Highlights</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our key initiatives and breakthrough technologies.
            </p>
          </motion.div>
          <FloatingCard />
        </div>
      </section>

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
              to="/investments"
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
                <Card
                  title={investment.title}
                  description={investment.description}
                  imageUrl={investment.imageUrl}
                  logoUrl={investment.logoUrl}
                  externalLink={investment.website}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 