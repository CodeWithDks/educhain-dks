import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/memory")({
  component: MemoryPage,
  head: () =>
    conceptHead(
      "Memory",
      "Stores and manages conversation history across multiple turns so chains and agents can reference earlier messages.",
    ),
});

function MemoryPage() {
  return (
    <ConceptPage
      title="Memory"
      body="Stores and manages conversation history across multiple turns, so a chain or agent can reference what was said earlier."
      why="LLM calls are stateless by default — Memory keeps track of prior messages so multi-turn conversations stay coherent."
      sourceHref="https://github.com/CodeWithDks/EduChain/blob/main/educhain/memory/chat_history.py"
      related={[
        { title: "Chat Model", href: "/docs/concepts/chat-model" },
        { title: "Runnable", href: "/docs/concepts/runnable" },
      ]}
    >
      <CodeBlock
        code={`from educhain.memory import ChatMessageHistory

history = ChatMessageHistory()
history.add_user_message("What's the capital of France?")
history.add_ai_message("Paris.")`}
      />
    </ConceptPage>
  );
}
