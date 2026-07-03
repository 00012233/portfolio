'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { skillsList } from '@/data/content';

export default function SkillsPage() {
  const { t, pick } = useLanguage();
  const [expanded, setExpanded] = useState<string | null>(null);

  const tools = skillsList.filter(s => s.type === 'tool');
  const aiTools = skillsList.filter(s => s.type === 'ai');
  const automation = skillsList.filter(s => s.type === 'automation');

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-text-primary mb-4 text-center">{t('skills.heading')}</motion.h1>
          <p className="text-center text-sm text-text-muted mb-16">{t('skills.clickHint')}</p>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {tools.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setExpanded(expanded === s.name.zh ? null : s.name.zh)}
                  className={`rounded-xl border p-4 cursor-pointer transition-all ${expanded === s.name.zh ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/30'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-primary">{pick(s.name)}</span>
                    <motion.svg animate={{ rotate: expanded === s.name.zh ? 180 : 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-text-muted"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></motion.svg>
                  </div>
                  {expanded === s.name.zh && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-xs text-text-secondary mt-2 pt-2 border-t border-border">{pick(s.usage)}</motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* AI Tools */}
          <section className="mb-12">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">{t('skills.aiTools')}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {aiTools.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => setExpanded(expanded === s.name.zh ? null : s.name.zh)}
                  className={`rounded-xl border p-4 cursor-pointer transition-all ${expanded === s.name.zh ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-primary/30'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-primary">{pick(s.name)}</span>
                    <motion.svg animate={{ rotate: expanded === s.name.zh ? 180 : 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-text-muted"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></motion.svg>
                  </div>
                  {expanded === s.name.zh && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-xs text-text-secondary mt-2 pt-2 border-t border-border">{pick(s.usage)}</motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Claude Code — special highlight */}
          {automation.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl border-2 border-accent p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{t('skills.automation')}</h3>
                  <p className="text-sm text-text-secondary">{pick(s.name)}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary">{pick(s.usage)}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
