import { Github, Linkedin, Container, Package } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <p>MIT License</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://github.com/CodeWithDks/EduChain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://pypi.org/project/educhain-dks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Package className="h-4 w-4" /> PyPI
          </a>
          <a
            href="https://hub.docker.com/r/deepaksingh09/educhain-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Container className="h-4 w-4" /> Docker Hub
          </a>
          <a
            href="https://www.linkedin.com/in/deepaksinghai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/CodeWithDks"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Built by Deepak Kumar Singh
          </a>
        </div>
      </div>
    </footer>
  );
}
