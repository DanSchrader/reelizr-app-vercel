import { Container, Typography } from '@mui/material';
import ContactFormSection from '@/components/ContactFormSection';

export default function Contact() {

    const genders = [
        { id: 1, name: 'Herr' },
        { id: 2, name: 'Frau' },
        { id: 3, name: 'Divers' },
        { id: 4, name: 'Keine Angabe' },
    ]

    return (
        <Container component="main" maxWidth='md' sx={{ py: 10 }}>
            <Typography component='h1' variant='h1' textAlign='center'>Kontakt</Typography>
            <ContactFormSection />
        </Container>
    );
}