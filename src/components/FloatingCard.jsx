import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FloatingCard = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(0, 204, 102, 0.3)"
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      style={{ y, opacity }}
      className={`bg-gradient-to-br from-primary-light/80 to-primary/80 backdrop-blur-sm border border-accent/20 rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard; 