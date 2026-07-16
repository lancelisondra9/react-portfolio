import { FaGithub, FaLinkedin } from "react-icons/fa";
import ExperienceOrbs from "./components/ExperienceOrbs";

const experience = [
  {
    company: "DigiKey",
    role: "Software Engineer Intern (On-site)",
    location: "Thief River Falls, Minnesota",
    dates: "May 2026 – August 2026",
    bullets: [
      "Collaborated in an Agile/Scrumban environment, participating in sprint planning and daily standups.",
      "Monitored and maintained Azure DevOps CI/CD pipelines, debugging and resolving failing builds or release steps to ensure reliable deployments.",
      "Refactored existing methods to improve code maintainability, readability, and long-term supportability.",
      "Leveraged AI agents & Azure DevOps MCP servers to streamline daily tasks.",
      "Identified and remediated security issues using Snyk and SonarQube across supported codebases, resolving 300+ vulnerabilities in the process.",
    ],
  },
  {
    company: "AdPipe",
    role: "Software Engineer Intern (Remote)",
    location: "Athens, Georgia",
    dates: "December 2024 – July 2025",
    bullets: [
      "Designed and implemented a prototype for Shot Boundary Detection to assess feasibility for in-house product integration.",
      "Built Python-based benchmarking tools to evaluate detection accuracy and processing performance against existing solutions.",
      "Presented results and technical recommendations to leadership, informing them of the feasibility of in-house development.",
    ],
  },
  {
    company: "ZieglerCat",
    role: "Data Analyst Intern (Hybrid)",
    location: "Bloomington, Minnesota",
    dates: "June 2024 – October 2024",
    bullets: [
      "Maintained customer contact data in Dynamics Database with high accuracy.",
      "Automated workflows using Excel scripts and macros, which resulted in a 40% increase in efficiency.",
      "Processed and updated 800–1,000 contacts daily, reducing project completion time by 20%.",
      "Optimized database operations to maintain reliable, up-to-date records for marketing initiatives.",
    ],
  },
];

const projects = [
  {
    name: "NBAStatsComprarator",
    description: "Python based web scraper that allows users to compare NBA player stats.",
    language: "Python",
    url: "https://github.com/lancelisondra9/NBAStatsComprarator",
  },
  {
    name: "PennyPilot",
    description: "A budget tracking web application using Angular, Bootstrap, HTML, Google Firebase, and Google Firestore.",
    language: "TypeScript",
    url: "https://github.com/lancelisondra9/PennyPilot",
  },
  {
    name: "PawfectMatch",
    description: "Modern Software Development final project.",
    language: "HTML",
    url: "https://github.com/TyBuechler/PawfectMatch",
  },
  {
    name: "Shot_Eval",
    description: "Compares a modified version of PySceneDetect against AWS Rekognition for shot boundary detection.",
    language: "Python",
    url: "https://github.com/lancelisondra9/Shot_Eval",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-20 sm:px-10">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Lance Lisondra</h1>
        <p className="text-sm font-medium uppercase tracking-wide text-accent">Software Engineer</p>
        <p className="max-w-prose text-base leading-relaxed text-white/80">
          Hi! I&apos;m Lance, a Software Engineer currently looking for jobs because I need money
          to pay my bills. In my free time I&apos;m an avid reader/writer, amateur pickleballer,
          and amateur cook.
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/lancelisondra9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent"
          >
            <FaGithub aria-hidden />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lance-lisondra-b4831b226/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent"
          >
            <FaLinkedin aria-hidden />
            LinkedIn
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-accent">Experience</h2>
        <ExperienceOrbs jobs={experience} />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-accent">Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white/60 p-4 transition-colors hover:border-accent dark:border-zinc-800 dark:bg-white/5 dark:hover:border-accent"
            >
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <span className="w-fit rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                {project.language}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
