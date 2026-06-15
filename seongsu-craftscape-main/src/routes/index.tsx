import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { PageNavigation } from "@/components/site/Shell";
import { ArrowRight, Factory, Layers, Building2, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "성수동 도시제조업 디지털 아카이브" },
      { name: "description", content: "성수" },
    ],
  }),
  component: Home,
});

const questions = [
  "성수동은 제조업이 사라진 공간인가?",
  "제조업과 상업은 어떻게 공존하고 있는가?",
  "제조업은 어떤 공간에 남아 있는가?",
  "도시 변화 속 제조업의 역할은 무엇인가?",
];

function Home() {
  return (
    <main className="w-full relative overflow-hidden -mt-20">
      
      {/* 1. NEW PREMIUM HERO SECTION */}
      <FadeIn as="section" className="relative w-full bg-black min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="/seongsu.png"
            alt="Seongsu cityscape at dusk"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a40]/90 via-[#0b1a40]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a40] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container-prose h-full min-h-screen flex flex-col justify-center pt-44 pb-20">
          <div className="max-w-4xl mt-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-ochre uppercase tracking-[0.2em] font-mono text-xs md:text-sm font-semibold">
                Connecting Industry, Creating Future
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-white font-medium tracking-tight mb-8">
              여전히 <br className="hidden md:block" />만드는 도시<br />
              <span className="text-ochre font-serif flex items-end gap-3 mt-4">
                <span className="text-[1.2em] leading-none">SEONGSU</span>
                <span className="text-[0.45em] leading-none pb-2 opacity-80 font-sans tracking-normal">(성수)</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              성수동 도시제조업 아카이브. 우리는 성수이로 일대의 제조업 분포와 
              <br className="hidden md:block" /> 공간구조를 기록하여 도시의 미래를 설계합니다.
            </p>

            

          </div>

          <div className="mt-auto border-t border-white/20 pt-10">
            
             

            <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start relative">
              <div className="group">
                <Factory className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">도시 제조업</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  공간 분석을 통해 성수동의 제조업 생태계를 지원하고 지속 가능한 성장을 도모합니다.
                </p>
              </div>
              <div className="group">
                <Layers className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">공간 엔트로피</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  복합 용도 개발의 현황과 가로 활성도를 추적하여 도시 혁신을 촉진합니다.
                </p>
              </div>
              <div className="group">
                <Building2 className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">수직적 분포</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  산업의 3차원적 분포를 시각화하여 유연하고 다각적인 관점을 제시합니다.
                </p>
              </div>
              
              
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. PROJECT INTRO (Restored from original) */}
      <FadeIn as="section" className="bg-paper">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3 text-primary">프로젝트 소개</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-ink">
              제조업이라는 렌즈로 본 성수동
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink-soft leading-relaxed">
            <p className="text-lg text-ink font-medium">
              성수동은 카페와 팝업의 도시로 알려져 있지만, 골목 한 칸만 들어가면 여전히
              인쇄기가 돌아가고 가죽이 마름질되는 도시이기도 하다.
            </p>
            <p>
              이 아카이브는 도시계획학과 캡스톤 연구로, 성수이로와 그 이면도로를 보행
              조사하며 수집한 제조업 분포 · 건축 연도 · 층별 용도 · 가로별 용도 혼합도를
              기록한다. 결과는 단일 보고서가 아닌, 지도와 그래프, 사진과 텍스트가
              얽힌 인터랙티브 전시로 구성된다.
            </p>
            <p>
              대상지는 동측의 대형 필지(지식산업센터 군)와 서측의 소규모 필지 골목
              구조가 만나는 접경지대이며, 이 비대칭이 성수의 제조업 잔존 방식을 결정한다.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 3. 3D VIEWER MAP (Restored from original) */}
      <FadeIn as="section" className="bg-muted/30 border-y border-rule">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-primary">공간 탐색</div>
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-ink">성수동 3D 뷰어</h2>
          <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
            <div className="relative w-full h-[78vh] min-h-[560px] rounded-xl overflow-hidden border border-rule/50 bg-card shadow-sm">
              <iframe
                src="/seongsu-3d-glass.html"
                title="성수동 3D 뷰어 (유리 외벽)"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <aside className="space-y-4">
              <div className="bg-card rounded-xl p-6 text-sm text-ink-soft leading-relaxed shadow-sm">
                <div className="eyebrow mb-2 text-primary">360도 탐색</div>
                마우스를 드래그하여 시점을 이동하고, 스크롤을 통해 확대/축소할 수 있다.
              </div>
              <div className="bg-card rounded-xl p-6 text-sm text-ink-soft leading-relaxed shadow-sm">
                <div className="eyebrow mb-2 text-primary">입체적 분석 방법론</div>
                대상지를 단순한 2차원 평면이 아닌 3차원의 입체적 공간으로 인식하고, 건축물의 형태와 배치를 공간 분석의 기본 단위로 설정하여 도시제조업의 구조적 기반을 방법론적으로 접근한다.
              </div>
            </aside>
          </div>
        </div>
      </FadeIn>

      {/* 3.5 TARGET LOCATION */}
      <FadeIn as="section" className="bg-paper border-b border-rule">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3 text-primary">대상지</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-ink">
              선정 이유 및 현황
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink-soft leading-relaxed">
            <div className="w-full rounded-xl overflow-hidden border border-rule/30 shadow-sm mb-6">
              <img src="/seongsu_target.jpg" alt="성수동 대상지 전경" className="w-full h-auto object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-rule/30 shadow-sm">
                <h3 className="font-display text-lg text-primary mb-4">대상지 범위</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col border-l-2 border-primary/50 pl-3">
                    <span className="text-ink-soft/70 text-xs font-mono uppercase tracking-wider mb-0.5">행정구역</span>
                    <span className="font-medium text-sm text-ink">서울특별시 성동구 성수2가1동</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-primary/50 pl-3">
                    <span className="text-ink-soft/70 text-xs font-mono uppercase tracking-wider mb-0.5">핵심가로</span>
                    <span className="font-medium text-sm text-ink">성수이로 및 주변 연결가로</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-primary/50 pl-3">
                    <span className="text-ink-soft/70 text-xs font-mono uppercase tracking-wider mb-0.5">조사면적</span>
                    <span className="font-medium text-sm text-ink">약 73,690 m²</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-rule/30 shadow-sm">
                <h3 className="font-display text-lg text-primary mb-2">젠트리피케이션</h3>
                <p className="text-sm text-ink-soft leading-relaxed">기존 유명 상업 가로의 사례처럼, 성수동 카페거리를 중심으로 상업 자본이 유입되며 젠트리피케이션이 실질적으로 어떻게 진행 중인지 조사를 통해 파악</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-rule/30 shadow-sm">
                <h3 className="font-display text-lg text-primary mb-2">복합토지 이용</h3>
                <p className="text-sm">공장, 주거지, 상업 시설의 혼재. 상업화와 기존 공업간의 충돌 지역이자 준공업 지역의 특징을 가장 잘 가지고 있는 핵심 구역</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-rule/30 shadow-sm">
                <h3 className="font-display text-lg text-primary mb-2">제조업 생태계</h3>
                <p className="text-sm">낙후된 소규모 공장부터 대규모, 그리고 새로운 형태의 제조업 업체들까지 다층적인 양상이 얽혀 존재</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 4. QUESTIONS (Restored from original) */}
      <FadeIn as="section" className="bg-primary text-white">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-ochre">핵심 질문</div>
          <h2 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            우리는 네 가지 질문을 들고 거리로 나갔다.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-4">
            {questions.map((q, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 flex gap-6 items-start hover:bg-white/10 transition-colors">
                <div className="font-display text-4xl text-ochre opacity-80">0{i + 1}</div>
                <div className="font-display text-xl md:text-2xl leading-snug font-medium pt-1">{q}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 5. CHAPTER INDEX (Restored from original) */}
      <FadeIn as="section" className="bg-paper">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-primary">여덟 개의 장</div>
          <h2 className="font-display text-3xl md:text-5xl text-ink">목차</h2>
          <div className="mt-12 divide-y divide-rule border-y border-rule">
            {[
              ["01", "대상지 전체 시계열 분석", "성수동은 어떻게 변화했는가?", "/timeline"],
              ["02", "동서 비교분석", "같은 성수동, 다른 도시 구조", "/east-west"],
              ["03", "가로별 분석", "얼마나 복합적인 공간인가", "/entropy"],
              ["04", "층별 건물별 분석", "수직적으로 혼합되는 도시", "/floors"],
              ["05", "업종분석", "성수동은 무엇을 만드는가", "/industries"],
              ["06", "지식산업센터", "지식산업센터와 공간 분포", "/map"],
              ["07", "최종결론", "성수동 제조업의 미래", "/implications"],
              ["08", "데이터베이스", "225개 업체의 실측 데이터 목록", "/database"],
            ].map(([n, t, s, to]) => (
              <Link
                key={n}
                to={to}
                className="group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center py-6 md:py-8 hover:bg-muted/50 -mx-4 px-4 transition-colors rounded-lg"
              >
                <div className="font-mono text-sm text-ink-soft w-10 font-medium">{n}</div>
                <div>
                  <div className="font-display text-xl md:text-2xl text-ink group-hover:text-primary font-semibold transition-colors">{t}</div>
                  <div className="text-sm text-ink-soft mt-1">{s}</div>
                </div>
                <div className="w-10 h-10 rounded-full border border-rule flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                  <ArrowRight className="text-ink-soft group-hover:text-white transition-colors" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>

      <PageNavigation next={{ to: "/timeline", label: "01 시대별 변화" }} />
    </main>
  );
}
