import {z} from "zod";
import {
  AccountDetailsSchema,
  AccountTypeSchema,
  BioSchema,
  ContactInfoSchema,
  PasswordSchema,
  PersonalInfoSchema,
} from "./baseSchema.ts";

export const SignUpSchema = z.object({
    firstName: PersonalInfoSchema.shape.firstName,
    lastName: PersonalInfoSchema.shape.lastName,
    username: AccountDetailsSchema.shape.username,
    phoneNumber: AccountDetailsSchema.shape.phoneNumber,
    email: ContactInfoSchema.shape.email,
    location: ContactInfoSchema.shape.location,
    accountType: AccountTypeSchema,
    passwordData: PasswordSchema,
    bio: BioSchema.shape.bio,
});
