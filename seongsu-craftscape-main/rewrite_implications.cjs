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
  { n: "01", t: "제조업은 여전히 성수의 심장이다", b: "성수동은 공장이 카페로 '대체'된 곳이 아닙니다. 제조업은 시야에서 살짝 빗겨난 이면도로와 상층부로 자리를 옮겼을 뿐, 여전히 막대한 규모의 산업 생태계를 유지하고 있습니다." },
  { n: "02", t: "평면적 충돌에서 수직적 공생으로", b: "주거, 상업, 공업 기능은 서로 밀어내지 않고 단면 위에서 켜켜이 쌓이며 공생합니다. 1층의 쇼룸과 2층의 작업장이 한 지붕 아래 얽혀 있는 '수직적 혼합'은 성수동만의 고유한 진화 방식입니다." },
  { n: "03", t: "고유한 도시 정체성의 원천", b: "성수의 매력은 낡은 벽돌집이나 트렌디한 상점 단독으로 만들어지지 않습니다. 무거운 기계음과 감각적인 팝업스토어가 한 골목에서 교차하는 '날것의 이질감'이야말로 대체 불가능한 핵심 정체성입니다." },
  { n: "04", t: "밀어내기가 아닌 껴안기의 도시계획", b: "향후 정책은 젠트리피케이션을 단순한 '상업화'로 단정 짓지 말아야 합니다. 기존 산업을 보호하면서도 새로운 자본과 융합할 수 있도록, 소규모 필지를 보존하고 복합 용도를 장려하는 섬세한 제도가 필요합니다." },
];

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Conclusion" title="최종결론: 성수동 제조업의 미래" subtitle="조사 결과를 네 개의 메시지로 정리한다. 도시는 사라진 것을 슬퍼하기 전에, 남아 있는 것을 먼저 헤아려야 한다." />

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
          <h2 className="font-display text-2xl md:text-3xl mb-6">도시 정책적 관점</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              ["입체적 공간 활용의 가치", "용도가 분리된 전통적인 도시계획과 달리, 성수동은 단일 건물 내에서 생산과 소비가 동시에 일어나는 입체적 복합 구역입니다. 이는 직주근접과 산업 융합을 이끄는 미래 지향적 도시 모델의 훌륭한 실마리를 제공합니다."],
              ["인프라 노후화와 상생의 역설", "건물이 낡고 주차 공간이 부족한 물리적 한계가 역설적으로 급격한 임대료 상승을 억제하는 완충재 역할을 했습니다. 이는 기존 영세 제조업체들이 완전히 밀려나지 않고 버틸 수 있는 '상생의 장벽'으로 작용했습니다."],
              ["보행 중심의 다층적 가로 환경", "격자형 도로망과 미세하게 쪼개진 골목길은 대규모 획일적 개발을 막는 동시에 걷기 좋은 가로 환경을 조성했습니다. 이 오밀조밀한 휴먼 스케일이 다양한 업종과 개성 있는 상업 시설들을 끊임없이 끌어들이는 원동력이 됩니다."],
              ["유연한 제도적 지원의 필요성", "주거, 상업, 공업의 경계가 실시간으로 허물어지는 성수동의 특성을 기존의 경직된 용도지역제(Zoning)로는 온전히 담아내기 어렵습니다. 변화하는 산업 생태계에 맞춰 복합 용도를 유연하게 허용하는 맞춤형 건축 규제와 정책적 배려가 절실합니다."],
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
            <h3 className="font-display text-2xl mt-2 text-ink">다른 장도 둘러보기</h3>
            <p className="text-ink-soft mt-3 text-sm">지도와 그래프로 직접 데이터를 탐색하면 시사점이 더 입체적으로 읽힌다.</p>
            <Link to="/map" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet hover:gap-3 transition-all">
              지도로 돌아가기 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-lg border border-indigo/40 bg-indigo text-white p-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">Closing</div>
            <h3 className="font-display text-2xl mt-2">성수는 여전히 만드는 도시다</h3>
            <p className="mt-3 text-sm opacity-90 leading-relaxed">
              소비와 생산이 한 골목에서 만나는 방식 — 그것이 성수가 다른 동네와
              구별되는 이유이며, 우리가 이 아카이브를 남기는 이유다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync('src/routes/implications.tsx', revisedCode, 'utf8');
console.log('Successfully updated implications.tsx with the refined conclusions.');
