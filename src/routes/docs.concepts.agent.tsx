import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/agent")({
  component: AgentPage,
  head: () =>
    conceptHead(
      "Agent",
      "Wrap a tool-bound ChatModel in a bounded reasoning loop that calls tools until it answers.",
    ),
});

function AgentPage() {
  return (
    <ConceptPage
      title="Agent"
      body="Wraps a tool-bound ChatModel in a reasoning loop — decides which tool to call, executes it, feeds the result back, and repeats until it reaches a final answer (bounded by max_iterations as a safety limit)."
      why="Some questions need multiple steps — call a tool, read the result, decide what to do next — rather than a single prompt-to-answer call."
      related={[
        { title: "Tool", href: "/docs/concepts/tool" },
        { title: "Chat Model", href: "/docs/concepts/chat-model" },
        { title: "Vector Store", href: "/docs/concepts/vector-store" },
      ]}
    >
      <CodeBlock
        code={`from educhain.models import ChatModel
from educhain.core.tool import Tool
from educhain.core.agent import Agent

weather_tool = Tool(get_weather)
model = ChatModel(tools=[weather_tool])
agent = Agent(model=model)

answer = agent.invoke("What's the weather like in Delhi?")`}
      />
    </ConceptPage>
  );
}
