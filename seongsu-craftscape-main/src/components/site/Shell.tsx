import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "소개" },
  { to: "/timeline", label: "01 시계열" },
  { to: "/map", label: "02 지도" },
  { to: "/floors", label: "03 층별 용도" },
  { to: "/entropy", label: "04 엔트로피" },
  { to: "/east-west", label: "05 동서 비교" },
  { to: "/industries", label: "06 업종" },
  { to: "/implications", label: "07 시사점" },
  { to: "/database", label: "08 데이터베이스" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/85 backdrop-blur">
      <div className="container-prose flex h-14 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid place-items-center h-7 w-7 rounded-sm bg-indigo text-primary-foreground font-display text-sm">
            S
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-soft">
              Seongsu Archive
            </div>
            <div className="text-sm font-display -mt-0.5">성수동 도시제조업</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-2.5 py-1.5 text-xs font-mono uppercase tracking-wider text-ink-soft hover:text-ink transition-colors"
              activeProps={{ className: "text-violet" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-rule">
          <div className="container-prose py-3 grid gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-mono uppercase tracking-wider text-ink-soft"
                activeProps={{ className: "text-violet" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-top mt-32">
      <div className="container-prose py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="eyebrow mb-2">Capstone Project</div>
          <p className="text-ink-soft leading-relaxed">
            성수동 도시제조업 디지털 아카이브. 도시계획학과 캡스톤 연구
            결과물로, 성수이로와 이면도로 일대의 제조업 현황을 기록하고
            분석한다.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-2">Research Question</div>
          <p className="font-display text-lg leading-snug">
            성수는 소비공간으로만 변화하고 있는가, 아니면 여전히 만드는
            도시로 기능하고 있는가?
          </p>
        </div>
        <div>
          <div className="eyebrow mb-2">Colophon</div>
          <ul className="text-ink-soft space-y-1">
            <li>대상지 · 성수이로 일원</li>
            <li>조사기간 · 2026년 전반기</li>
            <li>지도 데이터 · OpenStreetMap</li>
          </ul>
        </div>
      </div>
      <div className="rule-top">
        <div className="container-prose py-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-ink-soft">
          <span>© 2026 URBAN PLANNING CAPSTONE</span>
          <span>Seoul · Seongsu-dong</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="container-prose pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-end">
        {index && (
          <div className="font-display text-6xl md:text-8xl text-violet leading-none">
            {index}
          </div>
        )}
        <div className="max-w-3xl">
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
