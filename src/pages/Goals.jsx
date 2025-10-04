import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { investments } from '../data/content.js';

export default function Goals() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-accent to-gray-300 bg-clip-text text-transparent">
            Holistic Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Wasilewski Holdings leverages its diverse portfolio to deliver comprehensive technology solutions that transform how businesses operate, connect, and grow in the digital age.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-accent/20 border border-accent/40 rounded-full text-accent font-semibold">
            <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
            Integrated Portfolio Solutions
          </div>
        </motion.div>

        {/* Portfolio Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Integrated Approach</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              By combining the strengths of our portfolio companies, we create seamless technology ecosystems that address every aspect of modern business needs.
            </p>
          </div>

          {/* Connection Flow Visualization */}
          <div className="relative">
            {/* Central Hub */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-lg text-center">Wasilewski<br/>Holdings</span>
              </div>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
              <motion.path
                d="M 400 200 Q 200 100 100 150"
                stroke="#00cc66"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M 400 200 Q 600 100 700 150"
                stroke="#00cc66"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.path
                d="M 400 200 Q 200 300 100 250"
                stroke="#00cc66"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>

            {/* Portfolio Companies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
              {/* DayDream Technologies */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">DD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">DayDream Technologies</h3>
                  <p className="text-gray-300 text-sm mb-4">Custom Software Development</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Web Applications</li>
                    <li>• Mobile Apps</li>
                    <li>• Enterprise Software</li>
                    <li>• UI/UX Design</li>
                  </ul>
                </div>
              </motion.div>

              {/* Cloud Cards */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">CC</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Cards</h3>
                  <p className="text-gray-300 text-sm mb-4">Digital Networking Solutions</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• NFC Technology</li>
                    <li>• Digital Business Cards</li>
                    <li>• Contact Management</li>
                    <li>• Professional Networking</li>
                  </ul>
                </div>
              </motion.div>

              {/* PowerShade */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.9 }}
                className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">PS</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">PowerShade</h3>
                  <p className="text-gray-300 text-sm mb-4">Solar Technology</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Solar Umbrellas</li>
                    <li>• USB Charging</li>
                    <li>• Renewable Energy</li>
                    <li>• Beach Equipment</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Holistic Solutions Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Business Transformation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our integrated approach combines cutting-edge software development with modern networking solutions to create comprehensive business ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Solution Workflow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Digital Infrastructure</h3>
                </div>
                <p className="text-gray-300">
                  DayDream Technologies builds custom software solutions tailored to your business needs, from web applications to enterprise systems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Modern Networking</h3>
                </div>
                <p className="text-gray-300">
                  Cloud Cards revolutionizes how your team connects and shares information with NFC-enabled digital business cards and contact management.
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Integrated Ecosystem</h3>
                </div>
                <p className="text-gray-300">
                  Seamless integration between your custom software and networking tools creates a unified business technology platform.
                </p>
              </div>
            </motion.div>

            {/* Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Client Success Story</h3>
                  <p className="text-gray-300">Complete Digital Transformation</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="font-semibold">Custom CRM System</span>
                    <span className="text-accent">✓ DayDream</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg">
                    <span className="font-semibold">Digital Business Cards</span>
                    <span className="text-blue-400">✓ Cloud Cards</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="font-semibold">Mobile App Integration</span>
                    <span className="text-accent">✓ Combined</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="font-semibold">Contact Management</span>
                    <span className="text-accent">✓ Seamless</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-lg">
                  <p className="text-sm text-center font-semibold">
                    Result: 40% increase in networking efficiency and streamlined business operations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for Holistic Solutions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Wasilewski Holdings transform your business with our integrated portfolio of cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/80 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/investments"
              className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/"
            className="text-accent hover:text-accent-light transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 