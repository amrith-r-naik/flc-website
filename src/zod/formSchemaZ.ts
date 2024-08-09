import { z } from "zod";

const signUpFormZ = z
  .object({
    name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
    email: z
      .string()
      .email()
      .refine((email) => email.endsWith("nmamit.in"), {
        message: "Email must be a NMAMIT email",
      }),
    phone: z
      .string()
      .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
    branchId: z.string().min(1, { message: "Please select a branch" }),
    year: z.date(),
    password: z.string().refine((password) => password.length >= 8, {
      message: "Password must be atleast 8 characters",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const verifyEmailFormZ = z.object({
  email: z
    .string()
    .email()
    .refine((email) => email.endsWith("nmamit.in"), {
      message: "Email must be a NMAMIT email",
    }),
});

const loginFormZ = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { signUpFormZ, verifyEmailFormZ, loginFormZ };
