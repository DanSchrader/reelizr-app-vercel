import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box component='section'>
      <Grid container>
        <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
                <Image src="/images/video-produktion.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{
          justifyItems: {
            xs: 'center', 
            sm: 'flex-start'},
          mt: {xs: 0, sm: 2},
          px: {xs: 2, sm: 4},
        }}>
            <Typography component='h1' variant='h2'>Reelizr</Typography>
            <Typography variant='subtitle1' sx={{mt: '0'}}>Video-Branding, das abhebt.</Typography>
            <Typography variant='h3' component='h2'>Business Video Production</Typography>
            <Typography my={2}>Wir produzieren hochwertige Business-Videos, die Ihre Marken-Reputation stärken und Ihre Glaubwürdigkeit unterstreichen.</Typography>
            <Typography my={2}>Webinare, Business Talks, Video-Podcasts: Unser Team verwandelt Ihr Fachwissen in wertvollen Content, der Vertrauen schafft und Ihre Position als Branchenexperte festigt.</Typography>
            <Button variant='outlined'>Jetzt Markenreputation stärken</Button>
        </Grid>
      </Grid>
    </Box>
  );
}