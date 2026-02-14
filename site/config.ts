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

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Lynn',
  desc: 'Creative developer exploring design, code and digital aesthetics.',
  title: 'Lynn — Portfolio',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '',  
  website: 'https://lynnx1998.github.io',

  social: {
    github: 'https://github.com/lynnx1998',
  },

  googleAnalyticsId: '',

  homeHeroDescription:
    'I design and build clean, expressive digital experiences. Currently exploring creative coding and interactive storytelling.',

  blogDescription:
    'Notes on design, development and digital experiments.',

  projectsDescription:
    'Selected projects and creative explorations.',

  featuredPostsCount: 3,
  latestPostsCount: 3,

  homeProjects: {
    enabled: true,
    count: 4,
  },

  cta: {
    enabled: false,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  comments: {
    enabled: false,
    repo: '',
    repoId: '',
    category: '',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'en',
  },
};
