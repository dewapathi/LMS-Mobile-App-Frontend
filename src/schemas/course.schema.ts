import {z} from 'zod';

export const courseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(5, 'Description must be at least 10 chars'),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number'),
});

export type CourseFormValues = z.infer<typeof courseSchema>;
