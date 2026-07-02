'use client';

import { useAdmin } from '@/context/AdminContext';
import { useLanguage } from '@/context/LanguageContext';

export default function AdminBar() {
  const { isAdmin, logout } = useAdmin();
  const { t } = useLanguage();

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] bg-text-primary text-white px-6 py-2.5
                    flex items-center justify-between text-sm">
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        {t('admin.editMode')}
      </span>
      <div className="flex items-center gap-3">
        <a href="/admin" className="hover:text-primary-light transition-colors">
          Dashboard
        </a>
        <button
          onClick={logout}
          className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          {t('admin.logout')}
        </button>
      </div>
    </div>
  );
}
