'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { investments } from '../../data/content.js';

function InvestmentsContent() {
  const searchParams = useSearchParams();
  const investmentId = searchParams.get('id');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    if (investmentId) {
      const element = document.getElementById(`investment-${investmentId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [investmentId]);

  return (
    <div className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light"
        style={{ y: backgroundY }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Investments
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strategic investments in innovative companies and emerging technologies
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {investments.map((investment, index) => (
            <motion.div
              key={investment.id}
              id={`investment-${investment.id}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
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
              
              <div className="bg-gradient-to-br from-primary-light/80 to-primary/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
                <div className="relative h-80">
                  <motion.img
                    src={investment.imageUrl}
                    alt={investment.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay with investment info */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h2 
                        className="text-3xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {investment.title}
                      </motion.h2>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <motion.h2 
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {investment.link ? (
                      <motion.a 
                        href={investment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0 0 10px rgba(0, 204, 102, 0.5)"
                        }}
                      >
                        {investment.title}
                      </motion.a>
                    ) : (
                      investment.title
                    )}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-300 mb-8 text-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {investment.description}
                  </motion.p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Industry", value: investment.industry, icon: "🏭" },
                      { label: "Founded", value: investment.founded, icon: "📅" },
                      { label: "Location", value: investment.location, icon: "📍" }
                    ].map((item, itemIndex) => (
                      <motion.div
                        key={item.label}
                        className="bg-primary/50 backdrop-blur-sm p-6 rounded-xl border border-accent/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + itemIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(0, 204, 102, 0.1)"
                        }}
                      >
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h3 className="text-sm font-semibold text-accent">{item.label}</h3>
                        </div>
                        <p className="text-gray-300 font-medium">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {investment.link && (
                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <motion.a
                        href={investment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(0, 204, 102, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Company
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InvestmentsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
        />
      </div>
    }>
      <InvestmentsContent />
    </Suspense>
  );
} 