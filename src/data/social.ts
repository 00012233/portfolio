import type { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: { zh: '饶蓓', en: 'Astre' },
  title: {
    zh: '项目运营｜市场营销｜品牌与内容运营',
    en: 'Project Operations | Marketing | Brand & Content Operations',
  },
  bio: {
    zh: '擅长将复杂项目拆解为可执行流程，通过运营策划、团队协作与内容传播推动项目从0到1落地。',
    en: 'Skilled at transforming complex projects into actionable workflows and driving projects from 0 to 1 through operations, collaboration, and content strategy.',
  },
  email: 'your.email@example.com',
  phone: '+86 123-4567-8901',
  jobDirections: {
    zh: '市场运营｜管培生｜项目管理｜品牌运营',
    en: 'Marketing Operations | Management Trainee | Project Management | Brand Operations',
  },
};

export const socialLinks = {
  email: 'mailto:your.email@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const photoCarouselImages: string[] = [];

export const aboutBadges = {
  zh: ['项目统筹', 'SOP 体系', '跨部门沟通', '品牌运营', '从0到1搭建'],
  en: ['Project Coordination', 'SOP Systems', 'Cross-functional Comms', 'Brand Operations', '0-to-1 Builder'],
};
