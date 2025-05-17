import { Project } from '@/app/projects/types/project';

export const PROJECTS: Project[] = [
  {
    title: 'Easy Weather',
    description: 'A mobile weather app with a clean and minimalist design. On the Play Store soon (in closed testing)!',
    techStack: ['React Native', 'Typescript', 'React Query', 'Expo'],
    link: 'https://play.google.com/store/apps/details?id=com.madkingcraig.easyweather&hl=en_US/',
    image: '/easyweather-icon.png',
  },
  {
    title: 'GLB2GM',
    description: 'A GLB2 stats, analytics, and tools platform.',
    techStack: ['Next.js', 'React', 'Typescript', 'MUI', 'Prisma', 'Neon Postgres', 'Auth0', 'Stripe'],
    link: 'https://glb2.app/',
    image: '/glb2gm-icon.png',
  },
  {
    title: 'HotsGG',
    description: 'A Heroes of the Storm stats and analytics platform.',
    techStack: ['Next.js', 'React', 'Typescript', 'MUI', 'Prisma'],
    link: 'https://hotsgg.com/',
    image: '/hotsgg-icon.png',
  },
  {
    title: 'Dashboard Demo',
    description: 'A demo for a data driven dashboard.',
    techStack: ['React', 'Typescript', 'Vite', 'React Router', 'MUI'],
    link: 'https://dashboard-demo-beige.vercel.app/',
    image: '/vite.svg',
  },
  {
    title: 'E-Commerce Demo',
    description: 'An e-commerce demo app.',
    techStack: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Redux Toolkit'],
    link: 'https://store-demo-sepia.vercel.app/',
    image: '/shopping-cart.png',
  },
] as const;
