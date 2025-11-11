import z from "zod";

export const UserUpdateSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  email: z.email("Invalid email").optional(),
});

export const PetugasUpdateSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  email: z.email("Invalid email").optional(),
});
