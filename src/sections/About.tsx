import { CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About me"
        title="Quality-focused, detail-oriented, web-first."
        description="A concise view of the professional profile represented in the resume."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="card p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{portfolioData.summary}</p>
          <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Seeking opportunities in {portfolioData.focus.split(" · ").join(", ")}.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["eCommerce", "Website management & validation"],
            ["Manual QA", "Functional, regression & UI testing"],
            ["Web Quality", "Content, pricing & product validation"],
            ["Cross-browser", "Chrome, Firefox, Edge & Safari"]
          ].map(([title, text]) => (
            <div className="card p-6" key={title}>
              <CheckCircle2 className="text-brand" size={22} />
              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
