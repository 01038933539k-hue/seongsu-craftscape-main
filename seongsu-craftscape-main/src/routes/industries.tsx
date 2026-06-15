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
              업종군을 세분화하여 각 포인트의 분포를 시각화. 특정 구역(zoning)에 어떤 업종이 밀집해 있는지 확인할 수 있습니다.
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-primary">긍정적 젠트리피케이션</div>
              제조업이 빠져나간 노후 공간에 트렌디한 팝업 스토어와 리테일 상업시설이 들어서는 현상은 단순한 산업의 밀려남이 아닙니다. 이는 낡은 공장 지대가 새로운 부가가치를 창출하는 활력 있는 소비 거점으로 진화하는 <strong className="text-ink">‘긍정적 젠트리피케이션’</strong> 과정으로 해석될 수 있습니다.
            </div>
          </aside>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose py-16 rule-top">
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

      <FadeIn as="section" className="container-prose pb-16 rule-top"> <br/><br/>
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

      <FadeIn as="section" className="container-prose py-24 rule-top">
        <div className="eyebrow mb-3 text-primary">심층 분석: 패션 산업 트리맵</div>
        <h2 className="font-display text-3xl md:text-4xl mb-6">성수동 패션 산업의 공간적 체질 개선</h2>
        <p className="text-ink-soft max-w-3xl mb-12 text-lg leading-relaxed">
          과거의 '제조 중심 공장지대'에서 현재의 '고부가가치 리테일 상권'으로 어떻게 변화했는지 종사자 수 기준의 제조업 및 도소매업 트리맵을 통해 심층적으로 분석한다.
        </p>

        <h3 className="font-serif text-2xl mb-6 text-ink">제조업: 전통 피혁의 하락과 구두류의 잔존</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">과거 제조업 분류 트리맵</div>
            <img src="/graphs/past_mfg_treemap.png" alt="과거 제조업 분류 트리맵" className="w-full h-auto" />
          </div>
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">현재 제조업 분류 트리맵</div>
            <img src="/graphs/current_mfg_treemap.png" alt="현재 제조업 분류 트리맵" className="w-full h-auto" />
          </div>
        </div>
        <ul className="space-y-4 mb-16">
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">봉제의복 제조업의 기반 약화:</strong> 기존 임가공 중심의 봉제의복 제조업 비율이 감소했습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">세폭직물 제조업의 쇠퇴:</strong> 부자재 성격이 강한 세폭직물 제조업이 눈에 띄게 사라졌습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">핸드백 및 가방 제조업의 축소:</strong> 전통적인 피혁 제품군인 핸드백과 가방 제조업의 규모가 줄어들었습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">구두류 제조업의 독보적 비중 유지:</strong> 침체 속에서도 구두류 제조업은 현재 제조업 내에서 가장 큰 비중을 차지하고 있습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">의복 액세서리 제조업의 동반 성장:</strong> 소매업의 성장에 발맞추어 액세서리 관련 제조업도 함께 증가했습니다.</p>
          </li>
        </ul>

        <h3 className="font-serif text-2xl mb-6 text-ink">도매업 및 소매업: 의복·액세서리의 폭발적 성장</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">과거 도소매업 분류 트리맵</div>
            <img src="/graphs/past_retail_treemap.png" alt="과거 도소매업 분류 트리맵" className="w-full h-auto" />
          </div>
          <div className="bg-card border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">현재 도소매업 분류 트리맵</div>
            <img src="/graphs/current_retail_treemap.png" alt="현재 도소매업 분류 트리맵" className="w-full h-auto" />
          </div>
        </div>
        <ul className="space-y-4 mb-16">
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">신발 소매업의 급격한 감소:</strong> 과거 가장 활발했던 신발 소매업의 비중이 현재는 크게 축소되었습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">한복 소매업의 입지 위축:</strong> 전통 복식인 한복 소매업의 비율이 과거 대비 감소했습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">섬유 및 의복 소매업의 폭발적 성장:</strong> 대형 패션 브랜드와 대기업 매장의 대거 입점으로 인해 섬유 및 의복 소매업이 크게 성장했습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">패션 액세서리 소매업의 비중 확대:</strong> 개성을 중시하는 소비 트렌드에 맞춰 액세서리 소매업의 비중이 늘어났습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">셔츠 및 블라우스 소매업의 성장:</strong> 단품 의류 카테고리 중 셔츠와 블라우스 중심의 소매업이 증가세를 보였습니다.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-bold shrink-0">·</span>
            <p className="text-ink-soft leading-relaxed"><strong className="text-ink">가죽 및 모피 소매업의 수요 둔화:</strong> 전통적인 소재인 가죽과 모피 제품에 대한 소매 소비가 줄어들었습니다.</p>
          </li>
        </ul>

        <div className="bg-muted/30 border border-rule rounded-2xl p-8 shadow-sm">
          <h3 className="font-display text-2xl text-ink mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-ochre inline-block"></span>
            패션 산업 비교 종합 결론
          </h3>
          <ul className="space-y-4 mb-10">
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">01</span>
              <p className="text-ink-soft leading-relaxed"><strong className="text-ink">전통 피혁 기반(신발·가죽·가방)의 동반 하락:</strong> 제조업과 도소매업 전반에서 신발, 가죽, 핸드백의 비중과 수요가 동시에 감소했습니다.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">02</span>
              <p className="text-ink-soft leading-relaxed"><strong className="text-ink">패션 액세서리 산업의 동반 성장:</strong> 트렌드 변화에 따라 두 산업군 모두에서 액세서리 사업이 크게 발전했습니다.</p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0">03</span>
              <p className="text-ink-soft leading-relaxed"><strong className="text-ink">제조업 내 구두류의 높은 잔존 비중:</strong> 전체적인 하락세 속에서도 현재 성수동 제조업 내에서는 신발(구두)의 비중이 가장 높게 나타납니다.</p>
            </li>
          </ul>

          <div className="bg-white border-l-4 border-primary p-6 rounded-r-xl shadow-sm">
            <h4 className="font-serif text-xl mb-3 text-ink">패션 트리맵 최종 시사점</h4>
            <p className="text-ink-soft leading-relaxed mb-4">
              성수동 2가는 과거 '수제화 및 제조 중심의 공장지대'에서 현재 '대기업·글로벌 패션 브랜드 중심의 고부가가치 리테일 상권'으로 체질 개선이 이루어지고 있습니다.
            </p>
            <p className="text-ink-soft leading-relaxed">
              제조업에서는 여전히 수제화(구두)의 상징성이 남아있으나, 도소매업에서는 대형 브랜드와 액세서리 편집숍 중심의 트렌디한 의류 소비가 주를 이룹니다. 결과적으로 성수동 2가는 전통적인 생산 기지의 역할에서 벗어나, 생산과 유통이 고도화된 소비 중심의 <strong>'패션 클러스터'</strong>로 진화하고 있음을 시사합니다.
            </p>
          </div>
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/floors", label: "04 층/건물 분석" }} next={{ to: "/map", label: "심화: 지식산업센터" }} />
    </>
  );
}

export default Industries;
