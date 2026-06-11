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
    title: "자연발생적 산업화 초기",
    desc:
      "무허가·미등록 소규모 가내수공업 공장들이 용도 등록 없이 자연적으로 형성된 시기입니다. 당시 성수동은 서울 외곽의 저렴한 주거지 역할을 했기 때문에 공장 노동자들의 직주근접이 가능한 주거 기능이 데이터상 가장 큰 비율을 차지했습니다.",
    buildings: 56,
  },
  {
    era: "1980년대",
    title: "제조업 전성기와 주거 수요 유입",
    desc:
      "성수동 제조업이 최고의 전성기를 누리던 시절로, 기존 공장 시설을 중단 없이 그대로 가동했기 때문에 신축 공장 준공은 오히려 적었습니다. 그러나 지하철 2호선이 개통되면서 강남 접근성이 획기적으로 개선되었고, 이에 따라 주거 투자 및 유입 수요가 늘어나며 주거 비율이 한층 더 증가했습니다.",
    buildings: 21,
  },
  {
    era: "1990년대",
    title: "준공업지역 개편과 다세대 개발 붐",
    desc:
      "성수동 일대가 준공업지역으로 재편되면서 주거용 건물을 짓는 것이 법적으로 허용되었습니다. 강남 접근성을 겨냥한 다세대·다가구 주택 투자 붐이 일어났고, 도시환경 개선 정책에 맞춰 기존 무등록 단층 공장들이 정식 아파트형 공장으로 전환되며 제도권 안으로 대거 편입되었습니다.",
    buildings: 45,
  },
  {
    era: "2000년대",
    title: "지식산업센터의 등장과 주거 필지 흡수",
    desc:
      "산업집적활성화법 개정으로 입주 가능 업종이 제조업에서 지식산업 및 정보통신업까지 크게 확대되었습니다. 준공업지역 규제 완화(건폐율·용적률 인센티브) 혜택을 기반으로 지식산업센터 공급이 폭발적으로 늘어났으며, 이 거대한 건물을 짓는 과정에서 기존의 다세대 주거 소필지들이 흡수되어 주거 비율이 급감하고 공장·사무 비율이 급등했습니다.",
    buildings: 14,
  },
  {
    era: "2010년대",
    title: "젠트리피케이션의 서막",
    desc:
      "성수동의 독특한 분위기를 찾아 음식점과 카페가 서서히 유입되며 상업화가 태동한 시기입니다. 대외적으로는 핫플레이스로 주목받기 시작했으나, 기존 지식산업센터 구조상 용도변경이 까다롭기 때문에 건축물대장 등 행정 수치상으로는 공장 용도 비율이 여전히 높게 유지되는 이중적인 양상을 보였습니다.",
    buildings: 24,
  },
  {
    era: "2020년대",
    title: "F&B 및 스타트업 오피스의 복합개발",
    desc:
      "초기 기획 단계부터 F&B(식음료) 시설을 목적으로 설계된 신축 건물이 급증하며 음식점 영역이 폭발적으로 팽창했습니다. MZ세대가 열광하는 지역이라는 브랜딩 덕분에 IT 및 스타트업 기업들이 대거 오피스를 마련하기 시작했습니다. 이 두 흐름이 맞물려 '저층부(1~2층) F&B + 상층부(3층 이상) 오피스' 형태의 복합개발 구조가 성수동의 새로운 건축 표준으로 자리 잡았습니다.",
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
