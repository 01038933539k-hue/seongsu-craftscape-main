import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import floorsHistoryImg from "../assets/floors-history.png";
import floorsSectionImg from "../assets/floors-section.png";

export const Route = createFileRoute("/floors")({
  head: () => ({
    meta: [
      { title: "03 층별 용도 분석 · 성수동 아카이브" },
      { name: "description", content: "건물 내부에서 제조업, 상업, 업무, 주거가 층별로 공존하는 수직 혼합 구조 분석." },
    ],
  }),
  component: Floors,
});

const stackByFloor = [
  { floor: "5F+", 상업: 4, 제조: 6, 업무: 36, 주거: 46, 기타: 8 },
  { floor: "4F", 상업: 6, 제조: 14, 업무: 30, 주거: 42, 기타: 8 },
  { floor: "3F", 상업: 12, 제조: 28, 업무: 28, 주거: 24, 기타: 8 },
  { floor: "2F", 상업: 24, 제조: 38, 업무: 18, 주거: 12, 기타: 8 },
  { floor: "1F", 상업: 58, 제조: 22, 업무: 8, 주거: 4, 기타: 8 },
  { floor: "지하", 상업: 8, 제조: 22, 업무: 4, 주거: 0, 기타: 6 },
];

const useColors: Record<string, string> = {
  상업: "var(--color-ochre)",
  제조: "var(--color-violet)",
  업무: "var(--color-cobalt)",
  주거: "var(--color-indigo)",
  기타: "#9ca3af",
};

const composites = [
  {
    name: "성수동2가 309-126 · 노후 대로변 건물",
    note: "빈티지샵·카센터·수제화·주거의 비의도적 공생. 대로변 입지 + 노후 스펙이 동시에 작동.",
    mix: ["1F 빈스터·동양카센터·에이레네", "2F 인코어테크놀로지(전자)", "3F 주거", "4F 주거"],
  },
  {
    name: "성수동2가 321-29 · 상업화 활발 블록",
    note: "공유오피스(임대 사무) 중심에 저층 음식점·판매가 고르게 분포.",
    mix: ["1F 음식점·판매", "2F 음식점·판매", "3F 공유오피스", "4F 공유오피스"],
  },
  {
    name: "성수동2가 309-148 · 협성빌딩",
    note: "협성정밀(기계) · 메디우드(의료품) — 제조업이 상층까지 유지된 사례.",
    mix: ["1F 제조 작업장", "2F 제조", "3F 메디우드", "4F 협성정밀"],
  },
  {
    name: "성수동2가 321-62 · 이면 블록",
    note: "저층에 주거(파랑)가 압도적 — 젠트리피케이션이 아직 덜 진행된 골목.",
    mix: ["1F 주거", "2F 주거", "3F 소규모 사무"],
  },
];

