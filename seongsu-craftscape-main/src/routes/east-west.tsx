import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { MousePointerClick } from "lucide-react";
import { PageHeader, PageNavigation } from "@/components/site/Shell";

export const Route = createFileRoute("/east-west")({
  head: () => ({
    meta: [
      { title: "02 동서 비교분석 · 성수동 아카이브" },
      { name: "description", content: "같은 성수동, 다른 도시 구조 — 동측 대형 필지와 서측 골목길의 비대칭." },
    ],
  }),
  component: EastWest,
});

const compare = [
  { key: "필지 규모", east: "대형 필지 · 합필 개발", west: "소규모 필지 · 분할 유지" },
  { key: "건축 유형", east: "지식산업센터 · 중대형 오피스", west: "저층 공장 · 다세대" },
  { key: "주된 기능", east: "업무 · 입주 제조업", west: "제조업 · 상업 공존" },
  { key: "가로 구조", east: "광폭 도로 · 차량 동선", west: "골목길 · 보행 친화" },
  { key: "변화 속도", east: "빠른 재개발", west: "점진적 리모델링" },
  { key: "엔트로피", east: "낮음 (업무 집중)", west: "높음 (다중 용도)" },
];

function EastWest() {
  return (
    <>
      <PageHeader index="02" eyebrow="Chapter 02 · East / West" title="같은 성수동, 다른 도시 구조" subtitle="성수이로를 가운데 두고 동측과 서측은 전혀 다른 도시 조직을 가지고 있다. 필지 크기 하나가 건물 형태, 업종, 보행 경험까지 결정한다." />

      <FadeIn as="section" className="container-prose pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
          <div className="bg-card p-8 md:p-12 flex flex-col h-full">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded bg-indigo text-primary-foreground">EAST</span>
                <span className="eyebrow">동측</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-indigo">대형 필지의 수직 도시</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">
                합필 개발로 만들어진 대형 블록. 지식산업센터가 제조와 업무를
                한 건물 안에 수직으로 쌓아 올렸다. 광폭 도로와 차량 중심 동선.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>· 대형 필지 (1,000m² 이상)</li>
                <li>· 지식산업센터 군집</li>
                <li>· 업무 중심 + 입주 제조</li>
                <li>· 빠른 재개발 사이클</li>
              </ul>
            </div>
            {/* 동측 사진 유지 */}
            <div className="mt-8 aspect-video bg-muted/50 rounded-xl border border-rule/30 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/graphs/east_street.jpg" alt="동측 가로경관" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-card p-8 md:p-12 flex flex-col h-full">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded bg-violet text-primary-foreground">WEST</span>
                <span className="eyebrow">서측</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-violet">골목길의 수평 도시</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">
                소규모 필지가 그대로 남아 있는 골목 구조. 저층 공장과 다세대,
                상업이 한 가로 안에서 만난다. 보행 친화적이고 점진적으로 변한다.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>· 소규모 필지 (200–500m²)</li>
                <li>· 저층 제조·다세대 혼재</li>
                <li>· 제조업과 상업 공존</li>
                <li>· 점진적 리모델링</li>
              </ul>
            </div>
            {/* 서측 사진 유지 */}
            <div className="mt-8 aspect-video bg-muted/50 rounded-xl border border-rule/30 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/graphs/west_street.jpg" alt="서측 가로경관" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-24">
        <div className="eyebrow mb-3">대조표</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">한 줄로 보는 차이</h2>
        <div className="border border-rule rounded-lg overflow-hidden bg-card">
          <div className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] divide-x divide-rule border-b border-rule bg-muted/50">
            <div className="px-4 py-3 eyebrow">항목</div>
            <div className="px-4 py-3 eyebrow text-indigo">동측</div>
            <div className="px-4 py-3 eyebrow text-violet">서측</div>
          </div>
          {compare.map((c) => (
            <div key={c.key} className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] divide-x divide-rule border-b border-rule last:border-0">
              <div className="px-4 py-4 text-sm font-mono text-ink-soft">{c.key}</div>
              <div className="px-4 py-4 text-sm">{c.east}</div>
              <div className="px-4 py-4 text-sm">{c.west}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-24">
        <div className="eyebrow mb-3">건축 연도별 시각화 범례</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">신축과 노후 건물의 극단적 대비</h2>
        
        <div className="w-full bg-white border border-rule/50 shadow-sm rounded-2xl overflow-hidden p-4 mb-8 flex justify-center">
          <img src="/east_west_contrast.jpg" alt="신축과 노후 건물 분포도" className="w-full max-w-4xl h-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm mb-12">
          <div className="border border-rule rounded-lg bg-card p-5 border-t-4" style={{ borderTopColor: "var(--color-recent)" }}>
            <div className="font-display text-base flex items-center gap-2" style={{ color: "var(--color-recent)" }}>
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "var(--color-recent)" }}></span>
              밝은 하늘색 (최신 신축 건물군)
            </div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              2020년대 이후 지어진 신축 건물들을 나타냅니다. 무신사와 같은 대형 업체의 단일 용도 건물이나 복합 용도로 활용되는 작은 필지의 신축 건물이 이에 해당한다. 주거 기능은 거의 없으며, 주로 카페, 사무실 등 상업화된 시설이 밀집해 있다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5 border-t-4" style={{ borderTopColor: "var(--color-historic)" }}>
            <div className="font-display text-base flex items-center gap-2" style={{ color: "var(--color-historic)" }}>
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "var(--color-historic)" }}></span>
              진한 파랑색 (전통 노후 건물군)
            </div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              1970년대 이전부터 자리를 지켜온 오래된 건물들을 나타낸다. 작은 필지의 건물들은 상층부에 주거 기능이 거의 100% 혼재되어 있으며, 넓은 부지의 단층 건물들은 인쇄, 금속 등 하나의 제조업 용도로 길게 유지되어 온 특징을 보인다.
            </p>
          </div>
        </div>

        <div className="eyebrow mb-3">동서 지역의 공간적 개발 격차</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">왜 동·서가 갈라졌나</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">EAST · 동쪽 지역 (대형 필지 및 지식산업센터 중심)</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              과거에는 넓은 부지의 공장과 소필지가 공존했으나, 2000년대 이후 뚝섬 개발 압력과 성수 IT산업단지 지정의 영향으로 여러 필지가 하나로 합쳐지는 합필 개발이 대대적으로 이루어졌다. 현재는 거대한 지식산업센터가 들어서거나 단일 대기업이 통째로 사용하는 대형 부지 중심으로 탈바꿈했다. 격자형 가로망 설계와 단일 토지 소유자 구조 덕분에 이 같은 대규모 개발이 수월했다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">WEST · 서쪽 지역 (소필지 유지 및 골목길 상업화)</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              1970년대부터 이어져 온 작은 필지 구조가 오늘날까지 그대로 유지되고 있다. 최근 새로 지어진 건물들도 기존의 작은 필지 틀을 깨지 않고 위로 층수만 높이는 방식으로 건축되었다. 이는 서쪽 특유의 좁은 골목망 구조가 필지를 합치는 개발(합필)을 어렵게 만들기 때문이다. 이에 따라 제조업보다는 골목길의 보행 친화성을 무기로 삼은 사무실, 미용실, 음식점, 카페 등의 상업시설이 주를 이루게 되었다.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-24">
        <div className="eyebrow mb-3">필지 유형 분류 (제안 분석 프레임)</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">A · B · C 세 가지 진화 경로</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            {
              title: "A 전통 고수형",
              desc: "2010년에도 수제화·인쇄 공장, 2026년 현재도 합병·분할 없이 그대로 공장으로 등록된 필지. 제조업이 생존할 수 있는 마지막 공간적 한계선.",
              imgSrc: "/path_a_leather.jpg",
              imgAlt: "가죽공방"
            },
            {
              title: "B 밀려난 합병형",
              desc: "합병되어 지식산업센터 등 큰 건물로 발전한 경우. 작은 건물들을 합병하여 올린 대형 건물을 다시 더 작은 평수로 쪼개어 섹션 오피스나 상가로 분양·임대함으로써 평당 임대료가 가파르게 상승한다.",
              imgSrc: "/path_b_jisan.jpg",
              imgAlt: "지식산업센터"
            },
            {
              title: "C 쪼개진 분할형",
              desc: "과거보다 더 작게 분할된 경우. 높은 임대료를 감당할 수 있는 자본력을 가진 F&B 프랜차이즈, 세련된 카페, 디자인 팝업스토어, IT 스타트업 등 트렌디한 업종이 집중되며, 이 과정에서 영세 제조업이 외곽으로 밀려납니다.",
              imgSrc: "/path_c_cafe.jpg",
              imgAlt: "성수동 카페"
            },
          ].map((item) => (
            <div key={item.title} className="border border-rule rounded-xl bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-violet/50 transition-all group flex flex-col">
              <div className="w-full h-48 bg-muted border-b border-rule flex items-center justify-center overflow-hidden">
                <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="font-display text-lg text-ink font-bold mb-3">{item.title}</div>
                <p className="text-ink-soft leading-relaxed break-keep flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 젠트리피케이션 긍정적 효과 섹션 추가 */}
        <div className="mt-12 border-t border-rule pt-10">
          <div className="eyebrow mb-3">B, C 유형의 결과적 파생</div>
          <h3 className="font-display text-2xl md:text-3xl mb-6">젠트리피케이션 발생 및 긍정적 효과</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-6 border border-rule">
              <div className="font-display text-lg text-ink mb-3">1. 산업 구조의 다변화와 활력</div>
              <p className="text-[14px] text-ink-soft leading-relaxed break-keep">
                잘게 쪼개진 공간에 서로 다른 분야의 수많은 소규모 업체들이 밀집하면서, 서로 아이디어를 공유하고 협업하는 '네트워크 효과'와 '지식 전파'가 일어나 지역 산업의 자생력이 강화된다.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-rule">
              <div className="font-display text-lg text-ink mb-3">2. 상권 활성화와 지역 경제적 가치 상승</div>
              <p className="text-[14px] text-ink-soft leading-relaxed break-keep">
                가치가 낮았던 부동산이 고도화되고 상권이 살아나면서 지역의 자산 가치가 상승한다. 이렇게 확보된 공공 재원은 과거 성수동의 정체성이었던 '성수 수제화 거리'의 환경 개선, 전통 가죽·인쇄 산업의 지원, 특화 사업 체험공간 구축에 집중 재투자될 수 있다.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink-soft max-w-3xl leading-relaxed">
          한 줄 요약 — 성수동의 토지 이동 이력은 자본의 유입 규모에 따라 공간이 합병·분할되며
          전통 제조업 생태계가 수직화되거나 외곽으로 밀려나는 <em>공간 잔존과 퇴출의 변천사</em>를 보여준다.
        </p>
      </FadeIn>

      {/* 첫 번째 그래프 섹션: 제조업 분포 */}
      <FadeIn as="section" className="container-prose pb-24">
        <div className="eyebrow mb-3">제조업 생태계 분포</div>
        <h2 className="font-display text-2xl md:text-3xl mb-8">식료품 중심의 다각화된 영세 제조</h2>
        <div>
          <div className="w-full bg-white border border-rule/50 shadow-sm rounded-2xl overflow-hidden p-4 flex justify-center mb-4">
            <img src="/graphs/tornado_chart.png" alt="동vs서: 업체별 제조업 분포" className="w-full max-w-4xl h-auto" />
          </div>
          <div className="bg-card border border-rule rounded-xl p-5 shadow-sm mx-auto max-w-4xl">
            <div className="font-display text-base text-ink font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo"></span>
              시사점
            </div>
            <p className="text-sm text-ink-soft leading-relaxed break-keep">
              대상지 내 제조업은 식료품 제조업이 압도적인 비중을 차지하며, 식료품을 제외한 나머지 업종(금속, 섬유, 음료, 기계 등)은 구역별로 1개씩만 존재하는 영세하고 다각화된 형태를 보인다.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 두 번째 그래프 섹션: 층별 업체 수 */}
      <FadeIn as="section" className="container-prose pb-24">
        <div className="eyebrow mb-3">수직적 밀도와 상업화</div>
        <h2 className="font-display text-2xl md:text-3xl mb-8">지식산업센터와 1층 공간의 집중화</h2>
        <div>
          <div className="w-full bg-white border border-rule/50 shadow-sm rounded-2xl overflow-hidden p-4 flex justify-center mb-4">
            <img src="/graphs/east_west_floor_bar.png" alt="동vs서: 층 별 업체 수" className="w-full max-w-4xl h-auto" />
          </div>
          <div className="bg-card border border-rule rounded-xl p-5 shadow-sm mx-auto max-w-4xl">
            <div className="font-display text-base text-ink font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet"></span>
              시사점
            </div>
            <p className="text-sm text-ink-soft leading-relaxed break-keep">
              성수동은 지식산업센터가 위치한 서쪽에, 또한 유동인구의 접근성과 가시성이 극대화되는 1층 공간에 핵심 업체 및 근린생활시설이 집중 분포하는 경향을 보인다.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 세 번째 섹션: 유령 공간 (Ghost Space) */}
      <FadeIn as="section" className="container-prose pb-32 pt-8">
        <div className="border-t border-rule/50 pt-16">
          <div className="eyebrow mb-3 text-ochre">Ghost Space</div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">행정망의 사각지대: 동서 유령 공간(Ghost Space)의 물리적 발현 격차</h2>
          
          <p className="text-sm text-ink-soft leading-relaxed mb-8 break-keep max-w-3xl">
            건축물대장 기록과 실제 현장의 쓰임새가 불일치하는 '유령 공간(Ghost Space)' 현상 역시<br className="hidden md:block" /> 동·서측의 개발 환경에 따라 완전히 다른 패턴을 보여준다.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            {/* 서측 실태 분석 */}
            <div className="bg-card border border-rule rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="border-b border-rule bg-muted/30 px-6 py-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-violet/10 text-violet flex items-center justify-center font-bold text-sm">W</span>
                <h3 className="font-display text-lg text-ink font-bold">서측 소규모 필지 골목의 실태</h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* 데이터 대조 */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="grid grid-cols-2 gap-4 text-center h-full">
                    <div className="bg-muted/50 p-5 rounded-lg border border-rule/50 flex flex-col justify-center items-center">
                      <p className="text-[11px] font-mono text-ink-soft uppercase tracking-wider mb-3">Paper Data</p>
                      <div className="font-bold text-ink text-sm">공장 / 창고 / 미분류</div>
                    </div>
                    <div className="bg-violet/5 p-5 rounded-lg border border-violet/20 flex flex-col justify-center items-center">
                      <p className="text-[11px] font-mono text-violet uppercase tracking-wider mb-3">Actual Usage</p>
                      <div className="font-bold text-violet-900 dark:text-violet-100 text-[13px] break-keep leading-relaxed flex flex-col gap-1.5 text-left w-full pl-2">
                        <span className="flex items-start gap-1.5"><span className="text-violet/50 mt-0.5">•</span> 단기 게릴라 팝업스토어</span>
                        <span className="flex items-start gap-1.5"><span className="text-violet/50 mt-0.5">•</span> 패션 쇼룸 및 가죽 공방</span>
                      </div>
                    </div>
                  </div>
                  {/* Arrow in middle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card border border-rule rounded-full flex items-center justify-center text-ink-soft shadow-sm z-10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
                {/* 근거 데이터 */}
                <div className="w-full lg:w-7/12 pl-0 lg:pl-8 lg:border-l border-rule">
                  <h4 className="text-sm font-bold text-ink mb-4 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ochre"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    현장 실측 및 근거 데이터
                  </h4>
                  <ul className="text-[13px] text-ink-soft space-y-4 leading-relaxed break-keep">
                    <li className="flex gap-2.5">
                      <span className="shrink-0 text-ochre/70 font-bold mt-0.5">·</span>
                      <div>
                        <strong className="text-ink block mb-1">팝업스토어 전용률 급증</strong>
                        연무장길 일대 '공장/창고' 용도 1층 공간의 약 68%가<br className="hidden xl:block" /> 2~3주 단위의 초단기 임대(팝업스토어)로 운영되고 있다.
                      </div>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="shrink-0 text-ochre/70 font-bold mt-0.5">·</span>
                      <div>
                        <strong className="text-ink block mb-1">불법 용도변경 묵인</strong>
                        상업용 시설로 정식 용도 변경 시 주차장 확보 등 규제가 까다로워,<br className="hidden xl:block" /> 대장상 용도를 방치한 채 임시 운영하는 편법이 만연하다.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 동측 실태 분석 */}
            <div className="bg-card border border-rule rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="border-b border-rule bg-muted/30 px-6 py-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo/10 text-indigo flex items-center justify-center font-bold text-sm">E</span>
                <h3 className="font-display text-lg text-ink font-bold">동측 지식산업센터 군의 실태</h3>
              </div>
              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* 데이터 대조 */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="grid grid-cols-2 gap-4 text-center h-full">
                    <div className="bg-muted/50 p-5 rounded-lg border border-rule/50 flex flex-col justify-center items-center">
                      <p className="text-[11px] font-mono text-ink-soft uppercase tracking-wider mb-3">Paper Data</p>
                      <div className="font-bold text-ink text-sm">지식기반산업 오피스</div>
                    </div>
                    <div className="bg-indigo/5 p-5 rounded-lg border border-indigo/20 flex flex-col justify-center items-center">
                      <p className="text-[11px] font-mono text-indigo uppercase tracking-wider mb-3">Actual Usage</p>
                      <div className="font-bold text-indigo-900 dark:text-indigo-100 text-[13px] break-keep leading-relaxed flex flex-col gap-1.5 text-left w-full pl-2">
                        <span className="flex items-start gap-1.5"><span className="text-indigo/50 mt-0.5">•</span> 초단기 임대 공유 창고</span>
                        <span className="flex items-start gap-1.5"><span className="text-indigo/50 mt-0.5">•</span> 라이브 커머스 스튜디오</span>
                      </div>
                    </div>
                  </div>
                  {/* Arrow in middle */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card border border-rule rounded-full flex items-center justify-center text-ink-soft shadow-sm z-10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
                {/* 근거 데이터 */}
                <div className="w-full lg:w-7/12 pl-0 lg:pl-8 lg:border-l border-rule">
                  <h4 className="text-sm font-bold text-ink mb-4 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ochre"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    현장 실측 및 근거 데이터
                  </h4>
                  <ul className="text-[13px] text-ink-soft space-y-4 leading-relaxed break-keep">
                    <li className="flex gap-2.5">
                      <span className="shrink-0 text-ochre/70 font-bold mt-0.5">·</span>
                      <div>
                        <strong className="text-ink block mb-1">산업집적법 우회</strong>
                        지정 업종만 입주 가능하나, 일부 저층 호실(약 12%)이 무허가<br className="hidden xl:block" /> 물류 대행 창고 및 도소매업 촬영 스튜디오로 전용되고 있다.
                      </div>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="shrink-0 text-ochre/70 font-bold mt-0.5">·</span>
                      <div>
                        <strong className="text-ink block mb-1">인프라 편취 (공간의 사유화)</strong>
                        화물 엘리베이터 등 공공이 제조 지원을 위해 설계한 인프라가<br className="hidden xl:block" /> 강남 벤처 자본의 유통·물류 보급 기지로 전락하는 현상이다.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[12px] text-ink-soft/50 font-mono tracking-tight">
              자료출처: 국토교통부 건축물대장 표제부 데이터(2026), 서울연구원 준공업지역 공간구조 학술 리포트 기반 재구성
            </p>
          </div>
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/timeline", label: "01 시대별 변화" }} next={{ to: "/entropy", label: "03 가로분석" }} />
    </>
  );
}

export default EastWest;
