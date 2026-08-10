import { useState, useEffect } from "react";
import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { Github, Menu, Terminal, X } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

type NavSection = {
  title: string;
  href?: string;
  links?: { title: string; href: string }[];
};

const NAV: NavSection[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quickstart" },
    ],
  },
  { title: "Architecture", href: "/docs/architecture" },
  {
    title: "Concepts",
    links: [
      { title: "Runnable", href: "/docs/concepts/runnable" },
      { title: "Prompt Template", href: "/docs/concepts/prompt-template" },
      { title: "Chat Model", href: "/docs/concepts/chat-model" },
      { title: "Output Parser", href: "/docs/concepts/output-parser" },
      { title: "Runnable Sequence", href: "/docs/concepts/runnable-sequence" },
      { title: "Runnable Parallel", href: "/docs/concepts/runnable-parallel" },
      { title: "Tool", href: "/docs/concepts/tool" },
      { title: "Vector Store", href: "/docs/concepts/vector-store" },
      { title: "RAG Chain", href: "/docs/concepts/rag-chain" },
      { title: "Agent", href: "/docs/concepts/agent" },
      { title: "Callback Handler", href: "/docs/concepts/callback-handler" },
      { title: "Memory", href: "/docs/concepts/memory" },
    ],
  },
  { title: "Examples & Demos", href: "/docs/examples" },
  { title: "Roadmap", href: "/docs/roadmap" },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const linkClass = (href: string) =>
    [
      "block rounded-md px-3 py-1.5 text-sm transition-colors",
      pathname === href
        ? "bg-emerald-subtle font-medium text-primary"
        : "text-muted-foreground hover:bg-accent hover:text-foreground",
    ].join(" ");

  return (
    <nav className="flex flex-col gap-6" aria-label="Documentation">
      {NAV.map((section) => (
        <div key={section.title}>
          {section.href ? (
            <Link
              to={section.href}
              onClick={onNavigate}
              className={linkClass(section.href)}
            >
              {section.title}
            </Link>
          ) : (
            <>
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                {section.title}
              </p>
              <div className="flex flex-col gap-0.5 border-l border-border pl-2">
                {section.links?.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onNavigate}
                    className={linkClass(link.href)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </nav>
  );
}

function DocsLayout() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const menuOpen = isMobile ? open : desktopOpen;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-border p-3 text-muted-foreground transition-colors hover:text-foreground min-h-11 min-w-11"
              aria-label={
                menuOpen ? "Close documentation menu" : "Open documentation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 1024) {
                  setOpen((v) => !v);
                } else {
                  setDesktopOpen((v) => !v);
                }
              }}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold tracking-tight text-foreground">
                EduChain
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
            <Link to="/docs" className="hidden transition-colors hover:text-foreground sm:inline">
              Docs
            </Link>
            <Link
              to="/features"
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              Features
            </Link>
            <Link
              to="/docs/examples"
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              Examples
            </Link>
            <a
              href="https://github.com/CodeWithDks/EduChain"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              GitHub
            </a>
            <Link
              to="/docs/installation"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-emerald-glow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-10 px-4 py-10 lg:px-8">
        <aside className={`${desktopOpen ? "lg:block" : "lg:hidden"} hidden w-60 shrink-0`}>
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <SidebarNav />
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-border bg-card pt-20 p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Documentation</span>
              <button
                type="button"
                aria-label="Close documentation menu"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border p-1.5 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
