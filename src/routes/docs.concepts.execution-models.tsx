import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/execution-models")({
  component: ExecutionModelsPage,
  head: () =>
    conceptHead(
      "Execution Models",
      "Every Runnable supports synchronous invocation, streaming, and async execution through a single consistent interface.",
    ),
});

function ExecutionModelsPage() {
  return (
    <ConceptPage
      title="Execution Models"
      body="Every Runnable supports three ways to execute: invoke() for a single synchronous call, stream() for token-by-token output, and ainvoke() for async execution — plus a pluggable callback system for observing any of them."
      why="Different use cases need different execution styles — a CLI script wants invoke(), a chat UI wants stream(), a high-throughput service wants ainvoke(). One consistent interface supports all three."
      related={[
        { title: "Runnable", href: "/docs/concepts/runnable" },
        { title: "Callback Handler", href: "/docs/concepts/callback-handler" },
      ]}
    >
      <CodeBlock
        code={`# Synchronous
response = chain.invoke({"topic": "AI"})

# Streaming
for chunk in chain.stream({"topic": "AI"}):
    print(chunk, end="")

# Async
response = await chain.ainvoke({"topic": "AI"})`}
      />
    </ConceptPage>
  );
}
