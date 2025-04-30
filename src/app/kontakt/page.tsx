'use client';

import { Container, Typography } from '@mui/material';
import ContactFormSection from '@/components/ContactFormSection';
import contactGenders from '@/utils/contactGenders';

export default function Contact() {

    const genders = contactGenders;

    return (
        <Container component="main" maxWidth='md' sx={{ py: 10 }}>
            <Typography component='h1' variant='h1' textAlign='center'>Kontakt</Typography>
            <ContactFormSection />
        </Container>
    );
}