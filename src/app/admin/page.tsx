'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { useAdmin } from '@/context/AdminContext';
import { useLanguage } from '@/context/LanguageContext';

export default function AdminPage() {
  const { t } = useLanguage();
  const { isAdmin, login, logout } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(password)) { setError(true); setPassword(''); }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-border p-8 max-w-sm w-full shadow-sm">
          <h1 className="text-xl font-bold text-text-primary mb-6 text-center">{t('admin.login')}</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" placeholder={t('admin.password')} autoFocus />
            {error && <p className="text-sm text-red-500 text-center">{t('admin.wrongPassword')}</p>}
            <button type="submit" className="w-full py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors text-sm">{t('admin.submit')}</button>
          </form>
          <button onClick={() => router.push('/')} className="w-full mt-3 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors">&larr; Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
            <button onClick={logout} className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition-colors">{t('admin.logout')}</button>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6">
            <h2 className="text-lg font-semibold mb-3">Content Management</h2>
            <p className="text-sm text-text-secondary">Edit source files in <code>src/data/</code> and <code>src/i18n/</code>. Drop images into <code>content/</code> folders.</p>
          </div>
        </div>
      </main>
    </>
  );
}
