'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillCard from '@/components/ui/SkillCard';
import { skillCategories, claudeCodeHighlight } from '@/data/skills';

export default function Skills() {
  const { t, pick, lang } = useLanguage();

  return (
    <AnimatedSection id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          heading={t('skills.heading')}
          subheading={t('skills.subheading')}
        />

        <p className="text-center text-sm text-text-muted mb-10 -mt-10">
          💡 {t('skills.clickHint')}
        </p>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-border p-6
                         hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-text-primary mb-4 pb-3 border-b border-border">
                {pick(cat.category)}
              </h3>
              <div className="space-y-2">
                {cat.items.map((skill, i) => (
                  <SkillCard key={i} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claude Code — AI & Automation Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl border-2 border-accent p-6 md:p-8
                     relative overflow-hidden"
        >
          {/* Decorative accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary" />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🤖</span>
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                {pick(claudeCodeHighlight.category)}
              </h3>
              <p className="text-sm text-text-secondary">
                {pick(claudeCodeHighlight.tool.name)}
              </p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            {pick(claudeCodeHighlight.description)}
          </p>

          <div className="flex flex-wrap gap-2">
            {(lang === 'zh-CN'
              ? claudeCodeHighlight.applications.zh
              : claudeCodeHighlight.applications.en
            ).map((app) => (
              <span
                key={app}
                className="px-3 py-1.5 rounded-full text-xs font-medium
                           bg-accent/15 text-accent border border-accent/30"
              >
                {app}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
