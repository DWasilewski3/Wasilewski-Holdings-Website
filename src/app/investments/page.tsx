'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { investments } from '@/data/content';

export default function InvestmentsPage() {
  const searchParams = useSearchParams();
  const investmentId = searchParams.get('id');

  useEffect(() => {
    if (investmentId) {
      const element = document.getElementById(`investment-${investmentId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [investmentId]);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Our Investments
        </motion.h1>
        <div className="space-y-12">
          {investments.map((investment, index) => (
            <motion.div
              key={investment.id}
              id={`investment-${investment.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={investment.imageUrl}
                  alt={investment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {investment.link ? (
                    <a 
                      href={investment.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {investment.title}
                    </a>
                  ) : (
                    investment.title
                  )}
                </h2>
                <p className="text-gray-300 mb-6">{investment.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Industry</h3>
                    <p className="text-gray-300">{investment.industry}</p>
                  </div>
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Founded</h3>
                    <p className="text-gray-300">{investment.founded}</p>
                  </div>
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Location</h3>
                    <p className="text-gray-300">{investment.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 