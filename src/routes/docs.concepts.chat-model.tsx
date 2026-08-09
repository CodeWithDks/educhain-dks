import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { ProviderCodeTabs } from "@/components/ProviderCodeTabs";
import { providerTabs } from "@/lib/provider-tabs";

export const Route = createFileRoute("/docs/concepts/chat-model")({
  component: ChatModelPage,
  head: () =>
    conceptHead(
      "Chat Model",
      "Wrap any LangChain-compatible chat model with one consistent EduChain interface.",
    ),
});

function ChatModelPage() {
  return (
    <ConceptPage
      title="Chat Model"
      body="Wraps any LangChain-compatible chat model. Supports plain string prompts and full message-list conversations (needed for multi-turn tool calling). Optionally accepts tools=[...] to enable tool calling."
      why="Gives every provider (OpenAI, Groq, Gemini, Anthropic) the same invoke()/stream()/ainvoke() interface, so swapping providers never changes the rest of your chain."
      sourceHref="https://github.com/CodeWithDks/EduChain/tree/main/educhain/models"
      related={[
        { title: "Prompt Template", href: "/docs/concepts/prompt-template" },
        { title: "Tool", href: "/docs/concepts/tool" },
        { title: "Agent", href: "/docs/concepts/agent" },
      ]}
    >
      <ProviderCodeTabs tabs={providerTabs} />
    </ConceptPage>
  );
}
