import { ArrowUp, CheckCircle2 } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { portfolioData } from "./data/portfolioData";
import { useTheme } from "./hooks/useTheme";
import { About } from "./sections/About";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { TestingProcess } from "./sections/TestingProcess";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <TestingProcess />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built from the provided resume.</p>
          <a className="inline-flex items-center gap-2 hover:text-brand" href="#home"><CheckCircle2 size={16} /> Back to top <ArrowUp size={15} /></a>
        </div>
      </footer>
    </div>
  );
}
