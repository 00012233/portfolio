'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';

export default function AdminPage() {
  const { t } = useLanguage();
  const { isAdmin, login, logout } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
  };

  // Not logged in — show login form
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-border p-8 max-w-sm w-full shadow-sm">
          <h1 className="text-xl font-bold text-text-primary mb-2 text-center">
            {t('admin.login')}
          </h1>
          <p className="text-sm text-text-muted text-center mb-6">
            {t('nav.logo')}
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                {t('admin.password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg
                           text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/40
                           transition-all text-sm"
                placeholder="••••••••"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">
                {t('admin.wrongPassword')}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-primary text-white font-medium
                         hover:bg-primary-dark transition-colors duration-300 text-sm"
            >
              {t('admin.submit')}
            </button>
          </form>

          <button
            onClick={() => router.push('/')}
            className="w-full mt-3 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            &larr; Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Logged in — show admin dashboard
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-text-primary">
              Admin Dashboard
            </h1>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium
                         hover:bg-red-200 transition-colors"
            >
              {t('admin.logout')}
            </button>
          </div>

          <div className="space-y-4">
            <section className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Content Management</h2>
              <p className="text-sm text-text-secondary">
                In this mode, you can edit text content, upload images, reorder projects, and modify skills.
                Changes are saved to your browser&apos;s local storage.
              </p>
              <p className="text-sm text-text-muted mt-3">
                Full content editing will be available in a future update. For now, edit the source files directly
                at <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/data/</code> and{' '}
                <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/i18n/</code>.
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-border p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Quick Links</h2>
              <div className="space-y-2">
                <p className="text-sm text-text-secondary">
                  📝 Edit personal info → <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/data/social.ts</code>
                </p>
                <p className="text-sm text-text-secondary">
                  📋 Edit experience → <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/data/experience.ts</code>
                </p>
                <p className="text-sm text-text-secondary">
                  🛠️ Edit skills → <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/data/skills.ts</code>
                </p>
                <p className="text-sm text-text-secondary">
                  🌐 Edit translations → <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">src/i18n/</code>
                </p>
                <p className="text-sm text-text-secondary">
                  🖼️ Add images → <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">public/images/</code>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
