import { Box, Typography, Container } from '@mui/material';

export default function AboutUs() {
  return (
    <Container component="main" maxWidth='md' sx={{ py: 10 }}>
      <Typography component='h1' variant='h1'>About Us</Typography>
      <Typography>Welcome to the About Us page!</Typography>
    </Container>
  );
}