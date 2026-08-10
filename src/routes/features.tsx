import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle,
  Eye,
  GraduationCap,
  MessageSquareText,
  Puzzle,
  Zap,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavbar } from "@/components/SiteNavbar";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features — EduChain" },
      {
        name: "description",
        content:
          "Explore EduChain's features: readable primitives, consistent interfaces, and an educational design built from scratch.",
      },
      { property: "og:title", content: "Features — EduChain" },
      {
        property: "og:description",
        content:
          "Explore EduChain's features: readable primitives, consistent interfaces, and an educational design built from scratch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const highlights = [
  {
    icon: Eye,
    title: "Not a Black Box",
    description:
      "Every core primitive — vector search, streaming detection, tool schema generation — is hand-written and readable, not hidden behind a library import.",
  },
  {
    icon: Puzzle,
    title: "One Consistent Interface",
    description:
      "Every component implements invoke(), stream(), and ainvoke() — so pieces compose predictably into pipelines.",
  },
  {
    icon: GraduationCap,
    title: "Educational by Design",
    description:
      "EduChain is not trying to replace LangChain or be feature-compatible with it. It exists to teach the architecture underneath.",
  },
];

const featureCards = [
  {
    icon: Boxes,
    title: "Core Primitives",
    description:
      "Runnable, PromptTemplate, ChatModel, Output Parsers, RunnableSequence, RunnableParallel, RunnablePassthrough, RunnableLambda.",
    href: "/docs/concepts/runnable",
  },
  {
    icon: MessageSquareText,
    title: "Memory",
    description: "Chat History / Memory Module for managing conversation context.",
    href: "/docs/concepts/memory",
  },
  {
    icon: Zap,
    title: "Execution Models",
    description: "Streaming, Async Execution, and the Callback System.",
    href: "/docs/concepts/chat-model",
  },
  {
    icon: Bot,
    title: "Agentic Capabilities",
    description: "Tool Calling, Vector Stores, RAG, and Agents.",
    href: "/docs/concepts/agent",
  },
  {
    icon: CheckCircle,
    title: "Engineering Fundamentals",
    description: "Input validation, modular package design, 36/36 tests passing.",
    href: "/docs/examples",
  },
];

function FeaturesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <SiteNavbar />

      <main className="flex-1 px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Features
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              EduChain is built to be read, understood, and extended — not just imported.
            </p>
          </div>

          <section className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-emerald-subtle"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-subtle text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What you get
            </h2>
            <p className="mt-3 text-muted-foreground">
              A tour of the modules and ideas inside EduChain.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  to={card.href}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-emerald-subtle"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-subtle text-primary transition-colors group-hover:bg-primary/10">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
