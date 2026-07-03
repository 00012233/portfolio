const fs = require('fs');
const path = require('path');

const results = require('./ocr-results.json');

function cleanTitle(text) {
  const artifacts = ['《 详情 on。', '《 @ Q …', '伟 杏林 文苑 …', '伟 杏林 文苑 和', '杏林 文苑 和', '查看 全 文', '杏林 文 苑 官 Q', '详情', 'Q' ];
  const t = text.trim();
  if (artifacts.includes(t) || t.length < 2) return '';
  let cleaned = t.replace(/^[伟仿扫继转]{1,2}\s*/, '').replace(/^《\s*/, '').replace(/^\d{2}:\d{2}\s*/, '').trim();
  return cleaned.length >= 2 ? cleaned.slice(0, 60) : '';
}

function classifyPost(text) {
  const zh = text;
  if (zh.includes('招新') || zh.includes('报名') || zh.includes('加入')) return { zh: '招新宣传', en: 'Recruitment' };
  if (zh.includes('春联') || zh.includes('春节') || zh.includes('新年') || zh.includes('元旦') || zh.includes('中秋') || zh.includes('国庆') || zh.includes('端午') || zh.includes('元宵') || zh.includes('清明'))
    return { zh: '节日祝福', en: 'Holiday Greeting' };
  if (zh.includes('节气') || zh.includes('立春') || zh.includes('雨水') || zh.includes('惊蛰') || zh.includes('春分') || zh.includes('谷雨') || zh.includes('立夏') || zh.includes('小满') || zh.includes('芒种') || zh.includes('夏至') || zh.includes('小暑') || zh.includes('大暑') || zh.includes('立秋') || zh.includes('处暑') || zh.includes('白露') || zh.includes('秋分') || zh.includes('寒露') || zh.includes('霜降') || zh.includes('立冬') || zh.includes('小雪') || zh.includes('大雪') || zh.includes('冬至') || zh.includes('小寒') || zh.includes('大寒'))
    return { zh: '节气推文', en: 'Solar Term' };
  if (zh.includes('作品') || zh.includes('展示')) return { zh: '书法作品展示', en: 'Calligraphy Display' };
  if (zh.includes('知识') || zh.includes('入门') || zh.includes('技巧') || zh.includes('分享')) return { zh: '书法知识分享', en: 'Knowledge Share' };
  if (zh.includes('活动') || zh.includes('回顾') || zh.includes('现场') || zh.includes('举办')) return { zh: '活动回顾', en: 'Activity Recap' };
  if (zh.includes('比赛') || zh.includes('赛') || zh.includes('获奖')) return { zh: '比赛宣传', en: 'Competition' };
  if (zh.includes('开班') || zh.includes('教学') || zh.includes('练习') || zh.includes('培训') || zh.includes('课程'))
    return { zh: '社团日常', en: 'Daily Activity' };
  return { zh: '社团日常', en: 'Daily Activity' };
}

// NOTE: views & comments are NOT reliably extractable from OCR.
// They are set to 0 — user must provide real data or confirm estimates.
const posts = results
  .filter(r => r.date && !r.isAd)
  .map((r, i) => ({
    id: String(i + 1),
    date: r.date,
    time: r.time || '00:00',
    title: {
      zh: cleanTitle(r.title) || (r.isMyPeriod ? '运营动态' : '社团动态'),
      en: cleanTitle(r.title) || (r.isMyPeriod ? 'Operations Post' : 'Society Post'),
    },
    type: classifyPost(r.title + ' ' + r.ocrRaw),
    views: 0,        // NOT extractable from OCR — needs manual input
    likes: r.likes || 0,
    comments: 0,     // NOT extractable from OCR — needs manual input
    shares: r.shares || 0,
    visitors: 0,     // NOT extractable from OCR — needs manual input
    content: {
      zh: cleanTitle(r.title) || '社团动态',
      en: cleanTitle(r.title) || 'Society post',
    },
    isMyPeriod: r.isMyPeriod,
    imagePath: '',
  }));

posts.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
posts.forEach((p, i) => { p.id = String(i + 1); });

const myPosts = posts.filter(p => p.isMyPeriod);
const beforePosts = posts.filter(p => !p.isMyPeriod);
const totalLikes = posts.reduce((s, p) => s + p.likes, 0);
const totalShares = posts.reduce((s, p) => s + p.shares, 0);

console.log(`Total valid posts: ${posts.length}`);
console.log(`My period (2023.09-2024.09): ${myPosts.length}`);
console.log(`Before my period: ${beforePosts.length}`);
console.log(`Total likes extracted: ${totalLikes}`);
console.log(`Total shares extracted: ${totalShares}`);
console.log(`Date range: ${posts[0]?.date} to ${posts[posts.length-1]?.date}`);

// NOTE: views, comments, visitors are 0 because OCR cannot reliably extract them.
// The dashboard should clearly indicate this and focus on measurable metrics (likes, shares, post frequency).

const output = `// ⚠️ IMPORTANT: This file is auto-generated from OCR of 95 QQ Space screenshots.
// Generated: ${new Date().toISOString().split('T')[0]}
// Source: Desktop/截图/ (95 screenshots → ${posts.length} valid posts, 1 ad filtered)
//
// DATA RELIABILITY NOTES:
// ✅ Date & time — reliably extracted from OCR
// ✅ Likes — reliably extracted from OCR (pattern: 等XX人 赞了)
// ✅ Shares — reliably extracted from OCR (pattern: 等XX人 转发了)
// ❌ Views — NOT extractable from OCR. All set to 0. Need manual input.
// ❌ Comments — NOT extractable from OCR. All set to 0. Need manual input.
// ❌ Visitors — NOT extractable from OCR. All set to 0. Need manual input.
// ⚠️ Post titles — noisy OCR output, manually cleaned but may be inaccurate.
// ⚠️ Post types — auto-classified from OCR text, may need manual correction.
//
// Before my period (pre-2023.09): ${beforePosts.length} posts
// During my period (2023.09–2024.09): ${myPosts.length} posts
// Total likes: ${totalLikes.toLocaleString()}
// Total shares: ${totalShares.toLocaleString()}

import type { AnalyticsPost } from '@/types';

export const OCR_POSTS: AnalyticsPost[] = ${JSON.stringify(posts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'ocr-posts.ts'), output);
console.log(`\nGenerated: src/data/ocr-posts.ts`);
