import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "01 시계열 변화 분석 · 성수동 아카이브" },
      { name: "description", content: "1970년대 이전부터 2020년대까지, 성수동 건축물 데이터로 본 도시 변화 단계." },
    ],
  }),
  component: Timeline,
});

const eras = [
  {
    era: "1970년대 이전",
    title: "산업화 초기 · 자연발생적 공업지대",
    desc:
      "무허가·미등록 가내수공업이 자생적으로 형성. 서울 외곽의 저렴한 주거지로서 공장 노동자의 직주근접이 가능했고, 데이터상 공장은 적지만 실제로는 이미 공업 기능이 활발했다.",
    buildings: 56,
  },
  {
    era: "1980년대",
    title: "제조업 전성기 · 기존 건물 활용",
    desc:
      "기존 공장 건물을 그대로 사용하며 신규 준공이 적었다. 2호선 개통으로 강남 접근성이 생기며 주거 수요가 유입되어 주거 비율이 증가.",
    buildings: 21,
  },
  {
    era: "1990년대",
    title: "준공업지역 재편 · 다세대 붐",
    desc:
      "준공업지역 지정으로 주거 신축이 법적으로 허용되며 다세대·다가구 개발 붐. 무등록 공장들이 아파트형공장 정책을 통해 제도권으로 편입되며 공장 비율도 소폭 증가.",
    buildings: 45,
  },
  {
    era: "2000년대",
    title: "지식산업센터 본격 공급",
    desc:
      "산업집적활성화법 개정과 세제 혜택으로 지식산업센터가 본격 공급. 대형 필지 합필 과정에서 기존 다세대 주거가 흡수되어 주거 비율이 급감했고, 공장·사무 비율이 급등.",
    buildings: 14,
  },
  {
    era: "2010년대",
    title: "젠트리피케이션 시작",
    desc:
      "카페·음식점이 서서히 등장. 지식산업센터의 구조적 용도변경 어려움으로 수치상 공장 비율은 유지되는 이중적 양상.",
    buildings: 24,
  },
  {
    era: "2020년대",
    title: "F&B 기획 신축 · 복합개발 표준화",
    desc:
      "처음부터 F&B 목적으로 기획된 신축 건물이 급증. MZ 세대를 겨냥한 IT·스타트업 오피스와 맞물려 1–2층 F&B + 상층 오피스 복합개발이 새로운 표준으로 자리잡음.",
    buildings: 9,
  },
];

const buildYears = [
  { decade: "~1970s", count: 56 },
  { decade: "1980s", count: 21 },
  { decade: "1990s", count: 45 },
  { decade: "2000s", count: 14 },
  { decade: "2010s", count: 24 },
  { decade: "2020s", count: 9 },
];

function Timeline() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Chapter 01 · Timeline"
        title="성수동은 어떻게 변화했는가?"
        subtitle="국토교통부 건축물대장 표제부와 항공사진을 교차 분석해 6개 시기로 정리했다. 어떤 층도 완전히 사라지지 않은 채 위에 쌓여 왔다."
      />

      <section className="container-prose pb-16">
        <ol className="relative border-l-2 border-violet/30 ml-4 md:ml-6 space-y-12">
          {eras.map((e) => (
            <li key={e.era} className="pl-8 md:pl-12 relative">
              <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-card border-2 border-violet" />
              <div className="font-mono text-xs uppercase tracking-widest text-violet">{e.era}</div>
              <h3 className="font-display text-2xl md:text-3xl mt-2">{e.title}</h3>
              <p className="mt-3 text-ink-soft max-w-2xl leading-relaxed">{e.desc}</p>
              <div className="mt-4 text-xs font-mono text-ink-soft">신규 준공 건물 ≈ {e.buildings}동</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-prose py-16 rule-top">
        <div className="eyebrow mb-3">시대별 신규 준공 건물 수</div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">언제, 얼마나 지어졌는가</h2>
        <p className="text-ink-soft max-w-2xl mb-10">
          1970년대 이전 준공 건물이 56동으로 가장 많고, 2000년대 들어 지식산업센터로 합필되며 신규 준공은 크게 줄었다.
          2020년대 신축은 적지만 모두 F&B·복합 용도로 기획되어 영향력은 매우 크다.
        </p>
        <div className="h-80 bg-card border border-rule rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={buildYears}>
              <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="decade" stroke="var(--color-ink-soft)" fontSize={12} />
              <YAxis stroke="var(--color-ink-soft)" fontSize={12} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
              <Bar dataKey="count" fill="var(--color-violet)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-xs text-ink-soft font-mono">
          자료: 국토교통부 건축물대장 표제부 · 국토정보플랫폼 항공사진(1977, 2016, 2020, 2022)
        </div>
      </section>
    </>
  );
}
