import { skills } from "@/data/skills";
import { Section, Tag } from "./Section";

export function Skills() {
  return (
    <Section id="ky-nang" title="Kỹ năng">
      <dl className="space-y-5">
        {skills.map((g) => (
          <div key={g.group}>
            <dt className="text-sm font-medium">{g.group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
