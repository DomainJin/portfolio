import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Tag } from "@/components/Section";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.tagline };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-16">
      <Link href="/#du-an" className="text-sm text-muted hover:text-foreground">
        ← Quay lại dự án
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">{project.name}</h1>
      <p className="mt-2 text-muted">{project.tagline}</p>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <div>
          <dt className="text-muted">Vai trò</dt>
          <dd className="mt-0.5 font-medium">{project.role}</dd>
        </div>
        <div>
          <dt className="text-muted">Thời gian</dt>
          <dd className="mt-0.5 font-medium">{project.period}</dd>
        </div>
      </dl>

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={675}
          className="mt-8 aspect-video w-full rounded-xl border border-border object-cover"
        />
      )}

      <p className="mt-8 leading-relaxed text-muted">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-8 flex gap-4 text-sm">
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noreferrer noopener" className="text-accent hover:underline">
            Demo ↗
          </a>
        )}
        {project.links.source && (
          <a href={project.links.source} target="_blank" rel="noreferrer noopener" className="text-accent hover:underline">
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}
