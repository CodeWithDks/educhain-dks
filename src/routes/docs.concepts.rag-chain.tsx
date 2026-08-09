import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/rag-chain")({
  component: RagChainPage,
  head: () =>
    conceptHead(
      "RAG Chain",
      "Combine a vector store with a chain to retrieve context and generate grounded answers.",
    ),
});

function RagChainPage() {
  return (
    <ConceptPage
      title="RAG Chain"
      body="Combines a vector store with an existing chain — retrieves relevant context, injects it into the prompt, generates a grounded answer."
      why="Lets a chain answer questions using information it wasn't trained on, by retrieving relevant text first and feeding it into the prompt before generation."
      sourceHref="https://github.com/CodeWithDks/EduChain/blob/main/educhain/core/rag.py"
      related={[
        { title: "Vector Store", href: "/docs/concepts/vector-store" },
        { title: "Runnable Sequence", href: "/docs/concepts/runnable-sequence" },
      ]}
    >
      <CodeBlock
        code={`from educhain.core.rag import RAGChain

rag = RAGChain(vector_store=store, chain=chain)`}
      />
    </ConceptPage>
  );
}
