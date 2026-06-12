const fs = require('fs');

let code = fs.readFileSync('src/routes/timeline.tsx', 'utf8');

const targetStr = `<div className="mb-16 bg-white p-4 md:p-8 rounded-2xl border border-rule/50 shadow-sm overflow-hidden flex justify-center">
          <img 
            src="/parcel-evolution.png" 
            alt="9개 필지의 시계열적 진화 다이어그램" 
            className="w-full max-w-4xl h-auto mix-blend-multiply" 
          />
        </div>`;

const replaceStr = `<div className="mb-20 -mx-4 md:-mx-12 lg:-mx-20 flex justify-center">
          <img 
            src="/parcel-evolution.png" 
            alt="9개 필지의 시계열적 진화 다이어그램" 
            className="w-full h-auto mix-blend-multiply contrast-[1.1] opacity-90 scale-105 transform origin-center" 
          />
        </div>`;

code = code.replace(targetStr, replaceStr);

fs.writeFileSync('src/routes/timeline.tsx', code, 'utf8');
console.log('Successfully updated timeline image container styling');
