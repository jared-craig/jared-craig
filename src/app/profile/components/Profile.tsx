import { Avatar, Stack, Typography } from '@mui/material';
import Links from '@/app/profile/components/Links';

export default function Profile() {
  return (
    <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
      <Avatar
        alt='Jared Craig'
        src='/profile-pic.png'
        sx={{
          width: 150,
          height: 150,
          mb: 2,
          border: '4px solid white',
        }}
      />
      <Typography sx={{ typography: { xs: 'h3', sm: 'h2' } }}>
        Jared Craig
      </Typography>
      <Links />
      <Typography variant='h6'>React + Typescript Expert</Typography>
    </Stack>
  );
}
