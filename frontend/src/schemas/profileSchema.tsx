import { z } from "zod";
import { ActivityCategories } from "../utils";
import { ContactInfoSchema } from "./baseSchema.ts";

export const ProfileSchema = z.object({
  activityName: z
    .string({
      required_error: "Activity name is required",
      invalid_type_error: "Activity name must be string",
    })
    .trim()
    .min(3, { message: "Activity name must be at least 3 characters long" }),

  bio: z
    .string({
      required_error: "Bio is required",
      invalid_type_error: "Bio must be string",
    })
    .trim()
    .min(10, { message: "Bio must be at least 10 characters long" }),

  location: z
    .string({
      required_error: "Location is required",
      invalid_type_error: "Location must be string",
    })
    .trim()
    .min(5, { message: "Location must be at least 5 characters long" }),

  phoneNumber: ContactInfoSchema.shape.phoneNumber,

  activityCategory: z.enum(ActivityCategories, {
    errorMap: () => ({ message: "Please choose an activity category" }),
  }),
  website: z
    .string({
      invalid_type_error: "Website must be string",
    })
    .trim()
    .url({ message: "Invalid URL" })
    .optional(),
});
