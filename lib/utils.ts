import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { signTypeProp } from "."
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (signType: string) => (
  //return z.object
  z.object({
    firstName: signType === 'sign-in' ? z.string().optional() : z.string().min(2),
    lastName: signType === 'sign-in' ? z.string().optional() : z.string().min(2),
    location: signType === 'sign-in' ? z.string().optional() : z.string().min(2),
    email: z.string().email(),
    password: z.string().min(5),
    confirmPassword: signType === 'sign-in' ? z.string().optional() : z.string().min(5),
  })
)


