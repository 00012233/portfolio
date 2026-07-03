/**
 * Import real data from 杏林文苑官q数据.xlsx
 * This is the SINGLE SOURCE OF TRUTH for all data.
 * DO NOT use OCR data or screenshots.
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = XLSX.readFile('C:/Users/86188/Desktop/杏林文苑官q数据.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const raw = XLSX.utils.sheet_to_json(ws, { header: 1 });

// Skip header, filter valid rows (must have ID and date)
const rows = raw.slice(1).filter(r => r[0] && r[1] && String(r[1]).length > 6);

const MY_PERIOD_START = '2023-09-01';
const MY_PERIOD_END = '2024-09-30';

// Type classification
const typeMap = {
  '招新宣传': { zh: '招新宣传', en: 'Recruitment' },
  '招新转发': { zh: '招新宣传', en: 'Recruitment' },
  '招新': { zh: '招新宣传', en: 'Recruitment' },
  '招新总结': { zh: '招新宣传', en: 'Recruitment' },
  '面试': { zh: '招新宣传', en: 'Recruitment' },
  '培训活动': { zh: '日常培训', en: 'Training' },
  '日常培训': { zh: '日常培训', en: 'Training' },
  '培训': { zh: '日常培训', en: 'Training' },
  '活动宣传': { zh: '活动宣传', en: 'Event Promotion' },
  '活动转发': { zh: '活动现场', en: 'Event Coverage' },
  '活动现场': { zh: '活动现场', en: 'Event Coverage' },
  '活动总结': { zh: '活动总结', en: 'Event Recap' },
  '活动结果': { zh: '活动总结', en: 'Event Recap' },
  '活动互动': { zh: '活动现场', en: 'Event Coverage' },
  '活动': { zh: '活动现场', en: 'Event Coverage' },
  '活动爆款': { zh: '活动现场', en: 'Event Coverage' },
  '总结': { zh: '活动总结', en: 'Event Recap' },
  '转发': { zh: '日常动态', en: 'Daily' },
  '日常': { zh: '日常动态', en: 'Daily' },
  '展览': { zh: '作品展示', en: 'Artwork Display' },
  '投票': { zh: '日常动态', en: 'Daily' },
  '运动会': { zh: '活动现场', en: 'Event Coverage' },
  '商业活动': { zh: '活动现场', en: 'Event Coverage' },
  '义卖': { zh: '活动现场', en: 'Event Coverage' },
  '公益': { zh: '活动现场', en: 'Event Coverage' },
  '节日': { zh: '节日运营', en: 'Holiday' },
  '节气': { zh: '节日运营', en: 'Holiday' },
  '荣誉': { zh: '日常动态', en: 'Daily' },
  '志愿': { zh: '活动现场', en: 'Event Coverage' },
  '比赛': { zh: '活动宣传', en: 'Event Promotion' },
  '文化': { zh: '日常动态', en: 'Daily' },
  '爆款': { zh: '活动现场', en: 'Event Coverage' },
};

const posts = rows.map((r, i) => {
  const dateRaw = String(r[1]).trim();
  // Handle Excel date serial numbers
  let dateStr = dateRaw;
  if (/^\d{5}$/.test(dateRaw)) {
    // Excel serial date
    const d = new Date((parseInt(dateRaw) - 25569) * 86400 * 1000);
    dateStr = d.toISOString().slice(0, 10);
  }
  const date = dateStr.slice(0, 10);

  const rawType = String(r[2] || '').trim();
  const type = typeMap[rawType] || { zh: '日常动态', en: 'Daily' };

  return {
    id: String(r[0]),
    date,
    time: '12:00',
    title: {
      zh: String(r[3] || '动态').trim().slice(0, 40),
      en: String(r[3] || 'Post').trim().slice(0, 40),
    },
    type,
    views: Number(r[4]) || 0,
    likes: Number(r[5]) || 0,
    comments: Number(r[7]) || 0,
    shares: Number(r[6]) || 0,
    visitors: 0,
    content: {
      zh: String(r[3] || '').trim(),
      en: String(r[3] || '').trim(),
    },
    isMyPeriod: date >= MY_PERIOD_START && date < MY_PERIOD_END,
    imagePath: '',
  };
});

posts.sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));

const total = posts.length;
const myP = posts.filter(p => p.isMyPeriod);
const beforeP = posts.filter(p => !p.isMyPeriod);
const sum = (arr, key) => arr.reduce((s, p) => s + (p[key] || 0), 0);

console.log(`Total posts: ${total}`);
console.log(`My period: ${myP.length}`);
console.log(`Before: ${beforeP.length}`);
console.log(`Total views: ${sum(posts, 'views').toLocaleString()}`);
console.log(`Total likes: ${sum(posts, 'likes').toLocaleString()}`);
console.log(`Total shares: ${sum(posts, 'shares').toLocaleString()}`);
console.log(`Total comments: ${sum(posts, 'comments').toLocaleString()}`);
console.log(`Date range: ${posts[0].date} - ${posts[posts.length-1].date}`);

// Type distribution
const types = {};
posts.forEach(p => { const k = p.type.zh; types[k] = (types[k]||0)+1; });
console.log('Types:', JSON.stringify(types));

// Generate TypeScript file
const output = `/**
 * ⚠️ SINGLE SOURCE OF TRUTH
 * All data imported from: 杏林文苑官q数据.xlsx
 * DO NOT modify manually. DO NOT use OCR or screenshots.
 * Generated: ${new Date().toISOString().slice(0, 10)}
 *
 * Summary:
 *   Total posts: ${total}
 *   My period (2023.09-2024.09): ${myP.length}
 *   Before my period: ${beforeP.length}
 *   Total views: ${sum(posts, 'views').toLocaleString()}
 *   Total likes: ${sum(posts, 'likes').toLocaleString()}
 *   Total shares: ${sum(posts, 'shares').toLocaleString()}
 *   Total comments: ${sum(posts, 'comments').toLocaleString()}
 */

import type { AnalyticsPost } from '@/types';

export const CASE_POSTS: AnalyticsPost[] = ${JSON.stringify(posts, null, 2)};
`;

const outPath = path.join(__dirname, '..', 'src', 'data', 'case-posts.ts');
fs.writeFileSync(outPath, output);
console.log(`\nGenerated: src/data/case-posts.ts`);
