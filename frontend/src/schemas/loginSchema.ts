import { z } from "zod";
import { AccountDetailsSchema, PasswordSchema } from "./baseSchema.ts";

export const LoginSchema = z.object({
  username: AccountDetailsSchema.shape.username,
  passwordData: PasswordSchema,
});
