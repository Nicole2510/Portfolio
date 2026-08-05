import portrait from "@/assets/nicole-portrait-cropped.jpg";
import kanfloBoard from "@/assets/kanflo-board.png";
import kanfloWorkspace from "@/assets/kanflo-workspace.png";
import anglerLogo from "@/assets/logo-angler.png";
import genoaLogo from "@/assets/logo-genoa.png";
import krakenLogo from "@/assets/logo-kraken.svg";
import woodLogo from "@/assets/logo-wood.svg";
import aecLogo from "@/assets/logo-aec.webp";
import nsbeLogo from "@/assets/logo-nsbe-mun.jpg";
import paradigmLogo from "@/assets/logo-paradigm-mark.png";
import paradigmTeam from "@/assets/logo-paradigm.jpg";
import robogalsLogo from "@/assets/logo-robogals.png";
import robogalsStemFair from "@/assets/robogals-stem-fair.jpg";
import woodFieldTest from "@/assets/wood-field-test.jpg";
import woodRobot from "@/assets/wood-robot.jpg";

export { portrait };

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export type Project = {
  title: string;
  tag: string;
  solution: string;
  tech: string[];
  github?: string;
  live?: string;
  images?: Array<{ src: string; alt: string; caption: string }>;
};

export const projects: Project[] = [
  {
    title: "AIDE: Analog Intelligent Design Engine",
    tag: "AI/ML · Circuit Design",
    solution:
      "Built an AI-powered EDA system that uses Llama-3 to generate SPICE-ready circuit parameters, then closes the loop with Cadence simulations and automated output parsing to refine performance each cycle.",
    tech: ["Python", "PyTorch", "Llama-3", "SPICE", "Cadence", "Prompt engineering"],
    github: "https://github.com/WesAub/Capstone",
  },
  {
    title: "InternComp",
    tag: "Full-stack · Job Application Board",
    solution:
      "Designed a centralized job-search workspace where interns can discover work-term opportunities, research companies, track applications, and reach recruiters directly, turning a scattered search into one clear workflow.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    github: "https://github.com/Nicole2510/interncomp",
    live: "https://interncomp.ca",
  },
  {
    title: "KanFlow",
    tag: "Desktop · Kanban Board",
    solution:
      "Created a Windows desktop Kanban application for organizing task cards across To Do, In Progress, and Done workflows, with categories, due dates, assignees, progress indicators, and command-based board interactions.",
    tech: ["C#", ".NET Framework 4.8", "WPF", "XAML", "MVVM"],
    github: "https://github.com/Nicole2510/Kanban_App",
    images: [
      {
        src: kanfloWorkspace,
        alt: "KanFlow workspace dashboard with project boards",
        caption: "Workspace dashboard for creating, sorting, and monitoring team boards.",
      },
      {
        src: kanfloBoard,
        alt: "KanFlow kanban board with task columns and cards",
        caption: "Board view with task status, labels, deadlines, and team assignments.",
      },
    ],
  },
];

export const schoolProjects: Project[] = [
  {
    title: "24-Hour Digital Clock",
    tag: "Digital Systems · March 2024",
    solution:
      "Implemented a real-time 24-hour clock on a DE2-115 FPGA using VHDL state machines, a 26-bit counter, and seven-segment displays, then verified each component and the integrated system with ModelSim test benches.",
    tech: ["VHDL", "DE2-115 FPGA", "ModelSim", "State machines", "Test benches"],
  },
  {
    title: "Signal Analysis",
    tag: "Electrical Engineering · June 2023",
    solution:
      "Investigated signal integrity and attenuation using oscilloscopes and waveform generators, then modelled and simulated waveforms in MATLAB and PSpice to diagnose distortion and improve signal accuracy.",
    tech: ["MATLAB", "PSpice", "Oscilloscopes", "Waveform analysis", "Signal integrity"],
  },
];

