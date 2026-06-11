import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";

export const Route = createFileRoute("/east-west")({
  head: () => ({
    meta: [
      { title: "05 동서 비교 · 성수동 아카이브" },
      { name: "description", content: "같은 성수동, 다른 도시 구조 — 동측 대형 필지와 서측 골목길의 비대칭." },
    ],
  }),
  component: EastWest,
});

const compare = [
  { key: "필지 규모", east: "대형 필지 · 합필 개발", west: "소규모 필지 · 분할 유지" },
  { key: "건축 유형", east: "지식산업센터 · 중대형 오피스", west: "저층 공장 · 다세대" },
  { key: "주된 기능", east: "업무 · 입주 제조업", west: "제조업 · 상업 공존" },
  { key: "가로 구조", east: "광폭 도로 · 차량 동선", west: "골목길 · 보행 친화" },
  { key: "변화 속도", east: "빠른 재개발", west: "점진적 리모델링" },
  { key: "엔트로피", east: "낮음 (업무 집중)", west: "높음 (다중 용도)" },
];

function EastWest() {
  return (
    <>
      <PageHeader index="05" eyebrow="Chapter 05 · East / West" title="같은 성수동, 다른 도시 구조" subtitle="성수이로를 가운데 두고 동측과 서측은 전혀 다른 도시 조직을 가지고 있다. 필지 크기 하나가 건물 형태, 업종, 보행 경험까지 결정한다." />

      <section className="container-prose pb-16">
        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
          <div className="bg-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-2 py-1 rounded bg-indigo text-primary-foreground">EAST</span>
              <span className="eyebrow">동측</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-indigo">대형 필지의 수직 도시</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              합필 개발로 만들어진 대형 블록. 지식산업센터가 제조와 업무를
              한 건물 안에 수직으로 쌓아 올렸다. 광폭 도로와 차량 중심 동선.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>· 대형 필지 (1,000m² 이상)</li>
              <li>· 지식산업센터 군집</li>
              <li>· 업무 중심 + 입주 제조</li>
              <li>· 빠른 재개발 사이클</li>
            </ul>
          </div>
          <div className="bg-card p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-2 py-1 rounded bg-violet text-primary-foreground">WEST</span>
              <span className="eyebrow">서측</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-violet">골목길의 수평 도시</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              소규모 필지가 그대로 남아 있는 골목 구조. 저층 공장과 다세대,
              상업이 한 가로 안에서 만난다. 보행 친화적이고 점진적으로 변한다.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>· 소규모 필지 (200–500m²)</li>
              <li>· 저층 제조·다세대 혼재</li>
              <li>· 제조업과 상업 공존</li>
              <li>· 점진적 리모델링</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">대조표</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">한 줄로 보는 차이</h2>
        <div className="border border-rule rounded-lg overflow-hidden bg-card">
          <div className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] divide-x divide-rule border-b border-rule bg-muted/50">
            <div className="px-4 py-3 eyebrow">항목</div>
            <div className="px-4 py-3 eyebrow text-indigo">동측</div>
            <div className="px-4 py-3 eyebrow text-violet">서측</div>
          </div>
          {compare.map((c) => (
            <div key={c.key} className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] divide-x divide-rule border-b border-rule last:border-0">
              <div className="px-4 py-4 text-sm font-mono text-ink-soft">{c.key}</div>
              <div className="px-4 py-4 text-sm">{c.east}</div>
              <div className="px-4 py-4 text-sm">{c.west}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">변화의 원인</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">왜 동·서가 갈라졌나</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            ["EAST · 합필 개발 압력", "뚝섬 개발 압력 + 2000년대 성수 IT산업단지 지정. 격자형 가로망과 단일 토지 소유 구조가 합필을 쉽게 만들었고, 그 결과 대형 지식산업센터로 신축되거나 단일 기업이 부지를 점유."],
            ["WEST · 소필지 유지 구조", "좁은 골목망이 합필 자체를 어렵게 만든다. 1970년대부터 작은 필지로 세워진 건물이 그대로 남았고, 신축되더라도 필지는 그대로인 채 층수만 올라간다. 제조업보다 사무실·미용실·음식점이 주를 이룬다."],
          ].map(([h, d]) => (
            <div key={h} className="border border-rule rounded-lg bg-card p-5">
              <div className="font-display text-base">{h}</div>
              <p className="mt-2 text-ink-soft leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="eyebrow mb-3">필지 유형 분류 (제안 분석 프레임)</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">A · B · C 세 가지 진화 경로</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            ["A 전통 고수형", "2010년에도 수제화·인쇄 공장, 2026년 현재도 합병·분할 없이 그대로 공장으로 등록된 필지. 제조업이 생존할 수 있는 마지막 공간적 한계선."],
            ["B 밀려난 합병형", "과거 소규모 공장이 쪼개져 있던 자리에 여러 필지가 하나로 합병되어 대형 카페 · 팝업스토어 · 지식산업센터가 들어선 필지."],
            ["C 쪼개진 분할형", "과거 대형 공장 부지가 잘게 분할되어 각각 트렌디한 소규모 리테일 · 편집숍으로 변모한 필지."],
          ].map(([h, d]) => (
            <div key={h} className="border border-rule rounded-lg bg-card p-5">
              <div className="font-display text-base">{h}</div>
              <p className="mt-2 text-ink-soft leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft max-w-3xl leading-relaxed">
          한 줄 요약 — 성수동의 토지 이동 이력은 자본의 유입 규모에 따라 공간이 합병·분할되며
          전통 제조업 생태계가 수직화되거나 외곽으로 밀려나는 <em>공간 잔존과 퇴출의 변천사</em>를 보여준다.
        </p>
      </section>
    </>
  );
}
