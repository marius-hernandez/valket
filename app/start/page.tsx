'use client'
import React, { useState } from 'react'
import { steps } from './config/StepsContent'
const Start = () => {
  const [stepDone, setStepDone]=useState()

  return (
    <>
    <ul className="steps">
      {Object.keys(steps).map((step, key)=>(
        <li className="step step-primary" key={key}>{step}</li>
      ))

      }
    </ul>
        <div className='grid gap-y-96'>
            {Object.entries(steps).map(([key,Step])=> {
              return <Step key={key} />;
            })
            }
        </div>
        
    </>
  )
}

export default Start