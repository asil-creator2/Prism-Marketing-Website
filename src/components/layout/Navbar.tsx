import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Home,
  LayoutGrid,
  ArrowLeftRight,
  ChartNoAxesColumn,
  CalendarClock,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { prismLogo } from "../../assets";

interface NavItem {
  id: string;
  labelKey: string;
  path: string;
  Icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "home", labelKey: "navbar.links.home", path: "#home", Icon: Home },
  { id: "about", labelKey: "navbar.links.about", path: "#about", Icon: LayoutGrid },
  { id: "projects", labelKey: "navbar.links.projects", path: "#projects", Icon: ArrowLeftRight },
  { id: "leaderboard", labelKey: "navbar.links.leaderboard", path: "#leaderboard", Icon: ChartNoAxesColumn },
  { id: "events", labelKey: "navbar.links.events", path: "#events", Icon: CalendarClock },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
  }, [isDark]);

  const navLinkClass = (id: string) =>
    `flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2
    text-sm font-medium transition-colors lg:px-3.5 ${
      active === id
        ? "bg-[var(--prism-nav-active)] text-[var(--prism-nav-active-text)]"
        : "text-muted hover:bg-surface-raised hover:text-foreground"
  }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav
        className="
          prism-navbar relative flex h-20 w-full
          items-center justify-between gap-4
          border-b border-border px-5 lg:pl-20
        "
      >

        {/* Brand */}
        <Link
          to="/"
          onClick={() => {
            setActive("Home");
            setMenuOpen(false);
          }}
            aria-label={t("navbar.brandLabel")}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src={prismLogo}
            alt={t("navbar.logoAlt")}
            className="h-9 w-9 object-contain"
          />
          <span className="whitespace-nowrap text-base font-m-plus-1 tracking-wide sm:text-lg">
            P<span>s -</span> P<span>rism</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-(--prism-nav-pill) p-1.5 lg:flex">
          {navItems.map(({ id, labelKey, path, Icon }) => (
            <Link
              key={id}
              to={path}
              onClick={() => setActive(id)}
              aria-current={active === id ? "page" : undefined}
              className={navLinkClass(id)}
            >
              <Icon size={14} strokeWidth={2.3} />
              {t(labelKey)}
            </Link>
          ))}
        </div>

        {/* Desktop theme switcher */}
        <div className="ml-auto hidden shrink-0 items-center rounded-lg border border-border p-1 sm:flex">
          <button
            type="button"
            onClick={() => setIsDark(false)}
            aria-pressed={!isDark}
            className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
              !isDark
                ? "bg-(--prism-nav-active) text-(--prism-nav-active-text)"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t("navbar.theme.light")}
          </button>

          <button
            type="button"
            onClick={() => setIsDark(true)}
            aria-pressed={isDark}
            className={`rounded-md px-3 py-1.5 text-xs transition-colors ${
              isDark
                ? "bg-surface-raised text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t("navbar.theme.dark")}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={t(menuOpen ? "navbar.closeNavigation" : "navbar.openNavigation")}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface-raised lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-surface p-3 text-foreground shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map(({ id, labelKey, path, Icon }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => {
                    setActive(id);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                    active === id
                      ? "bg-(--prism-nav-active) text-(--prism-nav-active-text)"
                      : "text-muted hover:bg-surface-raised hover:text-foreground"
                  }`}
                >
                  <Icon size={17} />
                  {t(labelKey)}
                </Link>
              ))}
            </div>

            {/* Mobile theme switcher */}
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-sm text-muted">{t("navbar.appearance")}</span>

              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setIsDark(false)}
                  aria-label={t("navbar.lightTheme")}
                  aria-pressed={!isDark}
                  className={`rounded-md p-2 ${
                    !isDark
                      ? "bg-(--prism-nav-active) text-(--prism-nav-active-text)"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <Sun size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsDark(true)}
                  aria-label={t("navbar.darkTheme")}
                  aria-pressed={isDark}
                  className={`rounded-md p-2 ${
                    isDark
                      ? "bg-surface-raised text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <Moon size={17} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
