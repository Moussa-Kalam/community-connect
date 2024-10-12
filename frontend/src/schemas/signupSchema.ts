import { z } from "zod";
import {
  AccountDetailsSchema,
  ContactInfoSchema,
  IntroductionSchema,
  PasswordSchema,
  PersonalInfoSchema,
  UserTypeSchema,
} from "./baseSchema.ts";

export const SignUpSchema = z.object({
  firstName: PersonalInfoSchema.shape.firstName,
  lastName: PersonalInfoSchema.shape.lastName,
  username: AccountDetailsSchema.shape.username,
  phoneNumber: AccountDetailsSchema.shape.phoneNumber,
  email: ContactInfoSchema.shape.email,
  location: ContactInfoSchema.shape.location,
  userType: UserTypeSchema,
  passwordData: PasswordSchema,
  introduction: IntroductionSchema.shape.introduction,
});
