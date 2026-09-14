import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Section, Tag } from "./Section";

export function Projects() {
  return (
    <Section id="du-an" title="Dự án">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent"
          >
            {p.image && (
              <Image
                src={p.image}
                alt={p.name}
                width={640}
                height={360}
                className="aspect-video w-full border-b border-border object-cover"
              />
            )}

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold">
                  <Link href={`/projects/${p.slug}`} className="hover:text-accent">
                    {p.name}
                  </Link>
                </h3>
                <span className="shrink-0 text-xs text-muted">
                  {p.videos && <span className="mr-2 text-accent">▶ Video</span>}
                  {p.period}
                </span>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent hover:underline"
                  >
                    Demo ↗
                  </a>
                )}
                {p.links.source && (
                  <a
                    href={p.links.source}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent hover:underline"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
