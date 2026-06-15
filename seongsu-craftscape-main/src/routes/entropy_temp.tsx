import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Shell";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import entropy3dWest from "@/assets/entropy/entropy-3d-west.png";
import entropy3dTop from "@/assets/entropy/entropy-3d-top.png";
import entropy3dEast from "@/assets/entropy/entropy-3d-east.png";
import legendStreet from "@/assets/entropy/legend-street.png";

export const Route = createFileRoute("/entropy_temp")({
  head: () => ({
    meta: [
      { title: "03 가로별 분석 · 성수동 아카이브" },
      { name: "description", content: "엔트로피 지수로 측정한 성수동 가로별 용도 혼합도와 상권 변화." },
    ],
  }),
  component: Entropy,
});

// 실측 데이터 (PPT)
const streets = [
  { name: "성수이로", value: 3.83, tag: "high", note: "완전 복합형 · 지식산업센터 앵커" },
  { name: "성수이로7가길", value: 2.69, tag: "mid", note: "이면 골목 · 일부 필지가 솟아오름" },
  { name: "성수이로14길", value: 2.37, tag: "mid", note: "이면 골목 · 소규모 리모델링" },
];

const tagColor: Record<string, string> = {
  high: "var(--color-violet)",
  mid: "var(--color-cobalt)",
  low: "var(--color-ochre)",
};

const mapLegend: { color: string; label: string }[] = [
  { color: "#7c3aed", label: "제조업" },
  { color: "#0ea5e9", label: "상업·서비스" },
  { color: "#d97706", label: "F&B·카페" },
  { color: "#10b981", label: "지식산업센터" },
  { color: "#64748b", label: "기타·주거" },
];

