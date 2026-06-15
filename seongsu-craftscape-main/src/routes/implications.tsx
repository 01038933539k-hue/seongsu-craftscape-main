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
    t: "동·서측의 공생과 이면도로로의 숨어듦 (Ch.1 & Ch.2)",
    b: "동쪽의 최신 지식산업센터와 서쪽의 낡은 공장지대가 대비되면서도 서로 연결되어 공생하고 있습니다. 대규모 공장들은 완전히 사라지지 않고 이면도로의 작은 필지나 건물 위층으로 자리를 옮기며 나름의 생태계를 유지했습니다.",
    color: "var(--color-violet)"
  },
  {
    n: "Data 02",
    t: "가로와 건물의 수직적·수평적 혼합 (Ch.3 & Ch.4)",
    b: "가로의 특성과 유동인구에 따라 1층은 카페나 팝업스토어가, 위층은 공장이나 사무실이 섞여 있는 높은 업종 혼합도를 보입니다. 제한된 공간 속에서 상업 시설과 기존 산업이 층을 나누어 함께 살아갑니다.",
    color: "var(--color-ochre)"
  },
  {
    n: "Data 03",
    t: "패션·리테일 중심의 체질 개선 (Ch.5)",
    b: "전통 제조업의 무조건적인 쇠퇴가 아니라, 팝업스토어와 패션·리테일 클러스터로 진화하며 새로운 부가가치를 창출하는 긍정적인 형태의 젠트리피케이션이 관찰됩니다.",
    color: "var(--color-primary)"
  }
];

