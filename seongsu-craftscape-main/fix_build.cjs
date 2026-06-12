const fs = require('fs');

// 1. Remove @import from styles.css
let css = fs.readFileSync('src/styles.css', 'utf-8');
const importLine = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Noto+Serif+KR:wght@200..900&display=swap');\n`;
css = css.replace(importLine, '');
fs.writeFileSync('src/styles.css', css, 'utf-8');

// 2. Add to __root.tsx
let root = fs.readFileSync('src/routes/__root.tsx', 'utf-8');
const newFonts = `{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Noto+Serif+KR:wght@200..900&family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },`;
const oldFonts = `{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },`;
root = root.replace(oldFonts, newFonts);
fs.writeFileSync('src/routes/__root.tsx', root, 'utf-8');

console.log('Fixed CSS import error by moving fonts to __root.tsx');
