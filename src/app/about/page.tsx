'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="w-full md:w-[38%] flex-shrink-0"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                <img
                  src="/avatar.jpg"
                  alt="Astre"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
              className="w-full md:w-[62%]"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                {t('about.heading')}
              </h1>
              <div className="space-y-5 text-text-secondary leading-relaxed text-[15px] md:text-base">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
