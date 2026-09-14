import { experiences } from "@/data/experiences";
import { Section, Tag } from "./Section";

export function Experiences() {
  return (
    <Section id="kinh-nghiem" title="Kinh nghiệm">
      <ol className="relative space-y-10 border-l border-border pl-6">
        {experiences.map((e) => (
          <li key={`${e.company}-${e.start}`} className="relative">
            <span className="absolute -left-[1.8125rem] top-1.5 size-2.5 rounded-full bg-accent" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {e.role} · <span className="text-accent">{e.company}</span>
              </h3>
              <span className="text-sm text-muted">
                {e.start} – {e.end}
              </span>
            </div>
            {e.location && (
              <p className="mt-1 text-sm text-muted">{e.location}</p>
            )}

            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
