import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import { goals } from '../data/content.js';

export default function Goals() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Strategic Goals</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our ambitious goals and strategic initiatives that drive innovation and sustainable growth across diverse sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
            >
              <Card
                title={goal.title}
                description={goal.description}
                imageUrl={goal.imageUrl}
                logoUrl={goal.logoUrl}
                additionalInfo={{
                  status: goal.status,
                  timeline: goal.timeline,
                  category: goal.category
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