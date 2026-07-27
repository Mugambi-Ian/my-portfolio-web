export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  slug: string;
  index: string;
  name: string;
  client: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  /** One authored line, pulled out between approach and outcome. */
  pullQuote?: string;
  stack: string[];
  metrics: Metric[];
  links: CaseStudyLink[];
  screenshots: Screenshot[];
  pageTitle: string;
  seoDescription: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  stack: string[];
  url?: string;
  caseStudy?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Award {
  title: string;
  award: string;
  date: string;
  description: string;
}

export interface Education {
  school: string;
  course: string;
  endDate: string;
}

export interface OpenSourceProject {
  name: string;
  description: string;
  npmUrl?: string;
  repoUrl?: string;
}
