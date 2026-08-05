import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { projects, schoolProjects, teams, type Project } from "./data";

export function Projects() {
  return (
    <section id="projects" className="editorial-band scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center" data-reveal>
          <h2
            className="font-display leading-[0.95] text-foreground"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 5rem)" }}
          >
            Featured <span className="font-serif-italic text-ember">projects.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A collection of projects I had fun bringing to life, from polished apps to hands-on
            hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectExtras() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
      <div data-reveal>
        <p className="text-sm uppercase tracking-[0.22em] text-ember">Selected Coursework</p>
        <h3 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
          More things I&apos;ve <span className="font-serif-italic text-ember">built.</span>
        </h3>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {schoolProjects.map((project) => (
          <article
            key={project.title}
            data-reveal
            className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-card/70 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-ember">{project.tag}</p>
            <h4 className="mt-3 font-display text-3xl leading-tight text-foreground">
              {project.title}
            </h4>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-7">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-border bg-background/25 px-3 py-1.5 text-xs text-foreground/80"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="editorial-band relative left-1/2 mt-16 w-screen -translate-x-1/2 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div data-reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-ember md:text-base">
              Teams and Leadership
            </p>
            <h3 className="mt-3 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Built with <span className="font-serif-italic text-ember">others.</span>
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Design teams, engineering challenges, and communities that shaped how I collaborate
              and build.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {teams.map((team) => (
              <article
                key={`${team.organization}-${team.role}`}
                data-reveal
                className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-card/70 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-h-16 w-40 items-center md:w-44">
                    <img
                      src={team.logo}
                      alt={`${team.organization} logo`}
                      className="max-h-16 w-full object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground md:text-base">
                    {team.date}
                  </p>
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ember">
                  {team.organization}
                </p>
                <h4 className="mt-3 font-display text-3xl leading-tight text-foreground">
                  {team.role}
                </h4>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {team.detail}
                </p>
                {team.image && (
                  <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/20">
                    <img
                      src={team.image.src}
                      alt={team.image.alt}
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {team.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border bg-background/25 px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <article
        data-reveal
        className={`group relative flex h-full min-h-[36rem] flex-col rounded-[1.75rem] border bg-card/55 p-7 shadow-elegant backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-card hover:shadow-lift md:p-8 ${
          featured ? "border-ember/45" : "border-border"
        }`}
      >
        {(project.github || project.live) && (
          <div className="absolute right-7 top-7 flex gap-2 md:right-8 md:top-8">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open the live ${project.title} website`}
                title="View live site"
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/30 text-foreground transition-all hover:-translate-y-1 hover:bg-background/60"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/30 text-foreground transition-all hover:-translate-y-1 hover:bg-background/60"
              >
                <SiGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        )}

        <p className="mt-14 text-xs uppercase tracking-[0.2em] text-ember">{project.tag}</p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{project.solution}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-border bg-background/25 px-3 py-1.5 text-xs text-foreground/80"
            >
              {technology}
            </span>
          ))}
        </div>
        {project.images && (
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="mt-6 w-full rounded-xl border border-ember/35 bg-background/25 px-4 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-background/55"
          >
            Preview project
          </button>
        )}
      </article>

      {project.images && (
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-border bg-card">
            <DialogHeader>
              <p className="text-xs uppercase tracking-[0.2em] text-ember">{project.tag}</p>
              <DialogTitle className="font-display text-3xl leading-tight md:text-4xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </DialogDescription>
            </DialogHeader>
            <div className="relative mt-4 overflow-hidden rounded-2xl border border-border bg-background/20 shadow-elegant">
              <img
                src={project.images[activeImage].src}
                alt={project.images[activeImage].alt}
                className="max-h-[62vh] w-full object-contain"
              />
              {project.images.length > 1 && (
                <>
                  {activeImage > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveImage((current) => current - 1)}
                      aria-label="View previous KanFlow image"
                      className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground shadow-elegant backdrop-blur transition-transform hover:scale-105"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                  {activeImage < project.images.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveImage((current) => current + 1)}
                      aria-label="View next KanFlow image"
                      className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground shadow-elegant backdrop-blur transition-transform hover:scale-105"
                    >
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  )}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/85 px-3 py-1 text-xs tracking-[0.14em] text-foreground backdrop-blur">
                    {activeImage + 1} / {project.images.length}
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-border bg-background/25 px-3 py-1.5 text-xs text-foreground/80"
                >
                  {technology}
                </span>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
