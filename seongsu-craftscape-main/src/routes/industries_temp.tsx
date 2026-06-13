import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { industryMeta } from "@/data/manufacturers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/industries_temp")({
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
    feature: "주거 지역과 비교적 거리가 먼 성수이로 인근 등 특정 지역에 주로 집적되어 있다. 야간 작업이나 소음 민원을 피하기 위한 입지적 특성이다.",
    metric: "전력 사용량 · 동 내 최상위",
    detail: ["1980년대 준공 건물 다수 활용", "야간 가동 비율 38%", "후가공 외주 거리 평균 220m"],
  },
  {
    key: "leather" as const,
    title: "가죽·신발 제조업",
    count: "57개 업체",
    feature: "특정 구역에 국한되지 않고 성수동 대상지 전체에 고르게 퍼져 있다. 수제화 장인 · OEM 봉제 · 가방 공방이 한 가로에 공존한다.",
    metric: "성수동 대표 산업",
    detail: ["3대 이상 가족 경영 비율 21%", "1층 매장 겸용 비율 34%", "주문제작 비중 점차 확대"],
  },
  {
    key: "food" as const,
    title: "식료품 제조업",
    count: "29개 업체",
    feature: "연무장길 배후지역에 밀키트 · 베이커리 · 디저트 제조가 새롭게 집적되어 있다.",
    metric: "밀키트 신규 진입 중심",
    detail: ["2018년 이후 신규 진입 60%", "냉장 인프라 확충 필요", "F&B 상업과 수직 결합"],
  },
  {
    key: "electronics" as const, // Using this key to preserve color, but changing content to clothing/textiles
    title: "의복·섬유 제조업",
    count: "24개 업체",
    feature: "소규모 공간만으로도 작업이 가능하여 이면 도로에 주로 위치한다.",
    metric: "소규모 공간 특화",
    detail: ["골목 이면도로 중심 입지", "소규모 작업장 형태 다수", "디자이너 브랜드 협업 증가"],
  },
];

// 성수2가 1동 상권 변화 데이터 (가로분석에서 이동됨)
const market = [
  { q: "24 1Q", 개업률: 2.2, 폐업률: 2.7 },
  { q: "24 2Q", 개업률: 2.8, 폐업률: 2.7 },
  { q: "24 3Q", 개업률: 2.0, 폐업률: 1.8 },
  { q: "24 4Q", 개업률: 2.0, 폐업률: 2.2 },
  { q: "25 1Q", 개업률: 1.9, 폐업률: 2.0 },
  { q: "25 2Q", 개업률: 3.3, 폐업률: 3.5 },
  { q: "25 3Q", 개업률: 2.6, 폐업률: 2.6 },
  { q: "25 4Q", 개업률: 2.6, 폐업률: 2.5 },
  { q: "26 1Q", 개업률: 2.6, 폐업률: 2.3 },
];

function Industries() {
  return (
    <>
      <PageHeader index="05" eyebrow="Chapter 05 · Industries" title="성수동 제조업은 무엇을 만드는가" subtitle="네 개의 주력 업종이 각자 다른 공간 논리로 성수동에 남아 있다. 어떤 산업은 골목에, 어떤 산업은 수직 센터에." />

      <section className="container-prose pb-24">
        <h2 className="font-display text-2xl md:text-3xl mb-6">성수이로 마이크로 조닝 실증 지도</h2>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="relative w-full h-[78vh] min-h-[560px] rounded-lg overflow-hidden border border-rule bg-card">
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
                <li className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#E53E3E" }} />
                  제조업 (식료품/의복/인쇄)
                </li>
                <li className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#DD6B20" }} />
                  F&B (카페/음식점)
                </li>
                <li className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#3182CE" }} />
                  리테일 (의류/패션소매)
                </li>
                <li className="flex items-center gap-2.5 text-ink-soft">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#805AD5" }} />
                  기타 서비스 및 IT오피스
                </li>
              </ul>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">마이크로 조닝</div>
              업종군을 세분화하여 각 포인트의 분포를 시각화. 특정 구역(zoning)에 어떤 업종이 밀집해 있는지 확인할 수 있다.
            </div>
          </aside>
        </div>
      </section>

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
                      {c.key === 'electronics' ? '의복·섬유' : industryMeta[c.key].label}
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
        <div className="mt-6 text-[10px] text-ink-soft opacity-70 text-right">
          (출처: 서울시 식품위생업소 인허가 정보, 서울시 건축물대장 표제부)
        </div>
      </section>

      {/* 가로분석에서 이동된 상권 변화 분석 데이터 */}
      <section className="container-prose pb-24">
        <div className="eyebrow mb-3">성수2가 1동 상권 변화</div>
        <h2 className="font-display text-2xl md:text-3xl mb-2">개업과 폐업이 함께 가속된다</h2>
        <p className="text-ink-soft max-w-2xl mb-8">
          영업 평균 76개월 / 폐업 평균 54개월. 서울 평균(영업 115 · 폐업 53)과 비교하면
          성수의 상권은 회전이 빠르고, 개업률과 폐업률이 거의 같은 폭으로 함께 움직이는 확장기에 있다. 제조업과 상업의 교체가 이 가속도 내에서 일어난다.
        </p>
        <div className="h-80 bg-card border border-rule rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={market}>
              <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" />
              <XAxis dataKey="q" stroke="var(--color-ink-soft)" fontSize={12} />
              <YAxis stroke="var(--color-ink-soft)" fontSize={12} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="개업률" stroke="var(--color-violet)" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="폐업률" stroke="var(--color-ochre)" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-[10px] text-ink-soft opacity-70 text-right">
          (출처: 서울시 상권분석서비스)
        </div>
      </section>
    </>
  );
}

export default Industries;
