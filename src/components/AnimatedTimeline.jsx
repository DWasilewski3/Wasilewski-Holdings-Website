import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ year, title, description, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ y, opacity }}
      className={`flex items-center gap-8 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-primary-light/50 to-primary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6"
        >
          <div className="text-2xl font-bold text-accent mb-2">{year}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </div>
      
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 bg-accent rounded-full"
        />
        <div className="absolute top-4 left-2 w-0.5 h-16 bg-accent/30" />
      </div>
      
      <div className="flex-1" />
    </motion.div>
  );
};

const AnimatedTimeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "Foundation",
      description: "Established Wasilewski Holdings with a vision for innovative investments."
    },
    {
      year: "2021",
      title: "First Investments",
      description: "Made strategic investments in emerging technology companies."
    },
    {
      year: "2022",
      title: "Portfolio Growth",
      description: "Expanded portfolio with diverse projects across multiple industries."
    },
    {
      year: "2023",
      title: "Innovation Lab",
      description: "Launched internal innovation lab for cutting-edge research projects."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations internationally with new partnerships."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-300">A timeline of innovation and growth</p>
        </motion.div>
        
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline; 