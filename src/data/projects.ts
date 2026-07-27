import type { Award, Education, OpenSourceProject } from './types';

export const OPEN_SOURCE: OpenSourceProject[] = [
  {
    name: 'terminal-tetris',
    description:
      'A CLI Tetris built with Node.js and TypeScript, published on npm — colored blocks, difficulty levels, save/resume, and high scores, rendered entirely in the terminal.',
    npmUrl: 'https://www.npmjs.com/package/terminal-tetris',
  },
];

export const EDUCATION: Education = {
  school: 'Kabarak University',
  course: 'BSc. Computer Science (Software Engineering Major)',
  endDate: '2021-12-13',
};

export const AWARD: Award = {
  title: 'Kenya National Science and Engineering Fair',
  award: 'Nationals Finalist',
  date: '2016-07-18',
  description:
    'National finalist at 17 with a police-records system: role-based access portals, shift management with end-of-shift alarms, automated next-of-kin arrest notifications, discharge workflows, and superuser-only audit logs.',
};

export const REFERENCES_NOTE = 'References available on request.';
