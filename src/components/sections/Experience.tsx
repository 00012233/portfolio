'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experience';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="experience" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          heading={t('experience.heading')}
          subheading={t('experience.subheading')}
        />

        <div className="space-y-4">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
