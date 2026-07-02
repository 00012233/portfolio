import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: { zh: '工具能力', en: 'Tools' },
    items: [
      {
        name: { zh: 'Microsoft Office', en: 'Microsoft Office' },
        usage: {
          zh: '用于项目方案撰写、数据整理、汇报制作',
          en: 'Used for project proposal writing, data organization, and presentation creation',
        },
      },
      {
        name: { zh: 'Canva / 可画', en: 'Canva' },
        usage: {
          zh: '用于海报设计、品牌视觉、社交媒体素材制作',
          en: 'Used for poster design, brand visuals, and social media content creation',
        },
      },
      {
        name: { zh: '秀米 / 135编辑器', en: 'Xiumi / 135 Editor' },
        usage: {
          zh: '用于公众号推文排版与内容编辑',
          en: 'Used for WeChat official account article layout and content editing',
        },
      },
      {
        name: { zh: '剪映 / CapCut', en: 'CapCut' },
        usage: {
          zh: '用于短视频剪辑、活动花絮制作',
          en: 'Used for short video editing and event highlight reels',
        },
      },
    ],
  },
  {
    category: { zh: 'AI 工具', en: 'AI Tools' },
    items: [
      {
        name: { zh: 'ChatGPT', en: 'ChatGPT' },
        usage: {
          zh: '用于文案优化、方案头脑风暴、信息梳理',
          en: 'Used for copy optimization, brainstorming, and information synthesis',
        },
      },
      {
        name: { zh: 'Claude', en: 'Claude' },
        usage: {
          zh: '用于深度内容分析、项目复盘、复杂文档处理',
          en: 'Used for in-depth content analysis, project retrospectives, and complex document processing',
        },
      },
      {
        name: { zh: 'Gemini', en: 'Gemini' },
        usage: {
          zh: '用于多模态信息检索与研究辅助',
          en: 'Used for multimodal information retrieval and research assistance',
        },
      },
      {
        name: { zh: 'Grok', en: 'Grok' },
        usage: {
          zh: '用于实时信息获取与趋势分析',
          en: 'Used for real-time information gathering and trend analysis',
        },
      },
    ],
  },
];

export const claudeCodeHighlight = {
  category: { zh: 'AI & Automation', en: 'AI & Automation' },
  tool: {
    name: { zh: 'Claude Code', en: 'Claude Code' },
  },
  applications: {
    zh: ['网站开发', '工作流优化', '信息整理', '自动化尝试'],
    en: ['Web Development', 'Workflow Optimization', 'Information Organization', 'Automation Experiments'],
  },
  description: {
    zh: '使用 Claude Code 进行网站开发、工作流自动化、信息整理与效率工具搭建，正在持续探索 AI 驱动的工作方式。',
    en: 'Using Claude Code for web development, workflow automation, information organization, and productivity tooling — continuously exploring AI-driven ways of working.',
  },
};
