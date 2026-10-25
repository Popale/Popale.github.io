import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.resolve(rootDir, 'index.dev.html');
const indexPath = path.resolve(rootDir, 'index.html');

if (fs.existsSync(templatePath)) {
  fs.copyFileSync(templatePath, indexPath);
  console.log('✓ Restored dev template into index.html');
}
