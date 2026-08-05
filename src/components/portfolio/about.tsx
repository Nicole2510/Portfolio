export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pt-16 text-center md:pt-20">
      <div className="mx-auto max-w-4xl" data-reveal>
        <p className="text-md uppercase tracking-[0.28em] text-ember">About me</p>
        <h2
          className="mt-5 font-display leading-[0.95] text-foreground"
          style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
        >
          A glimpse into <span className="font-serif-italic text-ember">my world.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          The technologies I build with, the details I care about, and the interests that keep me
          curious beyond engineering.
        </p>
      </div>
    </section>
  );
}
