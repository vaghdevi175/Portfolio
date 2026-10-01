import useTheme from "../hooks/useTheme";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle({ dark }) {
  const [theme, toggle] = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border transition-colors ${
        dark
          ? "border-night-line text-night-text-soft hover:border-signal-soft hover:text-signal-soft"
          : "border-paper-line text-ink-soft hover:border-accent hover:text-accent"
      }`}
    >
      {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
