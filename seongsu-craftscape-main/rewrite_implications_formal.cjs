const fs = require('fs');

const revisedCode = `import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/implications")({
  head: () => ({
    meta: [
      { title: "07 최종결론 · 성수동 아카이브" },
      { name: "description", content: "성수동 제조업의 미래에 대한 네 가지 정책적 · 도시계획적 시사점." },
    ],
  }),
  component: Implications,
});

const messages = [
  { n: "01", t: "제조업 생태계의 공간적 이전과 군집 유지", b: "상업화의 진전에도 불구하고 성수동의 제조업은 소멸하지 않았습니다. 주요 간선도로변에서 이면도로의 소규모 필지 및 건축물 상층부로 입지를 전환하며, 도시 내 산업 생태계로서 유의미한 집적 규모와 조업 환경을 지속적으로 유지하고 있습니다." },
  { n: "02", t: "이종 산업 간의 수직적 복합화(Vertical Mixed-use)", b: "단일 용도 중심의 평면적 구역 분리(Zoning)를 벗어나, 개별 건축물 단위에서 저층부 상업시설과 상층부 제조·업무 시설이 결합하는 수직적 복합화가 관찰됩니다. 이는 제한된 공간 내에서 지대 수익 극대화와 기존 산업의 잔존이 타협한 결과입니다." },
  { n: "03", t: "산업 자산(Industrial Heritage)에 기반한 장소성 구축", b: "성수동의 차별화된 장소성(Placemaking)은 단순히 소비적 상업 공간의 밀집에서 기인하지 않습니다. 가동 중인 소규모 공장, 창고 시설 등 살아있는 산업 자산과 신규 상업 자본이 중첩되며 형성된 복합적 경관이 핵심 경쟁력으로 작용합니다." },
  { n: "04", t: "기존 산업 보호를 위한 제도적 개입의 필요성", b: "급격한 지대 상승으로 인한 젠트리피케이션과 영세 제조업체의 이탈을 방지하기 위해 적극적인 제도적 개입이 요구됩니다. 용도지역 변경의 최소화, 영세 공장 보호를 위한 임대료 안정화 구역 지정, 그리고 복합용도건축물 장려 정책이 병행되어야 합니다." },
];

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Conclusion" title="최종결론: 성수동 제조업의 미래" subtitle="도시계획 및 공간 분석 결과를 바탕으로 도출된 네 가지 학술적·정책적 시사점을 제시합니다." />

      <section className="container-prose pb-24">
        <div className="space-y-px bg-rule border border-rule rounded-lg overflow-hidden">
          {messages.map((m) => (
            <div key={m.n} className="bg-card p-8 md:p-12 grid md:grid-cols-[120px_1fr] gap-6 md:gap-10">
              <div className="font-display text-5xl md:text-6xl text-violet leading-none">{m.n}</div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{m.t}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed max-w-2xl">{m.b}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="eyebrow mb-3">성수동 준공업지역의 특성과 미래 가치</div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">도시 정책적 제언</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              ["입체적 토지이용계획(3D Land-use Planning)의 도입", "현재의 평면적 용도지역제를 보완하여, 건축물 층별로 허용 용도와 건폐율/용적률 인센티브를 차등 적용하는 입체적 토지이용계획의 도입이 필요합니다. 이를 통해 상업과 경공업의 마찰을 줄이고 수직적 공존을 제도적으로 지원할 수 있습니다."],
              ["물리적 제약요소를 활용한 젠트리피케이션 지연", "필지 규모의 영세성과 건축물의 노후화, 주차 공간의 부재 등 물리적 제약은 대규모 상업 자본의 무분별한 진입을 제한하는 일종의 방어 기제로 작용했습니다. 이 과정에서 영세 제조업이 잔존할 수 있는 임대료 임계점이 자생적으로 형성되었습니다."],
              ["미세 격자망(Micro-grid) 가로망의 보존 및 활용", "성수동 고유의 세밀한 격자형 가로망과 불규칙한 이면도로 구조는 보행자의 체류 시간을 늘리고 가로 활력을 높이는 핵심 기반입니다. 전면적인 블록 통합 재개발(Clearance) 방식보다는 기존 가로 조직을 유지하는 점진적 수복형 정비가 바람직합니다."],
              ["화이트존(White Zone) 등 복합용도지구의 시범 적용", "주거·상업·공업이 혼재된 성수동의 특성을 반영하여, 건축물의 용도 규제를 대폭 완화하는 ‘화이트존(입지규제최소구역)’ 모델의 도입을 검토해야 합니다. 이를 통해 지역 특성에 맞는 자생적 산업 융합 공간의 창출을 유도할 수 있습니다."],
            ].map(([h, d]) => (
              <div key={h} className="border border-rule rounded-lg bg-card p-5">
                <div className="font-display text-base text-ink font-bold">{h}</div>
                <p className="mt-2 text-ink-soft leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-rule bg-card p-8">
            <div className="eyebrow text-primary font-bold">처음으로</div>
            <h3 className="font-display text-2xl mt-2 text-ink">데이터 탐색하기</h3>
            <p className="text-ink-soft mt-3 text-sm">지도와 시각화 데이터를 통해 공간 분석 결과를 입체적으로 확인하실 수 있습니다.</p>
            <Link to="/map" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet hover:gap-3 transition-all">
              지도 뷰어로 이동 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-lg border border-indigo/40 bg-indigo text-white p-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">Research Summary</div>
            <h3 className="font-display text-2xl mt-2">도시제조업의 자생적 진화</h3>
            <p className="mt-3 text-sm opacity-90 leading-relaxed">
              본 연구는 소비 공간과 생산 공간의 공간적 중첩이 만들어내는 성수동 특유의 산업 생태계를 실증적 데이터로 규명하였습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync('src/routes/implications.tsx', revisedCode, 'utf8');
console.log('Successfully updated implications.tsx with formal report-style text.');
