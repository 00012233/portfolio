'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo, photoCarouselImages } from '@/data/social';
import PhotoCarousel from '@/components/ui/PhotoCarousel';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} as const;

export default function Hero() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo area — left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-[42%] flex flex-col gap-4"
          >
            {/* Avatar placeholder */}
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-2xl overflow-hidden
                           border-2 border-primary/30 bg-secondary flex items-center justify-center
                           shadow-sm">
              <svg className="w-16 h-16 text-text-muted opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            {/* Life photo carousel */}
            <PhotoCarousel
              images={photoCarouselImages}
              alt="Life photos"
            />
          </motion.div>

          {/* Text area — right on desktop, after photo on mobile */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[58%] text-center lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg md:text-xl mb-4 font-medium"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight"
            >
              {pick(personalInfo.name)}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-text-secondary mb-3"
            >
              {pick(personalInfo.title)}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-text-muted mb-10 max-w-md lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
            >
              {pick(personalInfo.bio)}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <button
                onClick={() =>
                  document
                    .getElementById('case-studies')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3 rounded-full bg-primary text-white font-medium
                           shadow-sm hover:bg-primary-dark hover:shadow-md
                           transition-all duration-300 text-sm md:text-base"
              >
                {t('hero.ctaProjects')}
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent('openContact');
                  window.dispatchEvent(event);
                }}
                className="px-8 py-3 rounded-full border border-primary text-primary font-medium
                           hover:bg-primary/10 transition-all duration-300 text-sm md:text-base"
              >
                {t('hero.ctaContact')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
