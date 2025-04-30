import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <Box component='section' sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box>
                <Box>
                    <CheckRoundedIcon sx={{ fontSize: 100, color: '#fefbe4' }} />
                </Box>
                <Button>
                    <Link href='/'>Zurück zur Homepage</Link>
                </Button>
            </Box>
        </Box>
    )
}