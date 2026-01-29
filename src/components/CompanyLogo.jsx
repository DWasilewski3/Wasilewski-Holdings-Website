import { motion } from 'framer-motion';

const CompanyLogo = ({ logoUrl, title, className = "" }) => {
  if (!logoUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`relative ${className}`}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
        <img
          src={logoUrl}
          alt={`${title} logo`}
          width={128}
          height={64}
          loading="lazy"
          className="w-full h-full object-contain max-h-16"
        />
      </div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(0, 204, 102, 0.1), transparent)",
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default CompanyLogo; 