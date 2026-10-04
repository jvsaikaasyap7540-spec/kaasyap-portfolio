import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell bg-slate-50 dark:bg-slate-900/30">
      <SectionHeading eyebrow="Education" title="Academic foundation." />
      <div className="grid gap-5 lg:grid-cols-3">
        {portfolioData.education.map((item) => (
          <article className="card p-7" key={item.institution}>
            <span className="icon-box"><GraduationCap size={20} /></span>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-brand">{item.period}</p>
            <h3 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{item.degree}</h3>
            <p className="mt-1 font-semibold text-slate-700 dark:text-slate-300">{item.institution}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
