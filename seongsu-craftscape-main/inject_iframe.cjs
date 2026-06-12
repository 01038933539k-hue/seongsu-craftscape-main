const fs = require('fs');

let code = fs.readFileSync('src/routes/floors.tsx', 'utf8');

const targetStr = `<div className="bg-card border border-rule rounded-lg p-6 overflow-hidden flex flex-col items-center mb-8">
          <img 
            src={floorsSectionImg}`;

const newIframeStr = `{/* 3D VIEWER IFRAME */}
        <div className="bg-white border-2 border-rule rounded-2xl p-2 mb-8 overflow-hidden relative shadow-md" style={{ height: "600px" }}>
          <iframe src="/floor-3d-viewer.html" className="w-full h-full border-none" title="층별 용도 360 Viewer" />
          <div className="absolute top-6 left-6 pointer-events-none bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm border border-rule/50">
            <h3 className="font-serif text-2xl text-ink">성수동 2가 309-126</h3>
            <p className="text-sm text-ink-soft mt-1">360° Interactive Viewer (마우스로 드래그하여 회전)</p>
          </div>
        </div>

        <div className="bg-card border border-rule rounded-lg p-6 overflow-hidden flex flex-col items-center mb-8">
          <img 
            src={floorsSectionImg}`;

if (code.includes('floor-3d-viewer.html')) {
  console.log('Already embedded.');
} else {
  code = code.replace(targetStr, newIframeStr);
  fs.writeFileSync('src/routes/floors.tsx', code, 'utf8');
  console.log('Successfully injected 3D viewer iframe.');
}
