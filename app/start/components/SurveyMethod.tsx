import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Circle } from 'lucide-react'
import React, { Fragment } from 'react'

const methods=["method1", "method2", "method3"];


const SurveyMethod = () => {
  return (
    <>
    <h1>Choose survey method</h1>
    <h2>This is survey method</h2>
    <RadioGroup className='grid grid-cols-3'>
    {methods.map((method, key)=>(
        <div className="flex items-center space-x-2" key={key}>
            <RadioGroupItem value={method} id={method} />
            <Label htmlFor="r1" className='text-lg font-bold'>{method}</Label>
        </div>
    ))}
      
    </RadioGroup>
    
    
    </>
  )
}

export default SurveyMethod