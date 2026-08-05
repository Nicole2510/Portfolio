export function Marquee() {
  const items = [
    "Full-stack",
    "AI / ML",
    "FastAPI",
    "React & Vue",
    "C# / .NET",
    "AWS",
    "Embedded",
    "gRPC & GraphQL",
  ];

  const loop = [...items, ...items];
  return (
    <div className="editorial-band overflow-hidden border-y border-border/60 py-5">
      <div className="flex w-max animate-marquee gap-14 px-6 whitespace-nowrap">
        {loop.map((i, idx) => (
          <span
            key={`${i}-${idx}`}
            className="flex items-center gap-14 text-base text-foreground/70"
          >
            <span className="font-serif-italic text-2xl text-foreground/90">{i}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