function Floors() {
  return (
    <>
      <PageHeader index="03" eyebrow="Chapter 03 · Vertical Mix" title="수직적으로 혼합되는 도시" subtitle="성수동은 평면이 아니라 단면으로 읽어야 한다. 한 건물 안에서 제조 · 상업 · 업무 · 주거가 층을 나눠 동시에 진행된다." />

      <section className="container-prose pb-16">
        <div className="grid md:grid-cols-4 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
          {[
            ["저층부", "상업", "var(--color-ochre)", "1F 도로면 — 카페·매장·쇼룸"],
            ["중층부", "제조", "var(--color-violet)", "2-3F — 작업장·생산"],
            ["상층부 A", "업무", "var(--color-cobalt)", "4F+ — 스튜디오·사무실"],
            ["상층부 B", "주거", "var(--color-indigo)", "4F+ — 다세대·임대"],
          ].map(([z, label, color, desc]) => (
            <div key={z} className="bg-card p-6">
              <div className="eyebrow">{z}</div>
              <div className="mt-2 font-display text-2xl" style={{ color: color as string }}>{label}</div>
              <div className="mt-2 text-sm text-ink-soft">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">층별 용도 구성비</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">층이 높아질수록 용도가 바뀐다</h2>
        <div className="h-96 bg-card border border-rule rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stackByFloor} layout="vertical" stackOffset="expand">
              <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => `${Math.round(v * 100)}%`} stroke="var(--color-ink-soft)" fontSize={12} />
              <YAxis type="category" dataKey="floor" stroke="var(--color-ink-soft)" fontSize={12} width={50} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              {Object.keys(useColors).map((k) => (
                <Bar key={k} dataKey={k} stackId="a" fill={useColors[k]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">건축물 층별 용도 및 수직적 혼재 특성</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">데이터와 현장 사이의 이야기</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">수직적 용도 분리 패턴</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              성수동 대다수 블록에서는 고층으로 갈수록 주거 및 기타 시설의 비율이 높아지고, 저층부에는 상업시설(음식점·판매)이 밀집하는 공통적인 수직 분리 패턴을 보여줍니다. 이는 건물주가 상층부에 직접 거주하면서 아래층만 상업시설로 임대 주거나, 기존 주거 임차인이 위층에 남아 있는 구조에서 기인합니다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">행정 데이터와 현장의 온도 차 (기타 용도)</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              건축물대장상 '기타' 용도로 남아 있는 공간 중 상당수는 실제 현장에서 팝업스토어, 단기 전시, 임시 팝업 매장 등으로 활발히 운영되고 있습니다. 젠트리피케이션으로 인한 높은 임차 회전율 때문에 일시적 공실이나 용도 전환이 발생해도 행정 데이터상에는 즉각 반영되지 않고 기존 용도로 잔존하는 한계가 존재합니다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">60대 장기 거주층과 사각지대의 주거</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              준공업지역은 주거 중심의 전면 재개발이 제한되어 있어, 역설적으로 오랜 시간 살아온 고령층 거주자들이 밀려나지 않고 동네에 남아 버틸 수 있는 터전이 되었습니다. 공장과 창고 사이에 끼어 있는 비공식 주거 공간들이 행정 사각지대 속에서 살아남아 공간과 생활이 긴밀히 연결된 독특한 주거 생태계를 유지하고 있습니다.
            </p>
          </div>
          <div className="border border-rule rounded-lg bg-card p-5">
            <div className="font-display text-base">한 지번에 여러 건물이 공존하는 이유</div>
            <p className="mt-2 text-ink-soft leading-relaxed">
              본래 필지가 크고 불규칙한 공장 및 창고 지대였던 특성상, 전면 철거 후 재개발 대신 기존 필지 내에서 필요에 따라 리모델링과 증축을 반복해 온 건물이 많기 때문입니다. 아울러 도로명 주소 정비 작업의 지연으로 지번 주소와 도로명 주소 간 매핑이 완벽히 일치하지 않는 행정적 요인도 작용합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">준공 시대별 업종 구성 변화</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">시대의 흐름에 따른 층별 변화</h2>
        <div className="bg-card border border-rule rounded-lg p-6 overflow-hidden flex flex-col items-center">
          <img 
            src={floorsHistoryImg} 
            alt="성수동 건물 준공시대별 업종 구성 변화 (현재 용도 기준, 지상 1~5층)" 
            className="w-full max-w-4xl h-auto"
          />
          <p className="mt-6 text-sm text-ink-soft text-center max-w-2xl">
            1970년대 이전부터 2020년대에 이르기까지 준공된 건물들의 시대별 입종 비율 변화(꺾은선) 및 누적 영역 그래프입니다. 과거 제조업 중심에서 점차 상업 및 사무 공간으로 전환되는 입주 양상을 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">대표 수직 혼합 사례 — 6개 표본 블록</div>
        <h2 className="font-display text-2xl md:text-3xl mb-8">한 건물, 네 개의 일</h2>
        
        <div className="bg-card border border-rule rounded-lg p-6 overflow-hidden flex flex-col items-center mb-8">
          <img 
            src={floorsSectionImg} 
            alt="성수동 성수2가 건물별 층수 및 용도 분포 (단면도)" 
            className="w-full h-auto"
          />
          <p className="mt-6 text-sm text-ink-soft text-center max-w-2xl">
            6개 표본 건물의 실제 층별 용도 분포 단면도입니다. 건물의 노후도와 위치(대로변, 이면도로 등)에 따라 제조업, 상업, 업무, 주거가 한 건물 내에서 어떻게 혼합되어 있는지 시각적으로 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {composites.map((c) => (
            <div key={c.name} className="border border-rule rounded-lg bg-card overflow-hidden">
              <div className="px-5 py-4 border-b border-rule">
                <div className="font-display text-lg">{c.name}</div>
                <div className="text-xs text-ink-soft mt-1">{c.note}</div>
              </div>
              <div className="divide-y divide-rule">
                {[...c.mix].reverse().map((m, i) => (
                  <div key={i} className="px-5 py-3 flex items-center gap-4 text-sm">
                    <span className="font-mono text-xs text-ink-soft w-10">{c.mix.length - i}F</span>
                    <span>{m.replace(/^\dF\s/, "")}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="eyebrow mb-3">왜 수직 혼합이 유지되는가</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">노후 대로변 건물의 비의도적 공생 구조</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            ["제조업의 물류 네트워크 입지", "카센터나 수제화 공방 같은 전통 제조업들이 성수동 대로변에 자리 잡은 것은 철저한 물류적 논리 때문입니다. 무거운 자재를 들여오고 완제품을 출고하려면 좁은 골목보다 차량 진입이 원활한 대로변이 훨씬 유리하며, 도매상 및 납품처와의 접근성을 확보해야 하기 때문입니다."],
            ["노후화된 건물 스펙이 만든 상생 장벽", "입지 자체는 유동인구가 많은 대로변이라 훌륭하지만, 엘리베이터가 없거나 주차 공간이 협소한 등 건물의 물리적 스펙이 낙후되어 있으면 임대료를 무작정 올리더라도 세련된 프리미엄 상업시설이 쉽게 진입하지 못합니다."],
            ["노후 건물의 비의도적 공생 생태계", "결과적으로 높은 유동인구의 이점은 감각적인 빈티지숍이나 트렌디한 카페가 활용하고, 낮은 건물 스펙 덕분에 임대료 폭등 피해를 면한 카센터와 기존 주거 임차인들은 쫓겨나지 않고 자리를 지킬 수 있게 됩니다. 서로 전혀 다른 성격과 이해관계를 가진 업종들이 한 지붕 아래 공존하는 독특한 상생 생태계가 형성된 비결입니다."],
            ["구분 소유 구조로 인한 개발 제약", "건물 내 층별 혹은 호실별 소유주가 제각각 분산되어 있거나 필지가 잘게 쪼개져 있는 경우, 건물 전체의 용도를 하나로 통일하거나 통째로 재개발하는 것이 현실적으로 불가능합니다. 소유주마다 독립적으로 임대 결정을 내리기 때문에 다양한 업종의 혼재 상태가 오랫동안 지속됩니다."],
          ].map(([h, d]) => (
            <div key={h} className="border border-rule rounded-lg bg-card p-5">
              <div className="font-display text-base">{h}</div>
              <p className="mt-2 text-ink-soft leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
