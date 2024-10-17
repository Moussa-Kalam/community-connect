import { z } from "zod";
import {
  AccountTypeSchema,
  ContactInfoSchema,
  PasswordSchema,
  PersonalInfoSchema,
} from "./baseSchema.ts";

export const SignUpSchema = z.object({
  // Personal Information
  firstName: PersonalInfoSchema.shape.firstName,
  lastName: PersonalInfoSchema.shape.lastName,
  username: PersonalInfoSchema.shape.username,

  // Contact Information
  email: ContactInfoSchema.shape.email,
  phoneNumber: ContactInfoSchema.shape.phoneNumber,

  // Account Details Information
  accountType: AccountTypeSchema,

  // Security Information
  passwordData: PasswordSchema,
});
