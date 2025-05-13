"use client"
import React from "react";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Mail, Lock, User, Loader2, Phone, BookOpen, Hash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const Page = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationError, setVerificationError] = useState(null)
  const [authError, setAuthError] = useState(null);
  const router = useRouter()
  const formSchema = z
    .object({
      first_name: z.string().min(1, "First name is required"),
      last_name: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email address"),
      class: z.string().min(1, "Class is required"),
      foi: z.number().min(1, "Field of Interest is required"),
      phonenumber: z.number().min(10, "Phone number is too short"),
      admin_no: z.number().min(1, "Admin number is required"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    if (!isLoaded) return;
    setIsSubmitting(true);
    setAuthError(null);

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: data.first_name,
        lastName: data.last_name,
        username: crypto.randomUUID(),
        publicMetadata: {
          class: data.class,
          foi: data.foi,
          phonenumber: data.phonenumber,
          admin_no: data.admin_no,
        },
        privateMetadata: {
          role: "member",
        },
      });


      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerifying(true);
    } catch (error) {
      console.log("Signup error: ", error);
      setAuthError(error.errors?.[0]?.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault()
    if (!isLoaded || !signUp) return;
    setIsSubmitting(true)
    setAuthError(null)
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode
      })
      console.log(result)
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push("/")
      } else {
        console.log("Verification incomplete", result)
        setVerificationError("Verification could not be completed")
      }
    } catch (error) {
      setVerificationError(error.errors?.[0]?.message || "An error occured during signup.")
    } finally {
      setIsSubmitting(false)
    }
  };
  if (verifying) {
    if (verifying) {
      return (
        <div className="bg-[rgb(8,12,25)] text-white min-h-screen flex items-center justify-center px-4">
          <div className="border border-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-center font-space-grotesk">
              Verify Your Email
            </h2>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Enter the 6-digit code sent to your email address
            </p>
            <form onSubmit={handleVerificationSubmit} className="space-y-4">
              <div>
                <label htmlFor="verificationCode" className="text-sm font-medium">
                  Verification Code
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="verificationCode"
                    name="verificationCode"
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    className="pl-10 text-black"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                  />
                </div>
                {verificationError && (
                  <p className="text-sm text-red-500 mt-1">{verificationError}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting || verificationCode.length !== 6}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Didnt receive the code? Check your spam or promotions folder.
            </p>
          </div>
        </div>
      );
    }
    ;
  }
  return (
    <div className="bg-[rgb(8,12,25)] text-white pt-[10vh] sm:h-auto h-auto min-h-screen pb-[2vh] ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-space-grotesk font-bold mb-2">
          Create Account
        </h1>
        <p className="text-muted-foreground">
          Join Futureal and explore the world of technology
        </p>
      </div>
      <div className="w-full justify-items-center grid">
        <form onSubmit={handleSubmit(onSubmit)} className="min-w-[40vw]  space-y-4 just border-2 border-white p-5 rounded-lg">
          <div className=" space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="first_name"
                name="name"
                placeholder="John"
                className="pl-10 text-black"
                {...register("first_name")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.first_name}</p>}
          </div>

          <div className=" space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="last_name"
                name="name"
                placeholder="Doe"
                className="pl-10 text-black"
                {...register("last_name")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.last_name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 text-black"
                {...register("email")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="class" className="text-sm font-medium">
              Class
            </label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="class"
                name="class"
                placeholder="Your class"
                className="pl-10 text-black"
                {...register("class")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.class}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="foi" className="text-sm font-medium">
              Field of Interest
            </label>
            <Select onValueChange={(value) => setValue("foi", value)}
            >
              <SelectTrigger className="text-black">
                <SelectValue placeholder="Select your field of interest" />
              </SelectTrigger>
              <SelectContent className="text-black">
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="ai">Artificial Intelligence</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="phonenumber" className="text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                placeholder="Your phone number"
                className="pl-10 text-black"
                {...register("phonenumber")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="admin_no" className="text-sm font-medium">
              Admin Number
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="admin_no"
                name="admin_no"
                placeholder="Your admin number"
                className="pl-10 text-black"
                {...register("admin_no")}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.admin_no}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 text-black"
                required
                minLength={8}
                {...register("password")}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="passwordConfirmation"
              className="text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="••••••••"
                className="pl-10 text-black"
                required
                minLength={8}
                {...register("passwordConfirmation")}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.passwordConfirmation}</p>}
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/sign-in")}
              className="text-primary hover:underline"
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  )
};

export default Page;
