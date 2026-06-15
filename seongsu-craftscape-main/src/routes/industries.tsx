import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { MousePointerClick } from "lucide-react";
import { PageHeader, PageNavigation } from "@/components/site/Shell";
import { industryMeta } from "@/data/manufacturers";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "05 업종분석 · 성수동 아카이브" },
      { name: "description", content: "성수동의 인쇄업, 가죽·신발, 식료품, 의복·섬유 제조업 현황 및 상권 변화 분석." },
    ],
  }),
  component: Industries,
});

const cards = [
  {
    key: "print" as const,
    title: "인쇄업",
    count: "42개 업체",
    feature: "성수이로 인쇄벨트를 따라 집적. 주야간 가동률이 높고, 후가공·제본 업체와 강한 연계망.",
    metric: "전력 사용량 · 동 내 최상위",
    detail: ["1980년대 준공 건물 다수 활용", "야간 가동 비율 38%", "후가공 외주 거리 평균 220m"],
  },
  {
    key: "leather" as const,
    title: "가죽·신발 제조업",
    count: "57개 업체",
    feature: "성수동을 대표하는 산업. 수제화 장인 · OEM 봉제 · 가방 공방이 한 가로에 공존.",
    metric: "성수동 대표 산업",
    detail: ["골목 이면도로 중심 입지", "소규모 작업장 형태 다수", "디자이너 브랜드 협업 증가"],
  },
  {
    key: "food" as const,
    title: "식료품 제조업",
    count: "29개 업체",
    feature: "연무장길 배후지역에 밀키트 · 베이커리 · 디저트 제조가 새롭게 집적.",
    metric: "밀키트 신규 진입 중심",
    detail: ["2018년 이후 신규 진입 60%", "F&B 산업 발달로 테스트베드 역할", "F&B 상업과 수직 결합"],
  },
  {
    key: "electronics" as const,
    title: "전자·부품 제조업",
    count: "18개 업체",
    feature: "지식산업센터 입주가 다수. PCB 소형 조립과 시제품 제작이 주력.",
    metric: "지식산업센터 입주 특성",
    detail: ["스타트업 시제품 제작 협업", "공용 물류 활용", "동측 대형 필지에 집중"],
  },
];

