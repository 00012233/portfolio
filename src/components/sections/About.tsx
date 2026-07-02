'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutBadges } from '@/data/social';

export default function About() {
  const { t, lang } = useLanguage();
  const badges = lang === 'zh-CN' ? aboutBadges.zh : aboutBadges.en;

  return (
    <AnimatedSection id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading heading={t('about.heading')} subheading={t('about.subheading')} />

        <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <p>{t('about.paragraph3')}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {badges.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-sm bg-secondary text-text-secondary
                         border border-border hover:border-primary hover:text-text-primary
                         transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
