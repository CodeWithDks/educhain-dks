import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";

export const Route = createFileRoute("/docs/concepts/runnable")({
  component: RunnablePage,
  head: () =>
    conceptHead(
      "Runnable",
      "The base abstraction of EduChain: every component implements invoke(), stream(), and ainvoke().",
    ),
});

function RunnablePage() {
  return (
    <ConceptPage
      title="Runnable"
      body="The base abstraction of EduChain. Every component inherits from Runnable and implements invoke(), with optional stream() and ainvoke() overrides."
      why="A consistent base interface is what lets every component — regardless of what it does internally — compose predictably into pipelines with the | operator."
      related={[
        { title: "Runnable Sequence", href: "/docs/concepts/runnable-sequence" },
        { title: "Runnable Parallel", href: "/docs/concepts/runnable-parallel" },
        { title: "Agent", href: "/docs/concepts/agent" },
      ]}
    />
  );
}
