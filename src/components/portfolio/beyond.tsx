import { useCallback, useRef, useState } from "react";
import acotarCover from "@/assets/book-acotar.jpg";
import acomafCover from "@/assets/book-acomaf.jpg";
import acowarCover from "@/assets/book-acowar.jpg";
import vowsBloodCover from "@/assets/book-vows-blood.jpg";
import webVowsCover from "@/assets/book-web-vows.jpg";

type Book = {
  title: string;
  author: string;
  note: string;
  cover: string;
};

const books: Book[] = [
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    note: "The beginning of a lush fae world filled with danger, romance, and impossible bargains.",
    cover: acotarCover,
  },
  {
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    note: "A darker, more expansive return to Prythian, and a favorite chapter in the series.",
    cover: acomafCover,
  },
  {
    title: "A Court of Wings and Ruin",
    author: "Sarah J. Maas",
    note: "War, loyalty, and the finale of the original ACOTAR trilogy on my shelf.",
    cover: acowarCover,
  },
  {
    title: "Web of Vows and Vengeance",
    author: "Aria Ashbrook",
    note: "A romantic fantasy of dangerous promises, tangled loyalties, and vengeance.",
    cover: webVowsCover,
  },
  {
    title: "Vows of Blood and Deception",
    author: "Aria Ashbrook",
    note: "A fantasy romance shaped by blood-bound vows, deception, and high-stakes choices.",
    cover: vowsBloodCover,
  },
];

