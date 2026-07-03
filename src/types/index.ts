export type Locale = 'zh-CN' | 'en-US';

export interface Bilingual<T> {
  zh: T;
  en: T;
}

export interface WorkItem {
  id: string;
  company: Bilingual<string>;
  period: string;
  description: Bilingual<string>;
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: Bilingual<string>;
  role: Bilingual<string>;
  period: string;
  summary: Bilingual<string>;
  sections: ProjectSection[];
}

export interface ProjectSection {
  id: string;
  title: Bilingual<string>;
  content: Bilingual<string>;
  images?: string[];
  videoUrl?: string;
  docs?: string[];
}

export interface SkillItem {
  name: Bilingual<string>;
  usage: Bilingual<string>;
  type: 'tool' | 'ai' | 'automation';
  hasGallery?: boolean;
  galleryPath?: string;
}

export interface CaseStudyData {
  id: string;
  title: Bilingual<string>;
  template: 'union' | 'script' | 'growth';
  sections: CaseStudySection[];
  tags: Bilingual<string[]>;
}

export interface CaseStudySection {
  id: string;
  title: Bilingual<string>;
  content?: Bilingual<string>;
  items?: Bilingual<string[]>;
  images?: string[];
  videoUrl?: string;
  docs?: string[];
  chart?: string;
}

export interface AnalyticsPost {
  id: string;
  date: string;
  time: string;
  title: Bilingual<string>;
  type: Bilingual<string>;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  visitors: number;
  content: Bilingual<string>;
  isMyPeriod: boolean;
  imagePath: string;
}

export interface AnalyticsData {
  posts: AnalyticsPost[];
  kpis: {
    totalPosts: number;
    totalViews: number;
    totalLikes: number;
    totalComments: number;
    totalShares: number;
    avgViews: number;
    avgLikes: number;
    avgComments: number;
    engagementRate: number;
    myPeriodPosts: number;
    myPeriodAvgViews: number;
    myPeriodEngagementRate: number;
    myPeriodTotalExposure: number;
  };
  beforeAfter: {
    beforeAvgViews: number;
    afterAvgViews: number;
    beforeEngagement: number;
    afterEngagement: number;
    viewsGrowth: number;
    engagementGrowth: number;
  };
}
