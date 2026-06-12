const fs = require('fs');

let code = fs.readFileSync('src/routes/index.tsx', 'utf8');

// The block we want to remove from the lower section:
const oldBlockRegex = /<div className="bg-rule\/30 p-6 rounded-xl border border-rule mt-8">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

// The text to insert into the Hero section
const heroInsertion = `
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 mt-10 mb-8 backdrop-blur-md max-w-3xl">
              <h3 className="font-serif text-xl text-ochre mb-4">대상지 및 선정 이유</h3>
              <p className="mb-4 text-white/90">
                <strong className="text-white">대상지 범위:</strong> 서울특별시 성동구 성수 2가 1동 성수이로 및 성수이로 이면 도로 블록 (면적 약 73,690 제곱미터)
              </p>
              <ul className="space-y-3 list-disc list-inside text-white/80">
                <li><strong className="text-white">젠트리피케이션:</strong> 카페거리를 기점으로 상업 자본의 침투 방향 추적 가능</li>
                <li><strong className="text-white">복합토지 이용:</strong> 공장, 주거지, 상업 시설의 혼재. 상업화와 기존 공업간의 충돌 지역이자 준공업 지역의 특징을 가장 잘 가지고 있는 핵심 구역</li>
                <li><strong className="text-white">제조업 생태계:</strong> 낙후된 소규모 공장부터 대규모, 그리고 새로운 형태의 제조업 업체들까지 다층적인 양상이 얽혀 존재</li>
              </ul>
            </div>
            `;

// Replace the old block with just the closing tags
if (code.match(oldBlockRegex)) {
    code = code.replace(oldBlockRegex, '          </div>\n        </div>\n      </section>');
}

// Insert into the hero section just before the View Archive Link
const targetLink = `<Link
              to="/timeline"`;

if (code.includes(targetLink)) {
    code = code.replace(targetLink, heroInsertion + targetLink);
    fs.writeFileSync('src/routes/index.tsx', code, 'utf8');
    console.log('Successfully moved the Target Site box to the Hero section!');
} else {
    console.log('Failed to find target link to insert the box.');
}
