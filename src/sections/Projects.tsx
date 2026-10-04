import { ExternalLink, FolderKanban } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell bg-slate-50 dark:bg-slate-900/30">
      <SectionHeading eyebrow="Projects" title="Selected work from the resume." />
      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <article className="card group flex h-full flex-col p-7 sm:p-9" key={project.name}>
            <div className="flex items-start justify-between gap-4">
              <span className="icon-box"><FolderKanban size={20} /></span>
              {project.period && <span className="text-xs font-bold text-slate-400">{project.period}</span>}
            </div>
            <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{project.name}</h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
            <ul className="mt-6 grid gap-3">
              {project.responsibilities.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-7">
              {project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
