import { profile } from "@/data/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="lien-he" title="Liên hệ">
      <p className="max-w-prose leading-relaxed text-muted">
        Bạn có cơ hội phù hợp hoặc muốn trao đổi thêm? Hãy gửi email cho tôi.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
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
    </Section>
  );
}
