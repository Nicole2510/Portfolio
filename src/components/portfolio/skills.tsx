import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGitlab,
  SiGnubash,
  SiGraphql,
  SiInfluxdb,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiNuxt,
  SiPostgresql,
  SiPytorch,
  SiPytest,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiSwagger,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import { SectionLabel } from "./shared";

type BrandedTool = { name: string; Icon: IconType };

const tools: BrandedTool[] = [
  { name: "Python", Icon: SiPython },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "C++", Icon: SiCplusplus },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Nuxt.js", Icon: SiNuxt },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "FastAPI", Icon: SiFastapi },
  { name: ".NET", Icon: SiDotnet },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "AWS", Icon: FaAws },
  { name: "Docker", Icon: SiDocker },
  { name: "Linux", Icon: SiLinux },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "SQLAlchemy", Icon: SiSqlalchemy },
  { name: "InfluxDB", Icon: SiInfluxdb },
  { name: "Git", Icon: SiGit },
  { name: "GitLab CI/CD", Icon: SiGitlab },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Swagger", Icon: SiSwagger },
  { name: "pytest", Icon: SiPytest },
  { name: "Bash", Icon: SiGnubash },
];

const toolRows = [
  tools.filter((_, index) => index % 2 === 0),
  tools.filter((_, index) => index % 2 === 1),
];

function ToolTile({ name, Icon }: BrandedTool) {
  return (
    <li className="flex shrink-0 items-center gap-4 rounded-2xl border border-border bg-background/35 px-6 py-5 text-lg text-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-background/60 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-ember">
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <span className="whitespace-nowrap font-medium">{name}</span>
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 pb-10 pt-12 md:pb-12 md:pt-16">
      <SectionLabel label="Skills" />

      <div
        className="skills-toolbox relative overflow-hidden rounded-[1.75rem] border border-border bg-card/65 py-12 shadow-elegant backdrop-blur md:py-16"
        data-reveal
      >
        <div className="space-y-6">
          {toolRows.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden">
              <ul
                className={`flex w-max gap-6 px-3 ${
                  rowIndex === 0 ? "animate-toolbox" : "animate-toolbox-reverse"
                }`}
              >
                {[...row, ...row].map((tool, index) => (
                  <ToolTile key={`${rowIndex}-${tool.name}-${index}`} {...tool} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
