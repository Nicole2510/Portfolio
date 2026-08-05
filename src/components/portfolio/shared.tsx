export function AvailableChip() {
  return (
    <span className="pill">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-foreground/80">Available for work</span>
    </span>
  );
}

export function SectionLabel({ label }: { n?: string; label: string }) {
  return (
    <div
      className="mb-10 flex items-baseline justify-between gap-6 border-b border-border/60 pb-4"
      data-reveal
    >
      <div className="flex items-baseline gap-4">
        <span className="h-px w-10 bg-ember" />
        <span className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
