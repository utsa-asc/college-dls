#!/usr/bin/env node
/**
 * Generate events folder structure for a given year.
 * Creates public/events/YYYY/ and public/events/YYYY/01..12/ with empty index.xml files.
 *
 * Usage: node scripts/generate-events-year.js [year]
 *        node scripts/generate-events-year.js 2025 2026
 *        npm run events-year -- 2027
 */

const fs = require('fs');
const path = require('path');

const EMPTY_INDEX_XML = `<data>
	
<xml>
	</xml>
</data>
`;

const eventsDir = path.join(__dirname, '..', 'public', 'events');
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function generateYear(year) {
  const yearStr = String(year);
  if (!/^\d{4}$/.test(yearStr)) {
    console.error(`Invalid year: ${yearStr}`);
    return false;
  }

  const yearDir = path.join(eventsDir, yearStr);
  if (fs.existsSync(yearDir)) {
    console.log(`Skipping ${yearStr}: directory already exists.`);
    return true;
  }

  fs.mkdirSync(yearDir, { recursive: true });
  fs.writeFileSync(path.join(yearDir, 'index.xml'), EMPTY_INDEX_XML, 'utf8');
  console.log(`Created ${yearStr}/index.xml`);

  months.forEach((month) => {
    const monthDir = path.join(yearDir, month);
    fs.mkdirSync(monthDir, { recursive: true });
    fs.writeFileSync(path.join(monthDir, 'index.xml'), EMPTY_INDEX_XML, 'utf8');
    console.log(`Created ${yearStr}/${month}/index.xml`);
  });

  return true;
}

const years = process.argv.slice(2).map((y) => parseInt(y, 10)).filter((y) => !isNaN(y));
if (years.length === 0) {
  const nextYear = new Date().getFullYear() + 1;
  console.log('Usage: node scripts/generate-events-year.js <year> [year ...]');
  console.log(`Example: node scripts/generate-events-year.js ${nextYear} ${nextYear + 1}`);
  process.exit(1);
}

years.forEach(generateYear);
console.log('Done.');
