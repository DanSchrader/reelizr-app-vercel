import { Typography, Box, Container } from '@mui/material';
import Image from 'next/image';


export default function Home() {
  return (
    <Box component="main">
      <Container>
        <Box display="flex" justifyContent="center">
          <Image src="/images/logo-outlines.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
        </Box>
        <Typography variant="h1" align="center" gutterBottom>
          Reelizr
        </Typography>
        <Typography variant="h2" align="center" gutterBottom>
          Markenplatzierung. Kosteneffizient. Bewegend.
        </Typography>
        <Box display="flex" justifyContent="center">
          <Image src="/images/video-produktion.svg" alt="Reelizr-Logo Outlines" width={400} height={400}/>
        </Box>
      </Container>
    </Box>
  );
}
