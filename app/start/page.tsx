'use client'
import React, { useEffect, useRef, useState } from 'react'
import { steps } from './config/StepsContent'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
const Start = () => {
  const [stepDone, setStepDone]=useState('')
  const [stepComponent, isDone]=steps['Target Market']
  const [Step, setStep] = useState(()=>steps['Target Market'][0]);
  
  const prev=()=>{
    console.log("prev")
  }
  const next=()=>{
    console.log("next")
  }
  

  return (
    <>
    <div className="flex">
      <Button className="btn w-fit btn-circle" onClick={next}><MoveLeft /></Button>
      <ul className="steps w-full">
        {Object.entries(steps).map(([key,[Step,isDone]])=>(
          <li className={`step ${isDone?'step-primary':''}`} key={key}>{key}</li>
        ))
        }
        <li className='step'>Done</li>
      </ul>
      <Button className="btn w-fit btn-circle" onClick={prev}><MoveRight /></Button>
    </div>
    
        <div className='grid gap-y-96'>
            {/* {Object.entries(steps).map(([key, [Step, isDone]])=> {
              return <Step key={key} />;
            })
            } */}
            <Step />
        </div>
        
    </>
  )
}

export default Start