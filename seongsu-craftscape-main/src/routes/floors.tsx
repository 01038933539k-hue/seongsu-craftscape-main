import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageHeader, PageNavigation } from "@/components/site/Shell";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import { useState } from "react";
import floorsHistoryImg from "../assets/floors-history.png";
import floorsSectionImg from "../assets/floors-section.png";

export const Route = createFileRoute("/floors")({
  head: () => ({
    meta: [
      { title: "04 층별 건물별 분석 · 성수동 아카이브" },
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
  상업: "var(--color-use-commercial)",
  제조: "var(--color-use-manufacturing)",
  업무: "var(--color-use-office)",
  주거: "var(--color-use-residential)",
  기타: "var(--color-use-temporary)",
};

const composites = [
  {
    name: "성수동2가 309-126 · 노후 대로변 건물",
    note: "빈티지샵·카센터·수제화·주거의 비의도적 공생. 대로변 입지 + 노후 스펙이 동시에 작동.",
    mix: ["B1F 빈스터", "1F 동양카센터", "2F 에이레네(수제화)", "3F 인코어테크놀로지(전자)", "4F 주거"],
  },
  {
    name: "성수동2가 321-29 · 상업화 활발 블록",
    note: "공유오피스(임대 사무) 중심에 저층 음식점·판매가 고르게 분포.",
    mix: ["1F 음식점·판매", "2F 음식점·판매", "2~8F 공유오피스"],
  },
  {
    name: "성수동2가 309-148 · 협성빌딩",
    note: "협성정밀(기계) · 메디우드(의료품) — 제조업이 상층까지 유지된 사례.",
    mix: ["1F 제조업, 음식점", "2F 사무업", "3F 메디우드", "4F 협성정밀"],
  }
];

function BuildingSectionDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: "upper",
      label: "상층부 (3-4F)",
      y: 40,
      paper: "대장상 주거 / 기타",
      actual: "단기 임대 크리에이터 작업실, 패션 레이블 샘플실",
      note: "주거 시설을 상업 공간으로 개조하여 수익률을 극대화한다.",
      stats: [
        { label: "비주거 불법 전용 비율", value: "40.5", unit: "%", trend: "+12%p" },
        { label: "상업용 임대 수익률", value: "8.5", unit: "%", vs: "주거용 3.2%" }
      ]
    },
    {
      id: "mid",
      label: "중층부 (2F)",
      y: 120,
      paper: "대장상 제조업 / 근생",
      actual: "디자이너 브랜드 쇼룸, 편집샵",
      note: "전통 제조업이 임대료에 밀려 퇴출된 자리를 감각적 상업 자본이 채운다.",
      stats: [
        { label: "표본 제조업소 편법 운영", value: "72.9", unit: "%", trend: "85곳 중 62곳" },
        { label: "용도 전환 월평균 초과 이익", value: "4.5", unit: "백만", vs: "과태료 감수" }
      ]
    },
    {
      id: "ground",
      label: "저층부 (1F)",
      y: 200,
      paper: "대장상 상업 / 근생",
      actual: "대형 F&B, 메가 팝업스토어",
      note: "가장 높은 임대료를 감당하는 하이엔드 상업의 최전선 구역이다.",
      stats: [
        { label: "초단기 팝업 계약 비율", value: "38.0", unit: "%", trend: "3개월 미만" },
        { label: "1층 상업공간 임대료 폭등", value: "45.0", unit: "%", vs: "전년 동기 대비" }
      ]
    },
    {
      id: "basement",
      label: "지하층 (B1F)",
      y: 280,
      paper: "대장상 창고 / 보일러실",
      actual: "예약제 바(Bar), 레이저 가공 공방, 룩북 촬영 스튜디오",
      note: "채광과 환기가 열악한 지하의 단점을 은밀함(Private)으로 역이용한 상업 공간이 발현한다.",
      stats: [
        { label: "지하 창고 무단 전용 적발", value: "65.0", unit: "%", trend: "상업/서비스업화" },
        { label: "이면도로 환산 보증금 급등", value: "230", unit: "%", vs: "최근 3년 누적" }
      ]
    }
  ];

  return (
    <div className="bg-card border border-rule rounded-xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-5/12 relative flex justify-center items-center">
        <svg viewBox="0 0 300 360" className="w-full max-w-[280px] drop-shadow-sm">
          {/* Building Outline */}
          <path d="M 50 10 L 250 10 L 250 340 L 50 340 Z" fill="#f8fafc" stroke="var(--color-rule)" strokeWidth="4" />
          <path d="M 50 10 L 150 -10 L 250 10" fill="none" stroke="var(--color-rule)" strokeWidth="4" />
          
          {/* Floors */}
          <line x1="50" y1="90" x2="250" y2="90" stroke="var(--color-rule)" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="50" y1="170" x2="250" y2="170" stroke="var(--color-rule)" strokeWidth="2" strokeDasharray="6 4" />
          <line x1="50" y1="250" x2="250" y2="250" stroke="var(--color-rule)" strokeWidth="4" />
          
          {nodes.map((node) => (
            <g 
              key={node.id} 
              className="cursor-pointer transition-transform hover:scale-105 origin-center"
              style={{ transformOrigin: `150px ${node.y}px` }}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              <rect x="60" y={node.y - 20} width="180" height="60" rx="6" fill={activeNode === node.id ? 'var(--color-violet)' : 'var(--color-indigo)'} fillOpacity={activeNode === node.id ? "0.15" : "0.05"} stroke={activeNode === node.id ? 'var(--color-violet)' : 'var(--color-indigo)'} strokeOpacity={activeNode === node.id ? "1" : "0.3"} strokeWidth="2" className="transition-colors" />
              <text x="150" y={node.y + 5} textAnchor="middle" fill="var(--color-ink)" className="font-bold text-sm pointer-events-none">{node.label}</text>
              <text x="150" y={node.y + 25} textAnchor="middle" fill="var(--color-ink-soft)" className="text-[9px] pointer-events-none tracking-widest uppercase opacity-70">Click to Inspect</text>
            </g>
          ))}
          
          {/* Ground Line */}
          <line x1="20" y1="250" x2="280" y2="250" stroke="var(--color-ink)" strokeWidth="3" />
        </svg>
      </div>

      <div className="w-full lg:w-7/12 flex flex-col justify-center min-h-[300px]">
        {activeNode ? (
          nodes.filter(n => n.id === activeNode).map((node) => (
            <div key={node.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="eyebrow text-violet mb-3">{node.label} 전용 실태</div>
              <h3 className="font-display text-2xl text-ink mb-6 break-keep leading-tight">
                <span className="text-ink-soft/60 block text-lg mb-1 line-through">{node.paper}</span>
                {node.actual}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed break-keep mb-8">
                {node.note}
              </p>
              <div className="bg-muted/30 border border-rule rounded-xl p-5">
                <h4 className="text-[13px] font-bold text-ink mb-4 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ochre"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  현장 실측 및 근거 (2025-2026)
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {node.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] text-ink-soft mb-1 font-bold">{stat.label}</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="font-mono text-3xl font-bold text-violet">{stat.value}</span>
                        <span className="text-sm font-bold text-violet">{stat.unit}</span>
                      </div>
                      {(stat.trend || stat.vs) && (
                        <span className="text-[10.px] text-ink-soft/80 font-mono mt-1.5 tracking-tight bg-card border border-rule/50 px-1.5 py-0.5 rounded w-fit">
                          {stat.trend ? `증감: ${stat.trend}` : stat.vs}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-8 border-2 border-dashed border-rule rounded-xl bg-card/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-soft/40 mb-4"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            <p className="text-ink-soft text-sm font-medium leading-relaxed">
              좌측 건물 단면도의 <strong className="text-ink">각 층을 클릭</strong>하여<br/>서류 이면의 숨겨진 용도 전용 실태를 확인하세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Floors() {
  return (
    <>
      <PageHeader index="04" eyebrow="Chapter 04 · Vertical Mix" title="수직적으로 혼합되는 도시" subtitle={<>성수동은 평면이 아니라 수직으로 읽어야 한다.<br />한 건물 안에서 제조 · 상업 · 업무 · 주거가 층을 나눠 서로 공존한다.</>} />

      <FadeIn as="section" className="container-prose pb-16">
        <div className="eyebrow mb-3 text-primary">층별 단면 비디오 뷰</div>
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink">성수동의 단면을 생생하게 탐험하다</h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-rule/50 shadow-lg bg-black mb-8">
          <video 
            src="/seongsu-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
        <div className="grid md:grid-cols-4 gap-px bg-rule border border-rule rounded-lg overflow-hidden">
          {[
            ["저층부", "상업", "var(--color-use-commercial)", "1F 도로면 — 카페·매장·쇼룸"],
            ["중층부", "제조", "var(--color-use-manufacturing)", "2-3F — 작업장·생산"],
            ["상층부 A", "업무", "var(--color-use-office)", "4F+ — 스튜디오·사무실"],
            ["상층부 B", "주거", "var(--color-use-residential)", "4F+ — 다세대·임대"],
          ].map(([z, label, color, desc]) => (
            <div key={z} className="bg-card p-6">
              <div className="eyebrow">{z}</div>
              <div className="mt-2 font-display text-2xl" style={{ color: color as string }}>{label}</div>
              <div className="mt-2 text-sm text-ink-soft">{desc}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
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
        <div className="mt-2 text-[10px] text-ink-soft opacity-70 text-right">
          정보출처: 국토교통부 건축물대장, 국토정보플랫폼
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
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
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
        <div className="eyebrow mb-3">대표 수직 혼합 사례 — 6개 표본 블록</div>
        <h2 className="font-display text-2xl md:text-3xl mb-8">한 건물, 네 개의 일</h2>
        
        {/* ISOMETRIC ILLUSTRATION */}
        <div className="bg-card border border-rule rounded-2xl shadow-sm mb-12 overflow-hidden flex flex-col relative group">
          <img 
            src="/isometric-building.jpg" 
            alt="성수동 2가 309-126 아이소메트릭 일러스트레이션" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 pointer-events-none bg-card/95 px-5 py-4 rounded-xl backdrop-blur-md border border-rule/50 shadow-lg flex flex-col items-end max-w-sm text-right">
            <h3 className="font-serif text-2xl text-ink font-bold">성수동2가 309-126</h3>
            <p className="font-display text-primary mt-1 mb-2">노후 대로변 건물</p>
            <p className="text-[13px] text-ink-soft leading-relaxed break-keep">
              빈티지샵·카센터·수제화·주거의 비의도적 공생.<br />대로변 입지 + 노후 스펙이 동시에 작동.
            </p>
          </div>
        </div>

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

        <div className="grid md:grid-cols-3 gap-6">
          {composites.map((c) => {
            const [address, nickname] = c.name.split('·');
            return (
              <div key={c.name} className="border border-rule rounded-2xl bg-card shadow-sm hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden flex flex-col group">
                <div className="px-6 py-5 bg-muted/50 border-b border-rule/50">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary/80 mb-1">{address.trim()}</div>
                  <div className="font-display text-xl text-ink font-bold leading-snug group-hover:text-primary transition-colors">{nickname?.trim()}</div>
                  <div className="text-[13px] text-ink-soft leading-relaxed mt-3 break-keep border-l-2 border-primary/30 pl-3">
                    {c.note}
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-end p-4 bg-card">
                  <div className="flex flex-col gap-1.5">
                    {[...c.mix].reverse().map((m, i) => {
                      const match = m.match(/^([A-Za-z0-9~]+F)\s+(.*)/);
                      const floorLabel = match ? match[1] : "";
                      const content = match ? match[2] : m;
                      return (
                        <div key={i} className="flex items-center gap-4 p-2.5 hover:bg-muted rounded-xl transition-colors">
                          <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-lg w-[52px] text-center shrink-0">
                            {floorLabel}
                          </span>
                          <span className="text-sm font-medium text-ink/90 leading-tight">
                            {content}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-16">
        <div className="border-t border-rule/50 pt-16">
          <div className="eyebrow mb-3">건축물 층별 용도 및 수직적 혼재 특성</div>
          <h2 className="font-display text-2xl md:text-3xl mb-8">데이터와 현장 사이의 이야기</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-rule rounded-xl bg-card p-7 flex flex-col">
              <div className="font-mono text-4xl font-bold text-indigo mb-2">78<span className="text-2xl text-indigo/70">%</span></div>
              <div className="font-display text-base text-ink mb-3 pt-4 border-t border-rule/50">수직적 용도 분리의 고착화</div>
              <p className="text-sm text-ink-soft leading-relaxed">
                성수동 표본 건물의 78%가 '저층부 상업 + 상층부 주거/업무'의 뚜렷한 수직 분리 패턴을 유지하며, 이는 건물주가 상층부에 거주하는 젠트리피케이션의 전형적인 공간 방어 기제로 작용한다.
              </p>
            </div>
            <div className="border border-rule rounded-xl bg-card p-7 flex flex-col">
              <div className="font-mono text-4xl font-bold text-violet mb-2">42.5<span className="text-2xl text-violet/70">%</span></div>
              <div className="font-display text-base text-ink mb-3 pt-4 border-t border-rule/50">행정 데이터의 시차 오차율</div>
              <p className="text-sm text-ink-soft leading-relaxed">
                대장상 '기타/공장' 공간 중 42.5%가 실제로는 팝업스토어 등으로 운영된다. 평균 2.5개월의 초단기 임차 회전율 탓에 서류상 기존 용도로 잔존하는 극단적 오차가 발생한다.
              </p>
            </div>
            <div className="border border-rule rounded-xl bg-card p-7 flex flex-col">
              <div className="font-mono text-4xl font-bold text-ochre mb-2">35<span className="text-2xl text-ochre/70">%</span></div>
              <div className="font-display text-base text-ink mb-3 pt-4 border-t border-rule/50">잔존하는 노령 거주자 비율</div>
              <p className="text-sm text-ink-soft leading-relaxed">
                전면 재개발 제한 덕분에 역설적으로 성수동 전체 거주 인구의 35%에 달하는 고령층이 밀려나지 않고 남았다. 이들은 공장 사이에 낀 비공식 주거 공간에서 커뮤니티 생태계를 유지한다.
              </p>
            </div>
            <div className="border border-rule rounded-xl bg-card p-7 flex flex-col">
              <div className="font-mono text-4xl font-bold text-primary mb-2">68<span className="text-2xl text-primary/70">%</span></div>
              <div className="font-display text-base text-ink mb-3 pt-4 border-t border-rule/50">소유주가 분산된 노후 건물</div>
              <p className="text-sm text-ink-soft leading-relaxed">
                성수동 노후 건물의 68% 이상이 층·호실별로 소유주가 분산되어 있다. 파편화된 소유 구조는 대형 자본의 전면 철거 및 통개발을 가로막는 결정적인 안전판 역할을 한다.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-24">
        <div className="border-t border-rule/50 pt-16">
          <div className="eyebrow mb-3 text-violet">Vertical Blind Spots</div>
          <h2 className="font-display text-2xl md:text-3xl mb-6">수직적 사각지대: 지하층과 노후 상층부의 무단 용도 전용 실태</h2>
          <p className="text-sm text-ink-soft leading-relaxed max-w-3xl mb-10 break-keep">
            제한된 면적 안에서 상업 자본이 극대화되면서, 과거에는 주목받지 못했던 지하층이나 주거용 상층부까지 상업적 용도로 무단 전용되는 현상이 가속화된다. 서류상 '창고'나 '주거'로 남은 이 공간들은 단속을 피해 프라이빗한 바(Bar), 스튜디오, 임대 작업실 등 음성적인 하이브리드 공간으로 탈바꿈한다.
          </p>

          <BuildingSectionDiagram />

          <div className="mt-6 text-right">
            <p className="text-[11px] text-ink-soft/60 font-mono tracking-tight break-keep">
              출처: 국토교통부 세움터 건축물대장 층별 변동 내역(2026), 건축도시공간연구소(AURI) 건축물 공간 유연성 연구 보고서 인용
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="container-prose pb-24">
        <div className="border-t border-rule/50 pt-16">
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
        </div>
      </FadeIn>
      <PageNavigation prev={{ to: "/entropy", label: "03 가로분석" }} next={{ to: "/industries", label: "05 업종분석" }} />
    </>
  );
}

export default Floors;
