const fs = require('fs');

let indexCode = fs.readFileSync('src/routes/index.tsx', 'utf8');

// Use a more robust regex that just appends the new div right before the end of the col-span-8 div in PROJECT INTRO.
// The text ends with "결정한다." or something similar.
const targetRegex = /(결정한다\.\s*<\/p>\s*)(<\/div>\s*<\/div>\s*<\/section>)/;

const newContent = `            <div className="bg-rule/30 p-6 rounded-xl border border-rule mt-8">
              <h3 className="font-serif text-xl text-ink mb-4">대상지 및 선정 이유</h3>
              <p className="mb-4">
                <strong className="text-primary">대상지 범위:</strong> 서울특별시 성동구 성수 2가 1동 성수이로 및 성수이로 이면 도로 블록 (면적 약 73,690 제곱미터)
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong className="text-primary">젠트리피케이션:</strong> 카페거리를 기점으로 상업 자본의 침투 방향 추적 가능</li>
                <li><strong className="text-primary">복합토지 이용:</strong> 공장, 주거지, 상업 시설의 혼재. 상업화와 기존 공업간의 충돌 지역이자 준공업 지역의 특징을 가장 잘 가지고 있는 핵심 구역</li>
                <li><strong className="text-primary">제조업 생태계:</strong> 낙후된 소규모 공장부터 대규모, 그리고 새로운 형태의 제조업 업체들까지 다층적인 양상이 얽혀 존재</li>
              </ul>
            </div>
          `;

if (indexCode.match(targetRegex)) {
    indexCode = indexCode.replace(targetRegex, '$1' + newContent + '$2');
    fs.writeFileSync('src/routes/index.tsx', indexCode, 'utf8');
    console.log('Successfully added target site information to index.tsx');
} else {
    console.log('Regex failed to match. Could not inject target site info.');
}
