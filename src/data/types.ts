export type Profile = {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  avatar: string;
  cvUrl: string;
  socials: { label: string; href: string }[];
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  image?: string;
  tech: string[];
  links: { demo?: string; source?: string };
  featured?: boolean;
};

export type Certificate = {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  verifyUrl?: string;
};
