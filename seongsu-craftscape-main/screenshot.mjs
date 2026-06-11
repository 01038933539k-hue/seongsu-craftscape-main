import puppeteer from 'puppeteer';

const outputDir = 'C:/Users/박준경/.gemini/antigravity/brain/e2600e09-c4a3-4243-97fc-835eccfec7f2';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:8080/entropy', { waitUntil: 'networkidle0', timeout: 30000 });

// Full page screenshot
await page.screenshot({ path: `${outputDir}/entropy-full.png`, fullPage: true });
console.log('Full page screenshot saved');

// Top section
await page.screenshot({ path: `${outputDir}/entropy-top.png` });
console.log('Top section saved');

// Scroll to 3D street section
await page.evaluate(() => {
  const el = document.querySelector('img[alt*="거리별"]');
  if (el) el.scrollIntoView({ block: 'center' });
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${outputDir}/entropy-street-3d.png` });
console.log('Street 3D section saved');

// Scroll to 3D building section
await page.evaluate(() => {
  const el = document.querySelector('img[alt*="건물별"]');
  if (el) el.scrollIntoView({ block: 'center' });
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${outputDir}/entropy-building-3d.png` });
console.log('Building 3D section saved');

await browser.close();
console.log('Done!');
