import { motion } from 'framer-motion';

const CSSAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(0, 102, 204, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(0, 204, 102, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-accent/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating squares */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute w-3 h-3 bg-primary-light/30 rotate-45"
          style={{
            left: `${70 + i * 10}%`,
            top: `${20 + i * 20}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Animated lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          style={{
            left: `${10 + i * 30}%`,
            top: `${60 + i * 15}%`,
            width: "200px"
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Moving dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-accent/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 204, 102, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 204, 102, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating triangles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-accent/30"
          style={{
            left: `${15 + i * 20}%`,
            top: `${80 + (i % 2) * 10}%`
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated waves */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(0, 204, 102, 0.1) 50%, transparent 70%)"
        }}
        animate={{
          backgroundPosition: ["-200px 0", "200px 0", "-200px 0"]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default CSSAnimatedBackground; 