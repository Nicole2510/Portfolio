import { useRef } from "react";

import { About } from "./about";
import { Beyond } from "./beyond";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { useReveal, useTheme } from "./hooks";
import { Marquee } from "./marquee";
import { Nav } from "./nav";
import { Skills } from "./skills";
import { ProjectExtras, Projects } from "./project";

export function PortfolioPage() {
  useReveal();
  const { dark, toggle } = useTheme();
  const yearRef = useRef(new Date().getFullYear());

  return (
    <div className="relative min-h-screen bg-background text-foreground bg-noise">
      <div>
        <Nav dark={dark} toggle={toggle} />
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <ProjectExtras />
        <About />
        <Skills />
        <Beyond />
        <Contact />
        <footer className="border-t border-border/60 py-10 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          <div className="mx-auto max-w-6xl px-6">
            © {yearRef.current} · Designed &amp; built with care
          </div>
        </footer>
      </div>
    </div>
  );
}
