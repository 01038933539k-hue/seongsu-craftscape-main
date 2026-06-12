const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf-8');

// 1. Add Google Fonts Import
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Noto+Serif+KR:wght@200..900&display=swap');\n`;
if (!css.includes('Playfair+Display')) {
    css = fontImport + css;
}

// 2. Add --font-serif to @theme inline
css = css.replace(/--font-sans: (.*?);/, `--font-sans: $1;\n  --font-serif: "Playfair Display", "Noto Serif KR", serif;`);

// 3. Update :root variables
const newRoot = `:root {
  --radius: 0.5rem;

  /* Color Palette: 群青に眠る (Sleeping in Ultramarine) */
  --paper: #fcedd3; /* Light Cream */
  --paper-warm: #fcf4e8;
  --ink: #102a6b; /* Silent Navy */
  --ink-soft: #015185; /* Blue Current */
  --rule: #5990c0; /* Dusty Blue (lightened for borders) */

  --indigo: #102a6b; /* Silent Navy */
  --violet: #015185; /* Blue Current */
  --cobalt: #5990c0; /* Dusty Blue */
  --ochre: #cea273; /* Sandy Amber */

  --recent: #5990c0;
  --historic: #102a6b;
  
  --use-residential: #FFD200;
  --use-manufacturing: #9333EA;
  --use-office: #3B82F6;
  --use-fnb: #F97316;
  --use-commercial: #E52521;
  --use-temporary: #9CA3AF;

  --background: var(--paper);
  --foreground: var(--ink);
  --card: #fdf5e6;
  --card-foreground: var(--ink);
  --popover: #fdf5e6;
  --popover-foreground: var(--ink);
  --primary: var(--indigo);
  --primary-foreground: #fcedd3;
  --secondary: #e6dac3;
  --secondary-foreground: var(--ink);
  --muted: #f2e2c4;
  --muted-foreground: var(--ink-soft);
  --accent: var(--ochre);
  --accent-foreground: #102a6b;
  --destructive: #E63946;
  --destructive-foreground: #FFFFFF;
  --border: rgba(89, 144, 192, 0.3); /* Soft dusty blue border */
  --input: rgba(89, 144, 192, 0.4);
  --ring: var(--indigo);

  --chart-1: #102a6b;
  --chart-2: #015185;
  --chart-3: #5990c0;
  --chart-4: #cea273;
  --chart-5: #E76F51;
}`;

css = css.replace(/:root\s*\{[\s\S]*?--chart-5: #E76F51;\n\}/, newRoot);

// 4. Update .dark variables
const newDark = `.dark {
  --paper: #0b1a40; /* Darker than Silent Navy */
  --paper-warm: #102a6b; /* Silent Navy */
  --ink: #fcedd3; /* Light Cream */
  --ink-soft: #5990c0; /* Dusty Blue */
  --rule: #015185; /* Blue Current */

  --indigo: #5990c0;
  --violet: #015185;
  
  --recent: #5990c0;
  --historic: #fcedd3;
  
  --use-residential: #FFD200;
  --use-manufacturing: #A855F7;
  --use-office: #60A5FA;
  --use-fnb: #FB923C;
  --use-commercial: #F87171;
  --use-temporary: #9CA3AF;

  --background: var(--paper);
  --foreground: var(--ink);
  --card: #102a6b;
  --card-foreground: var(--ink);
  --popover: #102a6b;
  --popover-foreground: var(--ink);
  --primary: var(--ochre); /* Sandy Amber for high contrast */
  --primary-foreground: #0b1a40;
  --secondary: #015185;
  --secondary-foreground: var(--ink);
  --muted: #015185;
  --muted-foreground: var(--ink-soft);
  --accent: var(--ochre);
  --accent-foreground: #0b1a40;
  --border: var(--rule);
  --input: var(--rule);
}`;

css = css.replace(/\.dark\s*\{[\s\S]*?--input: var\(--rule\);\n\}/, newDark);

fs.writeFileSync('src/styles.css', css, 'utf-8');
console.log('Updated styles.css with new color palette and serif font.');
