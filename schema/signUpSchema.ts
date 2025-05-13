import * as z from "zod";

export const signUpSchema = z.object({
    email: z
        .string()
        .min(1, {message: "Email is required"})
        .email({message: "Please enter a valid email"}),
    name: z.string().min(1, {message: "Name is required"}),
    class: z.string().min(1, {message: "Class and section is required"}),
    foi: z.string().nonempty({message: "Field of Intrest is required"}),
    phonenumber: z.number().nonnegative("The number cannot be negative").min(10, {message: "The phone number should have atleast 10 digits"}),
    admin_no: z.number().nonnegative({message: "The admission number cannot be negative"}).min(4, {message: "The addmission number cannot be less than 4 numbers"}),
    password: z.string().nonempty({message: "Password is required"}).min(8, {message: "Password should be a minimum of 8 characters"}),
    passwordConfirmation: z.string().min(1, {message: "Please confirm your password"}),
    role: z.string().min(1, {message: "Please enter a role"})
})
.refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"],
})