import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("kaasyap-theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("kaasyap-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark")
  };
}
