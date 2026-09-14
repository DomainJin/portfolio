import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "vietnamese"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    type: "profile",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Nav />
        <main className="mx-auto max-w-3xl px-6">{children}</main>
        <footer className="mx-auto max-w-3xl border-t border-border px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </body>
    </html>
  );
}
