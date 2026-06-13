import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Layers, Building2, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "성수동 도시제조업 디지털 아카이브" },
      { name: "description", content: "A new standard of urban manufacturing, Seongsu." },
    ],
  }),
  component: Home,
});

const questions = [
  "성수동은 제조업이 사라진 공간인가?",
  "제조업과 상업은 어떻게 공존하고 있는가?",
  "제조업이 남아있는 장소에 공간적 특성에는 무엇이 있는가?",
  "도시 변화 속 제조업의 역할은 무엇인가?",
];

function Home() {
  return (
    <main className="w-full relative overflow-hidden -mt-20">
      
      {/* 1. NEW PREMIUM HERO SECTION */}
      <section className="relative w-full bg-black min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Seongsu cityscape at dusk"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a40]/90 via-[#0b1a40]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a40] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container-prose h-full min-h-screen flex flex-col justify-center pt-32 pb-20">
          
          <div className="max-w-4xl mt-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-ochre uppercase tracking-[0.2em] font-mono text-xs md:text-sm font-semibold">
                Capstone Project
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-white font-medium tracking-tight mb-8">
              A new standard <br className="hidden md:block" />
              of urban manufacturing, <br />
              <span className="text-ochre italic">Seongsu</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              성수동 도시제조업 아카이브. 우리는 성수이로 일대의 제조업 분포와 
              <br className="hidden md:block" /> 공간구조를 기록하여 도시의 미래를 설계한다.
            </p>

            
            <div className="bg-white/10 p-6 rounded-xl mt-10 mb-8 backdrop-blur-md max-w-3xl">
              <h3 className="font-serif text-xl text-ochre mb-4">대상지 및 선정 이유</h3>
              <p className="mb-4 text-white/90">
                <strong className="text-white">대상지 범위:</strong> 서울특별시 성동구 성수 2가 1동 성수이로 및 성수이로 이면 도로 블록 (면적 약 73,690 제곱미터)
              </p>
              <ul className="space-y-3 list-disc list-inside text-white/80">
                <li><strong className="text-white">젠트리피케이션:</strong> 문화·예술 및 상업 자본의 유입으로 인한 젠트리피케이션 현상과 기존 산업의 변화 추적 가능</li>
                <li><strong className="text-white">복합토지 이용:</strong> 공장, 주거지, 상업 시설의 혼재. 상업화와 기존 공업간의 충돌 지역이자 준공업 지역의 특징을 가장 잘 가지고 있는 핵심 구역</li>
                <li><strong className="text-white">제조업 생태계:</strong> 낙후된 소규모 공장부터 대규모, 그리고 새로운 형태의 제조업 업체들까지 다층적인 양상이 얽혀 존재</li>
              </ul>
            </div>
          </div>

          <div className="mt-auto border-t border-white/20 pt-10">


            <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start relative">
              <div className="group">
                <Factory className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">도시 제조업</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  공간 분석을 통해 성수동의 제조업 생태계와 지속 가능한 성장을 지원한다.
                </p>
              </div>
              <div className="group">
                <Layers className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">공간 엔트로피</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  복합 용도 개발과 가로의 활력을 추적하여 혁신을 도모한다.
                </p>
              </div>
              <div className="group">
                <Building2 className="text-ochre mb-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                <h3 className="text-white font-display text-xl mb-3">수직적 분포</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  산업의 3차원적 분포를 시각화하여 유연한 공간 분석 관점을 제시한다.
                </p>
              </div>
            </div>

            {/* moved from footer */}
            <div className="mt-16 pt-10 border-t border-white/20 grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-mono text-xs text-ochre uppercase tracking-widest mb-3">Capstone Project</div>
                <p className="text-white/70 leading-relaxed font-light">
                  성수동 도시제조업 디지털 아카이브. 도시계획학과 캡스톤 연구
                  결과물로, 성수이로와 이면도로 일대의 제조업 현황을 기록하고
                  분석한다.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-ochre uppercase tracking-widest mb-3">Research Question</div>
                <p className="font-display text-[1.1rem] leading-snug text-white">
                  성수는 소비공간으로만 변화하고 있는가, 아니면 여전히 만드는
                  도시로 기능하고 있는가?
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-ochre uppercase tracking-widest mb-3">Colophon</div>
                <ul className="text-white/70 space-y-2 font-light">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white/30"></div>대상지 · 성수이로 일원</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white/30"></div>조사기간 · 2026년 전반기</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-white/30"></div>지도 데이터 · OpenStreetMap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT INTRO (Restored from original) */}
      <section className="bg-paper">
        <div className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3 text-primary">프로젝트 소개</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-ink">
              성수동: 제조업 공간의 재발견
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink-soft leading-relaxed">
            <p className="text-lg text-ink font-medium">
              성수동은 카페와 팝업의 도시로 알려져 있지만, 골목 한 칸만 들어가면 여전히
              인쇄기가 돌아가고 가죽이 마름질되는 도시이기도 하다.
            </p>
            <p>
              이 아카이브는 도시계획학과 <strong>캡스톤 연구</strong>로, 성수이로와 그 이면도로를 보행
              조사하며 수집한 <strong>제조업 분포 · 건축 연도 · 층별 용도 · 가로별 용도 혼합도</strong>를
              기록한다. 결과는 단일 보고서가 아닌, <strong>지도와 그래프, 사진과 텍스트가
              얽힌 인터랙티브 형태</strong>로 구성된다.
            </p>
            <p>
              대상지는 동측의 <strong>대형 필지(지식산업센터 군)</strong>와 서측의 <strong>소규모 필지 골목
              구조</strong>가 만나는 접경지대이며, 이 비대칭이 성수의 <strong>제조업 잔존 방식</strong>을 결정한다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 3D VIEWER MAP (Restored from original) */}
      <section className="bg-muted/30 border-y border-rule">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-primary">공간 탐색</div>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-ink">성수동 3D 뷰어</h2>
          <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
            <div className="relative w-full h-[78vh] min-h-[560px] rounded-xl overflow-hidden border border-rule/50 bg-card shadow-sm">
              <iframe
                src="/seongsu-3d-viewer.html"
                title="성수동 360도 뷰어"
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
      </section>

      {/* 4. QUESTIONS (Restored from original) */}
      <section className="bg-primary text-white">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-ochre">핵심 질문</div>
          <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight">
            네 가지 핵심 탐구 주제
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-4">
            {questions.map((q, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 flex gap-6 items-start hover:bg-white/10 transition-colors">
                <div className="font-serif text-4xl text-ochre opacity-80">0{i + 1}</div>
                <div className="font-display text-xl md:text-2xl leading-snug font-medium pt-1">{q}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAPTER INDEX (Restored from original) */}
      <section className="bg-paper">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3 text-primary">목차</div>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">목차</h2>
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
      </section>

    </main>
  );
}
