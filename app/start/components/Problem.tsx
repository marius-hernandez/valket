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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

// schema for problem, might need later
const ProblemSchema = z.object({
  problemInput: z.string().min(2, {
    message: "Type more character pls",
  }),
})


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

  const fact=(event: React.MouseEvent<HTMLButtonElement>, data: z.infer<typeof ProblemSchema>)=>{
   const buttonName=event.currentTarget.name;
   console.log(buttonName)
  }

  return (
    <div>
    <h1>Problem</h1>
    <h2>What is my problem that you are addressing? You can put both facts and assumptions as long as you indicate them.</h2>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex placeholder:flex w-full items-center space-x-2'>
          <Button type="submit" className='w-[100px]' name='assumption'>Assumption</Button>
          <FormField
            control={form.control}
            name="problemInput"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input className='w-max' placeholder="Define your problem here..."  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-[100px]' name='fact'>Fact</Button>
      </form>
      </Form>
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

    
    </div>
  )
}

export default Problem