function Entropy() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Chapter 03 · Entropy"
        title="얼마나 복합적인 공간인가"
        subtitle="가로별 용도 혼합도를 엔트로피 지수로 계량했다. 값이 클수록 다양한 용도가 균등하게 섞여 있다는 뜻이다."
      />

      <section className="container-prose pb-16">
        <div className="bg-card border border-rule rounded-lg p-6 md:p-10 mb-16">
          <h2 className="font-display text-2xl md:text-3xl mb-4">엔트로피 지수란?</h2>
          <p className="text-ink-soft leading-relaxed max-w-3xl mb-6">
            각 건물의 층별 용도 비율 <span className="font-mono">pᵢ</span>에 대해
            <span className="font-mono"> H = −Σ pᵢ · ln(pᵢ)</span> 로 계산한 다음
            가로 단위로 합산하였다. 값이 클수록 한 가로 안에 더 많은 용도가 더 균등하게 섞여 있다는 뜻이다.
            성수이로 메인은 <span className="font-mono text-violet">3.83</span>으로
            대상지 최고점을 기록한 완전 복합형 가로다.
          </p>
          <div className="bg-muted/50 p-6 rounded-lg border border-rule/50">
            <h3 className="font-display text-xl text-ink mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
              도시화 경제(Urbanization Economies)로의 진화
            </h3>
            <p className="text-ink-soft leading-relaxed">
              성수는 엔트로피가 높은 것으로 보아 국지화경제(Localization Economies)에서 도시화경제(Urbanization Economies) 단계로 넘어갔다고 볼 수 있다. 이는 다양화로 인한 리스크 분산과 경제 안정, 회복탄력성을 기대할 수 있음을 의미한다. 과거 준공업지역으로서 수제화, 인쇄, 자동차 정비 등 특정 제조업이 밀집했을 때와는 다른 성숙기에 들어섰다고 해석할 수 있다.
            </p>
          </div>
        </div>

        <h2 className="font-display text-2xl md:text-3xl mb-6">건축물 폴리곤 및 분포도</h2>
        <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-stretch h-[78vh] min-h-[600px]">
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-rule bg-card">
            <iframe
              src="/seongsu-map.html"
              title="성수동 대화형 지도"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <aside className="flex flex-col gap-4 h-full">
            <div className="bg-card border border-rule rounded-lg p-5 flex-shrink-0">
              <div className="eyebrow mb-3">범례</div>
              <ul className="space-y-2 text-sm">
                {mapLegend.map((l) => (
                  <li key={l.label} className="flex items-center gap-2.5 text-ink-soft">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft flex-shrink-0">
              <div className="eyebrow mb-3 text-ink">조사 표본</div>
              <ul className="space-y-1 text-ink-soft">
                <li className="flex justify-between border-b border-rule/30 pb-1 mb-1">
                  <span>총 상점 수</span><span className="font-mono text-ink">225개</span>
                </li>
                <li className="flex justify-between border-b border-rule/30 pb-1 mb-1">
                  <span>대상 건물 수</span><span className="font-mono text-ink">약 60개</span>
                </li>
                <li className="flex justify-between">
                  <span>표준화 기준</span><span className="text-ink">도로명 주소</span>
                </li>
              </ul>
              <div className="mt-3 text-[12px] text-ink-soft/70 opacity-80 text-right">
                자료출처: 2026년 상반기 현장 조사
              </div>
            </div>
            <div className="bg-card border border-rule rounded-lg p-5 text-sm text-ink-soft leading-relaxed flex-1 overflow-y-auto">
              <div className="eyebrow mb-2 text-ink">조사결과</div>
              제조업은 지식산업센터(성수이로 51 등)에 수직으로 집적되어 있고,
              가로변 노후 건물에서는 1층 F&B · 상층부 사무 또는 주거의 수직 혼합이 일반적이다.
            </div>
          </aside>
        </div>
      </section>

      {/* 3D 거리별 엔트로피 시각화 */}
      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">3D Visualization · Street Entropy</div>
        <h2 className="font-display text-2xl md:text-3xl mb-2">거리별 엔트로피 3D 지도</h2>
        <p className="text-ink-soft max-w-full mb-8">
          거리의 엔트로피 값을 색상으로 시각화했다. 빨강(성수이로, 2.69–3.83)이 가장 높은 혼합도를 나타내며,
          주황(성수이로7가길, 2.37–2.69)과 노랑(성수이로14길, 2.37)으로 갈수록 혼합도가 낮아진다. 지리적 위치 표식을 통해 가로별 혼합도의 차이를 명확히 구분할 수 있다.
        </p>
        <StreetEntropyViewer />
      </section>

      <section className="container-prose pb-16">
        <div className="eyebrow mb-3">가로별 엔트로피 (실측)</div>
        <h2 className="font-display text-2xl md:text-3xl mb-6">같은 동, 다른 가로</h2>
        
        <div className="grid md:grid-cols-[1fr_350px] gap-8 mb-12">
          <div className="h-[320px] bg-card border border-rule rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={streets} layout="vertical" margin={{ left: 30 }}>
                <CartesianGrid stroke="var(--color-rule)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 4]} stroke="var(--color-ink-soft)" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="var(--color-ink-soft)" fontSize={12} width={130} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-rule)", borderRadius: 6 }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {streets.map((s, i) => <Cell key={i} fill={tagColor[s.tag]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center gap-3 text-sm">
            {streets.map((s) => (
              <div key={s.name} className="border border-rule rounded p-4 bg-card">
                <div className="font-mono text-xs text-ink-soft">{s.name}</div>
                <div className="font-display text-2xl mt-1" style={{ color: tagColor[s.tag] }}>{s.value}</div>
                <div className="text-xs text-ink-soft mt-1">{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-violet/40 rounded-lg p-7 bg-card">
            <div className="eyebrow text-violet">메인 도로 · 입체 앵커</div>
            <h3 className="font-display text-2xl mt-2">성수이로 (3.83)</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              대형 지식산업센터 필지가 50m 높이의 입체 앵커로 솟아 있다.
              상층부 고부가가치 오피스 근무자(주중 안정적인 배후 인구)와
              1층 가로 전면부 소상공인 상업 기능(주말 방문객)이 한 건물 안에 입체적으로 결합되어
              엔트로피 최고점을 기록한다.
            </p>
          </div>
          <div className="border border-cobalt/50 rounded-lg p-7 bg-card">
            <div className="eyebrow text-cobalt">이면 골목 · 점적 솟아오름</div>
            <h3 className="font-display text-2xl mt-2">7가길 · 14길</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              평균 엔트로피는 낮지만 14길 14(35.2) · 7가길 22-14(26.0)처럼 특정 필지가 기둥처럼 솟는다.
              획일화된 다른 상권과 달리 소규모 필지의 개별 리모델링을 통해
              카페·디자이너 브랜드·팝업이 끊임없이 유입되는 구조다.
            </p>
          </div>
        </div>
        <div className="mt-6 border border-ochre/40 rounded-lg p-7 bg-card">
          <div className="eyebrow" style={{ color: "var(--color-ochre)" }}>완충대 · 수직 공존</div>
          <h3 className="font-display text-2xl mt-2">중간 지수(18–27) 노후 건물군</h3>
          <p className="mt-4 text-ink-soft leading-relaxed">
            1층은 임대료 높은 상업 시설이 채우지만, 상층·지하에는 인쇄·금속·의류 제조와 스타트업 사무실이
            여전히 둥지를 튼다. 상업 과열로 기존 산업이 밀려나는 급격한 젠트리피케이션을 이 중간 지수 필지들이 완충한다.
          </p>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="eyebrow mb-3 text-primary">밀도 분석</div>
        <h2 className="font-sans text-3xl md:text-4xl mb-12 text-ink">가로 밀집도와 제조업 분포</h2>
        
        <p className="text-xl text-ink font-medium mb-12">
          대상지 중 가로에 밀집한 건물을 위주로 한정하여 업체를 조사하였다.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg mb-4 text-ink flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span> 파란색 그림 - 전체 업체의 밀도
            </h3>
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted/20 border border-rule/30">
              <img src="/density-all.png" alt="전체 업체의 밀도" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
          <div className="bg-white border border-rule/50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display text-lg mb-4 text-ink flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> 빨간색 그림 - 제조업 밀도
            </h3>
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted/20 border border-rule/30">
              <img src="/density-manufacturing.png" alt="제조업 밀도" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
        </div>

        <div className="bg-card border border-rule/50 rounded-2xl p-8 shadow-sm">
          <div className="eyebrow mb-6 text-primary text-sm font-bold tracking-widest">[결론]</div>
          <ul className="space-y-8">
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">1)</span>
              <p className="text-ink leading-relaxed text-lg">
                <strong className="text-primary font-bold">지식산업센터에 업체가 밀집</strong>되어 있다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">2)</span>
              <p className="text-ink leading-relaxed text-lg">
                골목 지역보다는 <strong className="text-primary font-bold">대로변에 위치한 건물</strong>의 업체 밀도가 더 높다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">3)</span>
              <p className="text-ink leading-relaxed text-lg">
                제조업 밀집 지역의 경우, 특정 대형 건축물이나 거점 건물을 중심으로 <strong className="text-primary font-bold">고밀도 군집을 형성</strong>하고 있다.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-ochre font-bold shrink-0 text-xl mt-1">4)</span>
              <p className="text-ink leading-relaxed text-lg">
                제조업 밀집 지역은 기존 전통 제조업의 입지와 다르게 <strong className="text-primary font-bold">지식산업센터에도 제조업이 위치</strong>한다.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

const streetViews = [
  { key: "west", label: "서측 시점", src: entropy3dWest, alt: "성수이로 일대 거리별 엔트로피 3D 시각화 — 서측에서 바라본 모습" },
  { key: "top", label: "정면 시점", src: entropy3dTop, alt: "성수이로 일대 거리별 엔트로피 3D 시각화 — 정면에서 바라본 모습" },
  { key: "east", label: "동측 시점", src: entropy3dEast, alt: "성수이로 일대 거리별 엔트로피 3D 시각화 — 동측에서 바라본 모습" },
];

function StreetEntropyViewer() {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-rule bg-[#d4d4d4]">
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full border border-rule text-ink font-bold z-10 shadow-sm">
          📍 성수이로 (최고 혼합도)
        </div>
        <img
          src={streetViews[active].src}
          alt={streetViews[active].alt}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
        <div className="flex gap-2">
          {streetViews.map((v, i) => (
            <button
              key={v.key}
              onClick={() => setActive(i)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md border transition-all ${
                active === i
                  ? "border-violet bg-violet/10 text-violet"
                  : "border-rule text-ink-soft hover:border-ink-soft hover:text-ink"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="eyebrow text-[10px]">거리 엔트로피 범례</div>
          <img
            src={legendStreet}
            alt="거리별 엔트로피 범례: 노랑(2.37) → 주황(2.37–2.69) → 빨강(2.69–3.83)"
            className="h-auto rounded border border-rule bg-white p-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Entropy;
