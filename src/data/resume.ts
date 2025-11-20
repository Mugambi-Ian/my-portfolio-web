import type { IResumeAttributesEntity } from '@/graphql/models/resume';

export const resumeData: IResumeAttributesEntity = {
  workExperience: [
    {
      id: 'dadanada',
      title: 'Lead Product Engineer (Remittance)',
      company: 'Dadanada Group',
      start_date: '2023-12-01',
      end_date: null,
      location: 'Nairobi · Hybrid',
      description:
        'Directed Daremit’s cross-border remittance launch across the US, EU, and Central Africa, pairing product strategy with mobile-first execution.',
      roles: [
        {
          id: 'dadanada-ship',
          department: 'Product Engineering',
          project_url: 'https://daremit.com',
          tech_stack: {
            data: [
              { id: '202', attributes: { techStack: '2FA' } },
              { id: '157', attributes: { techStack: 'Agile' } },
              { id: '160', attributes: { techStack: 'AI-assisted Testing' } },
              { id: '161', attributes: { techStack: 'AI Code Generation' } },
              { id: '184', attributes: { techStack: 'AWS' } },
              { id: '203', attributes: { techStack: 'Biometric Auth' } },
              { id: '189', attributes: { techStack: 'Bitbucket' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '206', attributes: { techStack: 'i18n / Localization' } },
              { id: '172', attributes: { techStack: 'JavaScript' } },
              { id: '193', attributes: { techStack: 'Jest' } },
              { id: '196', attributes: { techStack: 'Jira' } },
              { id: '187', attributes: { techStack: 'Jenkins' } },
              { id: '204', attributes: { techStack: 'KYC/KYB (Onfido)' } },
              {
                id: '162',
                attributes: { techStack: 'Microservices Architecture' },
              },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '173', attributes: { techStack: 'Node.js' } },
              { id: '205', attributes: { techStack: 'Push Notifications' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '163', attributes: { techStack: 'React Native' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '158', attributes: { techStack: 'Scrum' } },
              { id: '192', attributes: { techStack: 'Sentry' } },
              { id: '159', attributes: { techStack: 'Sprint Planning' } },
              { id: '191', attributes: { techStack: 'SonarQube' } },
              { id: '197', attributes: { techStack: 'Slack' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
              { id: '207', attributes: { techStack: 'UI/UX Design' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'd1',
                attributes: {
                  role: 'Led a squad of three mobile engineers to deliver the React Native app in two months (down from a six-month plan) with zero Sev-1 bugs at launch.',
                },
              },
              {
                id: 'd2',
                attributes: {
                  role: 'Rolled out region-based onboarding that drove a 95% completion rate and cut KYC escalations to under 5%.',
                },
              },
              {
                id: 'd3',
                attributes: {
                  role: 'Scaled the platform to ~400 monthly remittance transactions (USD 100k–200k) across US, EU, and Central Africa corridors.',
                },
              },
              {
                id: 'd4',
                attributes: {
                  role: 'Architected secure wallet, funding, and transaction-history flows backed by automated AML/KYC guardrails.',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'zamara',
      title: 'Senior Fullstack Engineer',
      company: 'Zamara Kenya',
      start_date: '2023-04-01',
      end_date: '2023-12-01',
      location: 'Nairobi, Kenya',
      description:
        'Modernised Zamara’s actuarial and pension platforms with automation, observability, and scalable delivery practices.',
      roles: [
        {
          id: 'z1',
          department: 'IT & Platforms',
          project_url: 'https://zamaragroup.com',
          tech_stack: {
            data: [
              { id: '202', attributes: { techStack: '2FA' } },
              { id: '157', attributes: { techStack: 'Agile' } },
              { id: '161', attributes: { techStack: 'AI Code Generation' } },
              { id: '184', attributes: { techStack: 'AWS' } },
              { id: '185', attributes: { techStack: 'Azure Repos' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '166', attributes: { techStack: 'Expo' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '177', attributes: { techStack: 'GraphQL' } },
              { id: '206', attributes: { techStack: 'i18n / Localization' } },
              { id: '172', attributes: { techStack: 'JavaScript' } },
              { id: '169', attributes: { techStack: 'Material UI' } },
              { id: '205', attributes: { techStack: 'Push Notifications' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '163', attributes: { techStack: 'React Native' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '160', attributes: { techStack: 'AI-assisted Testing' } },
              { id: '186', attributes: { techStack: 'DigitalOcean' } },
              { id: '174', attributes: { techStack: '.NET' } },
              { id: '173', attributes: { techStack: 'Node.js' } },
              { id: '183', attributes: { techStack: 'Nginx' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'z2',
                attributes: {
                  role: 'Automated customer-service workflows, cutting physical support requests by 80%.',
                },
              },
              {
                id: 'z3',
                attributes: {
                  role: 'Redesigned the system architecture and delivery pipelines to sustain 99% uptime and 50% faster rollout cycles.',
                },
              },
              {
                id: 'z4',
                attributes: {
                  role: 'Shipped React/React Native portals and mobile features with shared design tokens for actuarial, pension, and insurance teams.',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'prolox-contract',
      title: 'Product Developer (Contract)',
      company: 'Prolox Solutions',
      start_date: '2023-01-01',
      end_date: '2023-11-01',
      location: 'Kenya · Part-time',
      description:
        'Upgraded Prolox’s in-house multi-location platform while the company expanded across new regions.',
      roles: [
        {
          id: 'p1',
          department: 'Platform Engineering',
          project_url: 'https://prolox.co.ke',
          tech_stack: {
            data: [
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '186', attributes: { techStack: 'DigitalOcean' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '189', attributes: { techStack: 'Bitbucket' } },
              { id: '167', attributes: { techStack: 'Electron' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '172', attributes: { techStack: 'JavaScript' } },
              { id: '181', attributes: { techStack: 'MongoDB' } },
              { id: '173', attributes: { techStack: 'Node.js' } },
              { id: '205', attributes: { techStack: 'Push Notifications' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '161', attributes: { techStack: 'AI Code Generation' } },
              { id: '183', attributes: { techStack: 'Nginx' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'p2',
                attributes: {
                  role: 'Scaled the platform to 3 new locations and 3 additional warehouses, migrating 40k inventory items without downtime.',
                },
              },
              {
                id: 'p3',
                attributes: {
                  role: 'Handled 2,000 new transactions per quarter through upgraded checkout, procurement, and reporting flows.',
                },
              },
              {
                id: 'p4',
                attributes: {
                  role: 'Introduced a modular architecture and automated deployments (Docker + Watchtower) to simplify future rollouts.',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'space-next-door',
      title: 'Fullstack Developer',
      company: 'Space Next Door',
      start_date: '2022-02-01',
      end_date: '2023-04-01',
      location: 'Singapore · Remote',
      description:
        'Built customer-facing booking experiences for a self-storage marketplace operating across East Asia.',
      roles: [
        {
          id: 's1',
          department: 'Product Delivery',
          project_url: 'https://www.spacenextdoor.com',
          tech_stack: {
            data: [
              { id: '202', attributes: { techStack: '2FA' } },
              { id: '184', attributes: { techStack: 'AWS' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '194', attributes: { techStack: 'Hotjar' } },
              { id: '206', attributes: { techStack: 'i18n / Localization' } },
              { id: '172', attributes: { techStack: 'JavaScript' } },
              { id: '187', attributes: { techStack: 'Jenkins' } },
              { id: '193', attributes: { techStack: 'Jest' } },
              { id: '196', attributes: { techStack: 'Jira' } },
              { id: '169', attributes: { techStack: 'Material UI' } },
              { id: '173', attributes: { techStack: 'Node.js' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '205', attributes: { techStack: 'Push Notifications' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '168', attributes: { techStack: 'Vue.js' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
              { id: '159', attributes: { techStack: 'Sprint Planning' } },
              { id: '158', attributes: { techStack: 'Scrum' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '197', attributes: { techStack: 'Slack' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              {
                id: '162',
                attributes: { techStack: 'Microservices Architecture' },
              },
              { id: '157', attributes: { techStack: 'Agile' } },
              { id: '192', attributes: { techStack: 'Sentry' } },
              { id: '191', attributes: { techStack: 'SonarQube' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 's2',
                attributes: {
                  role: 'Boosted site performance from a 30% to 95% LCP score, sustaining 99% uptime and cutting support tickets measurably.',
                },
              },
              {
                id: 's3',
                attributes: {
                  role: 'Added third-party partner integrations that unlocked 100 new customers and 3k additional visits per month.',
                },
              },
              {
                id: 's4',
                attributes: {
                  role: 'Owned booking, pricing, and notification flows across React/Next.js web customers and partner APIs.',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'kabarak',
      title: 'Junior Developer (EVIS)',
      company: 'Kabarak University',
      start_date: '2021-07-01',
      end_date: '2022-02-01',
      location: 'Kenya · Hybrid',
      description:
        'Built and deployed the Election Voting Information System (EVIS) for university-wide democratic processes.',
      roles: [
        {
          id: 'k1',
          department: 'Digital Platforms',
          tech_stack: {
            data: [
              { id: '164', attributes: { techStack: 'React' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '186', attributes: { techStack: 'DigitalOcean' } },
              { id: '173', attributes: { techStack: 'Node.js' } },
              { id: '183', attributes: { techStack: 'Nginx' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '175', attributes: { techStack: 'Laravel' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              { id: '202', attributes: { techStack: '2FA' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '172', attributes: { techStack: 'JavaScript' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'k2',
                attributes: {
                  role: 'Ran 10+ elections with 95% voter turnout, broadcasting results instantly after polls closed.',
                },
              },
              {
                id: 'k3',
                attributes: {
                  role: 'Implemented validation, ballot casting, and counting workflows that reduced tally errors by 98%.',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'prolox-intern',
      title: 'Software Engineering Intern',
      company: 'Prolox Solutions',
      start_date: '2020-11-01',
      end_date: '2021-07-01',
      location: 'Kenya · Hybrid',
      description:
        'Built sales-operations tooling that processed 1M seal/service transactions for 1,750 customers.',
      roles: [
        {
          id: 'pi1',
          department: 'Operations Tech',
          tech_stack: {
            data: [
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
              { id: '164', attributes: { techStack: 'React' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'pi2',
                attributes: {
                  role: 'Cut checkout and inventory-management time by 50% through workflow automation and dashboards.',
                },
              },
              {
                id: 'pi3',
                attributes: {
                  role: 'Launched self-service store and reporting modules that accelerated forecasting and client onboarding.',
                },
              },
            ],
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'terminal-tetris',
      title: 'Terminal Tetris',
      project_url: 'https://www.npmjs.com/package/terminal-tetris',
      long_description:
        'CLI Tetris built with Node.js + TypeScript featuring colored blocks, difficulty settings, save/resume, and a high-score tracker. Reached ~300 monthly npm downloads and 3 GitHub stars while iterating on rendering performance and input handling.',
      links: [],
      short_description: '',
      project_cover: undefined,
    },
  ],
  awards: [
    {
      id: 'knsef',
      title: 'Kenya National Science & Engineering Fair',
      award: 'Nationals Finalist',
      description:
        'Created a police-records automation platform with secure role-based portals, automated family notifications, and shift orchestration.',
      date: '2016-07-18',
    },
  ],
  education: {
    start: null,
    school: 'Kabarak University',
    course: 'BSc. Computer Science (Software Engineering Major)',
    end_date: '2021-12-13',
  },
  references: [
    {
      id: 'ref-dadanada',
      name: 'Mr. Kelvin Kimami',
      email: 'kelvin.kimani@dadanadagroup.com',
      title: 'Head of Engineering, Dadanada Group',
    },
    {
      id: 'ref-zamara',
      name: 'Mr. Stephen Amimo',
      email: 'samimo@zamara.co.ke',
      title: 'Lead Engineer, Zamara',
    },
    {
      id: 'ref-kabarak',
      name: 'Dr. Moses Thiga',
      email: 'mthiga@kabarak.ac.ke',
      title: 'Director, Kabarak University Online & Research',
    },
    {
      id: 'ref-snd',
      name: 'Mr. Bryan Thuan',
      email: 'bryan@spacenextdoor.io',
      title: 'Head of Product Delivery, Space Next Door',
    },
    {
      id: 'ref-prolox',
      name: 'Mr. Charles Kiragu',
      email: 'charlesnk@prolox.co.ke',
      title: 'Managing Director, Prolox Solutions',
    },
  ],
};