function Bookshelf() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative" style={{ perspective: "1200px" }}>
        <div className="flex items-end justify-center gap-2 px-2 pb-3 sm:gap-3">
          {books.map((b, i) => {
            const isActive = active === i;
            return (
              <button
                key={b.title}
                type="button"
                aria-label={b.title}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative aspect-[2/3] min-w-0 flex-1 cursor-pointer overflow-hidden rounded-md outline-none ring-1 ring-foreground/15"
                style={{
                  transform: isActive ? "translateY(-12px) rotateY(-5deg)" : "translateY(0)",
                  transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 400ms ease",
                  filter: isActive
                    ? "drop-shadow(0 24px 34px rgb(0 0 0 / 0.5))"
                    : "drop-shadow(0 8px 14px rgb(0 0 0 / 0.35))",
                }}
              >
                <img
                  src={b.cover}
                  alt={`${b.title} cover`}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
        <div className="h-3 rounded-sm bg-cream/20 shadow-lift" />
        <div className="mx-5 h-4 rounded-b-xl bg-oxblood-deep/55" />
      </div>
      <div className="mt-6 min-h-48 rounded-3xl border border-border bg-card/60 p-6">
        <div key={active} className="reveal-in">
          <p className="text-[10px] uppercase tracking-[0.26em] text-ember">From my shelf</p>
          <h3 className="mt-3 font-display text-2xl leading-tight">{books[active].title}</h3>
          <p className="mt-1 font-serif-italic text-muted-foreground">{books[active].author}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{books[active].note}</p>
        </div>
        {/* <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {books.length} fantasy titles · select a cover
        </p> */}
      </div>
    </div>
  );
}

type Chip = { label: string; emoji: string; x: number; y: number };

const initialChips: Chip[] = [
  { label: "Gaming", emoji: "🎮", x: 6, y: 8 },
  { label: "Perfume", emoji: "🌹", x: 40, y: 4 },
  { label: "Film cameras", emoji: "📷", x: 68, y: 14 },
  { label: "Matcha", emoji: "🍵", x: 14, y: 38 },
  { label: "Reading", emoji: "📖", x: 46, y: 44 },
  { label: "Travel", emoji: "✈️", x: 74, y: 52 },
  { label: "Sketching", emoji: "✍️", x: 8, y: 68 },
  { label: "Makeup", emoji: "💄", x: 42, y: 74 },
  { label: "Sunday markets", emoji: "🧺", x: 70, y: 82 },
];

function ChipBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [chips, setChips] = useState(initialChips);
  const drag = useRef<{ i: number; dx: number; dy: number } | null>(null);
  const [held, setHeld] = useState<number | null>(null);

  const onPointerDown = (i: number) => (e: React.PointerEvent) => {
    const box = boxRef.current;
    const target = e.currentTarget as HTMLElement;
    if (!box) return;
    target.setPointerCapture(e.pointerId);
    const b = box.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    drag.current = {
      i,
      dx: ((e.clientX - t.left) / b.width) * 100,
      dy: ((e.clientY - t.top) / b.height) * 100,
    };
    setHeld(i);
    setChips((prev) => {
      const next = [...prev];
      const [c] = next.splice(i, 1);
      next.push(c);
      return next;
    });
    drag.current.i = chips.length - 1;
  };

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const d = drag.current;
    const box = boxRef.current;
    if (!d || !box) return;
    const b = box.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width) * 100 - d.dx;
    const y = ((e.clientY - b.top) / b.height) * 100 - d.dy;
    setChips((prev) =>
      prev.map((c, idx) =>
        idx === d.i
          ? {
              ...c,
              x: Math.min(88, Math.max(0, x)),
              y: Math.min(88, Math.max(0, y)),
            }
          : c,
      ),
    );
  }, []);

  const endDrag = () => {
    drag.current = null;
    setHeld(null);
  };

  const shuffle = () =>
    setChips((prev) =>
      prev.map((c) => ({
        ...c,
        x: Math.round(Math.random() * 80),
        y: Math.round(Math.random() * 80),
      })),
    );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="max-w-md text-sm text-muted-foreground">
          Some of my interests outside of shipping code. Try interacting with the hobby chips!
        </p>
        <button
          type="button"
          onClick={shuffle}
          className="rounded-full border border-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-secondary"
        >
          Toss them again
        </button>
      </div>
      <div
        ref={boxRef}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative mt-6 h-[420px] touch-none overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur sm:h-[380px]"
      >
        {chips.map((c, i) => (
          <button
            key={c.label}
            type="button"
            onPointerDown={onPointerDown(i)}
            className="absolute cursor-grab select-none rounded-full px-4 py-2.5 text-sm font-medium ring-1 ring-foreground/10 active:cursor-grabbing"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--ember) 82%, var(--cream)), color-mix(in oklab, var(--ember) 45%, var(--cream)))",
              color: "var(--oxblood-deep)",
              transform: held === i ? "scale(1.06) rotate(-2deg)" : "scale(1)",
              transition: held === i ? "none" : "transform 400ms ease",
              boxShadow:
                held === i
                  ? "0 22px 34px -14px rgb(0 0 0 / 0.55)"
                  : "0 10px 20px -12px rgb(0 0 0 / 0.45)",
            }}
          >
            {c.label} <span className="ml-1">{c.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Beyond() {
  return (
    <section id="beyond" className="editorial-band relative overflow-hidden py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-ember">Beyond Engineering</p>
          <h2
            className="mt-4 font-display leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            A little more <span className="font-serif-italic text-ember">of me.</span>
          </h2>
        </div>
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <div
            className="h-full rounded-[2rem] border border-border bg-card/35 p-6 md:p-8"
            data-reveal
          >
            <p className="text-sm uppercase tracking-[0.26em] text-ember">My Reads</p>
            <h3 className="mb-10 mt-3 font-sans text-md text-muted-foreground font-normal">
              Fantasy on my shelf
            </h3>
            <Bookshelf />
          </div>
          <div
            className="h-full rounded-[2rem] border border-border bg-card/35 p-6 md:p-8"
            data-reveal
          >
            <p className="pb-2 text-sm uppercase tracking-[0.26em] text-ember">Off the Clock</p>
            <ChipBox />
          </div>
        </div>
      </div>
    </section>
  );
}
