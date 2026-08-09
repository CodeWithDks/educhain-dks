import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/tool")({
  component: ToolPage,
  head: () =>
    conceptHead(
      "Tool",
      "Wrap a plain Python function as an LLM-callable tool with an auto-generated JSON schema.",
    ),
});

function ToolPage() {
  return (
    <ConceptPage
      title="Tool"
      body="Wraps a plain Python function as something an LLM can call — auto-generates the JSON schema from type hints and docstrings, no hand-written schema required."
      why="LLMs need a structured schema to know what a function expects; Tool generates that automatically from your existing function signature so you don't write it by hand."
      sourceHref="https://github.com/CodeWithDks/EduChain/blob/main/educhain/core/tool.py"
      related={[
        { title: "Chat Model", href: "/docs/concepts/chat-model" },
        { title: "Agent", href: "/docs/concepts/agent" },
      ]}
    >
      <CodeBlock
        code={`from educhain.core.tool import Tool

def get_weather(city: str) -> str:
    """Get the current weather for a specific named city."""
    return f"It's sunny in {city}"

weather_tool = Tool(get_weather)`}
      />
    </ConceptPage>
  );
}
