import { createFileRoute } from "@tanstack/react-router";
import { SiteNavbar } from "@/components/SiteNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Star, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EduChain — Educational Python LLM Framework" },
      {
        name: "description",
        content:
          "EduChain is an educational reimplementation inspired by LangChain, built to understand how modern LLM frameworks work internally.",
      },
      {
        property: "og:title",
        content: "About EduChain — Educational Python LLM Framework",
      },
      {
        property: "og:description",
        content:
          "EduChain is an educational reimplementation inspired by LangChain, built to understand how modern LLM frameworks work internally.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-sm font-medium text-primary">About</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
            About EduChain
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            EduChain is inspired by the architecture and design principles of
            LangChain. This project is an educational reimplementation created
            to better understand how modern LLM frameworks are designed. It is not
            affiliated with or endorsed by the LangChain project.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Author
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Deepak Kumar Singh
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/CodeWithDks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/deepaksinghai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Contributing
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Contributions, suggestions, and improvements are welcome. If
                you find a bug or have an idea for improving EduChain, feel free
                to{" "}
                <a
                  href="https://github.com/CodeWithDks/EduChain/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  open an issue
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/CodeWithDks/EduChain/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  submit a pull request
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                License
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                This project is licensed under the{" "}
                <a
                  href="https://github.com/CodeWithDks/EduChain/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  MIT License
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-base text-muted-foreground">
              If you found this project helpful, consider giving it a star on
              GitHub.
            </p>
            <a
              href="https://github.com/CodeWithDks/EduChain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-emerald-glow"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
