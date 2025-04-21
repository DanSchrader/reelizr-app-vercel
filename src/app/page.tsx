import { Typography, Box, Container } from '@mui/material';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import config from '@/config/home.json';

const { heroSection } = config;


export default function Home() {
  return (
      <Container maxWidth='md' component="main" sx={{ py: 10 }}>
        <HeroSection {...heroSection}/>
        <Box display="flex" justifyContent="center">
          <Image src="/images/logo-outlines.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
        </Box>
        <Typography variant="h1" align="center" gutterBottom>
          Reelizr
        </Typography>
        <Typography variant="h2" align="center" gutterBottom>
          Markenplatzierung.
        </Typography>
        <Typography variant="subtitle2" align="center" gutterBottom>
          Kosteneffizient. Bewegend.
        </Typography>        <Box display="flex" justifyContent="center">
          <Image src="/images/video-produktion.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
        </Box>
      </Container>
  );
}
