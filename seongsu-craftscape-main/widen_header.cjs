const fs = require('fs');

let shellCode = fs.readFileSync('src/components/site/Shell.tsx', 'utf8');

const targetStr = '<div className="max-w-3xl">';
const replaceStr = '<div className="w-full max-w-5xl">';

if (shellCode.includes(targetStr)) {
    shellCode = shellCode.replace(targetStr, replaceStr);
    fs.writeFileSync('src/components/site/Shell.tsx', shellCode, 'utf8');
    console.log('Successfully widened the PageHeader title container in Shell.tsx');
} else {
    console.log('Could not find the target max-w-3xl container in Shell.tsx');
}
