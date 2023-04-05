# My Portfolio Web

A dynamic and visually appealing website designed to showcase my skills as a developer and designer. The website is built using the Next.js framework and features a range of cutting-edge technologies to enhance its functionality and user experience.

### Features

- 🔥 Dark and light themes: The website features both dark and light themes this is made easy using [Tailwind DarkMode](https://tailwindcss.com/docs/dark-mode).


- 💎 Content Management System (CMS): The content on the site is managed using [StrapiCMS](https://docs.strapi.io/dev-docs/quick-start) and served using GraphQl. [my-portfolio-cms](https://github.com/Mugambi-Ian/my-portfolio-cms)


- 📏 Real-time PDF generation: The site generates a PDF version of my resume in real-time through a separate in-house service. This service is powered by PuppeteerJS, which renders the resume page on a running browser instance and converts it into a PDF file ther returns a file response. [my-portfolio-utils](https://github.com/Mugambi-Ian/my-portfolio-utils)

- ⚡ Multilingual support: The website supports multiple languages using [next-translate](https://www.npmjs.com/package/next-translate). Currently features engilsh (en) simplified chineese(zh-cn) and swahili(sw-ke). The transalations for zh-cn and sw-ke may not be perfect, they serve as proof of concept.

- 💡 High availability: The production version of the site is hosted on Vercel, while AWS EC2, RDS, and S3 power the CMS and print service that run in separate Docker containers, ensuring maximum uptime.

### Techstack

- 💨 [GraphQL](https://docs.strapi.io/dev-docs/api/graphql)
- ☕ [NextJS 13](https://nextjs.org/blog/next-13)
- ✅ [ExpressJS](https://expressjs.com)
- 🚀 [PostgreSQL](https://docs.strapi.io/dev-docs/configurations/database)
- 🐶 [PuppeteerJS](https://pptr.dev)
- 🧠 [StrapiCMS](https://docs.strapi.io)
- ⛴️ [Docker]
- 🔛 [AWS]

### Installation
To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/my-portfolio-web.git`
2. Navigate to the project directory: `cd my-portfolio-web`
3. Install the dependencies: npm install
3. Configure the `.env` using the `.env.example`.
4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000`