const messages = [
  { 
    n: "01", 
    t: "공간적 이동과 성수동만의 장소성 형성", 
    b: "제조업은 사라진 것이 아니라 성수동 내에서 자리를 옮기며 생태계를 유지하고 있습니다. 이렇게 남은 작은 공장과 창고 시설들이 새로운 상업 자본과 섞이며 성수동만의 독특한 매력(장소성)을 만들어냅니다.",
    borderColor: "var(--color-violet)"
  },
  { 
    n: "02", 
    t: "건물 단위의 수직적 용도 혼합 (Vertical Mix)", 
    b: "비싼 임대료를 감당하기 위해 단일 건물 안에서 저층부 상업시설과 상층부 제조·사무 공간이 섞여 들어가는 수직적 혼합 현상이 나타납니다. 이는 상업과 산업이 공존하기 위해 자생적으로 타협한 결과입니다.",
    borderColor: "var(--color-ochre)"
  },
  { 
    n: "03", 
    t: "긍정적 젠트리피케이션과 지속가능성", 
    b: "단순히 기존 산업이 쫓겨나는 부정적 현상을 넘어, 소비 공간으로 진화하며 부가가치를 창출하는 긍정적 측면이 있습니다. 낡은 공장 지대가 트렌디한 클러스터로 체질을 개선한 것입니다.",
    borderColor: "var(--color-primary)"
  },
  { 
    n: "04", 
    t: "기존 산업 보호를 위한 제도적 개입", 
    b: "활력을 유지하면서도 영세 공장들이 너무 빨리 밀려나는 것을 막으려면, 임대료 안정화 구역을 지정하거나 층별로 용도를 유연하게 풀어주는 등 도시계획 차원의 적극적인 개입이 필요합니다.",
    borderColor: "var(--color-ink)"
  },
];

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Conclusion" title="최종결론: 성수동 제조업의 미래" subtitle="앞선 5개 챕터의 분석 결과를 종합하여, 성수동의 현재를 진단하고 도시계획적 시사점을 도출합니다." />

      <FadeIn as="section" className="container-prose pb-24">
        {/* DATA & FINDINGS (TOP) */}
        <div className="mb-12">
          <div className="eyebrow mb-6 text-ink">Data & Findings : 챕터별 핵심 분석 결과</div>
          <div className="grid md:grid-cols-3 gap-6">
            {findings.map((f) => (
              <div key={f.n} className="bg-card border border-rule rounded-xl p-6 shadow-sm border-t-4" style={{ borderTopColor: f.color }}>
                <div className="font-mono text-sm mb-3" style={{ color: f.color }}>{f.n}</div>
                <h3 className="font-display text-lg mb-4 text-ink leading-tight">{f.t}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS / CONNECTION (MIDDLE) */}
        <div className="flex justify-center items-center py-8 opacity-50">
          <div className="flex flex-col items-center">
            <div className="h-16 w-px bg-rule"></div>
            <ArrowDown className="text-ink-soft mt-2" size={24} />
            <div className="text-xs font-mono uppercase tracking-widest text-ink-soft mt-3">Leads to Implications</div>
          </div>
        </div>

        {/* IMPLICATIONS (BOTTOM) */}
        <div className="mt-8 mb-16">
          <div className="eyebrow mb-6 text-ink">Implications : 도출된 4가지 시사점</div>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.n} className="bg-card p-6 md:p-8 rounded-xl border border-rule/50 shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: m.borderColor }}></div>
                <div className="font-display text-4xl md:text-5xl opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: m.borderColor }}>{m.n}</div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl leading-tight text-ink mb-3">{m.t}</h3>
                  <p className="text-ink-soft leading-relaxed text-sm md:text-base">{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POLICY SUGGESTIONS */}
        <div className="mt-20 pt-16 border-t border-rule">
          <div className="eyebrow mb-3">성수동 준공업지역의 특성과 미래 가치</div>
          <h2 className="font-display text-2xl md:text-3xl mb-8">도시 정책적 제언</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            {[
              ["층별 특성을 고려한 입체적 용도계획", "기존의 평면적인 용도 지정을 넘어서, 건물의 층별로 허용하는 용도와 혜택(건폐율/용적률)을 다르게 주는 입체적 계획이 필요합니다. 이를 통해 상업시설과 작은 공장들이 마찰 없이 수직적으로 공존할 수 있도록 제도적으로 뒷받침해야 합니다."],
              ["낡은 건물의 한계를 역이용한 젠트리피케이션 속도 조절", "주차 공간이 부족하고 엘리베이터가 없는 낡은 건물의 물리적 한계가 오히려 대형 자본이 한꺼번에 들어오는 것을 막아주었습니다. 이러한 '불편함'이 영세 제조업이 버틸 수 있는 자연스러운 방어막 역할을 했다는 점을 정책에 활용할 필요가 있습니다."],
              ["골목길(미세 격자망)을 보존하는 점진적 재생", "성수동 특유의 촘촘한 골목길과 낡은 도로 구조는 보행자들이 천천히 걷게 만들고 동네의 활력을 높이는 핵심입니다. 모두 밀어버리고 새로 짓는 전면 재개발보다는 기존 골목을 살리며 조금씩 고쳐나가는 점진적 재생 방식이 바람직합니다."],
              ["화이트존(비욘드 조닝) 도입 검토", "주거, 상업, 공업이 한데 섞여 있는 성수동만의 특성을 살리기 위해, 건축물의 용도 규제를 확 풀어주는 '화이트존(입지규제최소구역)' 제도의 도입을 검토해야 합니다. 동네 특성에 맞는 자연스러운 산업 융합 공간이 생겨나도록 유도하는 것입니다."],
            ].map(([h, d]) => (
              <div key={h} className="border border-rule rounded-xl bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-display text-lg text-ink font-bold">{h}</div>
                <p className="mt-3 text-ink-soft leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-rule bg-card p-8 hover:border-violet transition-colors">
            <div className="eyebrow text-primary font-bold">처음으로</div>
            <h3 className="font-display text-2xl mt-2 text-ink">데이터 탐색하기</h3>
            <p className="text-ink-soft mt-3 text-sm">지도와 시각화 데이터베이스를 통해 공간 분석 결과를 입체적으로 확인하실 수 있습니다.</p>
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
            <p className="mt-3 text-sm opacity-90 leading-relaxed">
              본 프로젝트는 소비 공간과 생산 공간의 물리적 중첩이 만들어내는 성수동 특유의 산업 생태계와 긍정적 변화를 실증적 데이터로 규명하였습니다.
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

export default Implications;
