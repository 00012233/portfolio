'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CountUp from '@/components/ui/CountUp';
import { useLanguage } from '@/context/LanguageContext';
import {
  INNOVATION_HERO, INNOVATION_OVERVIEW, INNOVATION_ROLES,
  INNOVATION_RESULTS, INNOVATION_FOOTER,
} from '@/data/innovation-case';
import type { ProjectItem } from '@/types';

// ============ Animation ============
const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } } as const;
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } } as const;
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6 } } } as const;
const scaleIn = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } } } as const;

// ============ Photo Carousel ============
function PhotoCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setCurrent(p => (p + 1) % Math.max(images.length, 1)), [images.length]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1)), [images.length]);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    intervalRef.current = setInterval(next, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next, images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0E8E8] group"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.img key={current} src={images[current]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full object-cover" alt="" />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2L4 7l5 5"/></svg>
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 2l5 5-5 5"/></svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/70'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============ MAIN ============
export default function InnovationCaseClient({ project }: { project: ProjectItem | null }) {
  const { t, pick, lang } = useLanguage();
  const infoCards = [
    { label: lang === 'zh-CN' ? INNOVATION_HERO.info.role.zh : INNOVATION_HERO.info.role.en, val: pick(INNOVATION_HERO.info.roleValue) },
    { label: lang === 'zh-CN' ? INNOVATION_HERO.info.participants.zh : INNOVATION_HERO.info.participants.en, val: INNOVATION_HERO.info.participantsValue },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-24 px-4 md:px-6" style={{ background: '#F8F5F5' }}>
        <div className="max-w-5xl mx-auto">
          {/* Back */}
          <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-8">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5"/></svg>
            {t('project.backToHome')}
          </Link>

          {/* ===== ① Hero — Morandi Red ===== */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl text-white p-8 md:p-14 mb-16"
            style={{ background: 'linear-gradient(135deg, #5C3A3A 0%, #6B4545 50%, #7D5252 100%)' }}>
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#C4A0A0]/10 blur-3xl" />
            <div className="relative z-10">
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4">
                {t('innovation.heroSubtitle')}
              </motion.p>

              {/* Title row with logo */}
              <div className="flex items-center gap-5 mb-6">
                <img src="/projects/innovation/logo/logo.png" alt="Logo"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain bg-white p-2 flex-shrink-0 shadow-sm" />
                <div>
                  <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {t('innovation.heroTitle')}
                  </motion.h1>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                    className="text-white/60 text-sm md:text-base mt-1">
                    {lang === 'zh-CN' ? '沉浸式百人户外「红色剧本杀」' : 'Immersive Outdoor "Red Script" Experience for 100+ Participants'}
                  </motion.p>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="flex flex-wrap gap-2 mb-8">
                {pick(INNOVATION_HERO.tags).map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium backdrop-blur-sm">{tag}</span>
                ))}
              </motion.div>

              {/* Info cards */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                className="grid grid-cols-2 gap-3 max-w-sm">
                {infoCards.map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                    <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white text-sm md:text-base font-semibold">{item.val}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ===== ② Project Overview ===== */}
          <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="mb-20">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-[55%]">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9B7070' }}>{t('innovation.overview')}</p>
                <h2 className="text-2xl font-bold text-text-primary mb-6">{t('innovation.projectGoal')}</h2>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base mb-8">
                  {pick(INNOVATION_OVERVIEW.goal)}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-text-muted mb-3">{t('innovation.capabilities')}</p>
                  <div className="flex flex-wrap gap-2">
                    {pick(INNOVATION_OVERVIEW.capabilities).map((c: string, i: number) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs" style={{ background: '#F0E8E8', color: '#6B4545' }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pick(INNOVATION_OVERVIEW.keywords).map((k: string, i: number) => (
                    <span key={i} className="text-[11px] text-text-muted">#{k}</span>
                  ))}
                </div>
              </div>
              <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="w-full md:w-[45%]">
                <img src={INNOVATION_OVERVIEW.heroImage} alt="" className="w-full rounded-2xl shadow-sm border border-border object-cover" />
              </motion.div>
            </div>
          </motion.section>

          {/* ===== ③ My Role ===== */}
          <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9B7070' }}>{t('innovation.myRole')}</p>
            <h2 className="text-2xl font-bold text-text-primary mb-8">{t('innovation.myRole')}</h2>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4">
              {INNOVATION_ROLES.map((role, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300"
                  style={{ borderColor: 'transparent', boxShadow: '0 0 0 1px #E0D5D5' }}>
                  <span className="text-2xl mb-3 block">{role.icon}</span>
                  <h3 className="text-base font-bold text-text-primary mb-3">{pick(role.title)}</h3>
                  <ul className="space-y-1.5">
                    {pick(role.items).map((item: string, j: number) => (
                      <li key={j} className="text-xs text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#C4A0A0' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ===== ④ Project Results ===== */}
          <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9B7070' }}>{t('innovation.results')}</p>
            <h2 className="text-2xl font-bold text-text-primary mb-6">{t('innovation.results')}</h2>
            <p className="text-text-secondary leading-relaxed text-sm mb-10 bg-white rounded-2xl p-6 border" style={{ borderColor: '#E0D5D5' }}>
              ✅ {pick(INNOVATION_RESULTS.summary)}
            </p>

            {/* Image carousel — 6 photos scrolling one by one */}
            <div className="mb-10">
              <PhotoCarousel images={INNOVATION_RESULTS.images} />
            </div>

            {/* Video */}
            <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E0D5D5' }}>
              <h3 className="text-lg font-bold text-text-primary mb-4">🎬 {t('innovation.videoTitle')}</h3>
              <video controls className="w-full rounded-xl" poster="/projects/innovation/images/goal.jpg">
                <source src={INNOVATION_RESULTS.videoUrl} type="video/mp4" />
              </video>
            </div>
          </motion.section>

          {/* ===== ⑤ Footer Summary ===== */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl border p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #F5EDED, #F0E8E8)', borderColor: '#D4C0C0' }}>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              {pick(INNOVATION_FOOTER)}
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />

    </>
  );
}
