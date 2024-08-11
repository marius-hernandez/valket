'use client'
import React, { useEffect, useRef, useState } from 'react'
import { steps } from './config/StepsContent'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
const Start = () => {
  const [stepDone, setStepDone]=useState('')
  // let [stepComponent, isDone]=steps['Target Market']
  
  const [stepIdx, setStepIdx]=useState(0)
  const [StepComponent, setStepComponent] = useState(()=>steps[stepIdx].component);

  const printer=(step:string)=>{
    console.log(step)
  }
  const prev=()=>{
    steps[stepIdx].isCurr=false
    steps[stepIdx-1].isCurr=true
    setStepIdx(stepIdx-1)
  }
  const next=()=>{
    steps[stepIdx+1].isCurr=true
    setStepIdx(stepIdx+1)
  }
  useEffect(()=>{
    printer(steps[stepIdx].title)
    setStepComponent(()=>steps[stepIdx].component)
  },[stepIdx])

  return (
    <>
    <div className="flex">
      {stepIdx!=0?<Button className={`btn w-fit btn-circle`} onClick={prev}><MoveLeft /></Button>:null }
      <ul className="steps w-full">
        {steps.map(({title,component, isCurr},idx)=>(
          <li key={idx} className={`step ${isCurr?'step-primary':''}`} >{title}</li>
        ))
        }
        <li className='step'>Done</li>
      </ul>
      {stepIdx!=steps.length-1? <Button className="btn w-fit btn-circle" onClick={next}><MoveRight /></Button>:null}
    </div>
    
        <div className='grid gap-y-96'>
            <StepComponent />
        </div>
        
    </>
  )
}

export default Start