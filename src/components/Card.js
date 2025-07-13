'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Card = ({ title, description, imageUrl, link }) => {
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
        boxShadow: "0 25px 50px rgba(0, 204, 102, 0.4)",
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      style={{ y, opacity }}
      className="card group relative overflow-hidden bg-gradient-to-br from-primary-light/20 to-primary/20 backdrop-blur-sm border border-accent/20 rounded-xl"
    >
      <div className="relative h-48 w-full mb-4 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold"
        >
          Featured
        </motion.div>
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold mb-2"
          whileHover={{ color: "#00cc66" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {link && (
          <motion.a
            href={link}
            whileHover={{ 
              scale: 1.1,
              x: 5
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center mt-4 text-accent hover:text-accent-light transition-colors font-medium"
          >
            Learn More 
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.a>
        )}
      </div>
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(0, 204, 102, 0.1), transparent)",
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default Card; 