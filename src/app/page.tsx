'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactModal from '@/components/ui/ContactModal';
import PhotoCarousel from '@/components/ui/PhotoCarousel';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } } as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } } as const;

export default function Home() {
  const { t, pick } = useLanguage();

  const openContact = () => {
    const w = window as unknown as Record<string, () => void>;
    if (w.__openContact) w.__openContact();
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
          </div>
          <div className="max-w-4xl w-full relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="w-full lg:w-[40%]">
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-2xl border-2 border-primary/30 bg-secondary flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="/avatar.jpg" alt="Astre" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div variants={stagger} initial="hidden" animate="show" className="w-full lg:w-[60%] text-center lg:text-left">
                <motion.p variants={fadeUp} className="text-text-secondary text-lg mb-4 font-medium">{t('hero.greeting')}</motion.p>
                <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">{pick(personalInfo.name)}</motion.h1>
                <motion.p variants={fadeUp} className="text-lg text-text-secondary mb-3">{pick(personalInfo.title)}</motion.p>
                <motion.p variants={fadeUp} className="text-base text-text-muted mb-10 max-w-md lg:max-w-none mx-auto lg:mx-0 leading-relaxed">{pick(personalInfo.bio)}</motion.p>
                <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                  <Link href="/experience" className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-sm hover:bg-primary-dark hover:shadow-md transition-all duration-300 text-sm">{t('hero.ctaProjects')}</Link>
                  <button onClick={openContact} className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 text-sm">{t('hero.ctaContact')}</button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
