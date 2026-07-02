'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { t, pick } = useLanguage();
  const { title, problem, role, actions, outcome, tags, liveUrl } = caseStudy;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-border p-6 md:p-8
                 hover:border-primary/30 hover:shadow-md transition-all duration-300"
    >
      {/* Title + Tags */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
          {pick(title)}
        </h3>
        <div className="flex flex-wrap gap-2">
          {pick(tags).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium
                         bg-primary/15 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2×2 grid: Problem / Role | Actions / Outcome */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="border-l-2 border-primary pl-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            {t('caseStudies.problem')}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {pick(problem)}
          </p>
        </div>

        <div className="border-l-2 border-accent pl-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            {t('caseStudies.role')}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {pick(role)}
          </p>
        </div>

        <div className="border-l-2 border-primary pl-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            {t('caseStudies.actions')}
          </h4>
          <ul className="space-y-1.5">
            {pick(actions).map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {action}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l-2 border-accent pl-4">
          <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            {t('caseStudies.outcome')}
          </h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {pick(outcome)}
          </p>
        </div>
      </div>

      {liveUrl && (
        <div className="mt-6 pt-4 border-t border-border">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary
                       hover:text-primary-dark transition-colors"
          >
            {t('caseStudies.viewLive')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7h8M8 3l4 4-4 4" />
            </svg>
          </a>
        </div>
      )}
    </motion.article>
  );
}
