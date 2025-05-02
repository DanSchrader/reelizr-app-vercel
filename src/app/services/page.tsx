import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Services() {
  return (
    <Container component="main" maxWidth='md' sx={{ py: 10 }}>
      <Typography component='h1' variant='h1'>Services</Typography>
      <Typography>Welcome to the Services page!</Typography>
    </Container>
  );
}