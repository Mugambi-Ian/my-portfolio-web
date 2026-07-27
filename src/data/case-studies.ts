import type { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'daremit',
    index: '01',
    name: 'Daremit',
    client: 'Dadanada Group',
    role: 'Senior Full-Stack Engineer',
    period: 'Dec 2023 — Present',
    summary:
      'Two Flutter apps moving real money, live on both stores — plus the Spring Boot APIs, payment integrations, and KYC/KYB behind them.',
    problem:
      'Dadanada needed two apps: Daremit for people sending money home, and Daremit Agent for the agents who serve them, plus a web platform. Money crossing borders means regulation — identity checks for individuals, and for businesses the Principals and ultimate beneficial owners behind them. Payments run through two outside providers, Vi Americas and Money International, each with its own integration. I own both sides: the Flutter apps and the Spring Boot services they talk to.',
    approach:
      "The apps never talk to a payment provider directly. They call internal Spring Boot APIs I wrote in Java — wallet, transactions, onboarding — and those services own the provider integrations. Where a flow has to finish on a provider's own page, the app opens it in an in-app browser instead of reimplementing it.\n\nCompliance splits the same way. The Onfido SDK handles identity verification on the device; the KYC and KYB flows for Principals and UBOs live on the server. Sign-in is layered: email, identity providers, PIN, biometrics, 2FA. Onboarding works across regions and languages. The release path is deliberately dull — Jenkins and Bitbucket, SonarQube, tests, Sentry.",
    pullQuote: 'The apps never talk to a payment provider directly.',
    outcome:
      "Both apps are live on the App Store and Google Play, and I have owned the stack since December 2023. It is regulated fintech, so I don't publish user or volume numbers. What I can show is the surface area: two apps handling real money, both provider integrations, the compliance flows behind onboarding, and a release path with static analysis, tests, and monitoring in it.",
    stack: [
      'Flutter',
      'Dart',
      'Java',
      'Spring Boot',
      'Onfido',
      'AWS',
      'Jenkins',
      'SonarQube',
      'Sentry',
    ],
    metrics: [
      { value: 'iOS + Android', label: 'live in production' },
      { value: '2', label: 'payment providers integrated' },
      { value: 'KYC + KYB', label: 'Onfido compliance flows' },
      { value: '2FA + biometrics', label: 'authentication layers' },
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/daremit/id6736922935',
      },
    ],
    screenshots: [
      {
        src: '/assets/work/placeholder.svg',
        alt: 'A terminal-styled placeholder panel: three title-bar dots on a dark window, with a monospace prompt reading "$ screenshot --pending"',
        width: 1200,
        height: 760,
      },
    ],
    pageTitle: 'Daremit: Cross-Border Remittance Apps — Ian Mugambi',
    seoDescription:
      "How I built Daremit's Flutter apps for iOS and Android and the Spring Boot services behind them — payments, wallets, and KYC/KYB compliance.",
  },
  {
    slug: 'prolox',
    index: '02',
    name: 'Prolox',
    client: 'Prolox Solutions',
    role: 'Intern → Product Developer → Sole author & maintainer',
    period: '2020 — Present',
    summary:
      'A retail platform I have built and rebuilt since 2020 — a POS, a storefront, and a CRM, all running on one 2 GB server.',
    problem:
      'Prolox runs a multi-store retailer in Nairobi: a Windows POS for cashiers, a public storefront with self-checkout, and a CRM for stock, stores, and reporting. I started as an intern in December 2020, when sales were still a manual workflow. I came back in 2023 to build the transactional core — an Electron POS, a Next.js storefront, and a REST API on MongoDB. That stack handled over a million transactions for 1,750+ customers, and by 2025 it had outgrown itself. I rebuilt the platform on my own, without closing the shop for a day, onto a single 2 vCPU / 2 GB server. I maintain it.',
    approach:
      'The backend is Spring Boot 4 and Java 21 — 28 controllers across 20 domain modules — on PostgreSQL 16 with 24 Flyway migrations. The 2 GB budget decided most of the design. Email goes through a Postgres outbox rather than Redis or a queue: one fewer process to run, and a send either commits with the business write or does not happen. Receipt PDFs render in a small Node sidecar with no internet access at all, called off the request path.\n\nThe rest is unglamorous and deliberate. Argon2 hashing with a bcrypt fallback so migrated accounts still log in. CSRF double-submit cookies, and sessions scoped per client so the POS cannot use a CRM token. Server-sent events for live sales. Caddy for HTTPS and health-checked deploys. And a parity harness that replays requests against the old system and diffs the answers, so the migration cannot quietly change behavior.',
    pullQuote: 'The 2 GB budget decided most of the design.',
    outcome:
      'The cutover landed without anyone noticing, which is the whole point of the parity harness. The platform in production today — Spring Boot backend, Next.js storefront, React CRM, self-updating Electron POS, PDF sidecar — runs on the single server it was designed for, with nightly backups off-box. Intern in 2020, product developer in 2023, sole author and maintainer now.',
    stack: [
      'Java 21',
      'Spring Boot 4',
      'PostgreSQL 16',
      'Flyway',
      'Next.js',
      'React',
      'Electron',
      'Node.js',
      'Puppeteer',
      'Caddy',
      'Docker',
    ],
    metrics: [
      { value: '1M+', label: 'transactions processed' },
      { value: '1,750+', label: 'customers served' },
      { value: '2 vCPU / 2 GB', label: 'whole-platform VM footprint' },
      { value: 'Author', label: 'maintainer and builder' },
    ],
    links: [{ label: 'prolox.co.ke', href: 'https://prolox.co.ke' }],
    screenshots: [
      {
        src: '/assets/images/ui/prolox.png',
        alt: 'Prolox storefront product listing with category navigation and cart',
        width: 1100,
        height: 902,
      },
    ],
    pageTitle: 'Prolox — Multi-Store Retail Platform | Ian Mugambi',
    seoDescription:
      'Prolox: a retail POS, storefront, and CRM handling over a million transactions for 1,750+ customers — rebuilt on Spring Boot 4 and Java 21, and maintained by me.',
  },
  {
    slug: 'zamara',
    index: '03',
    name: 'Zamara',
    client: 'Zamara Kenya',
    role: 'Mobile Engineer & UI/UX Designer',
    period: 'Apr 2023 — Jan 2024',
    summary:
      "Zamara's mobile apps and events portal, the .NET GraphQL API under them, and the C# integration into the group's Dynamics ERP.",
    problem:
      'Zamara is a pensions and actuarial group working across Africa. The business data lived in Microsoft Dynamics; everything customer-facing was React and WordPress. They wanted mobile apps and an events portal with booking, ticketing, and notifications — and none of it could ship without an API layer over the ERP first. The existing apps also had to keep running while the new ones were built. I joined in April 2023 doing both the engineering and the design.',
    approach:
      'I built the API layer first: a .NET GraphQL server with REST endpoints, used by both the mobile apps and the web portals. One schema meant each client could ask for the shape it needed instead of us writing an endpoint per screen. Behind it I wrote the C# integration with Dynamics, so the ERP stayed the source of truth and no client ever touched it directly.\n\nThe apps are React Native with Expo, one codebase for both platforms. The events portal is Next.js. I designed every screen in Figma before building it — I held both roles, so the mockups and the shipped UI came from the same hands. Partway through I proposed moving the architecture to microservices with a Docker CI/CD pipeline on Azure Repos, and led that work while keeping the old React and WordPress apps alive.',
    pullQuote:
      'The ERP stayed the source of truth. No client ever touched it directly.',
    outcome:
      'By January 2024 the apps and the portal both ran on the API layer I built, with the Dynamics integration behind it. The microservices proposal was accepted and I led the redesign. I drew the Figma frames, wrote the GraphQL resolvers, and wrote the C# that reaches Dynamics. Zamara does not publish user numbers, so none appear here.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      '.NET',
      'C#',
      'GraphQL',
      'Microsoft Dynamics',
      'Next.js',
      'Docker',
      'Azure Repos',
      'Figma',
    ],
    metrics: [
      { value: '.NET + GraphQL', label: 'API layer built' },
      { value: 'Microsoft Dynamics', label: 'C# ERP integration' },
      { value: 'microservices', label: 'led the architecture redesign' },
      { value: 'Figma to shipped', label: 'designed and built the UI' },
    ],
    links: [{ label: 'zamaragroup.com', href: 'https://zamaragroup.com' }],
    screenshots: [
      {
        src: '/assets/images/ui/zamara.png',
        alt: 'Zamara group website and member portal interface',
        width: 1100,
        height: 902,
      },
    ],
    pageTitle: 'Zamara Case Study — Ian Mugambi, Full-Stack Engineer',
    seoDescription:
      "How I built Zamara's mobile apps, .NET GraphQL API, and Microsoft Dynamics integration, then led the pensions group's move to microservices on Azure Repos.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
