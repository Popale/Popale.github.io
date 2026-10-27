import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const assetsDist = path.resolve(distDir, 'assets');
const assetsRoot = path.resolve(rootDir, 'assets');

// 1. Copy dist/index.html to root index.html
const distIndex = path.resolve(distDir, 'index.html');
const rootIndex = path.resolve(rootDir, 'index.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✓ Copied dist/index.html -> ./index.html for GitHub Pages direct hosting');
}

// 2. Copy dist/assets to root assets/
if (fs.existsSync(assetsDist)) {
  if (fs.existsSync(assetsRoot)) {
    fs.rmSync(assetsRoot, { recursive: true, force: true });
  }
  fs.mkdirSync(assetsRoot, { recursive: true });
  const files = fs.readdirSync(assetsDist);
  for (const file of files) {
    fs.copyFileSync(path.resolve(assetsDist, file), path.resolve(assetsRoot, file));
  }
  console.log(`✓ Copied ${files.length} assets -> ./assets/`);
}

// 3. Ensure .nojekyll exists
fs.writeFileSync(path.resolve(rootDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll');
