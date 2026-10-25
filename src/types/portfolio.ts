export type Language = 'my' | 'en';

export interface LocalizedString {
  my: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  category: 'webapp' | 'software' | 'client' | 'tool';
  categoryLabel: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  role: LocalizedString;
  techStack: string[];
  features: LocalizedString[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface SocialLink {
  platform: 'facebook' | 'tiktok' | 'telegram' | 'email';
  name: string;
  handle: string;
  url: string;
  displayValue: string;
  color?: string;
}

export interface PortfolioProfile {
  name: LocalizedString;
  title: LocalizedString;
  tagline: LocalizedString;
  bioP1: LocalizedString;
  bioP2: LocalizedString;
  location: LocalizedString;
  locationCoordinates: string;
  availability: LocalizedString;
  isAvailable: boolean;
  emails: string[];
  portraits: {
    id: string;
    name: LocalizedString;
    url: string;
    alt: LocalizedString;
  }[];
  socials: SocialLink[];
}
