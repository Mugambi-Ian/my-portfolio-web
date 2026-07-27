import type { SkillGroup } from './types';

export const SKILLS: SkillGroup[] = [
  {
    title: 'Frontend & Mobile',
    items: [
      'Flutter / Dart',
      'React / Next.js',
      'React Native / Expo',
      'TypeScript',
      'Tailwind CSS',
      'Electron',
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Java / Spring Boot',
      'C# / .NET',
      'Node.js / TypeScript',
      'PHP / Laravel',
      'PostgreSQL / MongoDB',
      'GraphQL / REST',
    ],
  },
  {
    title: 'Infra & Delivery',
    items: [
      'AWS / DigitalOcean',
      'Docker',
      'Caddy / Nginx',
      'Jenkins / GitHub Actions',
      'Flyway migrations',
      'CI/CD pipelines',
    ],
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX design', 'Design systems'],
  },
];