function HybridLoopDiagram() {
  return (
    <div className="relative bg-card border border-rule rounded-2xl p-8 md:p-12 shadow-sm flex flex-col items-center overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12 relative z-10">
        <div className="bg-muted/50 border border-rule rounded-xl p-5 text-center">
          <div className="font-mono text-3xl font-bold text-violet mb-1">11.4<span className="text-lg">%</span></div>
          <div className="text-[11px] font-bold text-ink mb-1">KSIC '기타' 분류 급증</div>
          <p className="text-[10px] text-ink-soft">표준산업분류 포섭 불가능 복합 업종</p>
        </div>
        <div className="bg-muted/50 border border-rule rounded-xl p-5 text-center">
          <div className="font-mono text-3xl font-bold text-ochre mb-1">2~4<span className="text-lg">주</span></div>
          <div className="text-[11px] font-bold text-ink mb-1">초고속 밸류체인 순환</div>
          <p className="text-[10px] text-ink-soft">기획~소비자 피드백까지의 1사이클</p>
        </div>
        <div className="bg-muted/50 border border-rule rounded-xl p-5 text-center">
          <div className="font-mono text-3xl font-bold text-primary mb-1">82<span className="text-lg">%</span></div>
          <div className="text-[11px] font-bold text-ink mb-1">다기능 결합 필지 비율</div>
          <p className="text-[10px] text-ink-soft">사무·제조·판매가 단일 필지에 위치</p>
        </div>
        <div className="bg-muted/50 border border-rule rounded-xl p-5 text-center">
          <div className="font-mono text-3xl font-bold text-indigo mb-1">100<span className="text-lg">m</span></div>
          <div className="text-[11px] font-bold text-ink mb-1">외주 가공 근접성</div>
          <p className="text-[10px] text-ink-soft">시제품 제작 협력업체 간 평균 거리</p>
        </div>
      </div>

      <div className="relative w-full max-w-[600px] aspect-[4/3] flex items-center justify-center">
        <svg viewBox="0 0 600 450" className="w-full h-full absolute inset-0 z-0 overflow-visible">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-violet)" />
              <stop offset="100%" stopColor="var(--color-ochre)" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-ochre)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-violet)" />
            </linearGradient>
            <style>
              {`
                .loop-path {
                  stroke-dasharray: 10 20;
                  animation: dash-flow 2s linear infinite;
                }
                @keyframes dash-flow {
                  from { stroke-dashoffset: 60; }
                  to { stroke-dashoffset: 0; }
                }
                .glow {
                  filter: drop-shadow(0 0 6px rgba(124, 58, 237, 0.4));
                }
              `}
            </style>
          </defs>

          {/* Paths connecting nodes */}
          {/* Top to Bottom Right */}
          <path d="M 300 80 Q 480 80 480 220" fill="none" stroke="url(#grad1)" strokeWidth="5" strokeLinecap="round" className="loop-path glow" />
          {/* Bottom Right to Bottom Left */}
          <path d="M 480 220 Q 480 380 300 380 Q 200 380 120 300" fill="none" stroke="url(#grad2)" strokeWidth="5" strokeLinecap="round" className="loop-path glow" />
          {/* Bottom Left to Top */}
          <path d="M 120 300 Q 120 80 300 80" fill="none" stroke="url(#grad3)" strokeWidth="5" strokeLinecap="round" className="loop-path glow" />
        </svg>

        {/* Nodes */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-card border-2 border-violet rounded-full px-8 py-5 shadow-xl text-center z-10 w-64 md:w-72 hover:scale-105 transition-transform cursor-default group">
          <div className="text-violet font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5 group-hover:text-ink transition-colors">Phase 01</div>
          <div className="font-display text-xl text-ink">디자인 및 기획</div>
          <div className="text-[12px] text-ink-soft mt-1.5 font-medium">트렌드 스캐닝 & 브랜드 기획</div>
        </div>

        <div className="absolute top-[65%] right-[0%] md:-right-[5%] bg-card border-2 border-ochre rounded-full px-8 py-5 shadow-xl text-center z-10 w-64 md:w-72 hover:scale-105 transition-transform cursor-default group">
          <div className="text-ochre font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5 group-hover:text-ink transition-colors">Phase 02</div>
          <div className="font-display text-xl text-ink">즉각 시제품 제작</div>
          <div className="text-[12px] text-ink-soft mt-1.5 font-medium">100m 내 소규모 제조 연계</div>
        </div>

        <div className="absolute top-[65%] left-[0%] md:-left-[5%] bg-card border-2 border-primary rounded-full px-8 py-5 shadow-xl text-center z-10 w-64 md:w-72 hover:scale-105 transition-transform cursor-default group">
          <div className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest mb-1.5 group-hover:text-ink transition-colors">Phase 03</div>
          <div className="font-display text-xl text-ink">팝업/쇼룸 유통</div>
          <div className="text-[12px] text-ink-soft mt-1.5 font-medium">소비자 직거래 및 반응 수집</div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-center pointer-events-none">
          <div className="font-mono text-5xl font-bold text-ink opacity-5">LOOP</div>
          <div className="text-[11px] font-bold text-ink-soft uppercase tracking-widest mt-2 opacity-50">Infinite Cycle</div>
        </div>
      </div>
    </div>
  );
}

