import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Boxes,
  Bot,
  CheckCircle2,
  Database,
  Github,
  GraduationCap,
  Layers,
  Menu,
  Puzzle,
  Star,
  Terminal,
  X,
  Zap,
} from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <nav className="relative flex items-center justify-between px-6 py-5 lg:px-12">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            EduChain
          </span>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <Link to="/docs" className="transition-colors hover:text-foreground">
            Docs
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


      <main className="flex flex-1 flex-col items-center px-6 pb-20 pt-12 text-center lg:px-12">
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
            to="/docs"
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1">
            Python 3.10+
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1">
            MIT License
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1">
            Tests passing
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1">
            PyPI: educhain-dks
          </span>
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
            <code>{`from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

prompt = PromptTemplate(
    template="Explain {topic} in simple words.",
    input_variables=["topic"]
)
model = ChatModel()
parser = StringOutputParser()

chain = prompt | model | parser
response = chain.invoke({"topic": "Artificial Intelligence"})
print(response)`}</code>
          </pre>
        </div>

        {/* Section 1 — Why EduChain */}
        <section className="mt-24 w-full max-w-5xl text-left">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why EduChain
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-xl bg-emerald-subtle p-3">
                <Boxes className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Not a Black Box
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every core primitive — vector search, streaming detection, tool
                schema generation — is hand-written and readable, not hidden
                behind a library import.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-xl bg-emerald-subtle p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                One Consistent Interface
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every component implements invoke(), stream(), and ainvoke() —
                so pieces compose predictably into pipelines.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-xl bg-emerald-subtle p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Educational by Design
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                EduChain is not trying to replace LangChain or be
                feature-compatible with it. It exists to teach the architecture
                underneath.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Feature grid */}
        <section className="mt-24 w-full max-w-5xl text-left">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Features
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Puzzle className="h-5 w-5 text-primary" />}
              title="Core Primitives"
              items={[
                "Runnable",
                "PromptTemplate",
                "ChatModel",
                "Output Parsers",
                "RunnableSequence",
                "RunnableParallel",
                "RunnablePassthrough",
                "RunnableLambda",
              ]}
              href="/docs/concepts/runnable"
            />
            <FeatureCard
              icon={<Database className="h-5 w-5 text-primary" />}
              title="Memory"
              items={["Chat History / Memory Module"]}
              href="/docs"
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5 text-primary" />}
              title="Execution Models"
              items={["Streaming", "Async Execution", "Callback System"]}
              href="/docs/concepts/callback-handler"
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5 text-primary" />}
              title="Agentic Capabilities"
              items={["Tool Calling", "Vector Stores", "RAG", "Agents"]}
              href="/docs/concepts/agent"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-5 w-5 text-primary" />}
              title="Engineering Fundamentals"
              items={[
                "Input validation",
                "Modular package design",
                "36/36 tests passing",
              ]}
              href="/docs"
            />
          </div>
        </section>

        {/* Section 3 — Creator */}
        <section className="mt-24 flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Built by Deepak Kumar Singh
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            An open-source project built to understand how LLM frameworks work
            under the hood.
          </p>
          <a
            href="https://github.com/CodeWithDks"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="h-4 w-4" />
            CodeWithDks
          </a>
        </section>

        {/* Section 4 — Closing CTA */}
        <section className="mt-24 w-full max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to see how it works under the hood?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-emerald/25 transition-all hover:bg-emerald-glow hover:shadow-emerald/40"
            >
              Read the Docs
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/CodeWithDks/EduChain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  items,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  href: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <div className="inline-flex rounded-lg bg-emerald-subtle p-2">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-4 flex flex-col gap-1.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  const classes =
    "block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-emerald-subtle/50";

  return <Link to={href} className={classes}>{content}</Link>;
}

