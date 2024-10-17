import {z} from "zod";
import {LoginSchema, SignUpSchema} from "../schemas";

export type SignUpData = z.infer<typeof SignUpSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
