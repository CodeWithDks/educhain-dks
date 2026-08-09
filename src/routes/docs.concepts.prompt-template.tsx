import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/prompt-template")({
  component: PromptTemplatePage,
  head: () =>
    conceptHead(
      "Prompt Template",
      "Format prompts in EduChain by replacing template variables with user input.",
    ),
});

function PromptTemplatePage() {
  return (
    <ConceptPage
      title="Prompt Template"
      body="Formats prompts by replacing template variables with user input."
      why="Keeps prompt text separate from the values filled into it, so the same template can be reused with different inputs."
      sourceHref="https://github.com/CodeWithDks/EduChain/blob/main/educhain/prompts/prompt.py"
      related={[
        { title: "Runnable", href: "/docs/concepts/runnable" },
        { title: "Chat Model", href: "/docs/concepts/chat-model" },
      ]}
    >
      <CodeBlock
        code={`from educhain.prompts import PromptTemplate

prompt = PromptTemplate(
    template="Explain {topic} in simple words.",
    input_variables=["topic"]
)`}
      />
    </ConceptPage>
  );
}
