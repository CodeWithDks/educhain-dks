import { createFileRoute } from "@tanstack/react-router";

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

function ExamplesPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Examples</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Examples & Demos
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        A collection of runnable EduChain examples covering chains, agents,
        RAG, and custom tools. More examples will be added here soon.
      </p>
    </article>
  );
}
