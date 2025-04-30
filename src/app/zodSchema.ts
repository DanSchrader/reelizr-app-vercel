import { z } from 'zod';

export const submissionSchema = z.object({
    organisation: z.string().min(2).optional(),
    firstName: z.string().min(2, { message: 'First name is required' }),
    lastName: z.string().min(2, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Please enter valid email adress' }),
    message: z.string().min(10, { message: 'Message is required' }).max(1000, { message: 'Only 1000 characters allowed' }),
});