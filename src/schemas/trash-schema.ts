import { z } from "zod";
import { TrashType, Status } from "@/generated/prisma";

export const prepareDepositTrashSchema = z.object({
  trash: z.array(
    z.object({
      trashType: z.enum(TrashType, "Invalid trash type"),
      weight: z
        .number("Weight must be a number")
        .positive("Weight must be greater than 0"),
    }),
  ),
});

export const verifyDepositTrashSchema = z.object({
  payloadId: z
    .string()
    .min(10, "Payload ID must be 10 characters")
    .max(10, "Payload ID must be 10 characters"),
  signature: z.string().min(10, "Signature must be at least 10 characters"),
});

export const submitDepositTrashSchema = z.object({
  payloadId: z.string().min(10, "ID must be at least 10 characters"),
  userId: z.string().min(1, "User ID is required"),
  trash: z
    .array(
      z.object({
        trashType: z.enum(TrashType, "Invalid trash type"),
        weight: z
          .number("Weight must be a number")
          .positive("Weight must be greater than 0"),
      }),
    )
    .min(1, "At least one trash entry is required"),
  signature: z.string().min(10, "Signature must be at least 10 characters"),
  status: z.enum(Status, "Invalid transaction status"),
});
