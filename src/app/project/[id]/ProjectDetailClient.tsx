'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PhotoCarousel from '@/components/ui/PhotoCarousel';
import { useLanguage } from '@/context/LanguageContext';
import type { ProjectItem, CaseStudyData } from '@/types';

export default function ProjectDetailClient({ id, project, caseStudy }: { id: string; project: ProjectItem | null; caseStudy: CaseStudyData | null }) {
  const { t, pick, lang } = useLanguage();

  if (!project) {
    return <><Navbar /><main className="min-h-screen pt-24 flex items-center justify-center"><p className="text-text-muted">Project not found</p></main><Footer /></>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5"/></svg>
            {t('project.backToHome')}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">{pick(project.title)}</h1>
            <div className="flex items-center gap-3 flex-wrap mb-10">
              <span className="text-sm text-text-secondary bg-secondary px-3 py-1 rounded-full">{pick(project.role)}</span>
              <span className="text-sm text-text-muted">{project.period}</span>
            </div>

            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">{t('project.overview')}</h2>
              <p className="text-text-secondary leading-relaxed">{pick(project.summary)}</p>
            </section>

            {/* Project Sections */}
            {project.sections.map((s) => (
              <section key={s.id} className="mb-12">
                <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">{pick(s.title)}</h2>
                <p className="text-text-secondary leading-relaxed">{pick(s.content)}</p>
                {s.images && s.images.length > 0 && <div className="mt-4"><PhotoCarousel images={s.images} /></div>}
              </section>
            ))}

            {/* Case Study sections if available */}
            {caseStudy && (
              <div className="mt-16 pt-12 border-t-2 border-border">
                <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">📊 {pick(caseStudy.title)}</h2>
                {caseStudy.sections.map((s) => (
                  <section key={s.id} className="mb-10">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{pick(s.title)}</h3>
                    {s.content && <p className="text-text-secondary leading-relaxed">{pick(s.content)}</p>}
                    {s.items && (
                      <ul className="space-y-2 mt-3">
                        {pick(s.items).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}

            {/* Dashboard link for calligraphy project */}
            {id === 'calligraphy' && (
              <section className="mt-12 pt-8 border-t-2 border-accent">
                <Link href="/project/calligraphy/dashboard" className="block bg-white rounded-2xl border-2 border-accent p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{t('project.dashboard')}</h2>
                      <p className="text-sm text-text-muted mt-0.5">{lang === 'zh-CN' ? 'QQ空间官Q运营数据全览 · 95条动态 · KPI分析 · 趋势图表' : 'QQ Space Official Account Analytics · 95 Posts · KPIs · Trend Charts'}</p>
                    </div>
                    <span className="ml-auto text-accent text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </section>
            )}

            {/* Gallery placeholder */}
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-text-primary mb-4">{t('project.gallery')}</h2>
              <div className="border-2 border-dashed border-primary/30 rounded-2xl p-10 text-center bg-secondary/50">
                <p className="text-sm text-text-muted">{t('project.uploadPlaceholder')}</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
