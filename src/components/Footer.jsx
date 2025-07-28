import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary-light py-8 mt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-4 left-4 w-8 h-8 border border-accent/30 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-12 right-8 w-6 h-6 bg-accent/20 rounded-lg"
          animate={{
            x: [0, -15, 0],
            y: [0, 8, 0],
            rotate: [0, -90, -180],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-8 left-1/4 w-4 h-4 border-2 border-accent/40 rounded-full"
          animate={{
            x: [0, 12, 0],
            y: [0, -6, 0],
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Moving lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          animate={{
            x: ["100%", "-100%"]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-sm text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {currentYear} Wasilewski Holdings. All rights reserved.
          </motion.div>
          <motion.div 
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/company/wasilewski-holdings/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-accent transition-colors"
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360
                }}
                transition={{ duration: 0.3 }}
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </motion.svg>
              <span className="text-sm font-medium">Wasilewski Holdings</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Additional footer content with animations */}
        <motion.div 
          className="mt-8 pt-8 border-t border-accent/20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Animated dots between sections */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated icon */}
              <motion.div
                className="absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h4 className="text-accent font-semibold mb-2">Innovation</h4>
              <p className="text-gray-300 text-sm">Pushing boundaries in technology and business</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated icon */}
              <motion.div
                className="absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <h4 className="text-accent font-semibold mb-2">Investment</h4>
              <p className="text-gray-300 text-sm">Strategic investments in emerging technologies</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated icon */}
              <motion.div
                className="absolute -top-2 -left-2 w-3 h-3 bg-accent/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <h4 className="text-accent font-semibold mb-2">Growth</h4>
              <p className="text-gray-300 text-sm">Building sustainable business solutions</p>
            </motion.div>
          </div>
          
          {/* Animated bottom border */}
          <motion.div
            className="mt-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            animate={{
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 