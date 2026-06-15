const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\박준경\\Downloads\\seongsu-craftscape-main\\seongsu-craftscape-main\\src\\routes';

const files = [
  'index.tsx',
  'timeline.tsx',
  'east-west.tsx',
  'entropy.tsx',
  'floors.tsx',
  'industries.tsx',
  'map.tsx',
  'implications.tsx'
];

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has FadeIn import
  if (content.includes('import { FadeIn }')) return;

  // Add import
  content = content.replace(/(import .*?\n)/, `$1import { FadeIn } from "@/components/site/FadeIn";\n`);

  // Replace <section className="..."> with <FadeIn as="section" className="...">
  content = content.replace(/<section\s+className="/g, '<FadeIn as="section" className="');
  content = content.replace(/<\/section>/g, '</FadeIn>');

  // Some sections might not have className
  content = content.replace(/<section>/g, '<FadeIn as="section">');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Added FadeIn to ' + file);
});
