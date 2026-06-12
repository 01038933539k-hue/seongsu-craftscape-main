const fs = require('fs');

let code = fs.readFileSync('src/routes/timeline.tsx', 'utf8');

const targetStr = `<div className="mb-20 -mx-4 md:-mx-12 lg:-mx-20 flex justify-center">
          <img 
            src="/parcel-evolution.png" 
            alt="9개 필지의 시계열적 진화 다이어그램" 
            className="w-full h-auto mix-blend-multiply contrast-[1.1] opacity-90 scale-105 transform origin-center" 
          />
        </div>`;

const replaceStr = `<div className="mb-20 -mx-4 md:-mx-8 lg:-mx-12 flex justify-center bg-white border border-rule/50 rounded-2xl shadow-sm p-4 md:p-8">
          <img 
            src="/parcel-evolution.png" 
            alt="9개 필지의 시계열적 진화 다이어그램" 
            className="w-full h-auto contrast-[1.25] saturate-[1.2] drop-shadow-sm" 
          />
        </div>`;

code = code.replace(targetStr, replaceStr);

fs.writeFileSync('src/routes/timeline.tsx', code, 'utf8');
console.log('Successfully reverted blend mode and enhanced line visibility');
