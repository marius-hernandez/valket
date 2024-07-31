"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React, { Fragment } from 'react'
import { problemContent } from '../config/ProblemContents'

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

// schema for problem, might need later
const ProblemSchema = z.object({
  problemInput: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


const assumption=()=>{

}

const Problem = () => {
  const form = useForm<z.infer<typeof ProblemSchema>>({
    resolver: zodResolver(ProblemSchema),
    defaultValues: {
      problemInput: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof ProblemSchema>) {
    console.log(JSON.stringify(data, null, 2))
  }
  return (
    <>
    <h1>Problem</h1>
    <h2>What is my problem that you are addressing? You can put both facts and assumptions as long as you indicate them.</h2>
    {/* <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full items-center space-x-2'>
          <FormField
            control={form.control}
            name="problemInput"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <h1>Problem</h1>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
      </form>
      <div className="flex w-full items-center space-x-2">
        <Button type="submit" onClick={}>Assumption</Button>
        <Input type="email" placeholder="Email" />
        <Button type="submit" onClick={}>Fact</Button>
      </div>
      </Form> */}
      <section className='grid grid-cols-2'>
      {
        Object.keys(problemContent).map((problem, key)=>(
            <ScrollArea className="h-72 rounded-md border" key={key}>
            <div className="p-4">
              <p className="mb-4 text-2xl font-medium leading-none">{problem}</p>
              {problemContent[problem as keyof ProblemType].map((problemItem, key) => (
                <Fragment key={key}>
                  <div className="text-sm">
                    {problemItem}
                  </div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
            </div>
          </ScrollArea>
          )
        )
      }
      </section>

    
    </>
  )
}

export default Problem