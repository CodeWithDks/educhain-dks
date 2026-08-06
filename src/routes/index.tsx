import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "EduChain — An educational Python framework for LLMs",
      },
      {
        name: "description",
        content:
          "An educational Python framework inspired by LangChain — built from scratch to understand how modern LLM frameworks work internally.",
      },
      {
        property: "og:title",
        content: "EduChain",
      },
      {
        property: "og:description",
        content:
          "An educational Python framework inspired by LangChain — built from scratch to understand how modern LLM frameworks work internally.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <nav className="flex items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            EduChain
          </span>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#docs" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <a
            href="#examples"
            className="transition-colors hover:text-foreground"
          >
            Examples
          </a>
          <a
            href="https://github.com/CodeWithDks/EduChain"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-12 text-center lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-emerald-subtle px-3 py-1 text-sm font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open source
        </div>

        <h1 className="mt-8 max-w-4xl text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          EduChain
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          An educational Python framework inspired by LangChain — built from
          scratch to understand how modern LLM frameworks work internally.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-emerald/25 transition-all hover:bg-emerald-glow hover:shadow-emerald/40"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com/CodeWithDks/EduChain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        <div className="mt-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              educhain.py
            </span>
          </div>
          <pre className="overflow-x-auto p-6 text-left text-sm leading-relaxed text-foreground font-mono">
            <code>{`from educhain import Chain, Prompt

# Build a simple LLM pipeline from scratch
chain = Chain([
    Prompt("Explain {topic} in one sentence."),
    Prompt("Now translate that to French.")
])

result = chain.run({"topic": "recursion"})
print(result)`}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}
