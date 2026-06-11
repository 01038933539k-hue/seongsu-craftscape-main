import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "02 제조업·상업 분포 지도 · 성수동 아카이브" },
      { name: "description", content: "성수동 225개 상점의 위치·층별 입주현황·건물 폴리곤을 인터랙티브 지도에서 탐색." },
    ],
  }),
  component: MapPage,
});

const legend: { color: string; label: string }[] = [
  { color: "#7c3aed", label: "제조업" },
  { color: "#0ea5e9", label: "상업·서비스" },
  { color: "#d97706", label: "F&B·카페" },
  { color: "#10b981", label: "지식산업센터" },
  { color: "#64748b", label: "기타·주거" },
];

function MapPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Chapter 02 · Interactive Map"
        title="어디에, 무엇이, 몇 층에 있는가"
        subtitle="225개 상점·공장·사무실의 실측 입주 데이터와 건축물 폴리곤을 한 지도에 겹쳐 보았다. 마커를 클릭하면 건물별 층별 입주 리스트가 펼쳐진다."
      />

      <section className="container-prose pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">건축물 폴리곤 및 분포도</h2>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="relative w-full h-[78vh] min-h-[560px] rounded-lg overflow-hidden border border-rule bg-card">
            <iframe
              src="/seongsu-map.html"
              title="성수동 대화형 지도"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <aside className="space-y-4">
            <div className="bg-card border border-rule rounded-lg p-5">
              <div className="eyebrow mb-3">범례</div>
              <ul className="space-y-2 text-sm">
                {legend.map((l) => (
                  <li key={l.label} className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">조사 표본</div>
              225개 상점 · 약 60개 건물.
              주소는 도로명 기준으로 표준화하여 동일 건물의 층별 업체를 묶어 팝업으로 표시한다.
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">발견</div>
              제조업은 지식산업센터(성수이로 51 등)에 수직으로 집적되어 있고,
              가로변 노후 건물에서는 1층 F&B · 상층부 사무 또는 주거의 수직 혼합이 일반적이다.
            </div>
          </aside>
        </div>
      </section>

      <section className="container-prose pb-24">
        <h2 className="font-display text-2xl md:text-3xl mb-6">성수이로 마이크로 조닝 실증 지도</h2>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="relative w-full h-[78vh] min-h-[560px] rounded-lg overflow-hidden border border-rule bg-card">
            <iframe
              src="/seongsu-micro-zoning-map.html"
              title="성수이로 마이크로 조닝 실증 지도"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <aside className="space-y-4">
            <div className="bg-card border border-rule rounded-lg p-5">
              <div className="eyebrow mb-3">업종 조닝 범례</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#E53E3E" }} />
                  제조업 (식료품/IT/인쇄)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#DD6B20" }} />
                  F&B (카페/음식점)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#3182CE" }} />
                  리테일 (의류/패션소매)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#805AD5" }} />
                  기타 서비스 및 IT오피스
                </li>
              </ul>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">마이크로 조닝</div>
              업종군을 세분화하여 각 포인트의 분포를 시각화. 특정 구역(zoning)에 어떤 업종이 밀집해 있는지 확인할 수 있습니다.
            </div>
          </aside>
        </div>
      </section>

      <section className="container-prose pb-24">
        <h2 className="font-display text-2xl md:text-3xl mb-6">성수동 3D 뷰어</h2>
        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="relative w-full h-[78vh] min-h-[560px] rounded-lg overflow-hidden border border-rule bg-[#eaeaea]">
            <iframe
              src="/seongsu-3d-viewer.html"
              title="성수동 360도 뷰어"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <aside className="space-y-4">
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">360도 탐색</div>
              마우스를 드래그하여 시점을 이동하고, 스크롤을 통해 확대/축소할 수 있습니다.
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed">
              <div className="eyebrow mb-2 text-ink">입체적 분석</div>
              성수동 노후 건축물들의 입체적인 형태와 배치를 탐색하며, 도시제조업의 공간적 기반을 확인합니다.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
