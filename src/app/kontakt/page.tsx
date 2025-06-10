'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactFormSection from '@/components/ContactFormSection';

export default function Kontakt() {

    return (
        <Container component="main" maxWidth='md' sx={{ py: 12 }}>
            <Typography component='h1' variant='h2' textAlign='center'>Kontakt</Typography>
            <ContactFormSection />
        </Container>
    );
}