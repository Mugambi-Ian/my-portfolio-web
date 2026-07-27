# mugambi-ian.vercel.app

Portfolio of Ian Mugambi — Senior Full-Stack Engineer, Nairobi.

Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS. All content is
static data in `src/data/`; no CMS, no analytics, no third-party requests.
The résumé PDF is produced client-side: a hidden iframe loads `/resume/print`
and calls the browser's native print dialog.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # lint + type-check
npm run build      # production build + sitemap
```

Deployed on Vercel. No environment variables required.
