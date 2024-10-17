import { z } from "zod";
import { LoginSchema, ProfileSchema, SignUpSchema } from "../schemas";

export type SignUpData = z.infer<typeof SignUpSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
export type ProfileData = z.infer<typeof ProfileSchema>;

export type ProfileDataWithUserId = ProfileData & {
  userId: number;
};
