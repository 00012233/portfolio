'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/social';

export default function ContactModal() {
  const { t, pick } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openContact', handleOpen);
    return () => window.removeEventListener('openContact', handleOpen);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = personalInfo.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume-Astre.pdf';
    link.click();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white rounded-2xl shadow-xl border border-border
                       max-w-md w-full p-8 z-10"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                         text-text-muted hover:text-text-primary hover:bg-secondary transition-all"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l10 10M13 3L3 13" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-text-primary mb-6">
              {t('contact.heading')}
            </h2>

            {/* Name */}
            <div className="mb-6">
              <p className="text-xl font-semibold text-text-primary">
                {pick(personalInfo.name)}
              </p>
              <p className="text-sm text-text-muted mt-0.5">
                {pick(personalInfo.title)}
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-text-muted w-16">
                  {t('contact.email')}
                </span>
                <span className="text-sm text-text-primary">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-text-muted w-16">
                  {t('contact.phone')}
                </span>
                <span className="text-sm text-text-primary">{personalInfo.phone}</span>
              </div>
            </div>

            {/* Job directions */}
            <div className="mb-6 p-4 bg-bg-alt rounded-xl">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                {t('contact.jobDirections')}
              </p>
              <p className="text-sm text-text-secondary">
                {pick(personalInfo.jobDirections)}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={downloadResume}
                className="w-full py-3 rounded-xl bg-primary text-white font-medium
                           hover:bg-primary-dark transition-colors duration-300 text-sm"
              >
                📄 {t('contact.downloadResume')}
              </button>
              <button
                onClick={copyEmail}
                className="w-full py-3 rounded-xl border border-primary text-primary font-medium
                           hover:bg-primary/10 transition-all duration-300 text-sm"
              >
                {copied ? `✅ ${t('contact.copied')}` : `📧 ${t('contact.copyEmail')}`}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
