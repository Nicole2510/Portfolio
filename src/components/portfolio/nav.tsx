import { useEffect, useState } from "react";
import { nav } from "./data";
import { MoonIcon, SunIcon } from "./icons";
import { AvailableChip } from "./shared";

export function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <div className="hidden md:block">
          <AvailableChip />
        </div>
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-background/40 px-2 py-1.5 backdrop-blur">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:bg-foreground/10 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/nicole-bishop-adigwe-resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="View or download Nicole's resume"
            className="inline-flex items-center rounded-full border border-border bg-background/40 px-3.5 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground/10"
          >
            Resume
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/40 text-foreground transition-all hover:bg-foreground/10"
          >
            {dark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Schedule a call
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
