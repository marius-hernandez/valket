import React, { useEffect, useState } from 'react'
import { useIdeaStore } from '../ideaStore'
import { Textarea } from '@/components/ui/textarea'

const Solution = () => {
  const ideaStore=useIdeaStore((state)=>state)
  const [solution, setSolution]=useState("")

  const setSolutionStore=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setSolution(e.target.value) // for local state
    ideaStore.setSolution(e.target.value) // for store
  }
  useEffect(()=>{
    setSolution(ideaStore.Solution)
  },[ideaStore])

  return (
    <div>
        <h1>Solution</h1>
        <h2>This is solution</h2>
        <Textarea autoFocus value={solution} onChange={setSolutionStore} placeholder="Type your solution here." />
    </div>
  )
}

export default Solution