import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Analytics } from '@vercel/analytics/next';
import { Box, CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import Image from 'next/image';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Jared Craig',
  description: 'A showcase of my software development',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={roboto.variable}>
        <Analytics />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense>
              <Box
                component='main'
                sx={{
                  flexGrow: 1,
                  overflow: 'auto',
                  backgroundImage: 'url(/space-bg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100vh',
                }}
              >
                {props.children}
              </Box>
            </Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
