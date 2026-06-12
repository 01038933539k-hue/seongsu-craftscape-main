const fs = require('fs');

let code = fs.readFileSync('src/components/site/Shell.tsx', 'utf8');

// Update desktop nav
const desktopTarget = 'className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${';
const desktopReplace = 'className={`px-3 py-2 text-[15px] font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${';

if (code.includes(desktopTarget)) {
    code = code.replace(desktopTarget, desktopReplace);
} else {
    // try to find just the text part
    code = code.replace(/text-\[13px\] font-medium/g, 'text-[15px] font-bold');
}

// Update mobile nav
const mobileTarget = "className={`px-4 py-4 rounded-lg text-lg font-medium transition-colors flex items-center ${isActive ? 'text-indigo font-bold bg-muted/80 border-l-4 border-indigo pl-3' : 'text-ink hover:bg-muted/50'}`}";
const mobileReplace = "className={`px-4 py-4 rounded-lg text-[17px] font-bold transition-colors flex items-center ${isActive ? 'text-indigo font-black bg-muted/80 border-l-4 border-indigo pl-3' : 'text-ink hover:bg-muted/50'}`}";

if (code.includes(mobileTarget)) {
    code = code.replace(mobileTarget, mobileReplace);
} else {
    code = code.replace(/text-lg font-medium/g, 'text-[17px] font-bold');
}

fs.writeFileSync('src/components/site/Shell.tsx', code, 'utf8');
console.log('Successfully updated navigation fonts to be larger and bolder in Shell.tsx');
