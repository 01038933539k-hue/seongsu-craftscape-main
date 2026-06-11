import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/implications")({
  head: () => ({
    meta: [
      { title: "07 시사점 · 성수동 아카이브" },
      { name: "description", content: "성수동 제조업의 미래에 대한 다섯 가지 정책적 · 도시계획적 시사점." },
    ],
  }),
  component: Implications,
});

const messages = [
  { n: "01", t: "제조업은 사라지지 않았다", b: "성수동은 제조업이 사라진 지역이 아니다. 가시성이 낮아진 골목 안쪽으로 옮겨갔을 뿐, 업체 수와 종사자 규모는 여전히 도시 단위에서 의미 있는 군집이다." },
  { n: "02", t: "제조와 상업은 적대가 아닌 공존", b: "두 산업은 한 건물, 한 가로 안에서 재구성되고 있다. 1층 매장 위 2층 작업장, 식료품 제조 위 직영 카페 — 새로운 결합 방식이 자생적으로 나타난다." },
  { n: "03", t: "수직 혼합이라는 도시 형식", b: "성수의 진짜 혁신은 단면에 있다. 같은 건물 내 층마다 다른 업종이 들어서는 수직 혼합 구조는 한국 도시에서 흔치 않은 도시 형식이다." },
  { n: "04", t: "정체성으로서의 제조업", b: "성수의 ‘힙함’은 카페가 아니라 그 옆에 있는 인쇄소와 가죽 공방이 만들어 낸다. 제조업이 사라지면 성수의 정체성도 함께 옅어진다." },
  { n: "05", t: "보존과 활성화의 균형", b: "향후 정책은 제조업 보존과 상업 활성화를 양자택일로 다루지 말아야 한다. 임대료 안정화, 소규모 필지 보호, 수직 혼합 용도 인허가가 함께 설계되어야 한다." },
];

function Implications() {
  return (
    <>
      <PageHeader index="07" eyebrow="Chapter 07 · Implications" title="성수동 제조업의 미래" subtitle="조사 결과를 다섯 개의 메시지로 정리한다. 도시는 사라진 것을 슬퍼하기 전에, 남아 있는 것을 먼저 헤아려야 한다." />

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
            <div className="eyebrow">처음으로</div>
            <h3 className="font-display text-2xl mt-2">다른 장도 둘러보기</h3>
            <p className="text-ink-soft mt-3 text-sm">지도와 그래프로 직접 데이터를 탐색하면 시사점이 더 입체적으로 읽힌다.</p>
            <Link to="/map" className="mt-5 inline-flex items-center gap-2 text-sm text-violet hover:gap-3 transition-all">
              지도로 돌아가기 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-lg border border-indigo/40 bg-indigo text-primary-foreground p-8">
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
