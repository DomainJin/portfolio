import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
