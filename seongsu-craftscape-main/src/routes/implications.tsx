import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader } from "@/components/site/Shell";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Route = createFileRoute("/implications")({
  head: () => ({
    meta: [
      { title: "07 최종결론 · 성수동 아카이브" },
      { name: "description", content: "성수동 제조업의 미래에 대한 네 가지 정책적 · 도시계획적 시사점." },
    ],
  }),
  component: Implications,
});

const findings = [
  {
    n: "Data 01",
    t: "동·서측 공생 및 이면도로 밀집 (Ch.1 & 2)",
    b: "첨단 지식산업센터와 노후 공장지대의 양극화 속 공생. 대형 공장은 이면도로 소필지로 스며들어 독자적 제조 생태계를 구축한다.",
    color: "var(--color-violet)"
  },
  {
    n: "Data 02",
    t: "단일 필지의 수직적 용도 혼합 (Ch.3 & 4)",
    b: "유동인구에 따라 저층부는 팝업 상업시설, 상층부는 제조·업무 공간으로 분할되어 공존하는 자생적 수직 혼합 모델이 고착화되었다.",
    color: "var(--color-ochre)"
  },
  {
    n: "Data 03",
    t: "패션·리테일 중심의 클러스터 진화 (Ch.5)",
    b: "전통 제조업의 단순 쇠퇴가 아닌, 초단기 팝업과 하이엔드 리테일을 결합한 고부가가치 소비 거점으로의 '긍정적 젠트리피케이션'을 달성했다.",
    color: "var(--color-primary)"
  }
];

const messages = [
  { 
    n: "01", 
    t: "유연한 공간적 이동과 장소성 획득", 
    b: "제조업은 사라진 것이 아니라 최적의 위치(상층부/이면도로)로 이동했다. 잔존한 노후 인프라는 상업 자본과 결합해 성수동 고유의 '장소성'으로 기능한다.",
    borderColor: "var(--color-violet)"
  },
  { 
    n: "02", 
    t: "수직적 타협 (Vertical Mix)의 결과", 
    b: "천문학적인 임대료 상승을 방어하기 위해 '저층 소비 + 상층 제조'라는 물리적 타협안이 도출되었다. 이는 산업의 자생적 방어선이자 공생 모델이다.",
    borderColor: "var(--color-ochre)"
  },
  { 
    n: "03", 
    t: "생산에서 소비 거점으로의 압축 진화", 
    b: "물건을 '만드는 곳'에서 브랜드를 '경험하고 소비하는 곳'으로 밸류체인이 압축되었다. 이는 단순한 잠식이 아닌 산업 생태계의 고도화 과정이다.",
    borderColor: "var(--color-primary)"
  },
  { 
    n: "04", 
    t: "보존과 개발의 입체적 마이크로 조닝", 
    b: "평면적인 용도 규제를 탈피하고, 층별 특성에 따른 차등적 화이트존 도입이 시급하다. 낡은 골목길(미세 격자망)의 보존이 곧 부가가치 창출의 핵심이다.",
    borderColor: "var(--color-ink)"
  },
];

