import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { green, grey, red, purple } from '@mui/material/colors';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: purple[900],
  opacity: 0.8,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '20vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    color: purple[900],
    fontWeight: 500,
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f",
    title: ' OBD, Voice Call Broadcasting',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' SMS Gateway – Bulk SMS',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' Customized Web Application',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' Service based Mobile Apps',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' IT Consultancy',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' Dynamic Web Site',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' IT Training',
    width: '25%',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_150.jpg',
    title: ' LBS (Location Based Services)',
    width: '25%',
  }
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Our Services
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              border: '1px solid white'
            }}
          >
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h6"
                variant="h5"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
