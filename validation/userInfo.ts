import { z } from 'zod'

export const userInfoSchema = z.object({
    email: z.string().min(3, { message: "Name must be at least 3 characters" }),
    phone: z.string().min(3, { message: "Name must be at least 3 characters"}),
    first_name: z.string().min(3, { message: "Name must be at least 3 characters"}),
    last_name: z.string().min(3, { message: "Name must be at least 3 characters"})
})