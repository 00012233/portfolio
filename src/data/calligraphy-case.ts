/**
 * 杏林文苑 QQ空间官方账号运营 — Case Study 数据
 *
 * ⚠️ 所有数据均为用户（饶蓓）直接提供，不得修改。
 * 如需补充新数据，请告知用户。
 */

export const CASE_INFO = {
  projectName: { zh: '杏林文苑官方QQ空间运营', en: 'Xinglin Wenyuan Official QQ Space Operations' },
  period: '2022.09 — 2024.09',
  myPeriod: '2023.09 — 2024.09',
  responsibilities: {
    zh: ['内容策划', '文案撰写', '活动宣传', '品牌传播', '节点运营', '数据分析', '活动复盘'],
    en: ['Content Strategy', 'Copywriting', 'Event Promotion', 'Brand Communication', 'Calendar Operations', 'Data Analysis', 'Event Retrospective'],
  },
};

import { CASE_POSTS } from './case-posts';

const myPosts = CASE_POSTS.filter(p => p.isMyPeriod);
const allViews = CASE_POSTS.reduce((s, p) => s + p.views, 0);
const allLikes = CASE_POSTS.reduce((s, p) => s + p.likes, 0);

export const OVERVIEW = {
  totalContent: CASE_POSTS.length,
  totalViews: allViews,
  qqFriendsBefore: 154,
  qqFriendsAfter: 928,
  qqGroupBefore: 22,
  qqGroupAfter: 192,
};

export const GROWTH = {
  qqFriends: { before: 154, after: 928, growth: 502.6 },
  qqGroup: { before: 22, after: 192, growth: 772.7 },
};

export const HIGHLIGHT_POST = {
  date: '2023-12-12',
  views: 4842,
  likes: 420,
  comments: 85,
  shares: 249,
  title: { zh: '爆款内容', en: 'Viral Post' },
};

export const CALIGRAPHY_CASES = [
  {
    id: 'life-moments',
    title: { zh: '生活中的小确幸', en: 'Little Joys in Life' },
    background: { zh: '', en: '' },
    role: { zh: '', en: '' },
    process: { zh: '', en: '' },
    outcome: { zh: '', en: '' },
    reflection: { zh: '', en: '' },
  },
  {
    id: 'charity-sale',
    title: { zh: '社团义卖', en: 'Society Charity Sale' },
    background: { zh: '', en: '' },
    role: { zh: '', en: '' },
    process: { zh: '', en: '' },
    outcome: { zh: '', en: '' },
    reflection: { zh: '', en: '' },
  },
  {
    id: 'blessing-event',
    title: { zh: '送福活动', en: 'Blessing Event' },
    background: { zh: '', en: '' },
    role: { zh: '', en: '' },
    process: { zh: '', en: '' },
    outcome: { zh: '', en: '' },
    reflection: { zh: '', en: '' },
  },
  {
    id: 'recruitment',
    title: { zh: '招新运营', en: 'Recruitment Operations' },
    background: { zh: '', en: '' },
    role: { zh: '', en: '' },
    process: { zh: '', en: '' },
    outcome: { zh: '', en: '' },
    reflection: { zh: '', en: '' },
  },
];

export const REFLECTION = {
  contentPlanning: {
    zh: '建立"节气+节日+活动+作品"四位一体内容矩阵，保持稳定发布节奏的同时，在关键节点集中发力。',
    en: 'Established a four-pillar content matrix covering solar terms, holidays, events, and artworks — maintaining consistent publishing rhythm while concentrating efforts at key moments.',
  },
  eventPlanning: {
    zh: '策划"书法+"系列活动，通过跨界联动（咖啡、音乐、公益）增加内容新鲜感与传播力。',
    en: 'Curated "Calligraphy+" event series, leveraging cross-category collaborations to boost content freshness and reach.',
  },
  brandCommunication: {
    zh: '从零搭建社团视觉体系，统一公众号模板与海报规范，建立可识别的品牌形象。',
    en: 'Built visual identity from scratch with unified templates and poster guidelines, establishing a recognizable brand presence.',
  },
  dataAnalysis: {
    zh: '通过持续追踪浏览量、互动率、好友增长等关键指标，用数据驱动内容策略优化。',
    en: 'Continuously tracked views, engagement rate, and follower growth — using data to inform content strategy optimization.',
  },
  retrospective: {
    zh: '每次大型活动后进行结构化复盘，沉淀经验并形成可复用的运营SOP。',
    en: 'Conducted structured retrospectives after every major event, documenting insights into reusable operational SOPs.',
  },
};
