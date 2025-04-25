import { Project } from '@/app/project/types/project';

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Demo',
    description: 'An e-commerce demo app.',
    techStack: ['Next.js, React, Typescript, Tailwind CSS'],
    link: 'https://store-demo-sepia.vercel.app/',
    image: '/next.svg',
  },
  {
    title: 'HotsGG',
    description: 'A Heroes of the Storm stats and analytics platform.',
    techStack: ['Next.js, React, Typescript, MUI, Prisma'],
    link: 'https://hotsgg.com/',
    image: '/hotsgg-icon.png',
  },
  {
    title: 'GLB2GM',
    description: 'A GLB2 stats and analytics platform.',
    techStack: ['Next.js, React, Typescript, MUI, Prisma, Neon Postgres'],
    link: 'https://glb2.app/',
    image: '/glb2gm-icon.png',
  },
  {
    title: 'Easy Weather',
    description:
      'A mobile weather app with a clean and minimalist design. On the Play Store soon (in closed testing)!',
    techStack: ['React Native, Typescript, Expo'],
    link: 'https://play.google.com/store/apps/details?id=com.madkingcraig.easyweather&hl=en_US/',
    image: '/easyweather-icon.png',
  },
] as const;
