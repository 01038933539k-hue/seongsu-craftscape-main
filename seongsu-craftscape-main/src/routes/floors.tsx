import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import floorsHistoryImg from "../assets/floors-history.png";

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
        <h2 className="font-display text-2xl md:text-3xl mb-6">네 가지 구조적 조건</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            ["① 건물 노후도", "대로변이어도 엘리베이터·주차가 낙후되면 프리미엄 상업이 들어오지 못한다. 입지는 좋지만 건물 스펙이 젠트리피케이션을 막는다."],
            ["② 비의도적 공생", "높은 유동인구는 빈티지샵·카페에 이익이고, 낮은 건물 스펙은 카센터·주거의 퇴출을 막는다. 서로 다른 업종이 같은 건물에 머무를 이유가 동시에 성립한다."],
            ["③ 구분소유 · 분할 임대", "층·호별 소유자가 다르면 한꺼번에 용도를 통일하거나 재개발하기가 불가능하다. 각자 따로 임대하니 혼재가 유지된다."],
            ["④ 준공업지역 규제", "주거 재개발이 제한되는 준공업지역 특성상 오래된 거주자가 ‘버틸 수 있는’ 공간으로 남아 비공식 주거가 행정 사각지대에서 지속된다."],
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
