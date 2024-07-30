import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Problem = () => {
  return (
    <>
      <h1>Problem</h1>
      <h2>What is my problem that you are addressing? You can put both facts and assumptions as long as you indicate them.</h2>
      <div className="flex w-full max-w-sm items-center space-x-2 bg-red-400">
      <Button type="submit">Assumption</Button>
      <Input type="email" placeholder="Email" />
      <Button type="submit">Fact</Button>
    </div>
    </>
  )
}

export default Problem