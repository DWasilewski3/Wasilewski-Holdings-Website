import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { investments } from '../data/content.js';
import RotatingStars from '../components/RotatingStars.jsx';

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
            {/* Central Hub - Hidden */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden"
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
              <motion.path
                d="M 400 200 Q 600 300 700 250"
                stroke="#00cc66"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.6 }}
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
                    <RotatingStars />
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
                    <RotatingStars />
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

              {/* Wasilewski Holdings */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.9 }}
                className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotatingStars />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Wasilewski Holdings</h3>
                  <p className="text-gray-300 text-sm mb-4">Technical Consulting & Strategic Advising</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Technical Architecture</li>
                    <li>• Strategic Planning</li>
                    <li>• Portfolio Integration</li>
                    <li>• Business Development</li>
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
                  <h3 className="text-xl font-bold">Technical Architecture</h3>
                </div>
                <p className="text-gray-300">
                  Wasilewski Holdings provides strategic technical consulting to DayDream Technologies, guiding software architecture decisions and ensuring scalable, robust solutions for clients.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Strategic Advising</h3>
                </div>
                <p className="text-gray-300">
                  Cloud Cards benefits from Wasilewski Holdings' strategic guidance on market positioning, technology integration, and business development to maximize networking solutions impact.
                </p>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Portfolio Integration</h3>
                </div>
                <p className="text-gray-300">
                  Wasilewski Holdings orchestrates seamless integration between DayDream's custom software and Cloud Cards' networking solutions, creating unified business technology ecosystems.
                </p>
              </div>
            </motion.div>

            {/* Hamster Wheel Animation - https://uiverse.io/Nawsome/wet-mayfly-23 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative flex flex-col justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mb-8"
              >
                <h4 className="text-2xl font-bold text-accent text-center">Constant Effort</h4>
              </motion.div>

              <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                <div className="wheel"></div>
                <div className="hamster">
                  <div className="hamster__body">
                    <div className="hamster__head">
                      <div className="hamster__ear"></div>
                      <div className="hamster__eye"></div>
                      <div className="hamster__nose"></div>
                    </div>
                    <div className="hamster__limb hamster__limb--fr"></div>
                    <div className="hamster__limb hamster__limb--fl"></div>
                    <div className="hamster__limb hamster__limb--br"></div>
                    <div className="hamster__limb hamster__limb--bl"></div>
                    <div className="hamster__tail"></div>
                  </div>
                </div>
                <div className="spoke"></div>
              </div>
              
              <style jsx>{`
                /* From Uiverse.io by Nawsome */ 
                .wheel-and-hamster {
                  --dur: 1s;
                  position: relative;
                  width: 12em;
                  height: 12em;
                  font-size: 14px;
                }

                .wheel,
                .hamster,
                .hamster div,
                .spoke {
                  position: absolute;
                }

                .wheel,
                .spoke {
                  border-radius: 50%;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                }

                .wheel {
                  background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
                  z-index: 2;
                }

                .hamster {
                  animation: hamster var(--dur) ease-in-out infinite;
                  top: 50%;
                  left: calc(50% - 3.5em);
                  width: 7em;
                  height: 3.75em;
                  transform: rotate(4deg) translate(-0.8em,1.85em);
                  transform-origin: 50% 0;
                  z-index: 1;
                }

                .hamster__head {
                  animation: hamsterHead var(--dur) ease-in-out infinite;
                  background: hsl(30,90%,55%);
                  border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
                  box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
                    0.75em -1.55em 0 hsl(30,90%,90%) inset;
                  top: 0;
                  left: -2em;
                  width: 2.75em;
                  height: 2.5em;
                  transform-origin: 100% 50%;
                }

                .hamster__ear {
                  animation: hamsterEar var(--dur) ease-in-out infinite;
                  background: hsl(0,90%,85%);
                  border-radius: 50%;
                  box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
                  top: -0.25em;
                  right: -0.25em;
                  width: 0.75em;
                  height: 0.75em;
                  transform-origin: 50% 75%;
                }

                .hamster__eye {
                  animation: hamsterEye var(--dur) linear infinite;
                  background-color: hsl(0,0%,0%);
                  border-radius: 50%;
                  top: 0.375em;
                  left: 1.25em;
                  width: 0.5em;
                  height: 0.5em;
                }

                .hamster__nose {
                  background: hsl(0,90%,75%);
                  border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
                  top: 0.75em;
                  left: 0;
                  width: 0.2em;
                  height: 0.25em;
                }

                .hamster__body {
                  animation: hamsterBody var(--dur) ease-in-out infinite;
                  background: hsl(30,90%,90%);
                  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
                  box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
                    0.15em -0.5em 0 hsl(30,90%,80%) inset;
                  top: 0.25em;
                  left: 2em;
                  width: 4.5em;
                  height: 3em;
                  transform-origin: 17% 50%;
                  transform-style: preserve-3d;
                }

                .hamster__limb--fr,
                .hamster__limb--fl {
                  clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
                  top: 2em;
                  left: 0.5em;
                  width: 1em;
                  height: 1.5em;
                  transform-origin: 50% 0;
                }

                .hamster__limb--fr {
                  animation: hamsterFRLimb var(--dur) linear infinite;
                  background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
                  transform: rotate(15deg) translateZ(-1px);
                }

                .hamster__limb--fl {
                  animation: hamsterFLLimb var(--dur) linear infinite;
                  background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
                  transform: rotate(15deg);
                }

                .hamster__limb--br,
                .hamster__limb--bl {
                  border-radius: 0.75em 0.75em 0 0;
                  clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
                  top: 1em;
                  left: 2.8em;
                  width: 1.5em;
                  height: 2.5em;
                  transform-origin: 50% 30%;
                }

                .hamster__limb--br {
                  animation: hamsterBRLimb var(--dur) linear infinite;
                  background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
                  transform: rotate(-25deg) translateZ(-1px);
                }

                .hamster__limb--bl {
                  animation: hamsterBLLimb var(--dur) linear infinite;
                  background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
                  transform: rotate(-25deg);
                }

                .hamster__tail {
                  animation: hamsterTail var(--dur) linear infinite;
                  background: hsl(0,90%,85%);
                  border-radius: 0.25em 50% 50% 0.25em;
                  box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
                  top: 1.5em;
                  right: -0.5em;
                  width: 1em;
                  height: 0.5em;
                  transform: rotate(30deg) translateZ(-1px);
                  transform-origin: 0.25em 0.25em;
                }

                .spoke {
                  animation: spoke var(--dur) linear infinite;
                  background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
                    linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
                }

                /* Animations */
                @keyframes hamster {
                  from, to {
                    transform: rotate(4deg) translate(-0.8em,1.85em);
                  }

                  50% {
                    transform: rotate(0) translate(-0.8em,1.85em);
                  }
                }

                @keyframes hamsterHead {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(0);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(8deg);
                  }
                }

                @keyframes hamsterEye {
                  from, 90%, to {
                    transform: scaleY(1);
                  }

                  95% {
                    transform: scaleY(0);
                  }
                }

                @keyframes hamsterEar {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(0);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(12deg);
                  }
                }

                @keyframes hamsterBody {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(0);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(-2deg);
                  }
                }

                @keyframes hamsterFRLimb {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(50deg) translateZ(-1px);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(-30deg) translateZ(-1px);
                  }
                }

                @keyframes hamsterFLLimb {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(-30deg);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(50deg);
                  }
                }

                @keyframes hamsterBRLimb {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(-60deg) translateZ(-1px);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(20deg) translateZ(-1px);
                  }
                }

                @keyframes hamsterBLLimb {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(20deg);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(-60deg);
                  }
                }

                @keyframes hamsterTail {
                  from, 25%, 50%, 75%, to {
                    transform: rotate(30deg) translateZ(-1px);
                  }

                  12.5%, 37.5%, 62.5%, 87.5% {
                    transform: rotate(10deg) translateZ(-1px);
                  }
                }

                @keyframes spoke {
                  from {
                    transform: rotate(0);
                  }

                  to {
                    transform: rotate(-1turn);
                  }
                }
              `}</style>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="mt-8"
              >
                <h4 className="text-2xl font-bold text-accent text-center">Constant Progress</h4>
              </motion.div>
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