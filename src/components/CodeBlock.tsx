import { type ReactNode } from "react";
import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

const KEYWORDS = [
  "from",
  "import",
  "def",
  "class",
  "return",
  "if",
  "elif",
  "else",
  "for",
  "while",
  "in",
  "not",
  "and",
  "or",
  "with",
  "as",
  "try",
  "except",
  "finally",
  "raise",
  "lambda",
  "yield",
  "pass",
  "None",
  "True",
  "False",
  "async",
  "await",
];

type Token = { text: string; kind: string };

function tokenize(code: string): Token[] {
  const pattern = new RegExp(
    [
      "(#[^\\n]*)", // comment
      "(\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*')", // string
      "\\b(" + KEYWORDS.join("|") + ")\\b", // keyword
      "\\b(\\d+(?:\\.\\d+)?)\\b", // number
      "([A-Za-z_][A-Za-z0-9_]*)(?=\\()", // call
    ].join("|"),
    "g",
  );

  const tokens: Token[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(code)) !== null) {
    if (match.index > last) {
      tokens.push({ text: code.slice(last, match.index), kind: "plain" });
    }
    const kind = match[1]
      ? "comment"
      : match[2]
        ? "string"
        : match[3]
          ? "keyword"
          : match[4]
            ? "number"
            : "call";
    tokens.push({ text: match[0], kind });
    last = match.index + match[0].length;
  }
  if (last < code.length) {
    tokens.push({ text: code.slice(last), kind: "plain" });
  }
  return tokens;
}

const CLASS_BY_KIND: Record<string, string> = {
  comment: "text-muted-foreground italic",
  string: "text-primary",
  keyword: "text-primary font-medium",
  number: "text-chart-2",
  call: "text-foreground font-medium",
  plain: "text-foreground",
};

export function CodeBlock({
  code,
  filename = "educhain.py",
  language = "python",
  hideHeader = false,
  noBorder = false,
}: {
  code: string;
  filename?: string | undefined;
  language?: string | undefined;
  hideHeader?: boolean | undefined;
  noBorder?: boolean | undefined;
}) {

  const highlighted: ReactNode =
    language === "python" ? (
      tokenize(code).map((token, i) => (
        <span key={i} className={CLASS_BY_KIND[token.kind]}>
          {token.text}
        </span>
      ))
    ) : (
      <span className="text-foreground">{code}</span>
    );

  return (
    <div
      className={cn(
        "group w-full overflow-hidden bg-card",
        noBorder ? "" : "my-6 rounded-2xl border border-border",
      )}
    >
      {!hideHeader && (
        <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{filename}</span>
          </div>
          <CopyButton code={code} />
        </div>
      )}
      <pre className="overflow-x-auto p-5 text-left font-mono text-sm leading-relaxed">
        <code>{highlighted}</code>
      </pre>
    </div>
  );
}