export const teams = [
  {
    role: "Hardware Design Engineer",
    organization: "Paradigm Hyperloop",
    logo: paradigmLogo,
    image: {
      src: paradigmTeam,
      alt: "Paradigm student design team gathered around their autonomous vehicle",
      caption: "The Paradigm student design team with its autonomous competition vehicle.",
    },
    date: "July 2022 - Sept 2023",
    detail:
      "Designed and tested embedded sensing hardware for an autonomous vehicle, including KiCad schematics and PCBs, soldered prototypes, SPI sensor integration, and iterative hardware debugging.",
    tags: ["KiCad", "PCB design", "SPI", "Microcontrollers"],
  },
  {
    role: "STEM Volunteer",
    organization: "Robogals",
    logo: robogalsLogo,
    image: {
      src: robogalsStemFair,
      alt: "Robogals volunteers gathered behind a Summer STEM Fair sign",
      caption: "Robogals volunteers at the Summer STEM Fair.",
    },
    date: "May 2022 - Aug 2024",
    detail:
      "Helped children build confidence in STEM by teaching them to program a robot in Scratch to identify colors and navigate a map.",
    tags: ["STEM outreach", "Scratch", "Robotics"],
  },
  {
    role: "Director of Events",
    organization: "NSBE MUN Chapter",
    logo: nsbeLogo,
    date: "Dec 2022 - Apr 2026",
    detail:
      "Led technical talks, networking sessions, workshops, and professional development events with industry partners such as Ciena and Nokia.",
    tags: ["Leadership", "Event planning", "Industry relations"],
  },
  {
    role: "Engineering Competitor",
    organization: "Atlantic Engineering Competition",
    logo: aecLogo,
    date: "Jan 2023",
    detail:
      "Developed a Python solution for optimizing solar panel placement and energy storage during an engineering design challenge.",
    tags: ["Python", "Energy systems", "Design challenge"],
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Angler Solutions",
    logo: anglerLogo,
    date: "Sept 2025 - Dec 2025",
    detail:
      "Full-stack energy modelling: Vue/Nuxt dashboards, FastAPI services, and a Python hydroelectric simulation model.",
    bullets: [
      "Developed a modular frontend with Vue.js/Nuxt.js using Apache ECharts for interactive graphs and heat maps.",
      "Built reusable components with explicit loading, empty, and error states across energy modelling workflows.",
      "Built RESTful APIs with FastAPI and API key-based authentication; used asyncio to cut response times by 75% under high-concurrency loads.",
      "Implemented a Python pumped-storage hydroelectric simulation model with automated execution and structured JSON export, validated with pytest.",
      "Designed a scalable PostgreSQL database with SQLAlchemy for scenario data and simulation results, improving query performance.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Kraken Robotics",
    logo: krakenLogo,
    date: "Jan 2025 - Apr 2025",
    detail:
      "Internal tooling for real-time battery diagnostics: React + TypeScript frontends, Node APIs, gRPC, and CI/CD.",
    bullets: [
      "Developed reusable front-end components with React, TypeScript, and styled-components for scalable internal tools.",
      "Built RESTful APIs with Express.js and Node.js to automate backend script execution, eliminating manual data pipeline runs.",
      "Integrated gRPC services with Protocol Buffers for low-latency communication between distributed frontend and backend services.",
      "Queried real-time battery hardware data using GraphQL and InfluxDB to power live diagnostic visualizations.",
      "Automated build tasks with Bash and updated GitLab pipelines for CI/CD, using Git and SVN for version control.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Genoa Design International Ltd",
    logo: genoaLogo,
    date: "Apr 2024 - Aug 2024",
    detail:
      "Built a PCN module end-to-end: React/TypeScript UI, C# ASP.NET Core APIs, SQL Server, and automated tests.",
    bullets: [
      "Designed a PCN (Preliminary Change Notification) module in the web application using React with TypeScript, improving UI responsiveness and workflow efficiency.",
      "Created RESTful APIs in C# with ASP.NET Core and tested PCN endpoints with Swagger.",
      "Implemented automated API testing with C# and xUnit to improve system stability and reduce production risk.",
      "Developed a SQL Server database for efficient storage and retrieval of PCN-related data.",
      "Collaborated on code reviews, branching strategies, and task tracking in Azure DevOps to support agile delivery.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Genoa Design International Ltd",
    logo: genoaLogo,
    date: "Sept 2023 - Dec 2023",
    detail:
      "3D visualization plugins for AutoCAD and Navisworks in C#, .NET, and WPF, including a major load-time win.",
    bullets: [
      "Built and optimized AutoCAD and Navisworks 3D visualization plugins in C#, .NET, and WPF.",
      "Developed XAML-based UI panels and dialogs that cut load time for complex engineering models from over an hour to under five minutes.",
      "Programmed and tested a Navisworks viewpoint management system, diagnosing and resolving data processing issues.",
      "Formally documented defect reproduction and resolution for engineering handoff.",
    ],
  },
  {
    role: "Robotics Intern",
    company: "Wood PLC",
    logo: woodLogo,
    date: "Jan 2023 - Apr 2023",
    detail:
      "Robotics development and field validation spanning computer vision, quality control, technical documentation, and thermal inspection work.",
    bullets: [
      "Developed and debugged camera-calibration scripts in Python with OpenCV.",
      "Conducted quality-control testing to verify robotic systems against design specifications.",
      "Created Markdown documentation for robotic systems and their codebase, using GitLab for version control and repository management.",
      "Supported thermal inspections at NL Hydro using robotics and thermal-imaging equipment.",
      "Researched robotics-market trends and customer needs and presented the findings to management.",
    ],
    images: [
      {
        src: woodFieldTest,
        alt: "Nicole operating an industrial inspection robot during field validation",
        caption: "Field validation and thermal inspection work in an industrial facility.",
      },
      {
        src: woodRobot,
        alt: "Industrial inspection robot used during Nicole's Wood PLC internship",
        caption: "The Xplorobot platform used for robotic inspection and testing.",
      },
    ],
  },
];

export const skills = [
  {
    group: "Languages & Scripting",
    items: [
      "Python",
      "C#",
      "C++",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Bash",
      "PowerShell",
      "XAML",
      "VHDL",
      "MATLAB",
      "HTML/CSS",
    ],
  },
  {
    group: "Frameworks & Tools",
    items: [
      ".NET",
      "ASP.NET Core",
      "WPF",
      "React",
      "Vue.js / Nuxt.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "AutoCAD",
      "Navisworks",
      "Git",
      "SVN",
      "Azure DevOps",
    ],
  },
  {
    group: "AI / ML",
    items: ["PyTorch", "Llama-3", "Prompt engineering", "LLM APIs", "Cadence simulations"],
  },
  {
    group: "Cloud, Systems & Databases",
    items: [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "Linux (Ubuntu)",
      "Windows Server",
      "Virtual Machines",
      "PostgreSQL",
      "SQL Server",
      "InfluxDB",
      "SQLAlchemy",
    ],
  },
  {
    group: "Testing, Networking & Protocols",
    items: [
      "pytest",
      "xUnit",
      "Swagger",
      "GitLab CI/CD",
      "REST APIs",
      "gRPC / Protocol Buffers",
      "GraphQL",
      "TCP/IP",
      "SPI",
      "Agile / Scrum",
    ],
  },
];
