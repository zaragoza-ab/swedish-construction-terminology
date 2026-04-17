#!/usr/bin/env node
// Merge _term-batches/batch-*.json into main terminology.json, dedup on `sv`, bump version.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\//, ''), '..');
const MAIN = path.join(ROOT, 'terminology.json');
const BATCH_DIR = path.join(ROOT, '_term-batches');

const main = JSON.parse(fs.readFileSync(MAIN, 'utf8'));
const existing = main.terms;
const existingSv = new Set(existing.map(t => t.sv.toLowerCase().trim()));

const batchFiles = fs.readdirSync(BATCH_DIR).filter(f => f.startsWith('batch-') && f.endsWith('.json'));
let added = 0, skipped = 0;
for (const f of batchFiles) {
  const arr = JSON.parse(fs.readFileSync(path.join(BATCH_DIR, f), 'utf8'));
  for (const t of arr) {
    if (!t || !t.sv || !t.en) { skipped++; continue; }
    const key = t.sv.toLowerCase().trim();
    if (existingSv.has(key)) { skipped++; continue; }
    existingSv.add(key);
    existing.push({ sv: t.sv, en: t.en, pl: t.pl || '', category: t.category || 'other' });
    added++;
  }
}

main._meta.version = '1.1.0';
main._meta.updated = new Date().toISOString().slice(0, 10);
main._meta.count = existing.length;
main.terms = existing;

fs.writeFileSync(MAIN, JSON.stringify(main, null, 2) + '\n', 'utf8');
console.log(`Added: ${added}, Skipped (dup/invalid): ${skipped}, Total: ${existing.length}`);

// Remove temp batches
for (const f of batchFiles) fs.unlinkSync(path.join(BATCH_DIR, f));
fs.rmdirSync(BATCH_DIR);
console.log('Cleaned up _term-batches/');
