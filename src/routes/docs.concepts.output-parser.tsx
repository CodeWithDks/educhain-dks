import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/output-parser")({
  component: OutputParserPage,
  head: () =>
    conceptHead(
      "Output Parser",
      "Turn raw model output into clean Python objects with StringOutputParser and JsonOutputParser.",
    ),
});

function OutputParserPage() {
  return (
    <ConceptPage
      title="Output Parser"
      body="Transforms raw model outputs into clean Python objects — StringOutputParser and JsonOutputParser."
      why="LLM responses come back as message objects; parsers extract just the usable content (a string, or parsed JSON) so downstream code doesn't have to handle raw model output."
      related={[
        { title: "Runnable", href: "/docs/concepts/runnable" },
        { title: "Chat Model", href: "/docs/concepts/chat-model" },
      ]}
    >
      <CodeBlock
        code={`from educhain.output_parsers import StringOutputParser, JsonOutputParser

parser = StringOutputParser()
json_parser = JsonOutputParser()`}
      />
    </ConceptPage>
  );
}
