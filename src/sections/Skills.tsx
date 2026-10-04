import { Bug, Code2, Globe2, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

const groups = [
  ["Testing", "testing", Bug],
  ["Automation", "automation", Code2],
  ["Tools", "tools", Wrench],
  ["Web Technologies", "web", Globe2]
] as const;

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="Skills" title="A practical QA toolkit." description="Skills are grouped directly from the uploaded resume." />
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map(([title, key, Icon]) => (
          <div className="card p-7" key={title}>
            <div className="flex items-center gap-3">
              <span className="icon-box"><Icon size={20} /></span>
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.skills[key].map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
