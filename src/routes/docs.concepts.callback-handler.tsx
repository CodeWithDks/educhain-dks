import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/callback-handler")({
  component: CallbackHandlerPage,
  head: () =>
    conceptHead(
      "Callback Handler",
      "Pluggable observability hooks for logging, timing, and monitoring EduChain runs.",
    ),
});

function CallbackHandlerPage() {
  return (
    <ConceptPage
      title="Callback Handler"
      body="Pluggable observability hooks (on_step_start, on_step_end, on_error, etc.) — swap in custom logging, timing, or monitoring logic without touching core chain code."
      why="Debugging and monitoring shouldn't require modifying chain logic itself — callbacks let you observe what's happening from the outside."
      sourceHref="https://github.com/CodeWithDks/EduChain/blob/main/educhain/core/callbacks.py"
      related={[
        { title: "Runnable", href: "/docs/concepts/runnable" },
        { title: "Agent", href: "/docs/concepts/agent" },
      ]}
    >
      <CodeBlock
        code={`from educhain.core.callbacks import CallbackHandler, PrintCallbackHandler

model = ChatModel(callbacks=[PrintCallbackHandler()])`}
      />
    </ConceptPage>
  );
}
