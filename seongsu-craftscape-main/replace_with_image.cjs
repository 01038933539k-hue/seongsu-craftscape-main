const fs = require('fs');

let code = fs.readFileSync('src/routes/floors.tsx', 'utf8');

// The block to remove:
const targetBlock = `{/* 3D VIEWER IFRAME */}
        <div className="bg-white border-2 border-rule rounded-2xl p-2 mb-8 overflow-hidden relative shadow-md" style={{ height: "600px" }}>
          <iframe src="/floor-3d-viewer.html" className="w-full h-full border-none" title="층별 용도 360 Viewer" />
          <div className="absolute top-6 left-6 pointer-events-none bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm border border-rule/50">
            <h3 className="font-serif text-2xl text-ink">성수동 2가 309-126</h3>
            <p className="text-sm text-ink-soft mt-1">360° Interactive Viewer (마우스로 드래그하여 회전)</p>
          </div>
        </div>`;

// The new block to insert (the image):
const replacementBlock = `{/* ISOMETRIC ILLUSTRATION */}
        <div className="bg-white border-2 border-rule rounded-2xl shadow-sm mb-12 overflow-hidden flex flex-col relative group">
          <img 
            src="/isometric-building.jpg" 
            alt="성수동 2가 309-126 아이소메트릭 일러스트레이션" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
          <div className="absolute bottom-6 right-6 pointer-events-none bg-white/90 px-4 py-3 rounded-xl backdrop-blur-md border border-rule/50 shadow-lg flex flex-col items-end">
            <h3 className="font-serif text-2xl text-ink">성수동 2가 309-126</h3>
            <p className="text-sm text-ink-soft mt-1 font-mono tracking-wide">ISOMETRIC CROSS-SECTION</p>
          </div>
        </div>`;

code = code.replace(targetBlock, replacementBlock);

fs.writeFileSync('src/routes/floors.tsx', code, 'utf8');
console.log('Replaced iframe with the isometric illustration');
