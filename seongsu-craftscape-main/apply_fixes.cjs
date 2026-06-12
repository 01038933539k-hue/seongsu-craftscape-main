const fs = require('fs');

// 1. Remove "Watch Video" button from index.tsx
let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');
const buttonRegex = /<div className="hidden lg:flex absolute right-0 bottom-0 items-center gap-3 cursor-pointer group">[\s\S]*?<div className="w-10 h-10 rounded-full border border-white\/30 flex items-center justify-center group-hover:border-ochre group-hover:text-ochre transition-colors">[\s\S]*?<PlayCircle className="text-white group-hover:text-ochre transition-colors w-5 h-5" \/>[\s\S]*?<\/div>[\s\S]*?<span className="text-white text-sm font-medium tracking-wide">Watch Video<\/span>[\s\S]*?<\/div>/;

if (buttonRegex.test(indexCode)) {
  indexCode = indexCode.replace(buttonRegex, '');
  fs.writeFileSync('src/routes/index.tsx', indexCode, 'utf8');
  console.log('Removed Watch Video button from index.tsx');
} else {
  console.log('Watch Video button not found or already removed in index.tsx');
}

// 2. Add word-break rules to styles.css for Korean typography
let cssCode = fs.readFileSync('src/styles.css', 'utf8');
const bodyTarget = `  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);`;
    
const bodyReplacement = `  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    word-break: keep-all;
    overflow-wrap: break-word;`;

if (!cssCode.includes('word-break: keep-all;')) {
  cssCode = cssCode.replace(bodyTarget, bodyReplacement);
  fs.writeFileSync('src/styles.css', cssCode, 'utf8');
  console.log('Added keep-all to body in styles.css');
} else {
  console.log('keep-all already exists in styles.css');
}
