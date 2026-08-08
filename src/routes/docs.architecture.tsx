import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CornerDownRight } from "lucide-react";

export const Route = createFileRoute("/docs/architecture")({
  component: ArchitecturePage,
  head: () => ({
    meta: [
      { title: "Architecture — EduChain" },
      {
        name: "description",
        content:
          "How EduChain composes: every component inherits from Runnable and implements invoke, stream and ainvoke, so chains, agents and RAG pipelines compose the same way.",
      },
      { property: "og:title", content: "Architecture — EduChain" },
      {
        property: "og:description",
        content:
          "How EduChain composes: every component inherits from Runnable and implements invoke, stream and ainvoke.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Node({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "root" | "default" | "muted" | "accent";
}) {
  const styles: Record<string, string> = {
    root: "border-primary/50 bg-emerald-subtle text-primary font-semibold",
    default: "border-border bg-card text-foreground",
    muted: "border-dashed border-border bg-secondary text-muted-foreground",
    accent: "border-primary/40 bg-emerald-subtle text-foreground",
  };
  return (
    <div
      className={`rounded-xl border px-3 py-2 text-center font-mono text-xs sm:text-sm ${styles[variant]}`}
    >
      {children}
    </div>
  );
}

function VLine({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-6 w-px bg-border ${className}`} />;
}

const BRANCH = [
  "PromptTemplate",
  "ChatModel",
  "OutputParser",
  "RunnablePassthrough",
  "RunnableLambda",
  "Agent",
];

const BASIC_FLOW = [
  "Dictionary",
  "PromptTemplate",
  "Formatted Prompt",
  "ChatModel",
  "AIMessage",
  "OutputParser",
  "Final Response",
];

function ArchitecturePage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Architecture</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Architecture
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Every component in EduChain inherits from a single base class,{" "}
        <code className="font-mono text-primary">Runnable</code>, and implements the same
        three methods: <code className="font-mono text-primary">invoke()</code> for
        synchronous calls, <code className="font-mono text-primary">stream()</code> for
        chunked output, and <code className="font-mono text-primary">ainvoke()</code> for
        async. Because every component behaves consistently, they compose into flexible
        pipelines — from a simple 3-step chain to a full agent that searches its own
        knowledge base.
      </p>

      {/* Component hierarchy diagram */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Component hierarchy
        </h2>

        <div className="mt-6 rounded-2xl border border-border bg-background p-5 sm:p-8">
          <div className="mx-auto max-w-xs">
            <Node variant="root">Runnable</Node>
          </div>
          <VLine />
          <div className="h-px w-full bg-border" />
          <VLine />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {BRANCH.map((name) => (
              <Node key={name}>{name}</Node>
            ))}
          </div>

          {/* ChatModel sub-branch */}
          <div className="mt-6 rounded-xl border border-dashed border-border p-4">
            <p className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <CornerDownRight className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono">ChatModel</span> when tools are bound
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <Node>ChatModel</Node>
              <span className="font-mono text-xs text-primary">tools bound →</span>
              <Node variant="accent">ChatModel + Tools + Callbacks</Node>
            </div>
          </div>

          {/* Composition branch */}
          <div className="mt-8">
            <div className="mx-auto max-w-xs">
              <Node variant="accent">RunnableSequence</Node>
            </div>
            <VLine />
            <div className="h-px w-full bg-border" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <VLine />
                <Node>RAGChain</Node>
                <VLine />
                <Node variant="muted">InMemoryVectorStore</Node>
              </div>
              <div>
                <VLine />
                <Node>RunnableParallel</Node>
                <VLine />
                <Node variant="muted">Memory &amp; Chat History</Node>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic chain flow */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Basic Chain Flow
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A three-step chain moves data left to right, each step returning input for the
          next.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-background p-5">
          {BASIC_FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <Node variant={i === 0 || i === BASIC_FLOW.length - 1 ? "accent" : "default"}>
                {step}
              </Node>
              {i < BASIC_FLOW.length - 1 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Agent loop flow */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Agent Loop Flow
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The agent keeps calling the model until it stops requesting tools, or until{" "}
          <code className="font-mono text-primary">max_iterations</code> is reached.
        </p>
        <div className="mt-5 rounded-2xl border border-border bg-background p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Node variant="accent">Question</Node>
            <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
            <Node>ChatModel (with tools)</Node>
          </div>
          <VLine />
          <div className="rounded-xl border border-dashed border-primary/50 bg-emerald-subtle px-4 py-3 text-center font-mono text-xs text-primary sm:text-sm">
            Tool call requested?
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4">
              <p className="mb-3 font-mono text-xs text-primary">yes</p>
              <div className="flex flex-col gap-2">
                <Node>Run the tool</Node>
                <VLine />
                <Node>Feed result back</Node>
                <VLine />
                <Node variant="muted">Repeat (up to max_iterations)</Node>
              </div>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="mb-3 font-mono text-xs text-muted-foreground">no</p>
              <Node variant="accent">Final answer</Node>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
