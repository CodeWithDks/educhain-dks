import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";

export type RelatedLink = { title: string; href: string };

export function conceptHead(title: string, description: string) {
  const full = `${title} — EduChain Concepts`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}


export function ConceptPage({
  title,
  body,
  why,
  related,
  sourceHref,
  children,
}: {
  title: string;
  body: string;
  why: string;
  related: RelatedLink[];
  sourceHref?: string;
  children?: ReactNode;
}) {
  return (
    <article className="max-w-3xl">
      <p className="text-sm font-medium text-primary">Concepts</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {body}
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Why it exists
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {why}
        </p>
      </section>

      {sourceHref ? (
        <a
          href={sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" />
          View source on GitHub
        </a>
      ) : null}

      {children ? <section className="mt-10">{children}</section> : null}


      <section className="mt-12 border-t border-border pt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
          Related
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {related.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-emerald-subtle hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
