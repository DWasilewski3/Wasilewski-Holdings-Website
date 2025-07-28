import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ title, description, imageUrl, additionalInfo, externalLink }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const cardContent = (
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
        duration: 1.2,
        type: "spring",
        stiffness: 80
      }}
      style={{ y, opacity }}
      className="card group relative overflow-hidden bg-gradient-to-br from-primary-light/20 to-primary/20 backdrop-blur-sm border border-accent/20 rounded-xl cursor-pointer"
    >
      <div className="relative h-48 w-full mb-4 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-cover rounded-t-xl w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
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
        
        {additionalInfo && (
          <div className="space-y-3 mb-4">
            {/* Display key info like status, etc. */}
            {Object.entries(additionalInfo).filter(([key]) => 
              ['status', 'industry', 'founded', 'location', 'timeline', 'category'].includes(key)
            ).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-400 capitalize">{key}:</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
            
            {/* Display technologies/services if available */}
            {additionalInfo.technologies && (
              <div className="mt-3">
                <span className="text-gray-400 text-sm block mb-2">Technologies:</span>
                <div className="flex flex-wrap gap-1">
                  {additionalInfo.technologies.map((tech, index) => (
                    <span key={index} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {additionalInfo.services && (
              <div className="mt-3">
                <span className="text-gray-400 text-sm block mb-2">Services:</span>
                <div className="flex flex-wrap gap-1">
                  {additionalInfo.services.map((service, index) => (
                    <span key={index} className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Display impact/highlights if available */}
            {additionalInfo.impact && (
              <div className="mt-3 p-2 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-accent text-sm font-semibold">Impact:</span>
                <p className="text-white text-sm mt-1">{additionalInfo.impact}</p>
              </div>
            )}
            
            {additionalInfo.highlights && (
              <div className="mt-3 p-2 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-accent text-sm font-semibold">Highlights:</span>
                <p className="text-white text-sm mt-1">{additionalInfo.highlights}</p>
              </div>
            )}
          </div>
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

  // If external link is provided, wrap in anchor tag
  if (externalLink) {
    return (
      <a 
        href={externalLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default Card; 