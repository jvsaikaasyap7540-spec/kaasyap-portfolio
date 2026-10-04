import { Award, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function Achievements() {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Impact" title="Documented achievements." />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.achievements.map((achievement) => (
          <div className="card flex gap-4 p-6" key={achievement}>
            <span className="icon-box shrink-0"><Award size={19} /></span>
            <div>
              <CheckCircle2 className="mb-2 text-emerald-500" size={17} />
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
