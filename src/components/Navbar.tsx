import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const links: Array<[string, string, LucideIcon]> = [
  ["Home", "home", Sun],
  ["About", "about", Sun],
  ["Experience", "experience", Sun],
  ["Skills", "skills", Sun],
  ["Projects", "projects", Sun],
  ["Education", "education", Sun],
  ["Contact", "contact", Sun]
];

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <button onClick={() => go("home")} className="text-left font-black tracking-tight text-slate-900 dark:text-white">
          <span className="text-brand">K</span>aasyap<span className="text-brand">.</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="nav-link">{label}</button>
          ))}
          <button aria-label="Toggle theme" onClick={onToggleTheme} className="icon-btn">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button aria-label="Toggle theme" onClick={onToggleTheme} className="icon-btn">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="icon-btn">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="grid gap-1">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
