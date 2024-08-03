import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Competitor = () => {
  return (
    <div>
      <h1>Competitor</h1>
      <h2>Do you know your competitors? List all of them</h2>
      <div className="flex w-full">
        <Input type="email" className=" w-full" placeholder="Competitor" />
        <Button type="submit" className='w-fit'>Add</Button>
      </div>
    </div>
  )
}

export default Competitor