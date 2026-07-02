'use client';

import { useLanguage } from '@/context/LanguageContext';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export default function VideoEmbed({ url, title = 'Video' }: VideoEmbedProps) {
  const { t } = useLanguage();

  if (!url) return null;

  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isBilibili = url.includes('bilibili.com');

  if (isYouTube) {
    const videoId = url.includes('v=')
      ? url.split('v=')[1]?.split('&')[0]
      : url.split('/').pop();
    return (
      <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  if (isBilibili) {
    const bvMatch = url.match(/BV[\w]+/);
    const bvid = bvMatch ? bvMatch[0] : '';
    return (
      <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1`}
          title={title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
      <video
        src={url}
        controls
        className="w-full h-full object-cover"
        title={title}
      >
        {t('video.fallback')}
      </video>
    </div>
  );
}
