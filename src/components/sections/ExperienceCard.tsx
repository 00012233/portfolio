'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { ExperienceItem } from '@/types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t, pick } = useLanguage();
  const { id, org, role, period, description } = experience;

  return (
    <Link href={`/project/${id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl border border-border p-6
                   hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-semibold text-text-primary">
                {pick(org)}
              </h3>
              <span className="text-xs text-text-muted bg-secondary px-2.5 py-0.5 rounded-full">
                {period}
              </span>
            </div>
            <p className="text-sm text-text-secondary mt-1">{pick(role)}</p>
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            className="flex-shrink-0 text-primary mt-1"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 4l6 6-6 6" />
            </svg>
          </motion.div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
          {pick(description)}
        </p>

        <div className="mt-4 pt-4 border-t border-border">
          <span className="text-xs font-medium text-primary">
            {t('experience.expandLabel')} &rarr;
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
