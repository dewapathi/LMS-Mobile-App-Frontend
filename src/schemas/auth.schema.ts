import {z} from 'zod';

export const registerSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(4, 'Password must be at least 6 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  role: z.enum(['teacher', 'student', 'admin'], {message: 'Invalid role'}),
  address: z
    .object({
      street: z.string().min(1, 'Street is required'),
      city: z.string().min(1, 'City is required'),
      state: z.string().min(1, 'State is required'),
      country: z.string().min(1, 'Country is required'),
      zipCode: z.string().min(4, 'ZIP code is required'),
    })
    .optional(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
