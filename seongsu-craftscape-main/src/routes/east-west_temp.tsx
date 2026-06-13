import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";

export const Route = createFileRoute("/east-west_temp")({
  head: () => ({
    meta: [
      { title: "02 동서 비교분석 · 성수동 아카이브" },
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
      <PageHeader index="02" eyebrow="Chapter 02 · East / West" title="같은 성수동, 다른 도시 구조" subtitle="성수이로를 가운데 두고 동측과 서측은 전혀 다른 도시 조직을 가지고 있다. 필지 크기 하나가 건물 형태, 업종까지 결정한다." />

      <section className="container-prose pb-16">
        <div className="w-full h-[500px] bg-card border-2 border-dashed border-rule/50 rounded-2xl flex flex-col items-center justify-center text-ink-soft font-mono mb-16 relative">
          <span className="mb-2">[ 동서 비교 지도 영역 ]</span>
          <span className="text-sm opacity-70">※ 범례(Legend) 및 방위표(Compass) 포함 필수</span>
        </div>

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
            <div className="mt-8 aspect-video bg-muted/50 rounded-xl border border-rule/30 flex items-center justify-center text-ink-soft/50 text-sm">
              [ 동측 시대별 변화 사진 ]
            </div>
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
            <div className="mt-8 aspect-video bg-muted/50 rounded-xl border border-rule/30 flex items-center justify-center text-ink-soft/50 text-sm">
              [ 서측 시대별 변화 사진 ]
            </div>
          </div>
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">건축 연도별 시각화 범례</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">신축과 노후 건물의 극단적 대비</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm mb-12">
          <div className="border border-rule rounded-lg bg-card p-5 border-t-4" style={{ borderTopColor: "var(--color-recent)" }}>
            <div className="font-display text-base flex items-center gap-2" style={{ color: "var(--color-recent)" }}>
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "var(--color-recent)" }}></span>
              밝은 하늘색 (최신 신축 건물군)
            </div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              2020년대 이후 지어진 신축 건물들을 나타낸다. 무신사와 같은 대형 업체의 단일 용도 건물이나 복합 용도로 활용되는 작은 필지의 신축 건물이 이에 해당한다. 주거 기능은 거의 없으며, 주로 카페, 사무실 등 상업화된 시설이 밀집해 있다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5 border-t-4" style={{ borderTopColor: "var(--color-historic)" }}>
            <div className="font-display text-base flex items-center gap-2" style={{ color: "var(--color-historic)" }}>
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "var(--color-historic)" }}></span>
              진한 파랑색 (전통 노후 건물군)
            </div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              1970년대 이전부터 자리를 지켜온 오래된 건물들을 나타낸다. 작은 필지의 건물들은 상층부에 주거 기능이 거의 100% 혼재되어 있으며, 넓은 부지의 단층 건물들은 인쇄, 금속 등 하나의 제조업 용도로 길게 유지되어 온 특징을 보인다.
            </p>
          </div>
        </div>

        {/* 시각적 환기를 위한 사진 삽입 */}
        <div className="w-full h-64 bg-muted/50 rounded-2xl border border-rule/30 flex items-center justify-center text-ink-soft/50 font-mono mb-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo/10 to-violet/10 mix-blend-multiply"></div>
          <span className="relative z-10">[ 신축과 노후 건물이 대비되는 성수동 가로경관 사진 (시각적 환기) ]</span>
        </div>

        <div className="eyebrow mb-3">동서 지역의 공간적 개발 격차</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">왜 동·서가 갈라졌나</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">EAST · 동쪽 지역 (대형 필지 및 지식산업센터 중심)</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              과거에는 넓은 부지의 공장과 소필지가 공존했으나, 2000년대 이후 뚝섬 개발 압력과 성수 IT산업단지 지정의 영향으로 여러 필지가 하나로 합쳐지는 합필 개발이 대대적으로 이루어졌다. 현재는 거대한 지식산업센터가 들어서거나 단일 대기업이 통째로 사용하는 대형 부지 중심으로 탈바꿈했다. 격자형 가로망 설계와 단일 토지 소유자 구조 덕분에 이 같은 대규모 개발이 수월했다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">WEST · 서쪽 지역 (소필지 유지 및 골목길 상업화)</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              1970년대부터 이어져 온 작은 필지 구조가 오늘날까지 그대로 유지되고 있다. 최근 새로 지어진 건물들도 기존의 작은 필지 틀을 깨지 않고 위로 층수만 높이는 방식으로 건축되었다. 이는 서쪽 특유의 좁은 골목망 구조가 필지를 합치는 개발(합필)을 어렵게 만들기 때문이다. 이에 따라 제조업보다는 골목길의 보행 친화성을 무기로 삼은 사무실, 미용실, 음식점, 카페 등의 상업시설이 주를 이루게 되었다.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="eyebrow mb-3">필지 유형 분류 (제안 분석 프레임)</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">A · B · C 세 가지 진화 경로</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            ["A 전통 고수형", "2010년에도 수제화·인쇄 공장, 2026년 현재도 합병·분할 없이 그대로 공장으로 등록된 필지. 제조업이 생존할 수 있는 마지막 공간적 한계선."],
            ["B 밀려난 합병형", "과거 소규모 공장이 쪼개져 있던 자리에 여러 필지가 하나로 합병되어 대형 카페 · 팝업스토어 · 지식산업센터가 들어선 필지."],
            ["C 쪼개진 분할형", "과거 대형 공장 부지가 잘게 분할되어 각각 트렌디한 소규모 리테일 · 편집숍으로 변모한 필지."],
          ].map(([h, d]) => (
            <div key={h} className="border border-rule rounded-lg bg-card p-5 flex flex-col">
              <div className="w-full aspect-[4/3] bg-muted/50 rounded-lg border border-rule/30 mb-4 flex items-center justify-center text-ink-soft/40 text-xs">
                [ {h.split(' ')[1]} 관련 사진 ]
              </div>
              <div className="font-display text-base text-ink mb-2">{h}</div>
              <p className="text-ink-soft leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft max-w-3xl leading-relaxed">
          한 줄 요약 — 성수동의 토지 이동 이력은 자본의 유입 규모에 따라 공간이 합병·분할되며
          전통 제조업 생태계가 수직화되거나 외곽으로 밀려나는 <em>공간 잔존과 퇴출의 변천사</em>를 보여준다.
        </p>
      </section>

      {/* 한 줄로 보는 차이 (Moved to bottom) */}
      <section className="container-prose pb-24">
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
    </>
  );
}

export default EastWest;
