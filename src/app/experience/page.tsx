'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { workExperiences, projectExperiences } from '@/data/content';

// Parse description into formatted role line + body
function parseDesc(text: string, companyId: string): { role: string; body: string } {
  const idx = text.indexOf('。');
  if (idx === -1 || idx > 80) return { role: '', body: text };
  let role = text.slice(0, idx);
  // Format role lines to user's specification
  if (companyId === 'roche') role = '医药代表实习生 | （肿瘤科 安维汀）';
  else if (companyId === 'novonordisk') role = '医药代表实习生 | （内分泌科 司美格鲁肽）';
  else if (companyId === 'ganzhou-bank') role = '销售专员';
  return { role, body: text.slice(idx + 1) };
}

export default function ExperiencePage() {
  const { t, pick, lang } = useLanguage();
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-text-primary mb-16 text-center">{t('experience.heading')}</motion.h1>

          {/* Work Experience */}
          <section className="mb-20">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">{t('experience.work')}</motion.h2>
            <div className="space-y-6">
              {workExperiences.map((w, i) => {
                const desc = pick(w.description);
                const { role, body } = parseDesc(desc, w.id);
                return (
                  <motion.div key={w.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
                    <motion.div whileHover={{ y: -3 }} className="bg-white rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-text-primary">{pick(w.company)}</h3>
                        <span className="text-xs text-text-muted flex-shrink-0 mt-1">{w.period}</span>
                      </div>
                      {role && (
                        <p className="text-sm font-medium text-accent mb-2">{role}</p>
                      )}
                      {body && (
                        <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Project Experience — different layout from work */}
          <section>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">{t('experience.project')}</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectExperiences.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.08 }}>
                  <Link href={`/project/${p.id}`}>
                    <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl border border-border p-5 h-full hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col">
                      <span className="text-xs text-text-muted mb-2">{p.period}</span>
                      <h3 className="text-base font-semibold text-text-primary mb-1.5 leading-snug">{pick(p.title)}</h3>
                      <p className="text-xs text-accent font-medium mb-3">{pick(p.role)}</p>
                      <p className="text-xs text-text-secondary leading-relaxed flex-1">{pick(p.summary)}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <span className="text-xs text-primary font-medium">{t('experience.viewDetail')} →</span>
                        <div className="flex items-center gap-1.5">
                          <span onClick={(e) => { e.stopPropagation(); e.preventDefault(); router.push(p.id === 'innovation' ? '/project/innovation/case-study' : `/project/${p.id}/cases`); }} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition-colors cursor-pointer">📋 {lang === 'zh-CN' ? '案例' : 'Cases'}</span>
                          {p.id === 'calligraphy' && (
                            <span onClick={(e) => { e.stopPropagation(); e.preventDefault(); router.push('/project/calligraphy/dashboard'); }} className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">📊 {lang === 'zh-CN' ? '官Q数据' : 'QQ Data'}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
