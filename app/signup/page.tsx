'use client'

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { image, main } from './config/style';
import { join } from 'path';
import { signupUser } from './services/SignupService';
import { ErrorDialog } from '@/app/components/ErrorDialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { error } from 'console';
 
const formSchema = z.object({
  fullname: z.string().min(5, {message:"Full name must be minimum of 5 characters"}),
  username: z.string().min(5, {message:"Username must be minimum of 5 characters"}),
  email: z.string().email(),
  password: z.string().min(2),
})
// .superRefine(({ password }, checkPassComplexity) => {
//   const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
//   const containsLowercase = (ch: string) => /[a-z]/.test(ch);
//   const containsSpecialChar = (ch: string) =>
//     /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
//   let countOfUpperCase = 0,
//     countOfLowerCase = 0,
//     countOfNumbers = 0,
//     countOfSpecialChar = 0;
//   for (let i = 0; i < password.length; i++) {
//     let ch = password.charAt(i);
//     if (!isNaN(+ch)) countOfNumbers++;
//     else if (containsUppercase(ch)) countOfUpperCase++;
//     else if (containsLowercase(ch)) countOfLowerCase++;
//     else if (containsSpecialChar(ch)) countOfSpecialChar++;
//   }
//   if (
//     countOfLowerCase < 1 ||
//     countOfUpperCase < 1 ||
//     countOfSpecialChar < 1 ||
//     countOfNumbers < 1
//   ) {
//     checkPassComplexity.addIssue({
//       code: "custom",
//       message: "password does not meet complexity requirements",
//     });
//   }
// });
function Signup() {
    const router=useRouter()

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullname: "",
        username: "",
        email: "",
        password: "",
      },
    })
  
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      const user= await signupUser(values.email, values.password)
      console.log(user)
      // form.setError("email", {message:"Error bruh"})
      // router.push('/login?signup=true')
    }

  return (
    <>
    <main className={`${main}  `}>
      <Image src='/logo.png' priority className={`${image} `} width={400} height={400} alt="sangkapLogo" />
      <div className="px-28 place-content-center">
        <Form {...form}>
          <h1 className='text-6xl mb-12 text-center font-bold'>SIGN UP</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
              <Link href="/login">Already have an account? </Link>
          </form>
        </Form>
      </div>
      
    </main>
    </>
    
  )
}

export default Signup
