import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TargetMarket = () => {
  return (
    <div>
      <h1>Target Market</h1>
      <h2>Imagine I’m your target market. Can you describe me thoroughly? Including behavioral, geographic, psychographic, and demographic </h2>
      <Textarea placeholder="Type your message here." />
      <Button type="submit" className='float-end'>Next</Button>
    </div>
  )
}

export default TargetMarket