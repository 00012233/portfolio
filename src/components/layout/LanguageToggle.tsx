'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <button
      onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}
      className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/40 text-text-secondary hover:border-primary hover:text-text-primary hover:bg-primary/8 transition-all duration-300"
      aria-label={lang === 'zh-CN' ? t('lang.switchToEn') : t('lang.switchToZh')}
    >
      {lang === 'zh-CN' ? 'EN' : '中文'}
    </button>
  );
}
