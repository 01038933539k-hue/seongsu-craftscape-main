const fs = require('fs');

let code = fs.readFileSync('src/routes/entropy.tsx', 'utf8');

const targetStr = `      </section>
    </>
  );
}`;

const newSection = `      </section>

      <section className="container-prose py-16 md:py-24 border-t border-rule/50">
        <div className="eyebrow mb-3 text-primary">밀도 분석</div>
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-ink">가로 밀집도와 제조업 분포</h2>
        
        <p className="text-xl text-ink font-medium mb-12">
          대상지 중 가로에 밀집한 건물을 위주로 한정하여 업체를 조사하였다.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg mb-4 text-ink flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span> 파란색 그림 - 전체 업체의 밀도
            </h3>
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted/20 border border-rule/30">
              <img src="/density-all.png" alt="전체 업체의 밀도" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg mb-4 text-ink flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> 빨간색 그림 - 제조업 밀도
            </h3>
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted/20 border border-rule/30">
              <img src="/density-manufacturing.png" alt="제조업 밀도" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-rule/50 rounded-2xl p-8 shadow-sm">
          <div className="eyebrow mb-6 text-primary text-sm font-bold tracking-widest">[결론 요약]</div>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">1)</span>
              <p className="text-ink leading-relaxed text-lg">
                <strong className="text-primary font-bold">지식산업센터에 업체가 밀집</strong>되어 있다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">2)</span>
              <p className="text-ink leading-relaxed text-lg">
                골목 지역보다는 <strong className="text-primary font-bold">대로변에 위치한 건물</strong>의 업체 밀도가 더 높다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">3)</span>
              <p className="text-ink leading-relaxed text-lg">
                제조업 밀집 지역의 경우, 특정 대형 건축물이나 거점 건물을 중심으로 <strong className="text-primary font-bold">고밀도 군집을 형성</strong>하고 있다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">4)</span>
              <p className="text-ink leading-relaxed text-lg">
                제조업 밀집 지역은 기존 전통 제조업의 입지와 다르게 <strong className="text-primary font-bold">지식산업센터에도 제조업이 위치</strong>한다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}`;

if (code.includes('파란색 그림 - 전체 업체의 밀도')) {
    console.log('Already injected.');
} else {
    // try direct replacement
    if (code.includes(targetStr)) {
        code = code.replace(targetStr, newSection);
        fs.writeFileSync('src/routes/entropy.tsx', code, 'utf8');
        console.log('Successfully injected the density analysis into entropy.tsx');
    } else {
        // use regex if newline formats differ
        const regex = /<\/section>\s*<\/>\s*\);\s*}/;
        if (regex.test(code)) {
            code = code.replace(regex, newSection.replace('      </section>\n', ''));
            fs.writeFileSync('src/routes/entropy.tsx', code, 'utf8');
            console.log('Successfully injected the density analysis using regex');
        } else {
            console.log('Failed to find injection point.');
        }
    }
}
