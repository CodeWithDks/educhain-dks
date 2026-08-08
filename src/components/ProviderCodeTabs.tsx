import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

type CodeTab = {
  label: string;
  code: string;
  filename?: string;
  language?: string;
};

export function ProviderCodeTabs({
  tabs,
  defaultTab,
}: {
  tabs: CodeTab[];
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.label);
  const activeTab = tabs.find((t) => t.label === active) || tabs[0];

  if (!activeTab) return null;

  return (
    <div className="my-6 w-full overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary px-4 py-2">
        <div className="flex items-center gap-1" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={active === tab.label}
              onClick={() => setActive(tab.label)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                active === tab.label
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
              {active === tab.label && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
        <CopyButton code={activeTab.code} />
      </div>
      <CodeBlock
        code={activeTab.code}
        filename={activeTab.filename}
        language={activeTab.language}
        hideHeader
        noBorder
      />
    </div>
  );
}
