import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Circle } from 'lucide-react'
import React, { Fragment } from 'react'

const methods=["Method1", "Method2", "Method3"];


const SurveyMethod = () => {
  return (
    <div>
    <h1>Choose survey method</h1>
    <h2>This is survey method</h2>
    <RadioGroup className='grid grid-cols-3'>
    {methods.map((method, key)=>(
        <div className="flex items-center space-x-2 content-start" key={key}>
            <RadioGroupItem value={method} id={method} />
            <div>
              <Label htmlFor="r1" className='text-lg font-bold'>{method}</Label>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, reiciendis?</p>
            </div>
        </div>
    ))}
      
    </RadioGroup>
    
    
    </div>
  )
}

export default SurveyMethod