import { Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Links() {
  return (
    <Stack direction='row' spacing={2}>
      <Link
        href='https://github.com/jared-craig'
        target='_blank'
        rel='noopener'
        sx={{ color: 'inherit' }}
      >
        <GitHubIcon />
      </Link>
      <Link
        href='https://www.linkedin.com/in/jared-p-craig'
        target='_blank'
        rel='noopener'
        sx={{ color: 'inherit' }}
      >
        <LinkedInIcon />
      </Link>
    </Stack>
  );
}
