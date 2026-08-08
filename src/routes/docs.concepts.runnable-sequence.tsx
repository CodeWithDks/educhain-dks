import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/runnable-sequence")({
  component: RunnableSequencePage,
  head: () =>
    conceptHead(
      "Runnable Sequence",
      "Chain runnables together with the pipe operator, including smart streaming support.",
    ),
});

function RunnableSequencePage() {
  return (
    <ConceptPage
      title="Runnable Sequence"
      body="Executes multiple runnables sequentially via the | operator, with auto-flattening, and smart streaming support that correctly detects which step is the actual streaming source vs. a downstream transformer."
      why="Lets you build a chain by piping components together instead of manually calling each one and passing results by hand."
      related={[
        { title: "Runnable", href: "/docs/concepts/runnable" },
        { title: "Runnable Parallel", href: "/docs/concepts/runnable-parallel" },
      ]}
    >
      <CodeBlock
        code={`from educhain.core.sequence import RunnableSequence

chain = prompt | model | parser`}
      />
    </ConceptPage>
  );
}