function Industries() {
  return (
    <>
      <PageHeader index="05" eyebrow="Chapter 05 · Industries" title="성수동 제조업은 무엇을 만드는가" subtitle={<>네 개의 주력 업종이 각자 다른 공간 논리로 성수동에 남아 있다.<br />어떤 산업은 골목에, 어떤 산업은 수직 센터에.</>} />

      <FadeIn as="section" className="container-prose pb-24">
        <h2 className="font-display text-2xl md:text-3xl mb-6">성수이로 마이크로 조닝 실증 지도</h2>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="relative w-full h-[78vh] min-h-[560px] rounded-lg overflow-hidden border border-rule bg-card">
                          <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none z-10 shadow-lg animate-pulse opacity-100 group-hover:opacity-0 transition-opacity">
                <MousePointerClick size={14} /> 지도를 마우스로 드래그하여 탐색해보세요
              </div>
              <iframe
              src="/seongsu-micro-zoning-map.html"
              title="성수이로 마이크로 조닝 실증 지도"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <aside className="space-y-4">
            <div className="bg-card border border-rule rounded-lg p-5">
              <div className="eyebrow mb-3">업종 조닝 범례</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#E53E3E" }} />
                  제조업 (식료품/IT/인쇄)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#DD6B20" }} />
                  F&B (카페/음식점)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#3182CE" }} />
                  리테일 (의류/패션소매)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#805AD5" }} />
                  기타 서비스 및 IT오피스
                </li>
              </ul>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">마이크로 조닝</div>
              업종군을 세분화하여 각 포인트의 분포를 시각화. 특정 구역(zoning)에 어떤 업종이 밀집해 있는지 확인할 수 있다.
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-primary">긍정적 젠트리피케이션</div>
              제조업이 빠져나간 노후 공간에 트렌디한 팝업 스토어와 리테일 상업시설이 들어서는 현상은 단순한 산업의 밀려남이 아닙니다. 이는 낡은 공장 지대가 새로운 부가가치를 창출하는 활력 있는 소비 거점으로 진화하는 <strong className="text-ink">‘긍정적 젠트리피케이션’</strong> 과정으로 해석될 수 있다.
            </div>
          </aside>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
        <div className="eyebrow mb-3 text-primary">대상지 제조업 중분류 상세 분석</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">단일 산업을 넘어선 다변화된 제조 생태계</h2>
        
        <div className="bg-card border border-rule rounded-xl p-6 overflow-hidden flex flex-col items-center mb-6 shadow-sm">
          <img 
            src="/se.png"
            alt="성수동 대상지 제조업 중분류 현황 그래프" 
            className="w-full max-w-4xl h-auto"
          />
        </div>

        <p className="text-lg text-ink-soft leading-relaxed break-keep mb-8 max-w-4xl">
          우리의 연구는 성수동을 단순한 '수제화 및 인쇄 골목'으로 납작하게 정의하는 것을 넘어, 대상지 내 제조업을 중분류 단위로 해체하여 들여다보았다. 현재 성수이로 주변 핵심가로에서 실제로 가동 중인 제조 공장들이 구체적으로 어떤 품목을 다루며, 급격한 상업적 변화 속에서 어떻게 공존하고 있는지 추적했다.
        </p>

        <div className="bg-muted/30 border border-rule/50 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-violet"></div>
          <h3 className="font-display text-xl text-ink mb-3">도심 적응형 하이브리드 생태계</h3>
          <ul className="space-y-3 mt-4 text-sm md:text-base text-ink-soft leading-relaxed break-keep">
            <li className="flex gap-3">
              <span className="text-violet font-bold">·</span>
              <span><strong>전통 경공업의 잔존:</strong> 가죽, 의복, 인쇄업이 여전히 성수동 제조업의 굳건한 기반 역할을 수행함</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet font-bold">·</span>
              <span><strong>상업 연계형 제조 부상:</strong> 팝업스토어 및 F&B 상권에 맞춘 <strong>식료품(디저트·밀키트) 제조</strong> 비중 확대</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet font-bold">·</span>
              <span><strong>스타트업 지원 제조:</strong> 지식산업센터를 중심으로 한 <strong>소형 전자·부품 조립업</strong>의 틈새 진입</span>
            </li>
            <li className="flex gap-3 mt-2 pt-3 border-t border-rule/50">
              <span className="text-violet font-bold">➔</span>
              <span className="text-ink">성수동의 제조업은 젠트리피케이션으로 소멸된 것이 아니라, 변화된 환경에 맞춰 <strong>'생존 가능한 품목으로 진화'</strong>하고 있다.</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 text-[12px] text-ink-soft opacity-70 text-right">
          자료출처: 자체 현장 실측 및 2025-2026 성수동 일대 사업체 기초 데이터
        </div>
      </FadeIn>


      <FadeIn as="section" className="container-prose py-16 ">
        <div className="eyebrow mb-3">성수동 건축물의 주요용도코드</div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">무엇으로 활용되는가</h2>
        <div className="w-full"> 
          <div className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden border border-rule/50 bg-card shadow-sm">
            <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 pointer-events-none z-10 shadow-lg animate-pulse opacity-100 group-hover:opacity-0 transition-opacity">
              <MousePointerClick size={14} /> 지도를 마우스로 드래그하여 탐색해보세요
            </div>
            <iframe
              src="/seongsu-3d-viewer2.html"
              title="성수동 360도 뷰어"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16 ">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => {
            const color = industryMeta[c.key].color;
            return (
              <article key={c.key} className="border border-rule rounded-lg bg-card overflow-hidden group hover:border-violet transition-colors">
                <div className="h-1.5" style={{ background: color }} />
                <div className="p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono uppercase tracking-widest" style={{ color }}>
                      {industryMeta[c.key].label}
                    </div>
                    <div className="font-mono text-xs text-ink-soft">{c.count}</div>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mt-3">{c.title}</h3>
                  <p className="mt-4 text-ink-soft leading-relaxed">{c.feature}</p>
                  <div className="mt-5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 inline-block rounded-full border" style={{ borderColor: color, color }}>
                    {c.metric}
                  </div>
                  <ul className="mt-6 pt-6 border-t border-rule space-y-2 text-sm text-ink-soft">
                    {c.detail.map((d, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-mono text-xs text-ink-soft mt-0.5">0{i + 1}</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose py-24 ">
        <div className="eyebrow mb-3 text-violet">Hybrid Industries</div>
        <h2 className="font-display text-3xl md:text-4xl mb-6">제조와 소비의 경계 붕괴</h2>
        
        <p className="text-lg text-ink leading-relaxed break-keep font-medium mb-10 max-w-4xl border-l-4 border-violet pl-5">
          제조와 판매를 엄격히 분리하는 기존 행정 분류로는 성수동을 설명할 수 없다. 기획·제조·유통이 단일 필지 내에 결합되며, 불과 2~4주 만에 <strong>[기획➔제작➔판매➔피드백]</strong>이 완결되는 초고속 하이브리드 생태계가 안착했다.
        </p>

        <HybridLoopDiagram />

        <div className="mt-6 text-right">
          <p className="text-[12px] text-ink-soft/60 font-mono tracking-tight break-keep">
            자료출처: 통계청 제11차 한국표준산업분류(KSIC) 매뉴얼, 산업연구원(KIET) 융복합 신산업 트렌드 분석 리포트
          </p>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose py-24 ">
        <div className="eyebrow mb-3 text-primary">심층 분석: 패션 산업 트리맵</div>
        <h2 className="font-display text-3xl md:text-4xl mb-6">성수동 패션 산업의 공간적 체질 개선</h2>
        <p className="text-ink-soft max-w-3xl mb-12 text-lg leading-relaxed">
          과거의 '제조 중심 공장지대'에서 현재의 '고부가가치 리테일 상권'으로 어떻게 변화했는지 종사자 수 기준의 제조업 및 도소매업 트리맵을 통해 심층적으로 분석한다.
        </p>

        <h3 className="font-display text-2xl mb-6 text-ink mt-8">제조업: 전통 피혁 하락, 구두류 잔존</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">과거 제조업 (종사자 수 기준)</div>
            <img src="/graphs/past_mfg_treemap.png" alt="과거 제조업" className="w-full h-auto" />
          </div>
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">현재 제조업 (종사자 수 기준)</div>
            <img src="/graphs/current_mfg_treemap.png" alt="현재 제조업" className="w-full h-auto" />
          </div>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 mb-16 text-sm">
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">봉제·세폭직물 약화</strong>
            <span className="text-ink-soft">임가공 중심의 기초 부자재 및 의복 제조업 비율 급감.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">가죽·가방 제조업 축소</strong>
            <span className="text-ink-soft">전통 피혁 제품군의 전반적인 생산 규모 하락.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">구두류 독보적 비중</strong>
            <span className="text-ink-soft">전체 침체 속에서도 제조업 내 최대 파이 유지.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">의복 액세서리 동반 성장</strong>
            <span className="text-ink-soft">리테일 상권 발달에 호응하는 액세서리 제조 수요 증가.</span>
          </li>
        </ul>

        <h3 className="font-display text-2xl mb-6 text-ink">도소매업: 패션·액세서리의 폭발적 성장</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">과거 도소매업 (종사자 수 기준)</div>
            <img src="/graphs/past_retail_treemap.png" alt="과거 도소매업" className="w-full h-auto" />
          </div>
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">현재 도소매업 (종사자 수 기준)</div>
            <img src="/graphs/current_retail_treemap.png" alt="현재 도소매업" className="w-full h-auto" />
          </div>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 mb-16 text-sm">
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">신발·가죽 소매 급감</strong>
            <span className="text-ink-soft">제조업 쇠퇴와 맞물려 전통 피혁 제품군의 소비 시장 축소.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">의복 소매업 폭발적 팽창</strong>
            <span className="text-ink-soft">글로벌 브랜드 및 대형 패션 매장 유입으로 압도적 성장.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">액세서리 소매업 확대</strong>
            <span className="text-ink-soft">개인화된 패션 소비 트렌드를 반영한 디자이너 편집숍 증가.</span>
          </li>
          <li className="bg-muted/30 border border-rule/50 p-4 rounded-lg">
            <strong className="text-ink block mb-1">단품(셔츠/블라우스) 강세</strong>
            <span className="text-ink-soft">가벼운 소비 성향에 맞춘 특정 의류 카테고리 수요 확대.</span>
          </li>
        </ul>

        <div className="bg-muted/30 border border-rule rounded-2xl p-8 shadow-sm">
          <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-ochre inline-block"></span>
            패션 트리맵 최종 시사점
          </h3>
          <p className="text-ink-soft leading-relaxed break-keep">
            성수동은 과거 '수제화 중심의 생산 기지'에서 현재 '대형 브랜드 및 트렌드 위주의 고부가가치 리테일 상권'으로 완벽히 체질을 개선했다. 제조업에는 구두의 상징성만이 일부 잔존할 뿐, 산업의 주도권은 <strong>'의복·액세서리 기반의 트렌디한 패션 소비(유통)'</strong>로 완전히 넘어갔다.
          </p>
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/floors", label: "04 층/건물 분석" }} next={{ to: "/map", label: "심화: 지식산업센터" }} />
    </>
  );
}

export default Industries;
