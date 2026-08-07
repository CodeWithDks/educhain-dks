import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/quickstart")({
  component: QuickStartPage,
  head: () => ({
    meta: [
      { title: "Quick Start — EduChain" },
      {
        name: "description",
        content:
          "Build your first EduChain chain and agent with runnable examples in Python.",
      },
      { property: "og:title", content: "Quick Start — EduChain" },
      {
        property: "og:description",
        content:
          "Build your first EduChain chain and agent with runnable examples in Python.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function QuickStartPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Getting Started</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Quick Start
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Two short examples to get you productive: a simple chain with a prompt,
        model, and parser, and an agent that can call a custom tool.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Basic Chain
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          This example wires a prompt template to a chat model and a string
          output parser using the pipe operator.
        </p>
        <CodeBlock
          code={`from educhain.prompts import PromptTemplate
from educhain.models import ChatModel
from educhain.output_parsers import StringOutputParser

prompt = PromptTemplate(
    template="Explain {topic} in simple words.",
    input_variables=["topic"]
)
model = ChatModel()
parser = StringOutputParser()

chain = prompt | model | parser
response = chain.invoke({"topic": "Artificial Intelligence"})
print(response)`}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Agent with Tools + RAG
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Build an agent that can call a custom function as a tool. The same
          pattern scales to retrieval chains and callback logging.
        </p>
        <CodeBlock
          code={`from educhain.models import ChatModel
from educhain.core.tool import Tool
from educhain.core.agent import Agent

def get_weather(city: str) -> str:
    """Get the current weather for a specific named city."""
    return f"It's sunny in {city}"

weather_tool = Tool(get_weather)
model = ChatModel(tools=[weather_tool])
agent = Agent(model=model)

answer = agent.invoke("What's the weather like in Delhi?")
print(answer)`}
        />

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          See{" "}
          <a
            href="https://github.com/CodeWithDks/EduChain/blob/main/demo_agent.py"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-emerald-glow"
          >
            demo_agent.py on GitHub
          </a>{" "}
          for a full example combining Tool Calling, RAG, and Callbacks
          together.
        </p>
      </section>
    </article>
  );
}
