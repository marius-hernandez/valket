import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { useIdeaStore } from '../ideaStore'



const TargetMarket = () => {
  const ideaStore=useIdeaStore((state)=>state)
  const [targetMarket, setTargetMarket]=useState<string>("")
  const targetMarketSubmit=(e:any)=>{
    e.preventDefault()
    setTargetMarket(targetMarket)
    ideaStore.setTargetMarket(targetMarket)
    // console.log(targetMarket)
  }
  useEffect(()=>{
    setTargetMarket(ideaStore['Target Market'])
  },[setTargetMarket, ideaStore])

  return (
    <form onSubmit={targetMarketSubmit}>
      <h1>Target Market</h1>
      <h2>Imagine I’m your target market. Can you describe me thoroughly? Including behavioral, geographic, psychographic, and demographic </h2>
      <Textarea value={targetMarket} onChange={(e)=>setTargetMarket(e.target.value)} placeholder="Type your message here." />
      <Button type="submit" onClick={targetMarketSubmit} className='float-end'>Next</Button>
    </form>
  )
}

export default TargetMarket