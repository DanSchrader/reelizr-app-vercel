import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';

export default function SuccessPage() {
    return (
        <Box component='section' sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Fade in={true} timeout={1000}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        background: '#23b9c0',
                        padding: 8,
                        width: 100,
                        height: 100,
                        }}>
                        <CheckRoundedIcon sx={{ fontSize: 75, color: '#fefbe4' }} />
                    </Box>
                </Fade>
                <Typography variant='h3' mt={2} mb={1}>Das hat geklappt!</Typography>
                <Typography variant='body1' mt={1}>Wir haben Ihre Anfrage erhalten.</Typography>
                <Typography variant='body1' mt={1}>Unser Team wird sich schnellstmöglich bei Ihnen melden.</Typography>
                <Button variant='outlined' color='primary' size='small' sx={{ mt: 2 }}>
                    <Link href='/'>Zurück zur Homepage</Link>
                </Button>
            </Box>
        </Box>
    )
}