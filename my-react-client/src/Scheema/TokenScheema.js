import { z } from 'zod';
export const tokenSchema = z.object({
    cnic: z.string().min(13, 'CNIC must be at least 13 characters long').max(13, 'CNIC must be exactly 13 characters long'),
    purpose: z.string().min(1, 'Purpose is required'),
    status: z.enum(['Pending', 'In Progress', 'Completed'], { errorMap: () => ({ message: 'Invalid status' }) }),
    remarks: z.string().optional(),  // Optional field for remarks
    token: z.string().min(10, 'Token must be at least 10 characters long'),  // Minimum length for token
});