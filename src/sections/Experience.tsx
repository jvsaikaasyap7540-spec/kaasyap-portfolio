import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell bg-slate-50 dark:bg-slate-900/30">
      <SectionHeading eyebrow="Experience" title="Hands-on QA in an eCommerce environment." />
      <div className="relative ml-3 border-l border-slate-200 pl-8 dark:border-slate-800">
        {portfolioData.experience.map((item) => (
          <article key={item.company} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-50 bg-brand dark:border-slate-950" />
            <div className="card p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand"><BriefcaseBusiness size={16} /> {item.role}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{item.company}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <CalendarDays size={14} /> {item.period}
                </span>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
