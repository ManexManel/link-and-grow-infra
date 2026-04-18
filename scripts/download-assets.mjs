import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE = 'https://www.omediaparis.com/wp-content/uploads';

const assets = [
  // Logos
  [`${BASE}/2024/03/logo-omedia-blanc.png`, 'public/images/logo-omedia-blanc.png'],
  [`${BASE}/2024/03/logo-omedia.png`, 'public/images/logo-omedia.png'],
  // Hero fallback
  [`${BASE}/2024/12/home2024-video-fallback.jpg`, 'public/images/home2024-video-fallback.jpg'],
  // Section images
  [`${BASE}/2024/03/home202312-vis1.jpg`, 'public/images/home202312-vis1.jpg'],
  [`${BASE}/2024/03/home-bollinger-bw.jpg`, 'public/images/home-bollinger-bw.jpg'],
  // Branding triptych
  [`${BASE}/2024/03/home-triptique-1-1.jpg`, 'public/images/home-triptique-1-1.jpg'],
  [`${BASE}/2024/03/home-triptique-2.jpg`, 'public/images/home-triptique-2.jpg'],
  [`${BASE}/2024/03/home-triptique-3.jpg`, 'public/images/home-triptique-3.jpg'],
  // Brand content triptych
  [`${BASE}/2024/03/home-triptique-4.jpg`, 'public/images/home-triptique-4.jpg'],
  [`${BASE}/2024/03/home-triptique-5.jpg`, 'public/images/home-triptique-5.jpg'],
  [`${BASE}/2024/03/home-triptique-6.jpg`, 'public/images/home-triptique-6.jpg'],
  // Digital mockup
  [`${BASE}/2024/03/home-omedia-mockup-2048x1125.png`, 'public/images/home-omedia-mockup.png'],
  // Social media images
  [`${BASE}/2024/07/omedia-swissperfection-featured.jpg`, 'public/images/omedia-swissperfection-featured.jpg'],
  [`${BASE}/2023/01/omedia-bollinger-plateforme-marque-print-v1.jpg`, 'public/images/omedia-bollinger-plateforme-marque-print-v1.jpg'],
  [`${BASE}/2024/04/omedia-christofle-influence-social-media-04.jpg`, 'public/images/omedia-christofle-influence-social-media-04.jpg'],
  // Edition image
  [`${BASE}/2024/03/home-omedia-edition.png`, 'public/images/home-omedia-edition.png'],
  // Slider images
  [`${BASE}/2024/03/home-omedia-building.jpg`, 'public/images/home-omedia-building.jpg'],
  [`${BASE}/2024/03/home-omedia-slider-1.jpg`, 'public/images/home-omedia-slider-1.jpg'],
  [`${BASE}/2024/03/home-omedia-slider-2.jpg`, 'public/images/home-omedia-slider-2.jpg'],
  [`${BASE}/2024/03/home-omedia-slider-3.jpg`, 'public/images/home-omedia-slider-3.jpg'],
  [`${BASE}/2024/03/home-omedia-slider-4.jpg`, 'public/images/home-omedia-slider-4.jpg'],
  // Hero video
  ['https://www.omediaparis.com/wp-content/uploads/2024/03/210121_CHAUMET_MASHUP_LOGO.webm', 'public/videos/showreel.webm'],
];

async function downloadFile(url, dest) {
  const dir = path.dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(dest)) { console.log(`  SKIP ${dest}`); return; }

  const res = await fetch(url);
  if (!res.ok) { console.error(`  FAIL ${url} (${res.status})`); return; }
  await pipeline(res.body, createWriteStream(dest));
  console.log(`  OK   ${dest}`);
}

async function main() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(([url, dest]) => downloadFile(url, dest)));
  }
  console.log('Done.');
}

main().catch(console.error);
