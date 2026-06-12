import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "06 지식산업센터 · 성수동 아카이브" },
      { name: "description", content: "성수동 225개 상점의 위치·층별 입주현황·건물 폴리곤을 인터랙티브 지도에서 탐색." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Chapter 06 · Knowledge Industry Center"
        title="지식산업센터와 공간 분포"
        subtitle="225개 상점·공장·사무실의 실측 입주 데이터와 건축물 폴리곤을 한 지도에 겹쳐 보았다. 마커를 클릭하면 건물별 층별 입주 리스트가 펼쳐진다."
      />
    </>
  );
}
