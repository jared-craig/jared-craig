import { Container, Grid, Stack, Typography } from '@mui/material';
import ProjectCard from '@/app/project/components/ProjectCard';
import { PROJECTS } from '@/app/project/projects';
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
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
