import { education } from "@/data/education";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="hoc-van" title="Học vấn">
      <ul className="space-y-4">
        {education.map((e) => (
          <li key={e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{e.school}</h3>
              <span className="text-sm text-muted">
                {e.start} – {e.end}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{e.major}</p>
            {e.note && <p className="mt-1 text-sm text-accent">{e.note}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
