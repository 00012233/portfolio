'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY = 'portfolio-admin-auth';

interface AdminContextValue {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem(STORAGE_KEY) === 'true');
    setMounted(true);
  }, []);

  const login = (pw: string) => {
    if (pw === ADMIN_PASSWORD) { setIsAdmin(true); localStorage.setItem(STORAGE_KEY, 'true'); return true; }
    return false;
  };
  const logout = () => { setIsAdmin(false); localStorage.removeItem(STORAGE_KEY); };
  if (!mounted) return null;
  return <AdminContext.Provider value={{ isAdmin, login, logout }}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be within AdminProvider');
  return ctx;
}
