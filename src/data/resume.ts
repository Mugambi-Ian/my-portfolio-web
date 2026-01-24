import type { IResumeAttributesEntity } from '@/graphql/models/resume';

export const resumeData: IResumeAttributesEntity = {
  workExperience: [
    {
      id: 'dadanada',
      title: 'FullStack Engineer (FE Heavy)',
      company: 'Dadanada Group',
      start_date: '2023-12-01',
      end_date: null,
      location: 'Kenya (Hybrid)',
      description:
        'I lead the design and development of the Daremit mobile and web applications, ensuring an intuitive user experience, secure transactions, and efficient financial workflows.',
      roles: [
        {
          id: 'dadanada-design',
          department: 'UI/UX Design',
          project_url: 'https://apps.apple.com/us/app/daremit/id6736922935',
          deparment_roles: {
            data: [
              {
                id: 'd-design-1',
                attributes: {
                  role: 'Led end-to-end UI/UX design for the Daremit and Daremit Agent mobile apps (iOS & Android) and web platform',
                },
              },
              {
                id: 'd-design-2',
                attributes: {
                  role: 'Designed key financial components, including currency and country inputs, transaction and account cards, and listings for Daremit Web & Mobile',
                },
              },
            ],
          },
        },
        {
          id: 'dadanada-dev',
          department: 'Software Development',
          project_url: 'https://daremit.com/',
          tech_stack: {
            data: [
              { id: '202', attributes: { techStack: '2FA' } },
              { id: '184', attributes: { techStack: 'AWS' } },
              { id: '203', attributes: { techStack: 'Biometric Auth' } },
              { id: '189', attributes: { techStack: 'Bitbucket' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '206', attributes: { techStack: 'i18n / Localization' } },
              { id: '187', attributes: { techStack: 'Jenkins' } },
              { id: '193', attributes: { techStack: 'Jest' } },
              { id: '196', attributes: { techStack: 'Jira' } },
              { id: '163', attributes: { techStack: 'React Native' } },
              { id: '192', attributes: { techStack: 'Sentry' } },
              { id: '197', attributes: { techStack: 'Slack' } },
              { id: '191', attributes: { techStack: 'SonarQube' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
              { id: '205', attributes: { techStack: 'Push Notifications' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'd-dev-1',
                attributes: {
                  role: 'Led end-to-end software development for the Daremit & Daremit Agent mobile apps (iOS & Android)',
                },
              },
              {
                id: 'd-dev-2',
                attributes: {
                  role: 'Enabled multilingual support using i18n, ensuring a seamless experience for users across different regions',
                },
              },
              {
                id: 'd-dev-3',
                attributes: {
                  role: 'Implemented transaction history management with filtering, detailed transaction views, and replay functionality',
                },
              },
              {
                id: 'd-dev-4',
                attributes: {
                  role: 'Implemented profile settings, user preferences, and authentication security settings',
                },
              },
              {
                id: 'd-dev-5',
                attributes: {
                  role: 'Engineered wallet creation, funding mechanisms, and profile-based transaction quotations',
                },
              },
              {
                id: 'd-dev-6',
                attributes: {
                  role: 'Developed secure authentication systems, including email sign-up/login, identity provider onboarding, PIN/password, and biometric authentication',
                },
              },
              {
                id: 'd-dev-7',
                attributes: {
                  role: 'Integrated Vi Americas and Money International for seamless transaction processing',
                },
              },
              {
                id: 'd-dev-8',
                attributes: {
                  role: 'Built sender and beneficiary onboarding with full CRUD capabilities, including payment account management',
                },
              },
              {
                id: 'd-dev-9',
                attributes: {
                  role: 'Implemented region-based profile setup, KYC verification, KYB compliance (Principals & UBOs), and human verification using Onfido',
                },
              },
              {
                id: 'd-dev-10',
                attributes: {
                  role: 'Developed transaction workflows, including funding via in-app wallets or third-party services, quotation review, additional details update, and initiation via our APIs or an external provider URL using an in-app browser',
                },
              },
              {
                id: 'd-dev-11',
                attributes: {
                  role: 'Utilized Bitbucket for version control, Jenkins for CI/CD automation, and SonarQube for code quality and security analysis',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'zamara',
      title: 'Mobile Engineer | UI/UX Designer',
      company: 'Zamara Kenya',
      start_date: '2023-04-01',
      end_date: '2024-01-01',
      location: 'Nairobi Kenya',
      description:
        'Zamara is a financial services firm that primarily offers Actuarial Services, Pensions Administration, Consulting, and Insurance Brokerage Services. I worked to develop and automate solutions that improved software delivery, customer service and made administration efficient.',
      roles: [
        {
          id: 'z1',
          department: 'IT',
          project_url: 'https://zamaragroup.com/',
          tech_stack: {
            data: [
              { id: '185', attributes: { techStack: 'Azure Repos' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '174', attributes: { techStack: '.NET' } },
              { id: '166', attributes: { techStack: 'Expo' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '177', attributes: { techStack: 'GraphQL' } },
              { id: '196', attributes: { techStack: 'Jira' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '163', attributes: { techStack: 'React Native' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'z2',
                attributes: {
                  role: 'I designed UI/UX for the different mobile apps and web portals using Figma',
                },
              },
              {
                id: 'z3',
                attributes: {
                  role: 'I helped maintain existing web applications developed using React and WordPress',
                },
              },
              {
                id: 'z4',
                attributes: {
                  role: 'I developed a prototype of an events website with booking, notifications, and ticketing for events and summits held for customers and networking',
                },
              },
              {
                id: 'z5',
                attributes: {
                  role: 'I developed a GraphQL server using DotNet that was consumed on the events portal',
                },
              },
              {
                id: 'z6',
                attributes: {
                  role: 'I wrote policy documentation on our internal SDLC and Networking practices',
                },
              },
              {
                id: 'z7',
                attributes: {
                  role: 'I proposed and received a go-ahead to reimplement our system architecture to use microservices and a CI/CD pipeline powered by docker images and Azure Repos that uses Microsoft Teams for notifications and Jira for Issue Tracking and has an internal staging and an external production environment',
                },
              },
              {
                id: 'z8',
                attributes: {
                  role: 'I built cross-platform mobile apps using React Native and Expo',
                },
              },
              {
                id: 'z9',
                attributes: {
                  role: 'I developed Rest API endpoints using DotNet that were consumed on the mobile apps',
                },
              },
              {
                id: 'z10',
                attributes: {
                  role: 'I deployed web applications and api servers to run in docker containers exposed using IIS on a Windows enterprise server',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'prolox-contract',
      title: 'Product Developer',
      company: 'Prolox Solutions',
      start_date: '2023-02-01',
      end_date: '2023-12-01',
      location: 'Nairobi Kenya (Part Time)',
      description:
        'I was contacted by the Managing Director to help improve their existing in-house platform. The company was expanding to multiple locations, and their existing system did not provide this functionality. The system had not been actively maintained and did not provide functionality to manage multiple stores.',
      roles: [
        {
          id: 'p1',
          department: 'Software',
          project_url: 'https://prolox.co.ke',
          tech_stack: {
            data: [
              { id: '186', attributes: { techStack: 'DigitalOcean' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '167', attributes: { techStack: 'Electron' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              { id: '195', attributes: { techStack: 'Google Analytics' } },
              { id: '181', attributes: { techStack: 'MongoDB' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '183', attributes: { techStack: 'Nginx' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '178', attributes: { techStack: 'REST API' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'p2',
                attributes: {
                  role: 'I designed the receipts, emails, UI and UX for the system portals using Figma',
                },
              },
              {
                id: 'p3',
                attributes: {
                  role: 'I designed and implemented the system architecture to serve two web applications that consume a Rest API with 2FA on protected routes and a windows client application for the POS application',
                },
              },
              {
                id: 'p4',
                attributes: {
                  role: 'I deployed the online store and admin endpoint using docker containers on Nginx in a linux server running on a digital ocean droplet',
                },
              },
              {
                id: 'p5',
                attributes: {
                  role: 'I used NextJS and TailwindCSS to build a public website for store listings and self-checkout that has a good performance score and follows best SEO practices',
                },
              },
              {
                id: 'p6',
                attributes: {
                  role: 'I used ElectronJS and ReactJS and Typescript to build the windows desktop client for the sales staff',
                },
              },
              {
                id: 'p7',
                attributes: {
                  role: 'I used GitHub workflows to build new docker images and Watchtower to pull updates, implementing a simple CI/CD pipeline',
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
      end_date: '2023-03-01',
      location: 'Singapore (Remote)',
      description:
        'I was part of the product development team. The product was a self-serving platform to allow customers to book self-storage units in and around East Asia. The product had over 500 active accounts and 7000 monthly visitors.',
      roles: [
        {
          id: 's1',
          department: 'Web Development',
          project_url: 'https://spacenextdoor.com/',
          tech_stack: {
            data: [
              { id: '184', attributes: { techStack: 'AWS' } },
              { id: '190', attributes: { techStack: 'CI/CD' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '194', attributes: { techStack: 'Hotjar' } },
              { id: '169', attributes: { techStack: 'Material UI' } },
              { id: '165', attributes: { techStack: 'Next.js' } },
              { id: '197', attributes: { techStack: 'Slack' } },
              { id: '170', attributes: { techStack: 'Tailwind CSS' } },
              { id: '168', attributes: { techStack: 'Vue.js' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 's2',
                attributes: {
                  role: 'I was on the team tasked to maintain, improve, and update the customer platform developed with Next JS',
                },
              },
              {
                id: 's3',
                attributes: {
                  role: 'I collaborated in developing an in-house prototype storage web app with NextJS to use a third-party provider, Storaganise API',
                },
              },
              {
                id: 's4',
                attributes: {
                  role: 'I worked as part of the team tasked to maintain, improve, and update an in-house admin platform for listings owners, developed with Vue.js',
                },
              },
              {
                id: 's5',
                attributes: {
                  role: 'I fixed bugs and helped release new features while tracking progress and issues on Jira',
                },
              },
              {
                id: 's6',
                attributes: {
                  role: 'I updated or created components respective to the issued Figma design',
                },
              },
              {
                id: 's7',
                attributes: {
                  role: 'I was enrolled in an advanced NestJs course and REST-based microservices API development in Go lang to advance my backend knowledge',
                },
              },
              {
                id: 's8',
                attributes: {
                  role: "I worked as part of the team that optimized the customer's platform performance. We raised it from 7% to 85% on desktop and 73% on mobile - web.dev",
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'kabarak',
      title: 'Junior Developer',
      company: 'Kabarak University',
      start_date: '2021-07-01',
      end_date: '2022-02-01',
      location: 'Kenya (Hybrid)',
      description:
        'I was part of a team responsible for designing and deploying a general-purpose Election Voting Info System (EVIS) with a backend developer and a Project Manager. The product was used to conduct over 5 elections with over 5000 voters each and has since been adopted by neighboring universities.',
      roles: [
        {
          id: 'k1',
          department: 'Innovation and Engineering',
          tech_stack: {
            data: [
              { id: '186', attributes: { techStack: 'DigitalOcean' } },
              { id: '182', attributes: { techStack: 'Docker' } },
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              { id: '175', attributes: { techStack: 'Laravel' } },
              { id: '183', attributes: { techStack: 'Nginx' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '163', attributes: { techStack: 'React Native' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'k2',
                attributes: {
                  role: 'I worked on creating API routes to serve the Backend on the Frontend. Laravel PHP',
                },
              },
              {
                id: 'k3',
                attributes: {
                  role: 'I designed the UI/UX for the different endpoints. Figma',
                },
              },
              {
                id: 'k4',
                attributes: {
                  role: 'I developed a mobile android application using React Native for voting',
                },
              },
              {
                id: 'k5',
                attributes: {
                  role: 'I developed separate web endpoints using ReactJS: clerks, voters, and admin',
                },
              },
              {
                id: 'k6',
                attributes: {
                  role: 'I created jobs to send HTML emails for authentication and system prompts using Laravel views and the SendGrid API',
                },
              },
              {
                id: 'k7',
                attributes: {
                  role: 'I wrote a custom algorithm to filter voter ballots based on dynamic variable voter properties',
                },
              },
              {
                id: 'k8',
                attributes: {
                  role: 'I worked on creating the system database schema. Postgres',
                },
              },
              {
                id: 'k9',
                attributes: {
                  role: 'I deployed all endpoints in docker containers and configured an Nginx server on a digital ocean droplet',
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 'prolox-intern',
      title: 'Computer Science Intern',
      company: 'Prolox Solutions',
      start_date: '2020-12-01',
      end_date: '2021-07-01',
      location: 'Kenya (Hybrid)',
      description:
        "I designed and implemented digital solutions to improve the performance of the sales team. Since its deployment, the system has facilitated the sale of over 1,000,000 seals and services for 1750+ customers. My solutions focused on inventory management, sales processing, data analysis, automated emails, and a simple online store for the company's web presence.",
      roles: [
        {
          id: 'pi1',
          department: 'IT',
          project_url: 'https://prolox.co.ke/',
          tech_stack: {
            data: [
              { id: '200', attributes: { techStack: 'Firebase' } },
              { id: '208', attributes: { techStack: 'Figma' } },
              { id: '188', attributes: { techStack: 'GitHub Actions' } },
              { id: '164', attributes: { techStack: 'React' } },
              { id: '201', attributes: { techStack: 'SendGrid' } },
              { id: '171', attributes: { techStack: 'TypeScript' } },
            ],
          },
          deparment_roles: {
            data: [
              {
                id: 'pi2',
                attributes: {
                  role: 'I developed separate user applications using ReactJS. Sales, Admin',
                },
              },
              {
                id: 'pi3',
                attributes: {
                  role: "I created jobs that sent out custom emails for receipts and official correspondence that reflected the company's brand",
                },
              },
              {
                id: 'pi4',
                attributes: {
                  role: 'I used react-native to build a lite version of the admin application for mobile',
                },
              },
              {
                id: 'pi5',
                attributes: {
                  role: 'I designed the UI/UX for the different endpoints. Figma',
                },
              },
              {
                id: 'pi6',
                attributes: {
                  role: 'I designed the system database schema. MongoDB',
                },
              },
              {
                id: 'pi7',
                attributes: {
                  role: 'I deployed the online store and admin endpoint using firebase hosting',
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
        'I developed a CLI version of Tetris, powered by NodeJS and distributed on npm. I always wanted to write a CLI application and challenged myself by building a CLI version of Tetris. The game features colored blocks, a difficulty setting, the ability to save and resume, and a high score feature, all written using Typescript. While initially, I had planned to use text files as assets for the grid and tetromino, I eventually found better ways to render the game as I integrated controls and the game logic. This project taught me the essence of accomplishing small objectives, reassessing long-term goals, and pivoting accordingly—a more efficient and creative way to solve problems.',
      links: [],
      short_description: '',
      project_cover: undefined,
    },
  ],
  awards: [
    {
      id: 'knsef',
      title: 'Kenya National Science and Engineering Fair',
      award: 'Nationals Finalist',
      description:
        "I created a Police Records system that aimed to make most police work in my country digital. The system had several features. It had improved security that provided access only to registered users with different portals depending on the User Access Level. It also had a shift manager and included an end-of-shift notification that functioned as an alarm to prepare for a shift change. The system sent automated emails to arrestees' kin to notify them of the arrest. It had a discharge form to update records when discharged. It stored Log files that were only accessible to the super users and showed who had accessed the system and their time of access.",
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
      title: 'Lead Engineer, Dadanada Group',
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
      title: 'Managing Director Prolox Solutions',
    },
  ],
};
