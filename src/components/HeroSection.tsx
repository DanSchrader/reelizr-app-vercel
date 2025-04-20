import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box component='section'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
                <Image src="/images/video-produktion.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography component='h1' variant='h1'>Welcome to Our Website</Typography>
            <Typography>Your one-stoTypography solution for all your needs.</Typography>
            <Button>Get Started</Button>
        </Grid>
      </Grid>
    </Box>
  );
}