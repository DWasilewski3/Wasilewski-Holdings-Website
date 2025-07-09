'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const Card = ({ title, description, imageUrl, link }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      className="card group relative overflow-hidden"
    >
      <div className="relative h-48 w-full mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {link && (
        <motion.a
          href={link}
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-4 text-accent hover:text-accent-light transition-colors"
        >
          Learn More →
        </motion.a>
      )}
    </motion.div>
  );
};

export default Card; 