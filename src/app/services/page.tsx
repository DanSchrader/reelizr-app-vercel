import { Box, Typography, Container } from '@mui/material';

export default function Services() {
  return (
    <Container component="main" maxWidth='lg' sx={{ py: 10 }}>
      <Typography component='h1' variant='h1'>Services</Typography>
      <Typography>Welcome to the Services page!</Typography>
    </Container>
  );
}