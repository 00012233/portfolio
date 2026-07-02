'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import type { Locale } from '@/types';
import zhDict from '@/i18n/zh-CN.json';
import enDict from '@/i18n/en-US.json';

const dictionaries: Record<Locale, Record<string, unknown>> = {
  'zh-CN': zhDict as Record<string, unknown>,
  'en-US': enDict as Record<string, unknown>,
};

const STORAGE_KEY = 'portfolio-lang';

function getTranslation(lang: Locale, key: string): string {
  const keys = key.split('.');
  let node: unknown = dictionaries[lang];
  for (const k of keys) {
    if (node == null || typeof node !== 'object') return key;
    node = (node as Record<string, unknown>)[k];
  }
  return typeof node === 'string' ? node : key;
}

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (key: string) => string;
  pick: <T>(bilingual: { zh: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>('zh-CN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh-CN' || stored === 'en-US') {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const setLang = useCallback((newLang: Locale) => {
    setLangState(newLang);
  }, []);

  const t = useCallback(
    (key: string): string => getTranslation(lang, key),
    [lang],
  );

  const pick = useCallback(
    <T,>(bilingual: { zh: T; en: T }): T => {
      return lang === 'zh-CN' ? bilingual.zh : bilingual.en;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
