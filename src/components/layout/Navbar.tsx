'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/experience', labelKey: 'nav.experience' },
  { href: '/skills', labelKey: 'nav.skills' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-text-primary tracking-tight hover:text-primary transition-colors">
          Astre
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-secondary transition-all duration-200">
              {t(l.labelKey)}
            </Link>
          ))}
          <div className="ml-3"><LanguageToggle /></div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : {}} className="w-5 h-0.5 bg-text-primary rounded-full block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : {}} className="w-5 h-0.5 bg-text-primary rounded-full block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : {}} className="w-5 h-0.5 bg-text-primary rounded-full block" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden bg-bg/95 backdrop-blur-xl border-b border-border md:hidden">
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-secondary transition-all">
                  {t(l.labelKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
