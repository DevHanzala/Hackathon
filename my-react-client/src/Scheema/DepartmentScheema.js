import {z} from "zod";
const departmentValidationSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long').max(100, 'Name cannot be longer than 100 characters'),
    description: z.string().max(500, 'Description cannot be longer than 500 characters').optional(),
});