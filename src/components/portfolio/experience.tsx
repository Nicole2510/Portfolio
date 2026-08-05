import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { experience } from "./data";
import { ArrowIcon } from "./icons";

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? experience[open] : null;
  return (
    <section id="experience" className="scroll-mt-24 pb-16 pt-10 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center" data-reveal>
          <h2
            className="font-display leading-[0.95] text-foreground"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)" }}
          >
            Work <span className="font-serif-italic text-ember">experience.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Five engineering work terms across software, energy systems, marine technology,
            shipbuilding, and robotics.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Select a card to view details
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e, i) => (
            <li
              key={`${e.company}-${e.date}`}
              data-reveal
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-7 text-left backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:bg-card hover:shadow-lift shine"
              >
                <div>
                  <div className="flex min-h-16 items-start justify-between gap-5">
                    <div className="flex h-16 w-40 items-center md:w-44">
                      <img
                        src={e.logo}
                        alt={`${e.company} logo`}
                        className="max-h-16 w-full object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                    <p className="pt-1 text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {e.date}
                    </p>
                  </div>
                  <h3 className="font-display mt-4 text-2xl leading-tight md:text-3xl">{e.role}</h3>
                  <p className="mt-2 font-serif-italic text-ember">{e.company}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">
                    View details
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background/40 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-border bg-card">
          {active && (
            <>
              <DialogHeader>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {active.date}
                </p>
                <DialogTitle className="font-display text-3xl md:text-4xl leading-tight">
                  {active.role}
                </DialogTitle>
                <DialogDescription className="font-serif-italic text-ember text-base">
                  {active.company}
                </DialogDescription>
              </DialogHeader>
              <p className="mt-2 text-base leading-relaxed text-foreground/85">{active.detail}</p>
              <ul className="mt-6 space-y-3">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {active.images && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {active.images.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-border bg-background/25"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
