#!/usr/bin/env node
/**
 * Clone events from a source year to a target year by shifting dates.
 * Populates both the root index.xml and each month folder (01..12).
 *
 * Usage: node scripts/clone-events-year.js <sourceYear> <targetYear>
 * Example: node scripts/clone-events-year.js 2024 2026
 */

const fs = require('fs');
const path = require('path');

const eventsDir = path.join(__dirname, '..', 'public', 'events');
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function transformXml(xml, sourceYear, targetYear) {
  const yearDiff = targetYear - sourceYear;
  const msShift = Math.round(yearDiff * MS_PER_YEAR);

  let result = xml
    .replace(/<start>(\d+)<\/start>/g, (_, n) => `<start>${parseInt(n, 10) + msShift}</start>`)
    .replace(/<end>(\d+)<\/end>/g, (_, n) => `<end>${parseInt(n, 10) + msShift}</end>`);

  result = result
    .replace(new RegExp(sourceYear, 'g'), String(targetYear))
    .replace(new RegExp(String(sourceYear - 1), 'g'), String(targetYear - 1));

  result = result.replace(
    new RegExp(`/events/${sourceYear}/`, 'g'),
    `/events/${targetYear}/`
  );

  return result;
}

function cloneFile(sourcePath, targetPath, sourceYear, targetYear) {
  if (!fs.existsSync(sourcePath)) {
    return false;
  }
  const xml = fs.readFileSync(sourcePath, 'utf8');
  const result = transformXml(xml, sourceYear, targetYear);
  fs.writeFileSync(targetPath, result, 'utf8');
  return true;
}

function cloneYear(sourceYear, targetYear) {
  const sourceRoot = path.join(eventsDir, String(sourceYear));
  const targetRoot = path.join(eventsDir, String(targetYear));

  if (!fs.existsSync(sourceRoot)) {
    console.error(`Source year folder not found: ${sourceRoot}`);
    process.exit(1);
  }

  // Clone root index.xml
  const rootSource = path.join(sourceRoot, 'index.xml');
  const rootTarget = path.join(targetRoot, 'index.xml');
  if (cloneFile(rootSource, rootTarget, sourceYear, targetYear)) {
    console.log(`Cloned ${sourceYear}/index.xml -> ${targetYear}/index.xml`);
  } else {
    console.error(`Source not found: ${rootSource}`);
    process.exit(1);
  }

  // Clone each month folder
  MONTHS.forEach((month) => {
    const sourcePath = path.join(sourceRoot, month, 'index.xml');
    const targetPath = path.join(targetRoot, month, 'index.xml');
    if (cloneFile(sourcePath, targetPath, sourceYear, targetYear)) {
      console.log(`Cloned ${sourceYear}/${month}/index.xml -> ${targetYear}/${month}/index.xml`);
    }
  });
}

const [source, target] = process.argv.slice(2).map((y) => parseInt(y, 10));
if (isNaN(source) || isNaN(target)) {
  console.log('Usage: node scripts/clone-events-year.js <sourceYear> <targetYear>');
  console.log('Example: node scripts/clone-events-year.js 2024 2026');
  process.exit(1);
}

cloneYear(source, target);
console.log('Done.');
