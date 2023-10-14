import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.enum(["customer", "staff"]),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be more than 5 characters" }),
  dob: z.coerce.date().optional(),
  gender: z.string().optional(),
  phoneNumber: z.string().optional(),
  profilePic: z.string().url().optional(),
});

export const registerUserSchema = userSchema.pick({
  firstName: true,
  lastName: true,
  role: true,
  email: true,
  password: true,
});

export const loginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TLoginUserSchema = z.infer<typeof loginUserSchema>;
