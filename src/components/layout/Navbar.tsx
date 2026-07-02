'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { navItems } from '@/data/nav';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { pick, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px' },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-lg font-semibold text-text-primary tracking-tight hover:text-primary transition-colors"
        >
          {t('nav.logo')}
        </a>

        {isHomePage && (
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeSection === item.id
                      ? 'text-text-primary bg-primary/20'
                      : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                  }`}
              >
                {pick(item.label)}
              </button>
            ))}
            <div className="ml-3">
              <LanguageToggle />
            </div>
          </div>
        )}

        {!isHomePage && (
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-secondary transition-all duration-200"
            >
              &larr; {pick({ zh: '返回首页', en: 'Back to Home' })}
            </a>
            <LanguageToggle />
          </div>
        )}

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          {isHomePage && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-text-primary rounded-full block origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-text-primary rounded-full block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-text-primary rounded-full block origin-center"
              />
            </button>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && isHomePage && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-bg/95 backdrop-blur-lg border-b border-border md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-200
                    ${
                      activeSection === item.id
                        ? 'text-text-primary bg-primary/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                    }`}
                >
                  {pick(item.label)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
