import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "@/components/CodeBlock";

export const Route = createFileRoute("/docs/installation")({
  component: InstallationPage,
  head: () => ({
    meta: [
      { title: "Installation — EduChain" },
      {
        name: "description",
        content:
          "Install EduChain via PyPI, clone the repository, or run the full test suite with Docker.",
      },
      { property: "og:title", content: "Installation — EduChain" },
      {
        property: "og:description",
        content:
          "Install EduChain via PyPI, clone the repository, or run the full test suite with Docker.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function InstallationPage() {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Getting Started</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        Installation
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Get EduChain running in minutes. Choose the PyPI package for the latest
        stable release, clone the repository to hack on the source, or pull the
        Docker image to run the full test suite instantly.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Option 1: Via PyPI (Recommended)
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          The simplest way to install EduChain is from the Python Package Index.
        </p>
        <CodeBlock code="pip install educhain-dks" />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Option 2: Clone the repository
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          If you want to explore or modify the framework source, clone it from
          GitHub and set up a virtual environment.
        </p>

        <ol className="mt-6 flex list-decimal flex-col gap-6 pl-5 text-foreground">
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Clone the repository
            </p>
            <CodeBlock code="git clone https://github.com/CodeWithDks/EduChain.git" />
          </li>
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Change into the project directory
            </p>
            <CodeBlock code="cd EduChain" />
          </li>
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Create a virtual environment
            </p>
            <CodeBlock code="python -m venv venv" />
          </li>
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Activate it
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Windows
                </p>
                <CodeBlock code="venv\\Scripts\\activate" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Linux / macOS
                </p>
                <CodeBlock code="source venv/bin/activate" />
              </div>
            </div>
          </li>
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Install dependencies
            </p>
            <CodeBlock code="pip install -r requirements.txt" />
          </li>
          <li>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Create a <code>.env</code> file with your API key
            </p>
            <CodeBlock code="OPENAI_API_KEY=your_api_key_here" />
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Option 3: Docker (run the full test suite instantly)
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Prefer not to set up Python locally? Pull the pre-built Docker image —
          running it executes EduChain's full test suite automatically, so you
          can verify everything works in seconds.
        </p>
        <CodeBlock code="docker pull deepaksingh09/educhain-app" />
        <p className="mt-4 text-sm font-medium text-muted-foreground">
          Create a <code>.env</code> file in your current directory first, with{" "}
          <code>OPENAI_API_KEY=your_api_key_here</code>, then run:
        </p>
        <CodeBlock code="docker run --env-file .env deepaksingh09/educhain-app" />
        <p className="mt-4 text-sm text-muted-foreground">
          <a
            href="https://hub.docker.com/r/deepaksingh09/educhain-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 transition-colors hover:text-emerald-glow"
          >
            View the image on Docker Hub
          </a>
        </p>
      </section>
    </article>
  );
}
