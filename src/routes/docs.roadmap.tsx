import { createFileRoute } from "@tanstack/react-router";
import { Check, Square } from "lucide-react";

export const Route = createFileRoute("/docs/roadmap")({
  component: RoadmapPage,
  head: () => ({
    meta: [
      { title: "Roadmap — EduChain" },
      {
        name: "description",
        content:
          "EduChain roadmap: shipped features in v1.0 and future directions for memory, vector stores, multi-agent coordination, and more.",
      },
      { property: "og:title", content: "Roadmap — EduChain" },
      {
        property: "og:description",
        content:
          "EduChain roadmap: shipped features in v1.0 and future directions for memory, vector stores, multi-agent coordination, and more.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const V1_FEATURES = [
  "Runnable, PromptTemplate, ChatModel, OutputParser",
  "RunnableSequence, RunnableParallel, RunnablePassthrough, RunnableLambda",
  "Chat History / Memory",
  "Streaming",
  "Async Support",
  "Callback System",
  "Tool Calling",
  "Vector Store",
  "RAG Pipeline",
  "Agents",
];

const FUTURE_DIRECTIONS = [
  "Persistent storage for memory & vector store (swap in-memory for a real DB)",
  "Pluggable vector store backends (FAISS/Chroma) behind the same interface",
  "Multi-agent coordination",
  "Streaming support inside the Agent loop",
  "Batch processing (.batch())",
];

function RoadmapItem({ icon: Icon, text }: { icon: typeof Check; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span className="text-base leading-relaxed text-muted-foreground">{text}</span>
    </li>
  );
}

function RoadmapSection({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof Check;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((text) => (
          <RoadmapItem key={text} icon={Icon} text={text} />
        ))}
      </ul>
    </section>
  );
}

function RoadmapPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Docs</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">Roadmap</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        What EduChain has already shipped and where it is headed next. Features in v1.0 are
        stable and covered by the test suite; future directions are open for discussion and
        contributions.
      </p>

      <RoadmapSection title="v1.0 — Complete" items={V1_FEATURES} icon={Check} />
      <RoadmapSection title="Future Directions (not committed)" items={FUTURE_DIRECTIONS} icon={Square} />

      <p className="mt-12 text-base leading-relaxed text-muted-foreground">
        See{" "}
        <a
          href="https://github.com/CodeWithDks/EduChain/blob/main/ROADMAP.md"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-emerald-glow"
        >
          ROADMAP.md on GitHub
        </a>{" "}
        for full build history and design decisions.
      </p>
    </article>
  );
}
