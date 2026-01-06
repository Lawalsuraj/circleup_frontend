import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .refine(
      (val) => !/<.*?>/.test(val),
      "Invalid characters detected"
    ),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine(
      (val) => !/['"<>]/.test(val),
      "Password contains invalid characters"
    ),
});


export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(20, "Username must not exceed 20 characters.")
      .regex(/^[a-zA-Z0-9_ ]+$/, "Only letters, numbers, spaces, and _ are allowed."),

    email: z.string().email("Invalid email address."),

    password: z.string().min(6, "Password must be at least 6 characters."),

    confirmPassword: z.string(),

    image: z
      .instanceof(File)
      .optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
  });