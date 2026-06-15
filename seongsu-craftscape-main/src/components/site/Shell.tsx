import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
        <nav className="hidden lg:flex items-center gap-2 transition-all">
          {nav.map((n) => {
            const isActive = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-[15px] font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? (isTransparent ? 'text-ochre font-black border-b-2 border-ochre' : 'text-indigo font-black border-b-2 border-indigo')
                    : (isTransparent ? 'text-white/80 hover:text-white' : 'text-ink-soft hover:text-ink')
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
                  className={`px-4 py-4 rounded-lg text-[17px] font-bold transition-colors flex items-center ${isActive ? 'text-indigo font-black bg-muted/80 border-l-4 border-indigo pl-3' : 'text-ink hover:bg-muted/50'}`}
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
    <footer className="border-t border-rule/50 bg-background/50">
      <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-ink-soft/70">
        <span>© 2026 URBAN PLANNING CAPSTONE</span>
        <span>Seoul · Seongsu-dong</span>
      </div>
    </footer>
  );
}

const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function PageHeader({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="container-prose pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="grid md:grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 gap-y-4 items-start relative z-10 w-full max-w-5xl">
        {index && (
          <motion.div variants={itemVariants} className="font-display text-7xl md:text-[7rem] text-primary/10 leading-none tracking-tighter shrink-0 md:pt-1">
            {index}
          </motion.div>
        )}
        
        <div className="flex flex-col">
          <motion.div variants={itemVariants} className="eyebrow mb-2 text-primary font-bold tracking-widest text-sm md:text-base">
            {eyebrow}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink tracking-tight">
            {title}
          </motion.h1>
        </div>
      </div>

      {subtitle && (
        <motion.p variants={itemVariants} className="mt-8 text-[1.05rem] md:text-xl text-ink-soft leading-relaxed max-w-2xl font-light">
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}

export function PageNavigation({ prev, next }: { prev?: { to: string, label: string }, next?: { to: string, label: string } }) {
  return (
    <div className="container-prose py-16 md:py-24 border-t border-rule/20 flex flex-col-reverse md:flex-row gap-8 justify-between items-center mt-16 md:mt-24">
      {/* Previous Link */}
      {prev ? (
        <Link to={prev.to} className="group flex items-center gap-5 w-full md:w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full border border-rule/50 flex items-center justify-center group-hover:bg-card transition-colors duration-300 shadow-sm shrink-0">
            <ArrowLeft size={18} className="text-ink-soft group-hover:text-indigo group-hover:-translate-x-1 transition-transform duration-300" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-ink-soft mb-0.5">
              Previous
            </span>
            <span className="font-display text-lg text-ink">
              {prev.label}
            </span>
          </div>
        </Link>
      ) : <div className="hidden md:block w-full md:w-auto" />}

      {/* Next Link - Highly prominent */}
      {next ? (
        <Link to={next.to} className="relative overflow-hidden group flex items-center justify-between gap-10 px-8 py-6 rounded-2xl bg-card border border-rule/30 hover:border-indigo/40 transition-all duration-500 w-full md:w-auto md:min-w-[360px] shadow-[0_4px_20px_-4px_rgba(16,42,107,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(16,42,107,0.15)] hover:-translate-y-1">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo/5 to-indigo/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
          
          <div className="relative z-10 flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-indigo font-semibold mb-1 transition-colors duration-300 flex items-center gap-2">
              Next Chapter
            </span>
            <span className="font-display text-2xl text-ink group-hover:text-indigo transition-colors duration-300">
              {next.label}
            </span>
          </div>

          <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center bg-indigo text-white group-hover:scale-110 transition-transform duration-500 shrink-0 shadow-md">
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      ) : <div className="hidden md:block w-full md:w-auto" />}
    </div>
  );
}
