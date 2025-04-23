import { TextField, Container, Grid, MenuItem, Button } from '@mui/material';
import contactTopics from '@/utils/contactTopics';

export default function ContactFormSection() {

    const genders = [
        { id: 1, name: 'Herr' },
        { id: 2, name: 'Frau' },
        { id: 3, name: 'Divers' },
        { id: 4, name: 'Keine Angabe' },
    ]

    return (
        <Container component="main" maxWidth='md' sx={{ py: 2 }}>
            <Grid container component='form' spacing={2}>
            <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Firma / Organisation"
                        variant="outlined"
                        margin="none"
                        color="secondary"
                        focused
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Anrede"
                        select
                        variant="outlined"
                        margin="none"
                        color="primary"
                        focused
                        required
                        size="small"
                        sx={{
                            "& .MuiSvgIcon-root": {
                                color: "#fefbe4"
                            }
                        }}
                    >
                    {genders.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Vorname"
                        variant="outlined"
                        margin="none"
                        focused
                        required
                        size="small"
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nachname"
                        variant="outlined"
                        margin="none"
                        focused
                        required
                        size="small"
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="none"
                        color="secondary"
                        focused
                        required
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Bitte wählen Sie ein Thema"
                        select
                        variant="outlined"
                        margin="none"
                        color="primary"
                        focused
                        required
                        size="small"
                        sx={{
                            "& .MuiSvgIcon-root": {
                                color: "#fefbe4"
                            }
                        }}
                    >
                    {contactTopics.map((option) => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Nachricht"
                        variant="outlined"
                        margin="none"
                        multiline
                        rows={4}
                        color="secondary"
                        focused
                        required
                        size="small"
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                    >
                        Anfrage absenden
                    </Button>
                    </Grid>
            </Grid>
        </Container>
    );
}