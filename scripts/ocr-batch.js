const fs = require('fs');
const path = require('path');
const { createWorker } = require('tesseract.js');

const SCREENSHOTS_DIR = 'C:/Users/86188/Desktop/截图';
const OUTPUT_FILE = path.join(__dirname, 'ocr-results.json');

function extractDate(text) {
  const m = text.match(/(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})/);
  return m ? { date: m[1], time: m[2] } : null;
}

function extractLikes(text) {
  // Pattern: "等47人 偶了/锡了/赞了"
  const m = text.match(/等\s*(\d+)\s*人\s*[偶锡赞烤锅]+\s*了/);
  return m ? parseInt(m[1]) : 0;
}

function extractShares(text) {
  const m = text.match(/等\s*(\d+)\s*人\s*转发\s*了/);
  return m ? parseInt(m[1]) : 0;
}

function isMyPeriod(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const start = new Date('2023-09-01');
  const end = new Date('2024-10-01');
  return d >= start && d < end;
}

function extractTitle(text) {
  // First meaningful line after cleaning
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.match(/^\d{2}:\d{2}/) && !l.match(/^[@扫继等给转点说朋]/) && !l.match(/^\d{4}-\d{2}-\d{2}/) && !l.match(/^[A-Za-z\s\d@#$%^&*()\[\]{}<>\/\\|~`\-_+=;:'",.!?]+$/) && l.length > 3);
  for (const line of lines) {
    if (line.length >= 4 && line.length <= 80) return line.slice(0, 50);
  }
  return '';
}

function appearsAd(text) {
  const adKeywords = ['购买', 'YSL', '圣罗兰', '购买', '立即', '广告', '赞助', '推广', '促销', '新品', '限时', '抢购'];
  const lines = text.split('\n');
  let adLines = 0;
  for (const l of lines) {
    for (const kw of adKeywords) {
      if (l.includes(kw)) adLines++;
    }
  }
  return adLines >= 3;
}

async function main() {
  const files = fs.readdirSync(SCREENSHOTS_DIR)
    .filter(f => f.match(/\.(jpg|png)$/i))
    .sort();

  console.log(`Found ${files.length} screenshots\n`);

  const worker = await createWorker('chi_sim');

  const results = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(SCREENSHOTS_DIR, file);
    const pct = Math.round((i / files.length) * 100);
    process.stdout.write(`\r[${i + 1}/${files.length}] ${pct}% - ${file.slice(0, 40)}...`);

    try {
      const { data } = await worker.recognize(filePath);
      const text = data.text;
      const dateInfo = extractDate(text);
      const likes = extractLikes(text);
      const shares = extractShares(text);
      const title = extractTitle(text);
      const ad = appearsAd(text);

      results.push({
        file,
        date: dateInfo?.date || '',
        time: dateInfo?.time || '',
        title,
        likes,
        shares,
        isMyPeriod: isMyPeriod(dateInfo?.date),
        isAd: ad,
        ocrRaw: text.slice(0, 500),
      });
    } catch (err) {
      results.push({ file, date: '', time: '', title: '', likes: 0, shares: 0, isMyPeriod: false, isAd: false, ocrRaw: '', error: err.message });
    }
  }

  await worker.terminate();

  // Summary
  const valid = results.filter(r => r.date && !r.isAd);
  const ads = results.filter(r => r.isAd);
  console.log(`\n\nDone.`);
  console.log(`Total screenshots: ${results.length}`);
  console.log(`With date extracted: ${results.filter(r => r.date).length}`);
  console.log(`Likely ads: ${ads.length}`);
  console.log(`Valid posts (has date, not ad): ${valid.length}`);
  console.log(`During my period (2023.09-2024.09): ${valid.filter(r => r.isMyPeriod).length}`);
  console.log(`Before my period: ${valid.filter(r => !r.isMyPeriod).length}`);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nOutput: ${OUTPUT_FILE}`);
}

main().catch(console.error);
