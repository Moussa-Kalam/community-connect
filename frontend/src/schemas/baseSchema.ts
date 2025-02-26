import { z } from "zod";
import { AccountTypes } from "../utils";

export const PersonalInfoSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be string",
    })
    .trim()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(15, { message: "First name must be at most 15 characters long" }),

  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be string",
    })
    .trim()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(15, { message: "Last name must be at most 15 characters long" }),

  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be string",
    })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(15, { message: "Username must be at most 10 characters long" }),
});

export const ContactInfoSchema = z.object({
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be less than 15 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be string",
    })
    .trim()
    .email({ message: "Invalid email address" }),
});

export const AccountTypeSchema = z.enum(AccountTypes, {
  errorMap: () => ({ message: "Please choose an account type" }),
});

export const PasswordSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(8, {
        message: "Password must be at least 8 characters",
      })
      .max(16, { message: "Password must be at most 16 characters" }),
    confirmPassword: z
      .string({ required_error: "Password confirmation is required" })
      .trim()
      .min(6, {
        message: "Password confirmation must be at least 6 characters",
      })
      .max(16, { message: "Password must be at most 16 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const BioSchema = z.object({
  bio: z
    .string()
    .trim()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(300, { message: "Description must be less than 300 characters" }),
});
