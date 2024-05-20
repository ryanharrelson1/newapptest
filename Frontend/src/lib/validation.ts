import { z } from "zod";

const SignupForm = z.object({
  name: z
    .string()
    .min(2, { message: "name must be atleast 2 characters Long" }),
  username: z
    .string()
    .min(2, { message: "name must be atleast 2 characters Long" }),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 characters Long" }),
});

const SigninForm = z.object({
  username: z
    .string()
    .min(2, { message: "name must be atleast 2 characters Long" }),
  password: z
    .string()
    .min(8, { message: "password must be atleast 8 characters Long" }),
});

const ProfileForm = z.object({
  file: z.custom<File[]>(),
});

export { SignupForm, SigninForm, ProfileForm };
