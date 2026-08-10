import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Menu, Terminal, X } from "lucide-react";

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-5 lg:px-12">
      <Link to="/" className="flex items-center gap-2">
        <Terminal className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight text-foreground">
          EduChain
        </span>
      </Link>

      <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
        <Link to="/docs" className="transition-colors hover:text-foreground">
          Docs
        </Link>
        <Link
          to="/features"
          className="transition-colors hover:text-foreground"
        >
          Features
        </Link>
        <Link
          to="/docs/examples"
          className="transition-colors hover:text-foreground"
        >
          Examples
        </Link>
        <a
          href="https://github.com/CodeWithDks/EduChain"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-menu"
        className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-3 text-foreground transition-colors hover:bg-accent sm:hidden min-h-11 min-w-11"
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute left-6 right-6 top-full z-50 flex flex-col overflow-hidden rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground shadow-lg sm:hidden"
        >
          <Link
            to="/docs"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            to="/docs/examples"
            onClick={() => setMenuOpen(false)}
            className="border-t border-border px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
          >
            Examples
          </Link>
          <a
            href="https://github.com/CodeWithDks/EduChain"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="border-t border-border px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

