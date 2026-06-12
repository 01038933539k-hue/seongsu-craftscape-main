const fs = require('fs');

// 1. Update index.tsx
let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');

const targetStr = `              가로 구조가 만나는 접경지역이며, 이 비정형이 성수의 제조업 공존 방식을 결정한다.
            </p>`;

const newContent = `              가로 구조가 만나는 접경지역이며, 이 비정형이 성수의 제조업 공존 방식을 결정한다.
            </p>
            <div className="bg-rule/30 p-6 rounded-xl border border-rule mt-8">
              <h3 className="font-serif text-xl text-ink mb-4">대상지 및 선정 이유</h3>
              <p className="mb-4">
                <strong className="text-primary">대상지 범위:</strong> 서울특별시 성동구 성수 2가 1동 성수이로 및 성수이로 이면 도로 블록 (면적 약 73,690 제곱미터)
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong className="text-primary">젠트리피케이션:</strong> 카페거리를 기점으로 상업 자본의 침투 방향 추적 가능</li>
                <li><strong className="text-primary">복합토지 이용:</strong> 공장, 주거지, 상업 시설의 혼재. 상업화와 기존 공업간의 충돌 지역이자 준공업 지역의 특징을 가장 잘 가지고 있는 핵심 구역</li>
                <li><strong className="text-primary">제조업 생태계:</strong> 낙후된 소규모 공장부터 대규모, 그리고 새로운 형태의 제조업 업체들까지 다층적인 양상이 얽혀 존재</li>
              </ul>
            </div>`;

if (indexCode.includes('73,690')) {
    console.log('Index already updated.');
} else {
    indexCode = indexCode.replace(targetStr, newContent);
    fs.writeFileSync('src/routes/index.tsx', indexCode, 'utf8');
    console.log('Added target site information to index.tsx');
}

// 2. Remove eraser logic from seongsu-3d-viewer.html
let htmlCode = fs.readFileSync('public/seongsu-3d-viewer.html', 'utf8');

const startStr = '// ---';
const eraserStartIdx = htmlCode.indexOf('isEraserMode');
if (eraserStartIdx !== -1) {
    const commentStart = htmlCode.lastIndexOf('//', eraserStartIdx);
    const endStr = '}, true);';
    const endIdx = htmlCode.indexOf(endStr, eraserStartIdx);
    
    if (commentStart !== -1 && endIdx !== -1) {
        const toRemove = htmlCode.substring(commentStart, endIdx + endStr.length);
        htmlCode = htmlCode.replace(toRemove, '');
        fs.writeFileSync('public/seongsu-3d-viewer.html', htmlCode, 'utf8');
        console.log('Removed eraser logic from seongsu-3d-viewer.html');
    } else {
        console.log('Could not find the bounds of the eraser logic.');
    }
} else {
    console.log('Eraser logic not found in seongsu-3d-viewer.html');
}
