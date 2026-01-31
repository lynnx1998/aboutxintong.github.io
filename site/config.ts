export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;
}

export const SITE: SiteConfig = {
  author: 'Astronaut',
  desc: 'Developer and designer building premium web experiences.',
  title: 'Spaceship',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/',
  website: 'https://spaceship-one.vercel.app',
  social: {
    x: 'https://x.com/astronaut',
    github: 'https://github.com/astronaut',
    telegram: 'https://t.me/astronaut',
    facebook: 'https://facebook.com/astronaut',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription:
    'Building premium web experiences with Astro, Svelte, and Tailwind. Focused on performance, aesthetics, and clean code. I am currently working on open-source tools and sharing my journey through writing.',
  blogDescription: 'A collection of thoughts, tutorials, and general web discovery.',
  projectsDescription: 'Things I’ve built that I’m proud of. Many of them are open-source.',
};
