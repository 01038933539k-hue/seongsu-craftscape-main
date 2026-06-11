import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/seongsu_street.png";
import { ArrowRight, MapPin, BookOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "성수동 도시제조업 현황과 시사점" },
      { name: "description", content: "제조업의 분포, 공간구조, 그리고 도시 변화의 의미. 성수이로와 이면도로 일대를 조사한 캡스톤 연구." },
      { property: "og:title", content: "성수동 도시제조업 디지털 아카이브" },
      { property: "og:image", content: heroImg },
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
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="성수동 공장과 카페가 공존하는 거리"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

          <div className="relative h-full container-prose flex flex-col justify-end pb-20">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="chip">Capstone · 2026</span>
                <span className="chip">도시계획학과</span>
                <span className="chip">4조</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] text-ink">
                성수동 도시제조업
                <br />
                <span className="text-violet italic">현황과 시사점</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
                제조업의 분포, 공간구조, 그리고 도시 변화의 의미.
                <br />
                성수이로와 이면도로 일대를 걸으며 기록한 아카이브.
              </p>
              <div className="mt-4 font-mono text-xs md:text-sm text-ink-soft/80 tracking-wider">
                <span className="text-violet mr-2">TEAM 04</span>
                이기훈 · 박준경 · 이세연 · 김은채 · 김재은
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/timeline"
                  className="group inline-flex items-center gap-2 rounded-md bg-indigo px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-violet transition-colors"
                >
                  <BookOpen size={16} /> 연구 보기
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/map"
                  className="inline-flex items-center gap-2 rounded-md border border-ink/20 bg-card px-5 py-3 text-sm font-medium hover:border-violet hover:text-violet transition-colors"
                >
                  <MapPin size={16} /> 지도 탐색
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* metadata strip */}
        <div className="rule-top border-b border-rule bg-card">
          <div className="container-prose grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
            {[
              ["대상지", "성수이로 일원"],
              ["조사 건물", "240여 동"],
              ["제조 업체", "15개 표본"],
              ["분석 지표", "엔트로피 · 층별 용도"],
            ].map(([k, v]) => (
              <div key={k} className="px-4 py-5">
                <div className="eyebrow">{k}</div>
                <div className="mt-1 font-display text-lg md:text-xl">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="container-prose py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="eyebrow mb-3">프로젝트 소개</div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            제조업이라는 렌즈로 본 성수동
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-ink-soft leading-relaxed">
          <p className="text-lg text-ink">
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
      </section>

      {/* QUESTIONS */}
      <section className="rule-top">
        <div className="container-prose py-24 md:py-32">
          <div className="eyebrow mb-3">핵심 질문</div>
          <h2 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">
            우리는 네 가지 질문을 들고 거리로 나갔다.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-rule border border-rule">
            {questions.map((q, i) => (
              <div key={i} className="bg-card p-8 md:p-10 flex gap-6 items-start">
                <div className="font-display text-3xl text-violet">0{i + 1}</div>
                <div className="font-display text-xl md:text-2xl leading-snug">{q}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER INDEX */}
      <section className="container-prose py-24 md:py-32">
        <div className="eyebrow mb-3">목차</div>
        <h2 className="font-display text-3xl md:text-5xl">여덟 개의 장</h2>
        <div className="mt-12 divide-y divide-rule border-y border-rule">
          {[
            ["01", "시계열 변화 분석", "성수동은 어떻게 변화했는가?", "/timeline"],
            ["02", "제조업 분포 지도", "어디에, 무엇이 남아 있는가", "/map"],
            ["03", "층별 용도 분석", "수직적으로 혼합되는 도시", "/floors"],
            ["04", "엔트로피 분석", "얼마나 복합적인 공간인가", "/entropy"],
            ["05", "동서 비교", "같은 성수동, 다른 도시 구조", "/east-west"],
            ["06", "주요 제조업", "성수동은 무엇을 만드는가", "/industries"],
            ["07", "시사점", "성수동 제조업의 미래", "/implications"],
            ["08", "데이터베이스", "225개 업체의 실측 데이터 목록", "/database"],
          ].map(([n, t, s, to]) => (
            <Link
              key={n}
              to={to}
              className="group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center py-6 md:py-8 hover:bg-muted/50 -mx-4 px-4 transition-colors"
            >
              <div className="font-mono text-sm text-ink-soft w-10">{n}</div>
              <div>
                <div className="font-display text-xl md:text-2xl group-hover:text-violet transition-colors">{t}</div>
                <div className="text-sm text-ink-soft mt-1">{s}</div>
              </div>
              <ArrowRight className="text-ink-soft group-hover:text-violet group-hover:translate-x-1 transition-all" size={18} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
