import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Hero() {
  const p = portfolioData.personal;

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-70" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:pb-28 lg:pt-12">
        <div className="animate-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-bold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            QA Testing · Web Testing · Software Quality Assurance
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I’m <span className="text-brand">{p.name.split(" ")[3] ?? p.name}</span>.
            <span className="mt-2 block">I build confidence in web experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {portfolioData.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects"><ArrowUpRight size={18} /> View My Work</a>
            <a className="btn-secondary" href="/Josyula-Venkata-Sai-Kaasyap-resume.pdf" download>
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {p.location}</span>
            <a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${p.email}`}><Mail size={16} /> {p.email}</a>
            <a className="inline-flex items-center gap-2 hover:text-brand" href={`tel:${p.phone}`}><Phone size={16} /> {p.phone}</a>
          </div>
        </div>

        <div className="animate-up delay-1 lg:flex lg:items-end">
          <div className="glass-card w-full p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Quick Profile</span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">QA Focus</span>
            </div>
            <div className="grid gap-5">
              {portfolioData.quickProfile.map((item) => (
                <div key={item.label} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-slate-800">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="mx-auto mb-10 flex w-fit animate-bounce text-slate-400">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
