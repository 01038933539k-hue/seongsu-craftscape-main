import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { industryMeta } from "@/data/manufacturers";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "06 주요 제조업 · 성수동 아카이브" },
      { name: "description", content: "성수동의 인쇄업, 가죽·신발, 식료품, 전자·부품 제조업 현황." },
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
    detail: ["3대 이상 가족 경영 비율 21%", "1층 매장 겸용 비율 34%", "주문제작 비중 점차 확대"],
  },
  {
    key: "food" as const,
    title: "식료품 제조업",
    count: "29개 업체",
    feature: "연무장길 배후지역에 밀키트 · 베이커리 · 디저트 제조가 새롭게 집적.",
    metric: "밀키트 신규 진입 중심",
    detail: ["2018년 이후 신규 진입 60%", "냉장 인프라 확충 필요", "F&B 상업과 수직 결합"],
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
      <PageHeader index="06" eyebrow="Chapter 06 · Industries" title="성수동 제조업은 무엇을 만드는가" subtitle="네 개의 주력 업종이 각자 다른 공간 논리로 성수동에 남아 있다. 어떤 산업은 골목에, 어떤 산업은 수직 센터에." />

      <section className="container-prose pb-24">
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
      </section>
    </>
  );
}
