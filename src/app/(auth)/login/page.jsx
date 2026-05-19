"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Form,
  Input,
  Button,
  TextField,
  Label,
  FieldError,
  Description,
  InputGroup,
  Separator,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());
    const { data, error } = await signIn.email({
      ...loginData,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
      return;
    } else {
      toast.success("Login successful!");
    }
  };

  const handleGoogleLogin = async () => {
    const data = await signIn.social({
      provider: "google",
    });
  };

  return (
    <main className="min-h-screen w-full container mx-auto flex flex-col md:flex-row">
      <div className="p-8 sm:p-12 lg:p-16">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold  text-[#072AC8] dark:text-[#1E96FC]">
          Log in to <br className="hidden sm:inline" />
          <span className="text-slate-900 dark:text-white">StudyNook</span>
        </h1>
        <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          Reserve quiet zones, soundproof pods, and collaborative rooms for your
          next focus session.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16">
        <div className="w-full max-w-md text-slate-900 dark:text-white rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col justify-between border border-slate-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <Form onSubmit={handleLogin} className="space-y-5">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  className="w-full"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description>
                Must be at least 6 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#072AC8] dark:bg-[#1E96FC] hover:bg-[#1E96FC] dark:hover:bg-[#072AC8]  font-extrabold rounded-xl mt-2 text-sm"
            >
              Log in
            </Button>
          </Form>

          <div className="flex items-center my-3 gap-3">
            <Separator className="flex-1" />
            <span className="text-md font-bold text-slate-400 dark:text-slate-500">
              or
            </span>
            <Separator className="flex-1" />
          </div>

          <Button
            onClick={handleGoogleLogin}
            size="lg"
            className="w-full text-sm bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-slate-200 font-extrabold rounded-xl border border-slate-200/60 dark:border-zinc-700/80"
          >
            <FcGoogle className="size-5 shrink-0" />
            Continue with Google
          </Button>
          <div className="pt-5 space-y-2.5 text-center text-xs">
            <Separator variant="default" />
            <div>
              <span className="text-slate-500 dark:text-slate-400">
                Don&apos;t have an account?{" "}
              </span>
              <Link
                href="/sign-up"
                className="font-extrabold text-[#072AC8] dark:text-[#1E96FC] hover:text-[#1E96FC]"
              >
                Sign up &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
