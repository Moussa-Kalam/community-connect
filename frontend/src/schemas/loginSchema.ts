import {z} from "zod";
import {AccountDetailsSchema} from "./baseSchema.ts";

export const LoginSchema = z.object({
    username: AccountDetailsSchema.shape.username,
    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(6, {message: "Password must be at least 6 characters long"}),
});
