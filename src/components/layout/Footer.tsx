'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-text-muted">&copy; {new Date().getFullYear()} Astre. {t('footer.copyright')}.</p>
        <p className="text-sm text-text-muted">{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}
