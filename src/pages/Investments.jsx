import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import { investments } from '../data/content.js';

export default function Investments() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Investments</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our strategic investments in innovative companies across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((investment, index) => (
            <motion.div
              key={investment.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
            >
              <Card
                title={investment.title}
                description={investment.description}
                imageUrl={investment.imageUrl}
                externalLink={investment.website}
                additionalInfo={{
                  ownership: investment.ownership,
                  industry: investment.industry,
                  founded: investment.founded,
                  location: investment.location
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
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