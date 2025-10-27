export interface HeaderSectionLink {
  label: string;
  target: string;
}

export const HOME_SECTIONS: HeaderSectionLink[] = [
  { label: 'Intro', target: 'intro' },
  { label: 'Stack', target: 'stack' },
  { label: 'Range', target: 'tech' },
  { label: 'About', target: 'about' },
  { label: 'UI', target: 'ui' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
];

export const RESUME_SECTIONS: HeaderSectionLink[] = [
  { label: 'Experience', target: 'work-experience' },
  { label: 'Projects', target: 'resume-projects' },
  { label: 'Education', target: 'education' },
  { label: 'Awards', target: 'awards' },
  { label: 'References', target: 'references' },
];

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ian-mugambi-65893917a/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Mugambi-Ian',
  },
];

export const CONTACT_EMAIL = 'linksian63@gmail.com';
export const RESUME_DOWNLOAD_PATH = '/resume/download';
