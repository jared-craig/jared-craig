import { Project } from '@/app/projects/types/project';

export const PROJECTS: Project[] = [
  {
    title: 'Mini Gamer',
    description: 'A game of minigames with progressing difficulty and perks!',
    techStack: ['Vite', 'PWA', 'Typescript'],
    link: 'https://mini-gamer.app/',
    image: '/mini-gamer-icon.svg',
  },
  {
    title: 'Easy Weather',
    description:
      'A mobile weather app with a clean and minimalist design. On the Play Store!',
    techStack: ['React Native', 'Typescript', 'React Query', 'Expo'],
    link: 'https://play.google.com/store/apps/details?id=com.madkingcraig.easyweather&hl=en_US/',
    image: '/easyweather-icon.png',
  },
  {
    title: 'HotsGG',
    description: 'A Heroes of the Storm stats and analytics platform.',
    techStack: ['Next.js', 'React', 'Typescript', 'MUI', 'Prisma'],
    link: 'https://hotsgg.com/',
    image: '/hotsgg-icon.png',
  },
  {
    title: 'GLB2GM',
    description: 'A GLB2 stats, analytics, and tools platform.',
    techStack: [
      'Next.js',
      'React',
      'Typescript',
      'MUI',
      'Prisma',
      'Neon Postgres',
      'Auth0',
      'Stripe',
    ],
    link: 'https://glb2.app/',
    image: '/glb2gm-icon.png',
  },
] as const;
