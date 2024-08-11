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
const RegisterFormZ =z.object({
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
    reasonToJoin: z.string().min(10, { message: "Please provide more details (at least 10 characters)" }),
    expectations: z.string().min(10, { message: "Please provide more details (at least 10 characters)" }),
    contribution: z.string().min(10, { message: "Please provide more details (at least 10 characters)" }),
  });

  const ResetPasswordFormZ = z.object({
    email: z
    .string()
    .email()
    .refine((email) => email.endsWith("nmamit.in"), {
      message: "Email must be a NMAMIT email",
    }),
    password: z.string().refine((password) => password.length >= 8, {
      message: "Password must be atleast 8 characters",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { signUpFormZ, verifyEmailFormZ, loginFormZ,RegisterFormZ,ResetPasswordFormZ };
