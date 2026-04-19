import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.join(__dirname, '../public/images');
fs.mkdirSync(BASE, { recursive: true });
fs.mkdirSync(path.join(__dirname, '../public/seo'), { recursive: true });

const ASSETS = [
  // Logo + Hero
  'https://linkandgrow.pt/wp-content/uploads/2020/08/linkandgrow-logo.svg',
  'https://linkandgrow.pt/wp-content/uploads/2024/08/element_01-1.png',
  'https://linkandgrow.pt/wp-content/uploads/2024/08/linkandgrow-1-1.jpg',
  // About / Stats photos
  'https://linkandgrow.pt/wp-content/uploads/2020/05/home6_icon_13.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/05/home6_icon_14.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/05/home6_icon_10.png',
  // Service icons
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Inbound.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-E-Commerce.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Web-design.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Automacao.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Leads.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Campanhas-PPC.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Social-media.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/LinkandGrow-Email-Marketing.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/11/LinkandGrow-ContentMarketing.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/11/LinkandGrow-CRM.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Linkandgrow-home-tecnologia.png',
  // Franchising CEO
  'https://linkandgrow.pt/wp-content/uploads/2023/12/joao-oliveira-ceo_linkandgrow.png',
  // Decorative
  'https://linkandgrow.pt/wp-content/uploads/2020/03/round-points.png',
  // Client logos
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Lastsole.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/ornimundo.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Feel-Porto.png',
  'https://linkandgrow.pt/wp-content/uploads/2021/04/Shoppingpt.png',
  'https://linkandgrow.pt/wp-content/uploads/2024/05/era-1.png',
  'https://linkandgrow.pt/wp-content/uploads/2024/05/xarao.png',
  'https://linkandgrow.pt/wp-content/uploads/2024/05/replica.png',
  'https://linkandgrow.pt/wp-content/uploads/2021/10/decisoes-e-solucoes.png',
  'https://linkandgrow.pt/wp-content/uploads/2021/10/ambar.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/liderac.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/phyto.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/remax.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Express-glass-1.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/molaflex.png',
  'https://linkandgrow.pt/wp-content/uploads/2021/09/FCNAUP.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/IHTP.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Go-Gym.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Oito-Um.png',
  'https://linkandgrow.pt/wp-content/uploads/2020/08/Geometrik.png',
];

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlink(dest, () => {});
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        console.log(`  SKIP ${url.split('/').pop()} (${res.statusCode})`);
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log(`  OK  ${path.basename(dest)}`); resolve(); });
    });
    req.on('error', (e) => { fs.unlink(dest, () => {}); console.log(`  ERR ${e.message}`); resolve(); });
  });
}

async function run() {
  const batches = [];
  for (let i = 0; i < ASSETS.length; i += 4) batches.push(ASSETS.slice(i, i + 4));
  for (const batch of batches) {
    await Promise.all(batch.map(url => download(url, path.join(BASE, url.split('/').pop()))));
  }
  console.log('All done.');
}
run();
