'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactFormSection from '@/components/ContactFormSection';

export default function Kontakt() {

    return (
        <Container component="main" maxWidth='md' sx={{ py: 10 }}>
            <Typography component='h1' variant='h1' textAlign='center'>Kontakt</Typography>
            <ContactFormSection />
        </Container>
    );
}