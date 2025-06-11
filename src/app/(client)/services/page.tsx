import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardSection from '@/components/CardSection';
import services from '@/utils/services';

export default function Services() {
  return (
    <Container component="main" maxWidth='md' sx={{ py: 12 }}>
      <Typography component='h1' variant='h2' textAlign='center'>Services</Typography>
      <CardSection services={services}/>
    </Container>
  );
}