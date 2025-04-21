import { Box, Typography, Container } from '@mui/material';

export default function Blog() {
  return (
      <Container component="main" maxWidth='md' sx={{ py: 10 }}>
        <Typography component='h1' variant='h1'>Blog - This is a h1</Typography>
        <Typography>Welcome to the blog page!</Typography>
        <Typography component='h2' variant='h2'>This is a h2</Typography>
        <Typography component='h3' variant='h3'>This is a h3</Typography>
        <Typography component='h4' variant='h4'>This is a h4</Typography>
        <Typography component='h5' variant='h5'>This is a h5</Typography>
        <Typography component='h6' variant='h6'>This is a h6</Typography>
        <Typography variant='subtitle1'>This is subtitle1</Typography>
        <Typography variant='subtitle2'>This is subtitle2</Typography>
        <Typography variant='body1'>This is body1</Typography>
        <Typography variant='body2'>This is body2</Typography>
      </Container>
  );
}