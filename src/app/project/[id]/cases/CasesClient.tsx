'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import type { ProjectItem } from '@/types';

interface CaseItem {
  id: string;
  title: { zh: string; en: string };
  background: { zh: string; en: string };
  role: { zh: string; en: string };
  process: { zh: string; en: string };
  outcome: { zh: string; en: string };
  reflection: { zh: string; en: string };
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } } as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } } } as const;

export default function CasesClient({ id, project, cases }: { id: string; project: ProjectItem | null; cases: CaseItem[] }) {
  const { t, pick } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const projectUrl = `/project/${id}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-4 md:px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <Link href={projectUrl} className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5"/></svg>
            {pick(project?.title || { zh: '返回', en: 'Back' })}
          </Link>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {t('caseStudy.representative')}
          </motion.h1>
          <p className="text-text-muted mb-12">{t('caseStudy.representativeSubtitle')}</p>

          {cases.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center bg-secondary/50">
              <p className="text-text-muted text-sm">{t('caseStudy.comingSoon')}</p>
              <p className="text-text-muted text-xs mt-1">{t('caseStudy.comingSoonHint')}</p>
            </motion.div>
          ) : (
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4">
              {cases.map((c) => (
                <motion.div key={c.id} variants={fadeUp}>
                  <div
                    onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                    className={`bg-white rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
                      expanded === c.id ? 'border-accent shadow-md ring-2 ring-accent/20' : 'border-border hover:border-primary/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-text-primary">{pick(c.title)}</h3>
                      <motion.svg animate={{ rotate: expanded === c.id ? 180 : 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted flex-shrink-0">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </motion.svg>
                    </div>
                    {expanded === c.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-text-secondary space-y-3 mt-4 pt-4 border-t border-border">
                        <div><span className="font-semibold text-text-primary">Background</span><p className="mt-1">{pick(c.background) || t('caseStudy.comingSoon')}</p></div>
                        <div><span className="font-semibold text-text-primary">My Role</span><p className="mt-1">{pick(c.role) || t('caseStudy.comingSoon')}</p></div>
                        <div><span className="font-semibold text-text-primary">Process</span><p className="mt-1">{pick(c.process) || t('caseStudy.comingSoon')}</p></div>
                        <div><span className="font-semibold text-text-primary">Outcome</span><p className="mt-1">{pick(c.outcome) || t('caseStudy.comingSoon')}</p></div>
                        <div><span className="font-semibold text-text-primary">Reflection</span><p className="mt-1">{pick(c.reflection) || t('caseStudy.comingSoon')}</p></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
