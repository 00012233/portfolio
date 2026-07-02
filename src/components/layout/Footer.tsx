'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Astre. {t('footer.copyright')}.
        </p>
        <p className="text-sm text-text-muted">{t('footer.builtWith')}</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="text-sm text-text-muted hover:text-primary transition-colors"
          >
            {t('footer.email')}
          </a>
          <span className="text-border">&middot;</span>
          <span className="text-sm text-text-muted">{t('footer.location')}</span>
        </div>
      </div>
    </footer>
  );
}
