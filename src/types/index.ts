export type Locale = 'zh-CN' | 'en-US';

export interface Bilingual<T> {
  zh: T;
  en: T;
}

export interface NavItem {
  id: string;
  label: Bilingual<string>;
}

export interface ExperienceItem {
  id: string;
  org: Bilingual<string>;
  role: Bilingual<string>;
  period: string;
  description: Bilingual<string>;
  highlights: Bilingual<string[]>;
  images?: string[];
  videoUrl?: string;
}

export interface SkillItem {
  name: Bilingual<string>;
  usage: Bilingual<string>;
}

export interface SkillCategory {
  category: Bilingual<string>;
  items: SkillItem[];
}

export interface CaseStudy {
  id: string;
  title: Bilingual<string>;
  thumbnail?: string;
  problem: Bilingual<string>;
  role: Bilingual<string>;
  actions: Bilingual<string[]>;
  outcome: Bilingual<string>;
  tags: Bilingual<string[]>;
  liveUrl?: string;
}

export interface PersonalInfo {
  name: Bilingual<string>;
  title: Bilingual<string>;
  bio: Bilingual<string>;
  email: string;
  phone: string;
  jobDirections: Bilingual<string>;
}
