"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#ky-nang", label: "Kỹ năng" },
  { href: "#kinh-nghiem", label: "Kinh nghiệm" },
  { href: "#du-an", label: "Dự án" },
  { href: "#chung-chi", label: "Chứng chỉ" },
  { href: "#hoc-van", label: "Học vấn" },
  { href: "#lien-he", label: "Liên hệ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Mở menu"
          className="text-sm text-muted sm:hidden"
        >
          {open ? "Đóng" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-border px-6 py-3 text-sm text-muted sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
