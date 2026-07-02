'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { experiences } from '@/data/experience';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImageGallery from '@/components/ui/ImageGallery';
import VideoEmbed from '@/components/ui/VideoEmbed';
import MediaUpload from '@/components/ui/MediaUpload';

export default function ProjectDetailClient({ id }: { id: string }) {
  const { t, pick, lang } = useLanguage();
  const project = experiences.find((e) => e.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 pb-24 px-6 bg-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-text-muted mb-4">404</h1>
            <p className="text-text-secondary mb-6">
              {lang === 'zh-CN' ? '项目未找到' : 'Project not found'}
            </p>
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full bg-primary text-white font-medium
                         hover:bg-primary-dark transition-colors text-sm"
            >
              {t('project.backToHome')}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { org, role, period, description, highlights, images, videoUrl } =
    project;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted
                       hover:text-primary transition-colors mb-8"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
            {t('project.backToHome')}
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {pick(org)}
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm text-text-secondary bg-secondary px-3 py-1 rounded-full">
                {pick(role)}
              </span>
              <span className="text-sm text-text-muted">{period}</span>
            </div>
          </div>

          {/* 1. Project Overview */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
              {t('project.overview')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary/50 rounded-xl p-4">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {t('project.time')}
                </span>
                <p className="text-sm font-medium text-text-primary mt-1">
                  {period}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {t('project.roleLabel')}
                </span>
                <p className="text-sm font-medium text-text-primary mt-1">
                  {pick(role)}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {t('project.teamSize')}
                </span>
                <p className="text-sm font-medium text-text-primary mt-1">
                  {lang === 'zh-CN' ? '视项目而定' : 'Varies by project'}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {t('project.background')}
                </span>
                <p className="text-sm font-medium text-text-primary mt-1">
                  {pick(org)}
                </p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {pick(description)}
            </p>
          </section>

          {/* 2. My Role */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
              {t('project.myRole')}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {pick(description).split('.')[0]}.
            </p>
          </section>

          {/* 3. Key Actions */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
              {t('project.keyActions')}
            </h2>
            <ul className="space-y-3">
              {(lang === 'zh-CN' ? highlights.zh : highlights.en).map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </section>

          {/* 4. Results */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
              {t('project.results')}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {pick(description)}
            </p>
          </section>

          {/* 5. Media Gallery */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-border">
              {t('project.mediaGallery')}
            </h2>

            {videoUrl && (
              <div className="mb-6">
                <VideoEmbed url={videoUrl} title={pick(org)} />
              </div>
            )}

            {images && images.length > 0 ? (
              <ImageGallery images={images} alt={pick(org)} />
            ) : (
              <div className="space-y-4">
                <MediaUpload />
                <p className="text-xs text-text-muted text-center">
                  {t('project.noMedia')}
                </p>
              </div>
            )}
          </section>

          {/* Back link */}
          <div className="text-center pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white
                         font-medium hover:bg-primary-dark transition-colors text-sm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 3L5 8l5 5" />
              </svg>
              {t('project.backToHome')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
