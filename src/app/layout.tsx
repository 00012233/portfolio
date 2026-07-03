import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { AdminProvider } from '@/context/AdminContext';

export const metadata: Metadata = {
  title: 'Astre — Project Operations | Marketing | Brand & Content',
  description: 'Skilled at transforming complex projects into actionable workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var l=localStorage.getItem('portfolio-lang');if(l==='zh-CN'||l==='en-US'){document.documentElement.lang=l;}})()` }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <LanguageProvider>
          <AdminProvider>
            {children}
          </AdminProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
