import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";

export const Route = createFileRoute("/docs/concepts/runnable-parallel")({
  component: RunnableParallelPage,
  head: () =>
    conceptHead(
      "Runnable Parallel",
      "Run independent EduChain branches concurrently with threads or asyncio.gather.",
    ),
});

function RunnableParallelPage() {
  return (
    <ConceptPage
      title="Runnable Parallel"
      body="Executes multiple independent chains — concurrently via threads (invoke) or asyncio.gather (ainvoke)."
      why="Some pipelines have independent branches that don't depend on each other's output — running them in parallel instead of sequentially saves real wall-clock time."
      related={[
        { title: "Runnable Sequence", href: "/docs/concepts/runnable-sequence" },
        { title: "Runnable", href: "/docs/concepts/runnable" },
      ]}
    />
  );
}
