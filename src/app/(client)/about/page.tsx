import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Container component="main" maxWidth='md' sx={{ py: 12 }}>
      <Typography component='h1' variant='h2'>About Us</Typography>
      <Typography>Welcome to the About Us page!</Typography>
    </Container>
  );
}