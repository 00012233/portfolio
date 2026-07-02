'use client';

import { useLanguage } from '@/context/LanguageContext';

interface MediaUploadProps {
  label?: string;
}

export default function MediaUpload({ label }: MediaUploadProps) {
  const { t, lang } = useLanguage();
  const displayLabel = label || t('project.uploadPlaceholder');

  return (
    <div className="border-2 border-dashed border-primary/30 rounded-2xl p-10 text-center bg-secondary/50 hover:bg-secondary transition-colors duration-300">
      <svg
        className="w-12 h-12 mx-auto mb-3 text-text-muted opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
      <p className="text-sm text-text-muted">{displayLabel}</p>
      <p className="text-xs text-text-muted mt-1 opacity-60">
        {lang === 'zh-CN'
          ? '支持图片、视频、PDF文件'
          : 'Supports images, videos, and PDF files'}
      </p>
    </div>
  );
}
