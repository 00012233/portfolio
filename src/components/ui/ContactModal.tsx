'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/content';

export default function ContactModal() {
  const { t, pick } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState('');

  // Listen for global open event
  if (typeof window !== 'undefined') {
    (window as unknown as Record<string, unknown>).__openContact = () => setIsOpen(true);
  }

  const copy = async (text: string, label: string) => {
    try { await navigator.clipboard.writeText(text); } catch { /* fallback */ }
    setCopied(label); setTimeout(() => setCopied(''), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative bg-white rounded-2xl shadow-xl border border-border max-w-md w-full p-8 z-10">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-secondary transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l10 10M13 3L3 13"/></svg>
            </button>

            <h2 className="text-2xl font-bold text-text-primary mb-6">{t('contact.heading')}</h2>

            <div className="mb-4">
              <p className="text-xl font-semibold text-text-primary">{pick(personalInfo.name)}</p>
              <p className="text-sm text-text-muted mt-0.5">{pick(personalInfo.title)}</p>
            </div>

            <div className="space-y-3 mb-6">
              <button onClick={() => copy(personalInfo.email, 'email')} className="w-full flex items-center justify-between p-3 rounded-xl bg-bg-alt hover:bg-secondary transition-colors text-left">
                <div><span className="text-xs text-text-muted block">{t('contact.email')}</span><span className="text-sm text-text-primary">{personalInfo.email}</span></div>
                <span className="text-xs text-primary font-medium">{copied === 'email' ? t('contact.copied') : t('contact.copyEmail')}</span>
              </button>
              <button onClick={() => copy(personalInfo.phone, 'phone')} className="w-full flex items-center justify-between p-3 rounded-xl bg-bg-alt hover:bg-secondary transition-colors text-left">
                <div><span className="text-xs text-text-muted block">{t('contact.phone')} <span className="text-text-muted">({t('contact.wechat')})</span></span><span className="text-sm text-text-primary">{personalInfo.phone}</span></div>
                <span className="text-xs text-primary font-medium">{copied === 'phone' ? t('contact.copied') : t('contact.copyPhone')}</span>
              </button>
            </div>

            <div className="mb-6 p-4 bg-bg-alt rounded-xl">
              <p className="text-xs text-text-muted mb-1">{t('contact.jobTitle')}</p>
              <p className="text-sm text-text-secondary">{t('contact.jobValue')}</p>
            </div>

            <a href="/resume.pdf" download className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors text-sm text-center block">
              📄 {t('contact.downloadResume')}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
