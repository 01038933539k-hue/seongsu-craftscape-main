import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/map_temp")({
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

      <section className="container-prose py-16">
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

  );
}

export default MapPage;
