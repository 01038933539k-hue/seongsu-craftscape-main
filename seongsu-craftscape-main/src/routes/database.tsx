import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { useState, useMemo } from "react";
import data from "../data/seongsuData.json";

export const Route = createFileRoute("/database")({
  head: () => ({
    meta: [
      { title: "08 데이터베이스 · 성수동 아카이브" },
      { name: "description", content: "성수동 225개 상점 및 공장 데이터베이스 검색 및 탐색" },
    ],
  }),
  component: DatabasePage,
});

function DatabasePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSector, setFilterSector] = useState("전체");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.sector.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSector = filterSector === "전체" || item.sector.includes(filterSector);
      return matchSearch && matchSector;
    });
  }, [searchTerm, filterSector]);

  const sectors = ["전체", "제조", "음식점", "카페", "의류", "소매", "팝업", "기타"];

  return (
    <>
      <PageHeader
        index="08"
        eyebrow="Chapter 08 · Data Archive"
        title="성수동 데이터베이스"
        subtitle="조사된 225개 업체의 실측 데이터를 표 형태로 검색하고 탐색할 수 있다."
      />

      <section className="container-prose pb-24">
        <div className="bg-card border border-rule rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
              type="text" 
              placeholder="업체명, 업종, 주소 검색..." 
              className="flex-1 bg-background border border-rule rounded-md px-4 py-2 text-sm focus:outline-none focus:border-violet"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="bg-background border border-rule rounded-md px-4 py-2 text-sm focus:outline-none focus:border-violet"
              value={filterSector}
              onChange={(e) => setFilterSector(e.target.value)}
            >
              {sectors.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          
          <div className="text-sm text-ink-soft mb-4">
            총 {filteredData.length}개의 데이터가 검색되었다.
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm whitespace-nowrap">
              <thead>
                <tr className="border-b border-rule bg-rule/30">
                  <th className="py-3 px-4 font-mono uppercase tracking-wider text-ink-soft font-normal">업체명</th>
                  <th className="py-3 px-4 font-mono uppercase tracking-wider text-ink-soft font-normal">업종</th>
                  <th className="py-3 px-4 font-mono uppercase tracking-wider text-ink-soft font-normal">층수</th>
                  <th className="py-3 px-4 font-mono uppercase tracking-wider text-ink-soft font-normal">주소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {filteredData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-rule/10 transition-colors">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4"><span className="inline-block bg-rule px-2 py-0.5 rounded text-xs">{item.sector}</span></td>
                    <td className="py-3 px-4">{item.floor.includes("층") ? item.floor : `${item.floor}층`}</td>
                    <td className="py-3 px-4 text-ink-soft">{item.address}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-ink-soft">검색 결과가 없다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
