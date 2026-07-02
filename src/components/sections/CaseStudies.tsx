'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="case-studies" className="py-24 px-6 bg-bg-alt">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          heading={t('caseStudies.heading')}
          subheading={t('caseStudies.subheading')}
        />

        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
