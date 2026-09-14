import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-accent">{profile.title}</p>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">
            {profile.summary}
          </p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
        </div>

        <Image
          src={profile.avatar}
          alt={profile.name}
          width={128}
          height={128}
          priority
          className="size-28 rounded-full border border-border object-cover sm:size-32"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.cvUrl}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Tải CV (PDF)
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-card"
        >
          Liên hệ
        </a>
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-card"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
