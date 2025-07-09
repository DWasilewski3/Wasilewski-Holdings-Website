'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/data/content';

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('id');

  useEffect(() => {
    if (projectId) {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [projectId]);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Our Projects
        </motion.h1>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Status</h3>
                    <p className="text-gray-300">{project.status}</p>
                  </div>
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Timeline</h3>
                    <p className="text-gray-300">{project.timeline}</p>
                  </div>
                  <div className="bg-primary/50 p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-accent mb-2">Category</h3>
                    <p className="text-gray-300">{project.category}</p>
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