import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { AdminProvider } from '@/context/AdminContext';
import AdminBar from '@/components/admin/AdminBar';

export const metadata: Metadata = {
  title: '饶蓓 — Project Operations | Marketing | Brand & Content Operations',
  description:
    '擅长将复杂项目拆解为可执行流程，通过运营策划、团队协作与内容传播推动项目从0到1落地。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=localStorage.getItem('portfolio-lang');if(l==='zh-CN'||l==='en-US'){document.documentElement.lang=l;}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <LanguageProvider>
          <AdminProvider>
            {children}
            <AdminBar />
          </AdminProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
