"use server";

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { submissionSchema } from './zodSchema';
import prepareFormsparkData from '@/utils/formsparkData';

export async function SalesContactAction(prevState: any, formData: FormData) {
    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const formsparkDataObject = prepareFormsparkData(formData);

    try {
        const response = await fetch(process.env.SALES_CONTACT_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formsparkDataObject),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Formspark submission failed:', errorText);
            throw new Error('Failed to submit form to Formspark');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        throw new Error('Failed to submit form');
    }

    return redirect('/anfrage-erfolgreich-gesendet');
}

export async function SupportTicketAction(prevState: any, formData: FormData) {
    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const formsparkDataObject = prepareFormsparkData(formData);

    try {
        const response = await fetch(process.env.SUPPORT_TICKET_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formsparkDataObject),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Formspark submission failed:', errorText);
            throw new Error('Failed to submit form to Formspark');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        throw new Error('Failed to submit form');
    }

    return redirect('/anfrage-erfolgreich-gesendet');
}

export async function KarriereContactAction(prevState: any, formData: FormData) {
    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const formsparkDataObject = prepareFormsparkData(formData);

    try {
        const response = await fetch(process.env.KARRIERE_CONTACT_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formsparkDataObject),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Formspark submission failed:', errorText);
            throw new Error('Failed to submit form to Formspark');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        throw new Error('Failed to submit form');
    }

    return redirect('/anfrage-erfolgreich-gesendet');
}