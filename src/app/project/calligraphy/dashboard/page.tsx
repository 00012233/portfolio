'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CountUp from '@/components/ui/CountUp';
import DonutChart from '@/components/ui/DonutChart';
import { useLanguage } from '@/context/LanguageContext';
import { CASE_POSTS } from '@/data/case-posts';
import { CASE_INFO, OVERVIEW, REFLECTION } from '@/data/calligraphy-case';
import type { AnalyticsPost } from '@/types';

// ============ Animation Variants ============
const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } } as const;
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } } as const;
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } } as const;
const scaleIn = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } } as const;

// ============ Section Wrapper ============
function Section({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      className={`mb-20 md:mb-28 ${className}`}>
      {children}
    </motion.section>
  );
}

function SectionTitle({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      {overline && <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{overline}</p>}
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-text-muted text-sm md:text-base max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// ============ ① Hero Banner ============
function HeroBanner() {
  const { t, pick } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E3A34] via-[#3D4F44] to-[#4A5F50] text-white p-8 md:p-16 mb-16">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative z-10">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4">
          {t('caseStudy.heroSubtitle')}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
          {t('caseStudy.heroTitle')}
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-6 text-white/70 text-sm md:text-base">
          <span>📅 {t('caseStudy.period')}: {CASE_INFO.period}</span>
          <span>⭐ {t('caseStudy.myPeriod')}: {CASE_INFO.myPeriod}</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2 mt-6">
          {pick(CASE_INFO.responsibilities).map((r: string, i: number) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium backdrop-blur-sm">{r}</span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============ ② Data Insights with Overview & Comparison ============
function DataInsights() {
  const { t, pick } = useLanguage();
  const posts = CASE_POSTS;
  const myPosts = posts.filter(p => p.isMyPeriod);
  const beforePosts = posts.filter(p => !p.isMyPeriod);

  // Comparison stats
  const myViews = myPosts.reduce((s, p) => s + p.views, 0);
  const beforeViews = beforePosts.reduce((s, p) => s + p.views, 0);
  const myAvgViews = myPosts.length ? Math.round(myViews / myPosts.length) : 0;
  const beforeAvgViews = beforePosts.length ? Math.round(beforeViews / beforePosts.length) : 0;
  const myAvgLikes = myPosts.length ? Math.round(myPosts.reduce((s, p) => s + p.likes, 0) / myPosts.length) : 0;
  const beforeAvgLikes = beforePosts.length ? Math.round(beforePosts.reduce((s, p) => s + p.likes, 0) / beforePosts.length) : 0;

  const typeData = useMemo(() => {
    const colors = ['#A8C3A0', '#9BB8A7', '#B0C9BA', '#8FAF87', '#C5D8C2', '#7EA078', '#B8CFB1', '#6B7F75'];
    const map: Record<string, number> = {};
    posts.forEach(p => { const key = pick(p.type); map[key] = (map[key] || 0) + 1; });
    return Object.entries(map).map(([label, value], i) => ({ label, value, color: colors[i % colors.length] }));
  }, [posts, pick]);

  const monthlyData = useMemo(() => {
    const map: Record<string, { posts: number; views: number }> = {};
    posts.forEach(p => {
      const month = p.date.substring(0, 7);
      if (!map[month]) map[month] = { posts: 0, views: 0 };
      map[month].posts += 1;
      map[month].views += p.views;
    });
    return Object.entries(map).sort().map(([label, d]) => ({ label, ...d }));
  }, [posts]);

  return (
    <Section>
      <SectionTitle overline="INSIGHTS" title={t('caseStudy.insights')} subtitle={t('caseStudy.insightsSubtitle')} />

      {/* Overview cards + Comparison side by side */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {/* Overview cards */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border p-6">
          <h3 className="text-sm font-bold text-text-primary mb-4">{t('caseStudy.dashboard')}</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-bg-alt rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-text-primary"><CountUp end={OVERVIEW.totalContent} /></p>
              <p className="text-xs text-text-muted mt-1">{t('caseStudy.totalContent')}</p>
            </div>
            <div className="bg-bg-alt rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-text-primary"><CountUp end={OVERVIEW.totalViews} /></p>
              <p className="text-xs text-text-muted mt-1">{t('caseStudy.totalViews')}</p>
            </div>
          </div>
        </motion.div>

        {/* Before vs My Period comparison */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border p-6">
          <h3 className="text-sm font-bold text-text-primary mb-4">{t('caseStudy.growthSubtitle')}</h3>
          <div className="space-y-3">
            {/* Posts comparison */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-text-muted w-24 flex-shrink-0">{t('caseStudy.totalContent')}</span>
              <div className="flex-1 flex items-center gap-2">
                <span className="text-text-secondary">{beforePosts.length}</span>
                <div className="flex-1 h-4 bg-bg-alt rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(beforePosts.length / posts.length) * 100}%` }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-border rounded-full" />
                </div>
                <span className="text-accent font-medium">{myPosts.length}</span>
                <div className="flex-1 h-4 bg-bg-alt rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(myPosts.length / posts.length) * 100}%` }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="h-full bg-accent rounded-full" />
                </div>
              </div>
            </div>
            {/* Avg views comparison */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-text-muted w-24 flex-shrink-0">{t('caseStudy.totalViews')} / {t('caseStudy.postsUnit')}</span>
              <span className="text-text-secondary">{beforeAvgViews.toLocaleString()}</span>
              <span className="text-text-muted">→</span>
              <span className="text-accent font-medium">{myAvgViews.toLocaleString()}</span>
              {beforeAvgViews > 0 && (
                <span className="text-green-600 text-[10px] font-medium">↑ {Math.round(((myAvgViews - beforeAvgViews) / beforeAvgViews) * 100)}%</span>
              )}
            </div>
            {/* Avg likes comparison */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-text-muted w-24 flex-shrink-0">{t('caseStudy.topLikes')} / {t('caseStudy.postsUnit')}</span>
              <span className="text-text-secondary">{beforeAvgLikes.toLocaleString()}</span>
              <span className="text-text-muted">→</span>
              <span className="text-accent font-medium">{myAvgLikes.toLocaleString()}</span>
              {beforeAvgLikes > 0 && (
                <span className="text-green-600 text-[10px] font-medium">↑ {Math.round(((myAvgLikes - beforeAvgLikes) / beforeAvgLikes) * 100)}%</span>
              )}
            </div>
            <div className="flex gap-4 text-[10px] text-text-muted pt-1 border-t border-border mt-2">
              <span>◻ {t('caseStudy.before')}: {beforePosts.length}{t('caseStudy.postsUnit')}</span>
              <span className="text-accent">◻ {t('caseStudy.after')}: {myPosts.length}{t('caseStudy.postsUnit')}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Distribution + Monthly Trend side by side */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center">
          <h3 className="text-sm font-bold text-text-primary mb-4 self-start">{t('caseStudy.contentDistribution')}</h3>
          <DonutChart data={typeData} size={200} thickness={30} />
        </motion.div>

        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-white rounded-2xl border border-border p-6">
          <h3 className="text-sm font-bold text-text-primary mb-4">{t('caseStudy.monthlyPosts')}</h3>
          <div className="flex items-end gap-1 h-40">
            {monthlyData.map((d, i) => {
              const maxPosts = Math.max(...monthlyData.map(m => m.posts), 1);
              return (
                <motion.div key={d.label} initial={{ height: 0 }}
                  whileInView={{ height: `${(d.posts / maxPosts) * 100}%` }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.02, ease: 'easeOut' }}
                  className="flex-1 bg-accent/60 hover:bg-accent rounded-t transition-colors min-w-[4px]"
                  title={`${d.label}: ${d.posts}`} />
              );
            })}
          </div>
          <div className="flex justify-between mt-1">
            {monthlyData.filter((_, i) => i % Math.max(1, Math.floor(monthlyData.length / 6)) === 0).map(d => (
              <span key={d.label} className="text-[9px] text-text-muted">{d.label.slice(2)}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ============ ③ Representative Cases ============
// ============ ④ Reflection ============
function Reflection() {
  const { t, pick } = useLanguage();
  const items = [
    { icon: '📝', title: t('caseStudy.reflectionContentPlanning'), text: REFLECTION.contentPlanning },
    { icon: '🎪', title: t('caseStudy.reflectionEventPlanning'), text: REFLECTION.eventPlanning },
    { icon: '🎨', title: t('caseStudy.reflectionBrand'), text: REFLECTION.brandCommunication },
    { icon: '📊', title: t('caseStudy.reflectionData'), text: REFLECTION.dataAnalysis },
    { icon: '🔄', title: t('caseStudy.reflectionRetro'), text: REFLECTION.retrospective },
  ];

  return (
    <Section>
      <SectionTitle overline="REFLECTION" title={t('caseStudy.reflection')} subtitle={t('caseStudy.reflectionSubtitle')} />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }}
            className="bg-white rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300">
            <span className="text-2xl mb-3 block">{item.icon}</span>
            <h3 className="text-sm font-bold text-text-primary mb-2">{item.title}</h3>
            <p className="text-xs text-text-secondary leading-relaxed">{pick(item.text)}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

// ============ MAIN PAGE ============
export default function CaseStudyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-24 px-4 md:px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <Link href="/project/calligraphy" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5"/></svg>
            {t('project.backToHome')}
          </Link>

          <HeroBanner />
          <DataInsights />
          <Reflection />

          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-16 p-4 bg-bg-alt rounded-xl border border-border text-xs text-text-muted flex items-start gap-2">
            <span className="mt-0.5">📋</span>
            <span><strong>{t('caseStudy.dataNoteTitle')}:</strong> {t('caseStudy.dataNoteText')}</span>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
