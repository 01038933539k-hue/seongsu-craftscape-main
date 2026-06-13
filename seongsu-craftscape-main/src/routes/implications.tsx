import { createFileRoute, Link } from "@tanstack/react-router";
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
  { n: "01", t: "수직으로 이동하는 제조업", b: "성수동의 제조업은 평면에서 밀려나 수직으로 이동하고 있다. 대형 지식산업센터와 이면 도로의 노후 건물 속에서 제조와 상업, 업무 공간은 층별로 완벽히 분화되어 새로운 형태의 입체적 생태계를 이루고 있다." },
  { n: "02", t: "입체적 공생을 위한 도시계획", b: "도시계획의 방향은 평면적 분리에서 입체적 공생으로 전환되어야 한다. 각 층과 블록이 고유한 기능을 수행하며 톱니바퀴처럼 맞물릴 때, 성수동 특유의 '만드는 도시'로서의 정체성은 상업적 압박 속에서도 지속될 수 있다." },
];

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Epilogue" title="에필로그" subtitle="도시계획 및 공간 분석 결과를 바탕으로 도출된 최종결론을 제시한다." />

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

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-rule bg-card p-8">
            <div className="eyebrow text-primary font-bold">처음으로</div>
            <h3 className="font-display text-2xl mt-2 text-ink">데이터 탐색하기</h3>
            <p className="text-ink-soft mt-3 text-sm">지도와 시각화 데이터를 통해 공간 분석 결과를 입체적으로 확인할 수 있다.</p>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <Link to="/timeline" className="inline-flex items-center gap-2 text-sm font-bold text-violet hover:gap-3 transition-all">
                시계열 분석으로 이동 <ArrowRight size={16} />
              </Link>
              <Link to="/database" className="inline-flex items-center gap-2 text-sm font-bold text-violet hover:gap-3 transition-all">
                데이터베이스로 이동 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-indigo/40 bg-indigo text-white p-8">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">Research Summary</div>
            <h3 className="font-display text-2xl mt-2">입체적 공간 구조를 통한 지속 가능한 공생</h3>
            <p className="mt-3 text-sm opacity-90 leading-relaxed">
              본 연구는 소비 공간과 생산 공간의 공간적 중첩이 만들어내는 성수동 특유의 산업 생태계를 실증적 데이터로 규명하였다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
