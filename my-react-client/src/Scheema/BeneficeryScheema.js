import {z} from "zod";
export const beneficiaryZodSchema = z.object({
    cnic: z
      .string()
      .length(13, { message: "CNIC must be exactly 13 characters long." })
      .regex(/^\d+$/, { message: "CNIC must contain only numeric digits." }),
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." })
      .max(50, { message: "Name cannot exceed 50 characters." }),
    contact: z
      .string()
      .regex(/^\d{10,11}$/, { message: "Contact must be a valid 10-11 digit phone number." }),
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters long." })
      .max(100, { message: "Address cannot exceed 100 characters." }),
    purpose: z
      .string()
      .min(3, { message: "Purpose must be at least 3 characters long." })
      .max(100, { message: "Purpose cannot exceed 100 characters." }),
  });