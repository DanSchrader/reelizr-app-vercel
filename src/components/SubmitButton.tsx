'use client';

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
        {pending ? (
        <Button disabled variant='outlined'>
                <CircularProgress />
                Anfrage wird gesendet
            </Button>) : (
                <Button 
                    type='submit'
                    variant="outlined"
                    color="primary"
                    size="small">
                        Anfrage absenden
                </Button>
            )}
        </>
    )
}