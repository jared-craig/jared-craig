import { Typography, Button, Stack, Box } from '@mui/material';
import { Project } from '@/app/projects/types/project';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

export default function ProjectCard(project: Project) {
  const { title, description, techStack, link, image } = project;

  return (
    <Stack
      direction='column'
      spacing={2}
      sx={{
        minHeight: 500,
        p: 2,
        backgroundColor: grey[900],
        border: '4px solid white',
        borderRadius: 4,
        justifyContent: 'space-between',
      }}
    >
      <Image
        src={image}
        alt={`${title} icon`}
        height={200}
        width={300}
        sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'}
        priority
        style={{ objectFit: 'contain' }}
      />
      <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{ textAlign: 'center' }}
      >
        {description}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{ textAlign: 'center' }}
      >
        {techStack.join(', ')}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{ textAlign: 'center' }}
      >
        {link && (
          <Button
            size='small'
            href={link}
            target='_blank'
            rel='noopener'
            sx={{ m: 1 }}
          >
            View Project
          </Button>
        )}
      </Typography>
    </Stack>
  );
}
