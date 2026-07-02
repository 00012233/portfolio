'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { SkillItem } from '@/types';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const { pick, lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`rounded-xl border transition-all duration-300 cursor-pointer
        ${
          expanded
            ? 'border-primary bg-primary/5 shadow-sm'
            : 'border-border bg-white hover:border-primary/30 hover:shadow-sm'
        }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">
          {pick(skill.name)}
        </span>
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-text-muted flex-shrink-0"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: expanded ? 'auto' : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-4">
          <div className="pt-0 pb-1">
            <span className="text-xs text-text-muted bg-secondary px-2 py-0.5 rounded-full">
              {lang === 'zh-CN' ? '使用场景' : 'Usage Scenario'}
            </span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mt-2">
            {pick(skill.usage)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
