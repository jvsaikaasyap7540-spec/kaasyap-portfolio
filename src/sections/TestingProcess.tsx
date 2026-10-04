import { ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function TestingProcess() {
  return (
    <section className="section-shell pt-0">
      <div className="card overflow-hidden p-7 sm:p-9">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">QA workflow</p>
          <h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Testing process</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            A visual workflow included as a general QA process representation; individual steps are not presented as additional resume claims.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {portfolioData.testingProcess.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                {String(index + 1).padStart(2, "0")} · {step}
              </span>
              {index < portfolioData.testingProcess.length - 1 && <ArrowRight className="hidden text-slate-300 sm:block" size={16} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
