import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { ProviderCodeTabs } from "@/components/ProviderCodeTabs";
import { CodeBlock } from "@/components/CodeBlock";
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

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Execution Styles
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          ChatModel supports three ways to run: invoke() for a single synchronous call, stream() for token-by-token output, and ainvoke() for async execution — all implemented directly on ChatModel itself.
        </p>
        <CodeBlock
          code={`# Synchronous
response = model.invoke("Explain AI in simple words.")

# Streaming
for chunk in model.stream("Explain AI in simple words."):
    print(chunk, end="")

# Async
response = await model.ainvoke("Explain AI in simple words.")`}
        />
      </section>
  );
}
