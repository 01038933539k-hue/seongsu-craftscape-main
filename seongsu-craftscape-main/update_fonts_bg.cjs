const fs = require('fs');

// 1. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

const fontFaceDef = `/* 한국기계연구원 Light */
@font-face {
    font-family: 'KoreaInstituteOfMachineryAndMaterials';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
}

/* 한국기계연구원 Bold */
@font-face {
    font-family: 'KoreaInstituteOfMachineryAndMaterials';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}

`;

if (!css.includes('KoreaInstituteOfMachineryAndMaterials')) {
    css = fontFaceDef + css;
}

// Replace Pretendard with KoreaInstituteOfMachineryAndMaterials
css = css.replace(
    /--font-display:\s*"Pretendard Variable",\s*"Pretendard",\s*"Inter",\s*system-ui,\s*sans-serif;/,
    `--font-display: "KoreaInstituteOfMachineryAndMaterials", "Pretendard Variable", "Pretendard", "Inter", system-ui, sans-serif;`
);

css = css.replace(
    /--font-sans:\s*"Pretendard Variable",\s*"Pretendard",\s*"Inter",\s*system-ui,\s*sans-serif;/,
    `--font-sans: "KoreaInstituteOfMachineryAndMaterials", "Pretendard Variable", "Pretendard", "Inter", system-ui, sans-serif;`
);

// Change the light theme background to light gray
// It currently says: --background: var(--paper);
// We only want to change the first occurrence (light mode), dark mode is around line 137.
let parts = css.split('--background: var(--paper);');
if (parts.length >= 2) {
    // Reconstruct with light gray for the first occurrence
    css = parts[0] + '--background: #f4f4f5;' + parts.slice(1).join('--background: var(--paper);');
}

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Updated styles.css with KIMM fonts and light gray background');

// 2. Update index.tsx to retain the original paper background
let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');
if (indexCode.includes('bg-background')) {
    indexCode = indexCode.replace(/bg-background/g, 'bg-paper');
    fs.writeFileSync('src/routes/index.tsx', indexCode, 'utf8');
    console.log('Updated index.tsx to use bg-paper to retain original background');
} else {
    console.log('index.tsx already updated or bg-background not found');
}
