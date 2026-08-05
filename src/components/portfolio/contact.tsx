import { ArrowIcon } from "./icons";
import { AvailableChip, SectionLabel } from "./shared";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-24 md:pt-12">
      <SectionLabel label="Contact" />
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-border bg-hero p-10 shadow-lift md:p-16"
      >
        <div className="relative">
          <AvailableChip />
          <h2
            className="font-display mt-6 text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Have a project, a role, or an{" "}
            <span className="font-serif-italic text-ember">idea worth sharing?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            I'm open to full-time computer engineering roles and opportunities to collaborate with
            other developers. The quickest way to reach me is by email.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:nbishopadigw@mun.ca"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              nbishopadigw@mun.ca
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
              <a href="tel:+17092192414" className="link-underline text-foreground/80">
                +1 (709) 219-2414
              </a>
              <a
                href="https://github.com/Nicole2510"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-foreground/80"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nbishopadigwe"
                className="link-underline text-foreground/80"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
