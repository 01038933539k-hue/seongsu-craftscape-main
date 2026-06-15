import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader, PageNavigation } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Cell } from "recharts";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "01 대상지 전체 시계열 분석 · 성수동 아카이브" },
      { name: "description", content: "1970년대 이전부터 2020년대까지, 성수동 건축물 데이터로 본 도시 변화 단계." },
    ],
  }),
  component: Timeline,
});

const eras = [
  {
    era: "1970년대 이전",
    title: "자연발생적 산업화 초기",
    desc: "무허가·미등록 소규모 가내수공업 공장들이 용도 등록 없이 자연적으로 형성된 시기이다. 당시 성수동은 서울 외곽의 저렴한 주거지 역할을 했기 때문에 공장 노동자들의 직주근접이 가능한 주거 기능이 데이터상 가장 큰 비율을 차지하였다.",
    buildings: 56,
    image: "/graphs/1970.png",
  },
  {
    era: "1980년대",
    title: "제조업 전성기와 주거 수요 유입",
    desc: "성수동 제조업이 최고의 전성기를 누리던 시절로, 기존 공장 시설을 중단 없이 그대로 가동했기 때문에 신축 공장 준공은 오히려 적었다. 그러나 지하철 2호선이 개통되면서 강남 접근성이 획기적으로 개선되었고, 이에 따라 주거 투자 및 유입 수요가 늘어나며 주거 비율이 한층 더 증가하였다.",
    buildings: 21,
    image: "/graphs/1980.png",
  },
  {
    era: "1990년대",
    title: "준공업지역 개편과 다세대 개발 붐",
    desc: "성수동 일대가 준공업지역으로 재편되면서 주거용 건물을 짓는 것이 법적으로 허용되었다. 강남 접근성을 겨냥한 다세대·다가구 주택 투자 붐이 일어났고, 도시환경 개선 정책에 맞춰 기존 무등록 단층 공장들이 정식 아파트형 공장으로 전환되며 제도권 안으로 대거 편입되었다.",
    buildings: 45,
    image: "/graphs/1990.png",
  },
  {
    era: "2000년대",
    title: "지식산업센터의 등장과 주거 필지 흡수",
    desc: "산업집적활성화법 개정으로 입주 가능 업종이 제조업에서 지식산업 및 정보통신업까지 크게 확대되었다. 준공업지역 규제 완화(건폐율·용적률 인센티브) 혜택을 기반으로 지식산업센터 공급이 폭발적으로 늘어났으며, 이 거대한 건물을 짓는 과정에서 기존의 다세대 주거 소필지들이 흡수되어 주거 비율이 급감하고 공장·사무 비율이 급등하였다.",
    buildings: 14,
    image: "/graphs/2000.png",
  },
  {
    era: "2010년대",
    title: "젠트리피케이션의 서막",
    desc: "성수동의 독특한 분위기를 찾아 음식점과 카페가 서서히 유입되며 상업화가 태동한 시기이다. 대외적으로는 핫플레이스로 주목받기 시작했으나, 기존 지식산업센터 구조상 용도변경이 까다롭기 때문에 건축물대장 등 행정 수치상으로는 공장 용도 비율이 여전히 높게 유지되는 이중적인 양상을 보였다.",
    buildings: 24,
    image: "/graphs/2010.png",
  },
  {
    era: "2020년대",
    title: "F&B 및 스타트업 오피스의 복합개발",
    desc: "초기 기획 단계부터 F&B(식음료) 시설을 목적으로 설계된 신축 건물이 급증하며 음식점 영역이 폭발적으로 팽창하였다. MZ세대가 열광하는 지역이라는 브랜딩 덕분에 IT 및 스타트업 기업들이 대거 오피스를 마련하기 시작하였다. 이 두 흐름이 맞물려 '저층부(1~2층) F&B + 상층부(3층 이상) 오피스' 형태의 복합개발 구조가 성수동의 새로운 건축 표준으로 자리 잡았다.",
    buildings: 9,
    image: "/graphs/2020.png",
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

const parcels = [
  {
    id: 1,
    title: "대형 거점의 지속적인 확장 및 자본 집약화",
    implication: "과거 대형 공장 부지였던 곳이 최근 10년 사이 대규모 지식산업센터나 대기업 사옥으로 재개발되었다. 대자본이 가장 먼저 유입된 축이다.",
    current: "서울숲 한라 시그마밸리, 무신사 메가스토어"
  },
  {
    id: 2,
    title: "소형 공장의 유지 후 최근 상업적 리모델링",
    implication: "과거 수제화 공장 건물의 외관을 살린 채 내부를 트렌디한 대형 F&B 매장이나 브랜드 플래그십 스토어로 리모델링하였다.",
    current: "대형 F&B 브랜드 플래그십 스토어"
  },
  {
    id: 3,
    title: "90년대 상업화의 선발대",
    implication: "제조업 호황기 및 상업화 초기에 진입하여, 일찌감치 용도가 고정된 안정적인 상업 시설 및 오피스 공간으로 자리 잡았다.",
    current: "초기 상업시설 및 로컬 오피스"
  },
  {
    id: 4,
    title: "점진적 고도화를 거친 복합 필지",
    implication: "자본의 변화에 민감하게 반응하여 과거 소규모 공장에서 점진적으로 용도를 바꾸다가 최근 신축 근린생활시설로 탈바꿈하였다.",
    current: "성수ak벨리, 상상플래닛"
  },
  {
    id: 5,
    title: "전통 제조업 기지에서 상업 용도로 급변",
    implication: "전통 공장이었으나 임대료 상승과 자본 유입의 압박으로 최근 상업 시설로 급격히 매각 및 분할되었다.",
    current: "성수동 대림창고 갤러리"
  },
  {
    id: 6,
    title: "골목길 상업화의 1세대 선발대",
    implication: "80년대 말 제조업 전성기에 증축된 이후, 2010년대 중반 로컬 브랜드가 입점하며 골목길 상업화를 선도하였다.",
    current: "유명 로컬 브랜드 및 카페"
  },
  {
    id: 7,
    title: "침묵 끝에 터진 최근의 급격한 분할",
    implication: "오랜 기간 영세 가내수공업으로 유지되다 연무장길 상권 확장에 따라 힙한 소규모 편집숍과 팝업 공간으로 쪼개졌다.",
    current: "소규모 편집숍, 팝업스토어"
  },
  {
    id: 8,
    title: "상업화 압박 속에서 버티는 경계선",
    implication: "주변의 상업화에도 불구하고 수제화 장인이 생업을 이어가며 전통 제조업을 고수하고 있는 고립된 경계선이다.",
    current: "에이레네 등 수제화 공방"
  },
  {
    id: 9,
    title: "70년대 형성 이후 원형을 유지하는 공장",
    implication: "준공업지역 초창기에 지어진 형태로, 전통적인 제조업 네트워크가 여전히 강력하게 작동하여 자본 침투가 차단된 곳이다.",
    current: "정밀기계 및 금속가공 공장"
  }
];

function Timeline() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Chapter 01 · Timeline"
        title="성수동은 어떻게 변화했는가?"
        subtitle="국토교통부 건축물대장 표제부와 항공사진을 교차 분석해 6개 시기로 정리하였다. 어떤 층도 완전히 사라지지 않은 채 위에 쌓여 왔다."
      />

      {/* CUMULATIVE AREA GRAPH (From Current) */}
      <FadeIn as="section" className="container-prose py-16 md:py-24">
        <div className="eyebrow mb-3">거시적 흐름 종합</div>
        <h2 className="font-display text-3xl md:text-4xl mb-4">용도별 건축물 누적 면적 분석</h2>
        <p className="text-ink-soft max-w-2xl text-lg leading-relaxed mb-12">
          시계열 분석의 결과를 한눈에 확인할 수 있는 시대별 업종 구성 변화 누적 면적 그래프이다. 산업의 전환이 공간에서 어떤 규모로 일어났는지 시각화한다.
        </p>
        <div className="w-full bg-white border border-rule/50 rounded-2xl mb-8 overflow-hidden shadow-sm">
          <img src="/graphs/timeline_area.png" alt="시대별 업종 구성 변화 (누적 영역)" className="w-full h-auto" />
        </div>
        <div className="mt-2 text-[12px] text-ink-soft opacity-70 text-right">
          기준: 국토교통부 훈령 제1746호 ’도시⦁군관리계획수립지침‘ [별표3] 용도지역용도지구 및 도시군계획시설의 표시기준 색상
        </div>
      </FadeIn>

      {/* TIMELINE ERAS (From ver3) */}
      <FadeIn as="section" className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <ol className="relative space-y-16 md:space-y-24">
          {eras.map((e) => (
            <li key={e.era} className="relative grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 lg:gap-x-16">
              
              <div className="hidden md:block">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 shadow-sm border border-rule/30">
                  <img 
                    src={e.image}
                    alt={e.era} 
                    className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                    onError={(img) => {
                      img.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="font-mono text-xs uppercase tracking-widest text-violet">{e.era}</div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl mt-2">{e.title}</h3>
                <p className="mt-4 text-ink-soft max-w-xl leading-relaxed text-sm md:text-base">{e.desc}</p>
                <div className="mt-4 text-xs font-mono text-ink-soft bg-zinc-50 border border-zinc-100 w-fit px-2 py-1 rounded">
                  신규 준공 건물 ≈ {e.buildings}동
                </div>
              </div>

            </li>
          ))}
        </ol>
      </FadeIn>

      {/* BUILDING CHART & 3D VIEWER (From ver3) */}
      <FadeIn as="section" className="container-prose py-16 ">
        <div className="eyebrow mb-3">시대별 신규 준공 건물 수</div>
        <h2 className="font-display text-3xl md:text-4xl mb-2">언제, 얼마나 지어졌는가</h2>
        <p className="text-ink-soft max-w-2xl mb-10">
          1970년대 이전 준공 건물이 56동으로 가장 많고, 2000년대 들어 지식산업센터로 합필되며 신규 준공은 크게 줄었다.
          2020년대 신축은 적지만 모두 F&B·복합 용도로 기획되어 영향력은 매우 크다.
        </p>
        <div className="w-full"> 
          <div className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden border border-rule/50 bg-card shadow-sm">
            <iframe
              src="/seongsu-3d-viewer.html"
              title="성수동 360도 뷰어"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        <br/><br/>
        <div className="h-80 bg-card border border-rule rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={buildYears}>
              <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="decade" stroke="var(--color-ink-soft)" fontSize={12} />
              <YAxis stroke="var(--color-ink-soft)" fontSize={12} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {buildYears.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.decade === "2020s" ? "var(--color-recent)" : "var(--color-historic)"} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-[12px] text-ink-soft opacity-70 text-right">
          자료출처: 국토교통부 건축물대장, 국토정보플랫폼
        </div>
      </FadeIn>

      {/* LAND USE DIFFERENTIATION SECTION (From Current) */}
      <FadeIn as="section" className="container-prose py-16 md:py-24 ">
        <div className="eyebrow mb-3 text-primary">미시적 접근</div>
        <h2 className="font-display text-3xl md:text-5xl mb-6 text-ink">토지이용 분화: 9개 필지의 시계열적 변화</h2>
        <p className="text-ink-soft max-w-2xl text-lg leading-relaxed mb-12">
          거시적인 건축물 준공 시기뿐만 아니라, 특정 필지들의 물리적 형태와 용도가 1978년부터 2026년까지 어떻게 분화되어 왔는지 9개의 대표 사례를 통해 미시적으로 추적한다.
        </p>

        <div className="flex flex-col gap-8 mb-16">
          <div className="bg-white border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">시대별 필지변화 대상 위치 (1~9번)</div>
            <img src="/graphs/parcel_map.png" alt="시대별 필지변화 대상 위치" className="w-full h-auto max-w-3xl mx-auto" />
          </div>
          <div className="bg-white border border-rule/50 rounded-2xl p-4 shadow-sm">
            <div className="text-sm text-ink-soft font-mono mb-4 text-center">시대별 필지변화 구체화 (1978~2026)</div>
            <img src="/graphs/parcel_grid.png" alt="시대별 필지변화 구체화" className="w-full h-auto max-w-5xl mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {parcels.map((p) => (
            <div key={p.id} className="bg-card border border-rule/50 rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="font-display text-lg text-ink mb-4 flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0 mt-0.5">
                  {p.id}
                </span>
                <span className="leading-snug">{p.title}</span>
              </h3>
              
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ochre shrink-0 mt-2"></div>
                  <p className="text-ink-soft text-sm leading-relaxed">{p.implication}</p>
                </li>
              </ul>
              
              <div className="mt-auto pt-4 border-t border-rule/30">
                <div className="text-[10px] font-mono text-ochre uppercase mb-1">현재 주요 시설</div>
                <div className="text-sm font-medium text-ink truncate" title={p.current}>
                  {p.current}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/", label: "소개" }} next={{ to: "/east-west", label: "02 동서비교" }} />
    </>
  );
}

export default Timeline;
