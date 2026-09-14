import { certificates } from "@/data/certificates";
import { Section } from "./Section";

export function Certificates() {
  return (
    <Section id="chung-chi" title="Chứng chỉ">
      <ul className="divide-y divide-border rounded-xl border border-border">
        {certificates.map((c) => (
          <li
            key={`${c.name}-${c.issued}`}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 p-5"
          >
            <div>
              <h3 className="font-medium">{c.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {c.issuer}
                {c.credentialId && ` · ID: ${c.credentialId}`}
              </p>
            </div>

            <div className="flex items-baseline gap-4 text-sm">
              <span className="text-muted">{c.issued}</span>
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-accent hover:underline"
                >
                  Xem chứng chỉ ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
