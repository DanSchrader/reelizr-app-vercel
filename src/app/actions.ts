"use server";

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { submissionSchema } from './zodSchema';

export async function SalesContactAction (prevState: any, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: submissionSchema,
    });

    if (submission.status !== 'success') {
        return submission.reply();
    }
    
    const response = await fetch(process.env.SALES_CONTACT_API_URL!, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to submit form');
    }

    return redirect('/thank-you')
}