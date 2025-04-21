import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { THeroSection } from '../types/index';

export default function HeroSection(props: THeroSection) {

  const { title, subtitle, heading, description, button, image } = props;

  return (
    <Box component='section'>
      <Grid container sx={{
        flexDirection: {xs: 'row', sm: 'row-reverse'},
      }}>
        <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{
          justifyItems: {
            xs: 'center', 
            sm: 'flex-start'},
          mt: {xs: 0, sm: 2},
          px: {xs: 2, sm: 4},
        }}>
            <Typography component='h1' variant='h2'>{title}</Typography>
            <Typography variant='subtitle1' sx={{mt: '0'}}>{subtitle}</Typography>
            <Typography variant='h3' component='h2'>{heading}</Typography>
            <Typography my={2}>{description}</Typography>
            <Button variant='outlined'>{button.text}</Button>
        </Grid>
      </Grid>
    </Box>
  );
}