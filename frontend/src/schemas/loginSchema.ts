import { z } from "zod";
import { ContactInfoSchema } from "./baseSchema.ts";

export const LoginSchema = z.object({
  email: ContactInfoSchema.shape.email,
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must be at most 16 characters long" }),
});
