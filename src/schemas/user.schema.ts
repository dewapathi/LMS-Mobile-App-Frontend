import {z} from 'zod';

export const userBaseSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  first_name: z.string().min(4, 'First name must be at least 4 characters'),
  last_name: z.string().min(4, 'Last name must be at least 4 characters'),
  role: z.string().min(1, 'Role is required'),
});

export const userCreateSchema = userBaseSchema.extend({
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

export type UserFormValues = z.infer<typeof userBaseSchema>;
export type CreateUserFormValues = z.infer<typeof userCreateSchema>;
