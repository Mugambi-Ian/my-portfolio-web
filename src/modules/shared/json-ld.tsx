import { SITE } from '@/config/site';

/**
 * Stable node identifier for the one Person entity on the site. Any other
 * graph that needs to point at Ian references this `@id` instead of emitting
 * a second, competing Person.
 */
export const PERSON_ID = `${SITE.url}/#person`;

/** Compact reference to {@link PERSON_ID}, safe to nest in any other graph. */
export const personRef = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.name,
  url: SITE.url,
};

/**
 * The site's single ProfilePage/Person graph.
 *
 * This must be rendered by the homepage only. A ProfilePage is a claim about
 * the page it appears on, so rendering it from a shared layout makes every
 * case study advertise itself as Ian's profile and puts a second top-level
 * entity next to that page's own CreativeWork graph.
 *
 * FOLLOW-UP (needs `src/app/(site)/layout.tsx`, owned by another change):
 * delete the `<PersonJsonLd />` element and its import there, then render
 * `<PersonJsonLd />` from `src/app/(site)/page.tsx` instead. Until that lands
 * the markup stays valid — every other page references the Person by `@id`
 * via {@link personRef} rather than emitting a competing copy.
 */
export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE.name,
      jobTitle: SITE.title,
      url: SITE.url,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        addressCountry: SITE.location,
      },
      sameAs: [SITE.github, SITE.linkedin],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Kabarak University',
      },
      award:
        'Kenya National Science and Engineering Fair — Nationals Finalist (2016)',
      knowsAbout: [
        'TypeScript',
        'React',
        'React Native',
        'Flutter',
        'Dart',
        'Next.js',
        'Java',
        'Spring Boot',
        'C#',
        '.NET',
        'PostgreSQL',
        'GraphQL',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
