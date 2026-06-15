const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\박준경\\Downloads\\seongsu-craftscape-main\\seongsu-craftscape-main\\src\\routes';

const updates = [
  {
    file: 'index.tsx',
    nav: '<PageNavigation next={{ to: "/timeline", label: "01 시대별 변화" }} />',
    imports: `import { PageNavigation } from "@/components/site/Shell";`,
  },
  {
    file: 'timeline.tsx',
    nav: '<PageNavigation prev={{ to: "/", label: "소개" }} next={{ to: "/east-west", label: "02 동서비교" }} />',
  },
  {
    file: 'east-west.tsx',
    nav: '<PageNavigation prev={{ to: "/timeline", label: "01 시대별 변화" }} next={{ to: "/entropy", label: "03 가로분석" }} />',
    addTooltip: true
  },
  {
    file: 'entropy.tsx',
    nav: '<PageNavigation prev={{ to: "/east-west", label: "02 동서비교" }} next={{ to: "/floors", label: "04 층/건물 분석" }} />',
    addTooltip: true
  },
  {
    file: 'floors.tsx',
    nav: '<PageNavigation prev={{ to: "/entropy", label: "03 가로분석" }} next={{ to: "/industries", label: "05 업종분석" }} />',
  },
  {
    file: 'industries.tsx',
    nav: '<PageNavigation prev={{ to: "/floors", label: "04 층/건물 분석" }} next={{ to: "/map", label: "심화: 지식산업센터" }} />',
    addTooltip: true
  },
  {
    file: 'map.tsx',
    nav: '<PageNavigation prev={{ to: "/industries", label: "05 업종분석" }} next={{ to: "/implications", label: "06 최종결론" }} />',
  }
];

const tooltipHtml = `              <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none z-10 shadow-lg animate-pulse opacity-100 group-hover:opacity-0 transition-opacity">
                <MousePointerClick size={14} /> 지도를 마우스로 드래그하여 탐색해보세요
              </div>`;

updates.forEach(update => {
  const filePath = path.join(srcDir, update.file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already applied
  if (content.includes('<PageNavigation')) return;

  // Add PageNavigation import
  if (update.imports) {
    content = content.replace(/(import .*?\n)/, `$1${update.imports}\n`);
  } else if (content.includes('PageHeader')) {
    content = content.replace('PageHeader } from "@/components/site/Shell"', 'PageHeader, PageNavigation } from "@/components/site/Shell"');
    content = content.replace('PageHeader} from "@/components/site/Shell"', 'PageHeader, PageNavigation } from "@/components/site/Shell"');
  }

  // Add MousePointerClick import if tooltip is needed
  if (update.addTooltip && !content.includes('MousePointerClick')) {
    if (content.includes('lucide-react')) {
      content = content.replace(/import {([^}]+)} from "lucide-react"/, (match, p1) => {
        return `import {${p1}, MousePointerClick } from "lucide-react"`;
      });
    } else {
      content = content.replace(/(import .*?\n)/, `$1import { MousePointerClick } from "lucide-react";\n`);
    }
  }

  // Append PageNavigation before the last </main> or </>
  if (update.file === 'index.tsx') {
    content = content.replace('    </main>', `      ${update.nav}\n    </main>`);
  } else {
    content = content.replace('    </>', `      ${update.nav}\n    </>`);
  }

  // Inject tooltip above iframes
  if (update.addTooltip) {
    content = content.replace(/<iframe\s+src="\/seongsu[^>]+>/g, (match) => {
      return tooltipHtml + '\n              ' + match;
    });
    // Add "group" class to iframe wrappers
    content = content.replace(/className="relative w-full h-\[([^\]]+)\] min-h-\[([^\]]+)\] rounded-xl overflow-hidden border border-rule\/50 bg-card shadow-sm"/g, 
      'className="relative w-full h-[$1] min-h-[$2] rounded-xl overflow-hidden border border-rule/50 bg-card shadow-sm group"');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + update.file);
});
