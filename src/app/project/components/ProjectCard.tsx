import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  CardActions,
} from '@mui/material';
import { Project } from '@/app/project/types/project';
import Image from 'next/image';

export default function ProjectCard(project: Project) {
  const { title, description, techStack, link, image } = project;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 400,
          m: 2,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component='div'
          sx={{
            height: 140,
            position: 'relative',
            aspectRatio: '4/3',
            margin: '0 auto',
          }}
        >
          <Image
            src={image}
            alt={`${title} icon`}
            fill
            style={{ objectFit: 'contain' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {techStack.join(', ')}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
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
        </CardActions>
      </Card>
    </Grid>
  );
}
