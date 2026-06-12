import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "소개" },
  { to: "/timeline", label: "시계열 분석" },
  { to: "/east-west", label: "동서비교" },
  { to: "/entropy", label: "가로분석" },
  { to: "/floors", label: "층/건물 분석" },
  { to: "/industries", label: "업종분석" },
  { to: "/map", label: "지식산업센터" },
  { to: "/implications", label: "최종결론" },
  { to: "/database", label: "데이터" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent border-transparent' : 'bg-background/90 backdrop-blur-md border-b border-rule shadow-sm'}`}>
      <div className="container-prose flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className={`grid place-items-center h-8 w-8 rounded-md text-lg shadow-sm transition-transform group-hover:scale-105 ${isTransparent ? 'bg-white/10 text-white border border-white/20' : 'bg-primary text-primary-foreground font-display'}`}>
            S
          </div>
          <div className="leading-tight flex flex-col justify-center">
            <div className={`text-[10px] font-mono uppercase tracking-[0.2em] font-medium transition-colors ${isTransparent ? 'text-white/70' : 'text-ink-soft/80'}`}>
              Seongsu Archive
            </div>
            <div className={`text-[15px] font-display font-bold -mt-0.5 transition-colors ${isTransparent ? 'text-white group-hover:text-white/80' : 'text-ink group-hover:text-primary'}`}>
              성수동 도시제조업
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-xl border shadow-inner transition-all ${isTransparent ? 'bg-black/20 border-white/10' : 'bg-muted/60 border-rule/50'}`}>
          {nav.map((n) => {
            const isActive = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? (isTransparent ? 'text-indigo font-bold bg-white shadow-sm ring-1 ring-black/5' : 'text-indigo font-bold bg-background shadow-sm ring-1 ring-black/5')
                    : (isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-ink-soft hover:text-ink hover:bg-background/60')
                }`}
              >
                {n.label}
              </Link>
            )
          })}
        </nav>

        <button
          className={`lg:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-ink-soft hover:text-ink'}`}
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden border-t border-rule bg-background/95 backdrop-blur-xl absolute w-full shadow-lg h-screen">
          <div className="container-prose py-4 grid gap-1.5">
            {nav.map((n) => {
               const isActive = location.pathname === n.to;
               return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-4 rounded-lg text-lg font-medium transition-colors flex items-center ${isActive ? 'text-indigo font-bold bg-muted/80 border-l-4 border-indigo pl-3' : 'text-ink hover:bg-muted/50'}`}
                >
                  {n.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-muted/30">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-3 text-sm">
        <div>
          <div className="eyebrow mb-3 text-primary">Capstone Project</div>
          <p className="text-ink-soft leading-relaxed">
            성수동 도시제조업 디지털 아카이브. 도시계획학과 캡스톤 연구
            결과물로, 성수이로와 이면도로 일대의 제조업 현황을 기록하고
            분석합니다.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3 text-primary">Research Question</div>
          <p className="font-display text-[1.1rem] leading-snug text-ink">
            성수는 소비공간으로만 변화하고 있는가, 아니면 여전히 만드는
            도시로 기능하고 있는가?
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3 text-primary">Colophon</div>
          <ul className="text-ink-soft space-y-2">
            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-rule"></div>대상지 · 성수이로 일원</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-rule"></div>조사기간 · 2026년 전반기</li>
            <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-rule"></div>지도 데이터 · OpenStreetMap</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule/50 bg-background/50">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-ink-soft/70">
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
    <header className="container-prose pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-end relative z-10">
        {index && (
          <div className="font-display text-7xl md:text-[7rem] text-primary/10 leading-[0.8] tracking-tighter">
            {index}
          </div>
        )}
        <div className="max-w-3xl">
          <div className="eyebrow mb-4 text-primary font-bold tracking-widest">{eyebrow}</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-[1.05rem] md:text-xl text-ink-soft leading-relaxed max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
