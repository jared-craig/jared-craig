import { Container, Link, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='xl'>
      <Stack spacing={1} sx={{ p: 4, alignItems: 'center', textAlign: 'center' }}>
        <Typography variant='h6' sx={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}>
          Hello, my name is
        </Typography>
        <Typography variant='h3' sx={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}>
          Jared Craig
        </Typography>
        <Typography variant='h6' sx={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}>
          Here are a few of my full-stack projects:
        </Typography>
        <Link href='https://hotsgg.com/' target='_blank' rel='noopener' variant='h6' color='inherit' sx={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 1)' }}>
          HotsGG
        </Link>
        <Link href='https://glb2.app/' target='_blank' rel='noopener' variant='h6' color='inherit' sx={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 1)' }}>
          GLB2GM
        </Link>
      </Stack>
    </Container>
  );
}
