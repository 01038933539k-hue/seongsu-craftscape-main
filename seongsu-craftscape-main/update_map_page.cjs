const fs = require('fs');

let mapCode = fs.readFileSync('src/routes/map.tsx', 'utf8');

const injection = `
      <section className="container-prose py-16">
        <div className="eyebrow mb-3 text-primary">핵심 건물 분석</div>
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink">서울숲 한라 시그마밸리</h2>
        
        <div className="space-y-6 text-ink-soft leading-relaxed text-lg">
          <p>
            지식산업 센터(<strong className="text-primary font-medium">서울숲 한라 시그마밸리</strong>)는 가장 오른쪽·가장 위쪽·가장 큰 원으로 나타나서, 주변 건물보다 업종도 다양하고 규모도 크고 층수도 높은 핵심 건물이라는 것을 알 수 있다.
          </p>
          <p>
            즉 지식산업 센터(서울숲 한라 시그마밸리)는 단순히 제조업만 모인 건물이 아니라, 제조업·업무/서비스·소비업종이 한 건물 안에 같이 들어간 <strong className="text-ink">복합형 지식산업센터</strong>로 해석할 수 있다.
          </p>
        </div>

        <div className="mt-12 bg-white border border-rule/50 rounded-2xl p-8 shadow-sm">
          <h3 className="font-display text-xl text-ink mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ochre inline-block"></span>
            주요 시사점
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">01</span>
              <p className="text-ink-soft leading-relaxed">
                지식산업 센터(서울숲 한라 시그마밸리)는 단순 제조업 중심 지식산업센터가 아니라 <strong className="text-ink">제조·업무·소비 기능이 결합된 복합 산업 플랫폼</strong>으로 기능하고 있음을 보여준다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">02</span>
              <p className="text-ink-soft leading-relaxed">
                가산디지털단지는 전자·IT·통신(815개)과 전기·제어장비(565개)가 압도적으로 많아 특정 첨단산업에 특화된 산업구조를 보이는 반면, 지식산업 센터(서울숲 한라 시그마밸리)는 전자·IT뿐 아니라 <strong className="text-ink">의류·패션, 인쇄·출판, 식품제조 등이 함께 분포</strong>하여 제조업 구성이 훨씬 다양하게 나타난다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">03</span>
              <p className="text-ink-soft leading-relaxed">
                따라서 지식산업 센터(서울숲 한라 시그마밸리)의 경쟁력은 특정 산업의 규모가 아니라 <strong className="text-ink">높은 업종 다양성과 복합성</strong>에 있으며, 이는 성수 지역 특유의 창의·제조 융합 산업구조를 뒷받침하는 핵심 특징으로 해석할 수 있다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
`;

if (mapCode.includes('서울숲 한라 시그마밸리')) {
    console.log('Already updated map.tsx');
} else {
    mapCode = mapCode.replace('    </>', injection);
    fs.writeFileSync('src/routes/map.tsx', mapCode, 'utf8');
    console.log('Successfully injected Sigma Valley analysis into map.tsx');
}
