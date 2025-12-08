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
                logoUrl={investment.logoUrl}
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

        {/* New Opportunities Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-20 py-16 border-t border-gray-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Actively Seeking New Opportunities</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are actively seeking innovative startups and emerging companies to advise and invest in. 
              If you have a compelling vision, a strong team, and are looking for strategic guidance and capital, 
              we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-accent transition-colors"
            >
              <div className="text-accent text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Strategic Advice</h3>
              <p className="text-gray-400">
                Benefit from our experience and network across multiple industries to accelerate your growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-accent transition-colors"
            >
              <div className="text-accent text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Capital Investment</h3>
              <p className="text-gray-400">
                Access funding to fuel your innovation and scale your operations to the next level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-accent transition-colors"
            >
              <div className="text-accent text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Growth Partnership</h3>
              <p className="text-gray-400">
                Partner with us for long-term success through mentorship, resources, and strategic support.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Interested in partnering with Wasilewski Holdings?
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-black font-semibold rounded-lg transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
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