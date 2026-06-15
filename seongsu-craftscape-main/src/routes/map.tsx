import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader, PageNavigation } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "06 지식산업센터 · 성수동 아카이브" },
      { name: "description", content: "성수동 지식산업센터의 공급 추이와 한라 시그마밸리 등 복합 산업 플랫폼 현황 분석." },
    ],
  }),
  component: MapPage,
});

// 연도별 지식산업센터 공급 추이 (PPT 실측 데이터 기반 모의 자료)
const supplyData = [
  { year: "2015", count: 2 },
  { year: "2016", count: 4 },
  { year: "2017", count: 5 },
  { year: "2018", count: 8 },
  { year: "2019", count: 12 },
  { year: "2020", count: 18 },
  { year: "2021", count: 25 },
  { year: "2022", count: 32 },
  { year: "2023", count: 28 },
  { year: "2024", count: 15 },
];

function MapPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Chapter 06 · Knowledge Industry Center"
        title="복합 산업 플랫폼, 지식산업센터"
        subtitle="성수동의 지식산업센터는 단순한 공장형 아파트가 아니다. 제조, 업무, 상업 기능이 유기적으로 결합된 창의·제조 융합 생태계의 핵심으로 진화하고 있다."
      />

      <FadeIn as="section" className="container-prose py-16">
        <div className="eyebrow mb-3 text-primary">공급 추이 분석</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">성수동 지식산업센터 연도별 공급 추이</h2>
        
        <div className="h-80 bg-card border border-rule rounded-lg p-4 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={supplyData}>
              <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" stroke="var(--color-ink-soft)" fontSize={12} />
              <YAxis stroke="var(--color-ink-soft)" fontSize={12} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
              <Bar dataKey="count" fill="var(--color-violet)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <p className="text-ink-soft leading-relaxed max-w-3xl">
            준공업지역 규제 완화 이후 지식산업센터의 <strong>공급은 폭발적으로 늘어났으나, 그에 비례하여 공실률이 함께 치솟는 기형적 구조</strong>가 나타나고 있다. 투기적 수요로 인해 분양가는 급등했지만 실제 입주할 기업들의 수요를 넘어서면서, 많은 호실이 비어있는 채로 방치되는 부작용을 낳았다.
          </p>
          <div className="text-[10px] text-ink-soft opacity-70 text-right whitespace-nowrap bg-muted/50 p-2 rounded">
            (자료 출처: 한국산업단지공단, 지식산업센터 현황)
          </div>
        </div>

        <div className="eyebrow mb-3 text-primary mt-16">핵심 건물 분석</div>
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink">서울숲 한라 시그마밸리</h2>
        
        <div className="space-y-6 text-ink-soft leading-relaxed text-lg mb-8">
          <p>
            지식산업 센터(<strong className="text-primary font-medium">서울숲 한라 시그마밸리</strong>)는 가장 오른쪽·가장 위쪽·가장 큰 원으로 나타나서, 주변 건물보다 업종도 다양하고 규모도 크고 층수도 높은 핵심 건물이라는 것을 알 수 있다.
          </p>
          <p>
            즉 지식산업 센터(서울숲 한라 시그마밸리)는 단순히 제조업만 모인 건물이 아니라, 제조업·업무/서비스·소비업종이 한 건물 안에 같이 들어간 <strong className="text-ink">복합형 지식산업센터</strong>로 해석할 수 있다.
          </p>
        </div>

        <div className="w-full bg-white border border-rule/50 shadow-sm rounded-2xl overflow-hidden mb-12 flex justify-center p-6">
          <img src="/graphs/4d_bubble_map.png" alt="성수 지식산업센터 4차원 분석" className="w-full max-w-3xl h-auto" />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <img src="/graphs/seongsu_mfg_bar.png" alt="성수 제조업 분류" className="w-full h-auto" />
          </div>
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
            <img src="/graphs/gasan_mfg_bar.png" alt="가산디지털단지 제조업 분류" className="w-full h-auto" />
          </div>
        </div>

        <div className="mt-8 bg-white border border-rule/50 rounded-2xl p-8 shadow-sm">
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
      </FadeIn>

      <FadeIn as="section" className="container-prose py-24 border-t border-rule/50">
        <div className="eyebrow mb-3 text-primary">06-2. 지산 내부의 생태계 '물갈이' 메커니즘</div>
        <h2 className="font-display text-2xl md:text-3xl mb-8 leading-tight">
          공간 고도화 뒤에 숨겨진 산업 대체(Industrial Displacement)
        </h2>

        <p className="text-lg text-ink-soft leading-relaxed mb-12">
          서울숲 한라 시그마밸리를 비롯한 성수동의 대형 지식산업센터(지산) 내부를 채운 제조업체들은 원래 성수동에 있던 '전통 수제화/인쇄' 업체가 아닙니다. 공간의 크기만 고도화된 것이 아니라, 외부 자본과 ICT 인프라가 유입되면서 <strong className="text-ink">내부 산업 생태계가 완전히 세대교체(Industrial Displacement)</strong>되었습니다.
        </p>

        {/* 시각 자료 1: 동서 축 단면 스케치 다이어그램 (Pure SVG Line-Art) */}
        <div className="mb-16">
          <h3 className="font-display text-lg text-ink font-bold mb-4 flex items-center gap-2">
            <span className="bg-ink text-white px-2 py-1 rounded text-xs">다이어그램</span>
            성수이로 기준 동서 공간 구조 및 산업 비대칭성
          </h3>
          <div className="border border-rule p-8 bg-card rounded-xl shadow-sm overflow-hidden flex justify-center w-full">
            {/* 뷰박스를 좌우로 살짝 넓혀서 글씨 잘림 방지 */}
            <svg viewBox="-40 0 880 280" className="w-full max-w-4xl h-auto block font-sans">
              {/* 중앙 분리선 (성수이로 축) */}
              <line x1="400" y1="20" x2="400" y2="220" stroke="var(--color-rule)" strokeWidth="2" strokeDasharray="4,4" />
              <text x="400" y="15" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-ink-soft)">성수이로 축</text>

              {/* WEST SIDE (서측 소필지) */}
              <g transform="translate(0,0)">
                <text x="40" y="40" fontSize="15" fontWeight="700" fill="var(--color-ink)">서측: 소필지 생태계 (보존/밀려남)</text>
                {/* 노후 저층 공방들 매스 스케치 */}
                <rect x="40" y="140" width="60" height="60" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" rx="2" />
                <rect x="110" y="150" width="50" height="50" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" rx="2" />
                <rect x="170" y="130" width="70" height="70" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" rx="2" />
                <rect x="250" y="160" width="50" height="40" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.5" rx="2" />
                
                {/* 흐름 지표 레이블 */}
                <text x="40" y="70" fontSize="13" fill="var(--color-ink-soft)">■ 주요 업종: 수제화 공방, 인쇄소, 정밀기계</text>
                <text x="40" y="90" fontSize="13" fill="var(--color-ink-soft)">■ 필지 특성: 세분화된 소필지, 저층 밀집형 골목</text>
                
                {/* 밀려남 표시 화살표 */}
                <path d="M 150 210 Q 90 230 30 230" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="2,2" />
                <polygon points="30,230 36,226 36,234" fill="#dc2626" />
                {/* 글씨 안 짤리도록 위치 조정 (x=140으로 중앙 이동 및 y값 살짝 내림) */}
                <text x="140" y="250" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="500">임대료 상승으로 외곽 이탈 (산업 젠트리피케이션)</text>
              </g>

              {/* EAST SIDE (동측 대필지 지산) */}
              <g transform="translate(440,0)">
                <text x="0" y="40" fontSize="15" fontWeight="700" fill="var(--color-ink)">동측: 대필지 합병 (지식산업센터 고도화)</text>
                {/* 대형 지산 빌딩 매스 스케치 (한라 시그마밸리 등 형상화) */}
                <rect x="40" y="70" width="240" height="130" fill="var(--color-muted)" stroke="var(--color-ink)" strokeWidth="1.5" rx="4" />
                {/* 내부 층 분할 라인 */}
                <line x1="40" y1="100" x2="280" y2="100" stroke="var(--color-rule)" strokeWidth="1" />
                <line x1="40" y1="130" x2="280" y2="130" stroke="var(--color-rule)" strokeWidth="1" />
                <line x1="40" y1="160" x2="280" y2="160" stroke="var(--color-rule)" strokeWidth="1" />
                
                {/* 내부 앵커 텍스트 */}
                <text x="160" y="90" textAnchor="middle" fontSize="12" fill="var(--color-ink)" fontWeight="600">IT / SW 개발 벤처 밸리</text>
                {/* 텍스트 내용 수정: 패션/식품 기획 추가하여 앞의 데이터와 모순 해결 */}
                <text x="160" y="120" textAnchor="middle" fontSize="12" fill="var(--color-ink)" fontWeight="600">도심형 융합 제조 (R&D / 패션·식품 기획)</text>
                <text x="160" y="150" textAnchor="middle" fontSize="12" fill="var(--color-ink)" fontWeight="600">디자인 에이전시 · 엔터테인먼트</text>
                <text x="160" y="185" textAnchor="middle" fontSize="12" fill="var(--color-ink-soft)">지하층/저층: 지원시설 및 물류</text>

                {/* 유입 표시 화살표 */}
                <path d="M 340 135 Q 310 135 285 135" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="285,135 291,131 291,139" fill="#2563eb" />
                {/* 글씨 안 짤리도록 화살표 위로 중앙 정렬 배치 */}
                <text x="312" y="125" textAnchor="middle" fontSize="12" fill="#2563eb" fontWeight="600">강남 ICT 자본 유입</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-rule rounded-xl p-6 shadow-sm hover:shadow-md hover:border-indigo/50 transition-all group">
            <div className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center text-indigo font-bold mb-4 group-hover:scale-110 transition-transform">01</div>
            <h3 className="font-display text-lg text-ink mb-3">공간적 분리와 현장 생산의 배제</h3>
            <p className="text-sm text-ink-soft leading-relaxed break-keep">
              높은 분양가와 임대료는 영세 공방이 감당할 수 없는 수준입니다. 소음과 진동을 수반하는 물리적 가공 공정은 오피스형 환경과 상충되므로, '현장 노동 중심'의 기존 영세 수제화·인쇄 공장들은 지산으로 흡수되지 못하고 외곽으로 밀려났습니다.
            </p>
          </div>
          <div className="bg-card border border-rule rounded-xl p-6 shadow-sm hover:shadow-md hover:border-violet/50 transition-all group">
            <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center text-violet font-bold mb-4 group-hover:scale-110 transition-transform">02</div>
            <h3 className="font-display text-lg text-ink mb-3">본질이 바뀐 '무늬만 제조업'</h3>
            <p className="text-sm text-ink-soft leading-relaxed break-keep">
              지산 내부에 여전히 의류·인쇄·식품 코드가 존재하지만 과거와 다릅니다. 하드웨어 R&D, 패션 브랜드 본사, 푸드테크 등 기획과 디자인, 시제품 제작(Prototyping)만 수행하는 고부가가치 '도심형 지식 융합 제조'로 본질이 완전히 교체되었습니다.
            </p>
          </div>
          <div className="bg-card border border-rule rounded-xl p-6 shadow-sm hover:shadow-md hover:border-ochre/50 transition-all group">
            <div className="w-10 h-10 rounded-full bg-ochre/10 flex items-center justify-center text-ochre font-bold mb-4 group-hover:scale-110 transition-transform">03</div>
            <h3 className="font-display text-lg text-ink mb-3">강남발 ICT 밸류체인의 흡수</h3>
            <p className="text-sm text-ink-soft leading-relaxed break-keep">
              테헤란로의 살인적인 임대료를 피해 영동대교만 건너면 되는 성수동으로 넘어온 IT 벤처, 앱 개발사, 디자인 에이전시, 대형 엔터테인먼트 기업들이 대거 유입되었습니다. 서울시의 '성수 IT·문화콘텐츠 산업개발진흥지구' 정책에 따른 용적률 인센티브가 이를 가속화했습니다.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-display text-xl text-ink mb-6 text-center">성수동 준공업지역의 공간적·산업적 흐름 전환</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] bg-card rounded-xl overflow-hidden shadow-sm border border-rule">
              <thead>
                <tr className="border-b border-rule bg-muted/50">
                  <th className="py-4 px-6 font-display text-ink w-1/5">구분</th>
                  <th className="py-4 px-6 font-display text-indigo/80 w-2/5">과거의 성수동 소필지 골목</th>
                  <th className="py-4 px-6 font-display text-violet/80 w-2/5">현재의 대형 지식산업센터 (한라 시그마밸리 등)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/50">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 font-bold text-ink-soft text-sm">주요 업종</td>
                  <td className="py-4 px-6 text-sm text-ink/90">수제화, 인쇄, 기계금속, 자동차 정비</td>
                  <td className="py-4 px-6 text-sm text-ink/90 font-semibold">IT/SW 개발, 첨단 하드웨어 R&D, 문화콘텐츠, 디자인</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 font-bold text-ink-soft text-sm">작업 형태</td>
                  <td className="py-4 px-6 text-sm text-ink/90">노동집약적 1차 가공 및 현장 제조</td>
                  <td className="py-4 px-6 text-sm text-ink/90">지식기반 설계, 시제품 제작(Prototyping), 융합 제조</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 font-bold text-ink-soft text-sm">입주 동기</td>
                  <td className="py-4 px-6 text-sm text-ink/90">저렴한 준공업지 임대료, 영세 가내수공업 밀집</td>
                  <td className="py-4 px-6 text-sm text-ink/90">강남 접근성, 쾌적한 오피스 환경, 세제 혜택 및 인센티브</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 font-bold text-ink-soft text-sm">공간 성격</td>
                  <td className="py-4 px-6 text-sm text-ink/90">소음과 진동, 냄새가 허용되는 골목 마당</td>
                  <td className="py-4 px-6 text-sm text-ink/90">프라임급 오피스에 준하는 내밀하고 지능적인 빌딩 내부</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rule/20 to-transparent border-l-4 border-primary p-6 rounded-r-2xl mb-16 shadow-sm">
          <p className="text-ink text-base leading-relaxed break-keep font-medium">
            결국 성수동 동측의 대형 지산 필지들은 전통 제조업을 보호하거나 흡수하는 그릇이 아니라, 성수동의 토지 이용 고도화를 이끈 <strong className="text-primary">'산업 교체(Industrial Displacement)'</strong>의 선봉장 역할을 하고 있습니다. 서측의 소필지 생태계와 대조를 이루는 가장 결정적인 공간 구조적 비대칭성입니다.
          </p>
        </div>

        <div className="border-t border-rule/50 pt-8">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-soft mb-4">References</h4>
          <ol className="list-decimal list-inside text-xs text-ink-soft/70 space-y-2.5 font-light">
            <li>대한지리학회지 (2020). "혼재된 도시: 젠트리피케이션과 안티젠트리피케이션 정책의 공존 - 서울시 성동구 성수동의 사례로."</li>
            <li>문화콘텐츠연구 (2016). "성수동 지역의 젠트리피케이션 과정 및 특성 연구."</li>
            <li>서울연구원 / 서울특별시. "성수동 일대 젠트리피케이션 분석 및 모니터링 연구 보고서."</li>
            <li>서울특별시 성동구청. "성수 IT·문화콘텐츠 산업·유통개발진흥지구 지구단위계획안."</li>
            <li>통계청 전국사업체조사 및 국토교통부 건축물대장 융합 데이터 (성수동 지식산업센터 입주 업종 코드 분석 자료).</li>
          </ol>
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/industries", label: "05 업종분석" }} next={{ to: "/implications", label: "06 최종결론" }} />
    </>

  );
}

export default MapPage;
