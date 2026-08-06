import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/")({
  component: DocsIndex,
  head: () => ({
    meta: [
      { title: "Documentation — EduChain" },
      {
        name: "description",
        content:
          "Guides, concepts, and API examples for EduChain, an educational Python framework for building LLM chains from scratch.",
      },
      { property: "og:title", content: "Documentation — EduChain" },
      {
        property: "og:description",
        content:
          "Guides, concepts, and API examples for EduChain, an educational Python framework for building LLM chains from scratch.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function DocsIndex() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Documentation</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Documentation
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Welcome to the EduChain docs. Use the sidebar to explore installation,
        core concepts, and examples. Content for each page is coming soon.
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
    </article>
  );
}
