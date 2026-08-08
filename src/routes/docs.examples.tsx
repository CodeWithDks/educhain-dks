import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";
import { Github } from "lucide-react";

export const Route = createFileRoute("/docs/examples")({
  component: ExamplesPage,
  head: () => ({
    meta: [
      { title: "Examples & Demos — EduChain" },
      {
        name: "description",
        content:
          "Runnable EduChain examples and demos for chains, agents, RAG, and tools.",
      },
      { property: "og:title", content: "Examples & Demos — EduChain" },
      {
        property: "og:description",
        content:
          "Runnable EduChain examples and demos for chains, agents, RAG, and tools.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const EXAMPLES = [
  {
    file: "demo_all_features.py",
    description: "Core primitives working together",
  },
  {
    file: "demo_async.py",
    description: "Async chains + speed comparison",
  },
  {
    file: "demo_callbacks.py",
    description: "Built-in + custom callback handlers",
  },
  {
    file: "demo_tools.py",
    description: "Tool detection, execution, full round trip",
  },
  {
    file: "demo_vectorstore.py",
    description: "Semantic search across mixed topics",
  },
  {
    file: "demo_rag.py",
    description: "Retrieval-augmented generation, grounded answers",
  },
  {
    file: "demo_agent.py",
    description: "Full agentic loop, including RAG-as-a-tool",
  },
];

function ExamplesPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Examples</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Examples & Demos
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Each demo file is runnable and shows a focused part of EduChain in
        action. Click any filename to view the full source on GitHub.
      </p>

      <section className="mt-8 grid gap-3">
        {EXAMPLES.map(({ file, description }) => (
          <a
            key={file}
            href={`https://github.com/CodeWithDks/EduChain/blob/main/tests/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-emerald-subtle"
          >
            <div className="min-w-0">
              <code className="font-mono text-sm text-primary">{file}</code>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
            <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          </a>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Run a demo
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Start with the agent demo to see the full agentic loop, including
          RAG-as-a-tool:
        </p>
        <CodeBlock code="python demo_agent.py" filename="terminal" language="bash" />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Run the test suite
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Run the full test suite (36 tests — happy paths, validation, and
          full-stack integration):
        </p>
        <CodeBlock code="python test_all_features.py" filename="terminal" language="bash" />
      </section>
    </article>
  );
}
