import { createFileRoute } from "@tanstack/react-router";
import { ConceptPage, conceptHead } from "@/components/ConceptPage";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/concepts/vector-store")({
  component: VectorStorePage,
  head: () =>
    conceptHead(
      "Vector Store",
      "Store text and embeddings and retrieve relevant chunks with hand-written cosine similarity.",
    ),
});

function VectorStorePage() {
  return (
    <ConceptPage
      title="Vector Store (InMemoryVectorStore)"
      body="Stores text and embeddings, retrieves the most relevant chunks for a query using hand-written cosine similarity search."
      why="RAG requires finding which stored text is most relevant to a question — this implements that search from scratch instead of importing a vector database."
      related={[
        { title: "RAG Chain", href: "/docs/concepts/rag-chain" },
        { title: "Agent", href: "/docs/concepts/agent" },
      ]}
    >
      <CodeBlock
        code={`from educhain.core.vectorstore import InMemoryVectorStore

store = InMemoryVectorStore()`}
      />
    </ConceptPage>
  );
}
