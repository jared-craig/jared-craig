import { Container, Grid, Stack, Typography } from '@mui/material';
import ProjectCard from '@/app/projects/components/ProjectCard';
import { PROJECTS } from '@/app/projects/projects';
import Profile from '@/app/profile/components/Profile';

export default function Home() {
  return (
    <Container maxWidth='xl' sx={{ p: 4 }}>
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Profile />
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Here are a few of my projects:
        </Typography>
        <Grid container>
          {PROJECTS.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
