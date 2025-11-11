import { z } from "zod";

export const updateUserSchema = z
  .object({
    name: z
      .string()
      .transform((val) => (val.trim() === "" ? undefined : val.trim()))
      .optional()
      .refine((val) => !val || val.length >= 2, {
        message: "Name must be at least 2 characters",
      })
      .refine((val) => !val || val.length <= 50, {
        message: "Name must be at most 50 characters",
      }),

    email: z
      .string()
      .transform((val) => (val.trim() === "" ? undefined : val.trim()))
      .optional()
      .refine((val) => !val || z.string().email().safeParse(val).success, {
        message: "Invalid email format",
      }),
  })
  .refine((data) => data.name !== undefined || data.email !== undefined, {
    message: "At least one field is required: Name or Email",
    path: ["name"],
  });
