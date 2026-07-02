'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  heading: string;
  subheading: string;
}

export default function SectionHeading({
  heading,
  subheading,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        {heading}
      </h2>
      <p className="text-text-secondary text-lg">{subheading}</p>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-primary rounded-full" />
    </motion.div>
  );
}