function TemporalGapTimeline() {
  return (
    <FadeIn as="section" className="mb-24 mt-12">
      <div className="eyebrow mb-3 text-violet">The Core Thesis</div>
      <h2 className="font-display text-3xl md:text-4xl mb-6 text-ink">행정 데이터의 시차와 성수동 제조업의 진짜 속도</h2>
      
      <p className="text-lg text-ink-soft leading-relaxed break-keep max-w-4xl mb-12">
        제조업은 단순히 쇠퇴한 것이 아니라, <strong>속도와 형태를 바꾸어 진화</strong>했다. 행정 데이터가 성수동을 여전히 정적인 공간으로 기록하는 동안, 현장에서는 '기획-제조-소비'가 결합된 초고속 융복합 생태계가 가동되고 있다.
      </p>

      {/* KPI Panel using existing site styles */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Admin KPI */}
        <div className="bg-card border border-rule rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-center">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-8">01. 정적 행정망의 갱신 주기</div>
          <div className="flex items-baseline gap-3 mb-2">
            <div className="font-display text-[80px] md:text-[100px] leading-none text-ink opacity-10 tracking-tighter">365</div>
            <div className="font-mono text-sm text-ink-soft tracking-widest uppercase">Days</div>
          </div>
          <div className="h-px w-12 bg-rule my-4"></div>
          <p className="text-sm text-ink-soft leading-relaxed break-keep">
            건축물대장(세움터) 갱신 및 행정 통계 주기로, 성수동을 '정적이고 느린 공장지대'로만 해석하는 과거의 시선.
          </p>
        </div>

        {/* Reality KPI */}
        <div className="bg-muted/30 border border-violet/20 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-violet"></div>
          <div className="font-mono text-xs uppercase tracking-widest text-violet font-bold mb-8">02. 융복합 생태계의 제조·소비 주기</div>
          <div className="flex items-baseline gap-3 mb-2 relative z-10">
            <div className="font-display text-[80px] md:text-[100px] leading-none text-violet tracking-tighter">14</div>
            <div className="font-mono text-sm text-violet/70 tracking-widest uppercase">Days</div>
          </div>
          <div className="h-px w-12 bg-violet/30 my-4"></div>
          <p className="text-sm text-ink-soft leading-relaxed break-keep relative z-10">
            트렌드 기획 ➔ <strong className="text-ink">인근 공방 시제품 즉각 제작(제조)</strong> ➔ 팝업 소매 ➔ 피드백으로 이어지는 초고속 하이브리드 밸류체인.
          </p>
        </div>
      </div>

      {/* Concluding Quote */}
      <div className="bg-card border border-rule rounded-xl p-8 border-l-4 border-l-violet shadow-sm">
        <p className="text-lg text-ink font-medium leading-relaxed break-keep">
          "결국 365일과 14일의 시차(Temporal Gap)는 단순한 통계의 지연이 아니다. 제조와 소비의 경계가 무너지며 탄생한 <strong className="text-violet">성수동 특유의 '초고속 도시제조업' 생태계</strong>를 낡은 행정망이 담아내지 못하고 있음을 증명하는 결정적 단서다."
        </p>
      </div>
    </FadeIn>
  );
}

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Conclusion" title="최종결론: 성수동 제조업의 미래" subtitle="데이터와 현장의 괴리를 넘어, 지속가능한 융복합 클러스터로 진화하기 위한 정책적 진단과 제언." />

      <div className="container-prose pb-24">
        {/* THE CORE THESIS: TEMPORAL GAP */}
        <TemporalGapTimeline />

        {/* DATA & FINDINGS (TOP) */}
        <FadeIn className="mb-12 mt-16">
          <div className="eyebrow mb-6 text-ink">Data & Findings : 핵심 분석 요약</div>
          <div className="grid md:grid-cols-3 gap-6">
            {findings.map((f) => (
              <div key={f.n} className="bg-card border border-rule rounded-xl p-6 shadow-sm border-t-4" style={{ borderTopColor: f.color }}>
                <div className="font-mono text-sm mb-3 font-bold" style={{ color: f.color }}>{f.n}</div>
                <h3 className="font-display text-lg mb-4 text-ink leading-tight">{f.t}</h3>
                <p className="text-ink-soft text-sm leading-relaxed break-keep">{f.b}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ARROWS / CONNECTION (MIDDLE) */}
        <FadeIn className="flex justify-center items-center py-8 opacity-50">
          <div className="flex flex-col items-center">
            <div className="h-16 w-px bg-rule"></div>
            <ArrowDown className="text-ink-soft mt-2" size={24} />
            <div className="text-xs font-mono uppercase tracking-widest text-ink-soft mt-3">Leads to Implications</div>
          </div>
        </FadeIn>

        {/* IMPLICATIONS (BOTTOM) */}
        <FadeIn className="mt-8 mb-16">
          <div className="eyebrow mb-6 text-ink">Implications : 도출된 4가지 시사점</div>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.n} className="bg-card p-6 md:p-8 rounded-xl border border-rule/50 shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: m.borderColor }}></div>
                <div className="font-display text-4xl md:text-5xl font-bold opacity-10 group-hover:opacity-100 transition-opacity" style={{ color: m.borderColor }}>{m.n}</div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl leading-tight text-ink mb-3">{m.t}</h3>
                  <p className="text-ink-soft leading-relaxed text-sm md:text-base break-keep">{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* POLICY SUGGESTIONS */}
        <FadeIn className="mt-20 pt-16 border-t border-rule">
          <div className="eyebrow mb-3">도시계획학과 프로젝트 최종 결론</div>
          <h2 className="font-display text-2xl md:text-3xl mb-8">우리 조의 도시계획적 제언</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {[
              {
                h: "1. 수직적 용도혼합(Vertical Zoning) 가이드라인 마련", 
                d: <>성수동은 한 건물 안에서도 저층부 상업, 상층부 제조 및 주거로 나뉘는 <strong>자생적 혼합</strong>이 일어난다. 기존의 평면적 규제에서 벗어나, 건물 층별 입주 용도에 따라 용적률 인센티브를 차등 지급하는 <strong>'수직 조닝 가이드라인'</strong> 도입을 제안한다.</>
              },
              {
                h: "2. 점진적 재생을 위한 '소필지 가로망' 보존", 
                d: <>성수동 특유의 촘촘한 붉은 벽돌 골목길과 작은 필지들은 동네의 매력이자 <strong>영세 제조업이 버틸 수 있는 기반</strong>이다. 전면 철거형 대규모 재개발을 지양하고, 기존 가로망을 살려 고쳐 쓰는 <strong>점진적 도시재생 전략</strong>이 필수적이다.</>
              },
              {
                h: "3. 젠트리피케이션 방지와 상생을 위한 앵커 공간", 
                d: <>임대료 폭등으로 기존 수제화·인쇄 공방들이 외곽으로 밀려나는 것을 막아야 한다. 신규 상업 자본이 진입할 때 건물 내 일정 면적을 <strong>저렴한 임대료의 '제조업 앵커 공간'</strong>으로 할당하도록 유도하는 제도적 안전망이 필요하다.</>
              },
              {
                h: "4. 도심형 하이브리드 생태계 지원 (비욘드 조닝)", 
                d: <>성수동은 이미 제조, 기획, 전시, 판매가 하나로 융합된 복합 공간이다. 도시계획을 배우는 학생의 시각에서 볼 때, 전통적인 '용도지역제'의 틀을 깨고 주거·상업·공업이 유연하게 섞일 수 있는 <strong>'화이트존(White Zone)' 지정</strong>이 적극 도입되어야 한다고 생각한다.</>
              },
            ].map((item, i) => (
              <div key={i} className="border border-rule rounded-xl bg-card p-6 shadow-sm hover:border-violet transition-colors">
                <div className="font-display text-lg text-ink font-bold mb-3">{item.h}</div>
                <p className="text-ink-soft leading-relaxed break-keep">{item.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 text-right border-t border-rule/50 pt-6">
          <p className="text-[11px] text-ink-soft/70 font-mono tracking-tight break-keep">
            참고 데이터: 국토교통부 건축행정시스템 세움터 대장 통계(2026), 서울특별시 2030 생활권계획 보고서, 성수동 일대 225개 샘플 필지 현장 실측 데이터셋(Seongsu Craftscape)
          </p>
        </div>

        <FadeIn className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-rule bg-card p-8 hover:border-violet transition-colors">
            <div className="eyebrow text-primary font-bold">처음으로</div>
            <h3 className="font-display text-2xl mt-2 text-ink">데이터 탐색하기</h3>
            <p className="text-ink-soft mt-3 text-sm break-keep">지도와 시각화 데이터베이스를 통해 공간 분석 결과를 입체적으로 확인할 수 있다.</p>
            <div className="mt-6 flex flex-wrap gap-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-violet hover:gap-3 transition-all">
                분석으로 이동 <ArrowRight size={16} />
              </Link>
              <Link to="/database" className="inline-flex items-center gap-2 text-sm font-bold text-ochre hover:gap-3 transition-all">
                데이터베이스로 이동 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-indigo/40 bg-indigo text-white p-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">Research Summary</div>
            <h3 className="font-display text-2xl mt-2">도시제조업의 자생적 진화</h3>
            <p className="mt-3 text-sm opacity-90 leading-relaxed break-keep">
              본 프로젝트는 소비 공간과 생산 공간의 물리적 중첩이 만들어내는 성수동 특유의 산업 생태계와 긍정적 변화를 실증적 데이터로 규명하였다.
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Implications;
