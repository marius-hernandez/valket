import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { useIdeaStore } from '../ideaStore'



const TargetMarket = () => {
  const ideaStore=useIdeaStore((state)=>state)
  const [targetMarket, setTargetMarket]=useState<string>("")
  const setTargetMarketStore=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setTargetMarket(e.target.value)
    ideaStore.setTargetMarket(e.target.value)
  }
  useEffect(()=>{
    setTargetMarket(ideaStore['Target Market'])
  },[setTargetMarket, ideaStore])

  return (
    <div>
      <h1>Target Market</h1>
      <h2>Imagine I’m your target market. Can you describe me thoroughly? Including behavioral, geographic, psychographic, and demographic </h2>
      <Textarea autoFocus value={targetMarket} onChange={setTargetMarketStore} placeholder="Type your message here." />
      
    </div>
  )
}

export default TargetMarket