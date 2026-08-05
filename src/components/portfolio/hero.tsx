import { portrait } from "./data";
import { ArrowIcon } from "./icons";

const highlights = [
  { value: "5", label: "Engineering work terms" },
  { value: "B.Eng.", label: "Computer Engineering" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col items-center px-6 pb-10 pt-10 text-center md:pt-16">
        <div className="reveal-in relative">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-border shadow-lift sm:h-48 sm:w-48 md:h-52 md:w-52">
            <img
              src={portrait}
              alt="Portrait of Nicole"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="reveal-in mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-background/75 px-5 py-2.5 text-foreground shadow-elegant backdrop-blur-md">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs uppercase tracking-[0.25em]">Seeking a Full-Time Dev Role</span>
        </div>

        <h1
          className="reveal-in mt-8 max-w-5xl font-display leading-[0.9] tracking-[-0.045em] text-foreground"
          style={{ fontSize: "clamp(4rem, 9.5vw, 8.5rem)" }}
        >
          Hi, I&apos;m <span className="font-serif-italic text-ember">Nicole.</span>
        </h1>

        <p className="reveal-in mt-7 max-w-3xl text-balance text-[16px] leading-relaxed text-muted-foreground sm:text-[18px] md:text-[20px]">
          I turn complex engineering problems into software that feels clear and useful, moving from
          polished interfaces to reliable APIs, embedded hardware, and intelligent systems.
        </p>

        <p className="reveal-in mt-3 font-serif-italic text-lg text-foreground/75">
          Thoughtful at every layer. Curious by default.
        </p>

        <div className="reveal-in mb-8 mt-9 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#experience"
            className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            Explore my work
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <dl className="reveal-in mt-auto grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-border/70 pt-8 sm:grid-cols-2 sm:gap-4">
          {highlights.map(({ value, label }) => (
            <div key={label} className="px-3">
              <dt className="font-display text-4xl text-foreground md:text-5xl">{value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
