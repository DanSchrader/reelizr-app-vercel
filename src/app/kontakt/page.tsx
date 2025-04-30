'use client';

import { Container, Typography } from '@mui/material';
import ContactFormSection from '@/components/ContactFormSection';

export default function Contact() {

    return (
        <Container component="main" maxWidth='md' sx={{ py: 10 }}>
            <Typography component='h1' variant='h1' textAlign='center'>Kontakt</Typography>
            <ContactFormSection />
        </Container>
    );
}