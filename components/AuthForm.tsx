"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { signTypeProp } from "@/lib";
import { Checkbox } from "./ui/checkbox";
import { CheckboxWithText } from "./CheckboxWithText";
import Link from "next/link";

const AuthForm = ({ signType }: signTypeProp) => {
  const formSchema = authFormSchema(signType);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <section className="flex flex-col justify-between max-md:mb-20  w-full px-16  max-md:px-6 max-w-[420px]">
      <header className="flex justify-center items-center mb-4 md:mb-12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-extrabold text-black text-3xl md:text-2xl">
            {signType === "sign-up" ? "Sign Up" : "Sign In"}
          </h1>
          <div className="flext justify-center">
            <p className="text-center text-xs">
              Sign Up to Experience the amazing offers
            </p>
            <p className="text-center text-xs">we have for you</p>
          </div>
        </div>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="">
            {signType === "sign-up" && (
              <>
                <CustomInput
                  name="firstName"
                  form={form}
                  label="First Name"
                  placehoder="Enter your first name"
                  type="text"
                />
                <CustomInput
                  name="lastName"
                  form={form}
                  label="Last Name"
                  placehoder="Enter your last name"
                  type="text"
                />
              </>
            )}
            <CustomInput
              name="email"
              form={form}
              placehoder="Enter your email address"
              type="email"
              label="Email"
            />
            <CustomInput
              name="password"
              form={form}
              placehoder="Enter your password"
              type="password"
              label="Password"
            />
            {signType === "sign-up" && (
              <>
                <CustomInput
                  name="confirmPassword"
                  form={form}
                  label="Confirm Password"
                  placehoder="Confirm password"
                  type="password"
                />
                <CheckboxWithText className="-mb-4"/>
              </>
            )}
          </div>
        
         <div className="flex justify-center">
         {signType === "sign-in" && (
            <p className="text-xs max-md:text-sm -mb-3">
              Create an account? &nbsp;
              <Link
                href={"/sign-up"}
                className="text-xs max-md:text-sm text-black font-bold"
              >
                Sign Up
              </Link>
            </p>
          )}
         </div>

          <Button
            className="w-full font-bold max-md:h-12 bg-black"
            type="submit"
          >
            {signType === "sign-in" ? "Sign In" : "Sign Up Now"}
          </Button>
        </form>
      </Form>
      <footer className="mt-5 flex justify-center">
        <div>

          {signType === "sign-up" && (
            <p className="text-xs max-md:text-sm">
              "Already have an account?"
              <Link
                href={"/sign-in"}
                className="text-xs max-md:text-sm text-black font-bold"
              >
                Sign In
              </Link>
            </p>
          )}
        </div>
      </footer>
    </section>
  );
};

export default AuthForm;
