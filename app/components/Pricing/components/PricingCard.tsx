import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { PricingContent, PricingTypes } from "../types/PricingTypes"

type CardTypes={
  tier:String,
  tab:String
  className?:string,
  value:PricingContent
}
export function PricingCard({ className, value, tier, tab}: CardTypes) {
  if(value===undefined) return null;
  return (
    <Card className={cn("w-[300px] h-[400px] m-auto", className)}>
      <CardHeader>
        <CardTitle className="text-md font-light leading-none tracking-tight">{tier}</CardTitle>
        <CardTitle className="text-2xl font-extrabold leading-none tracking-tight">
          {tab==='monthly'? value.monthly==0 ? 'FREE':`₱${value.monthly}` : 
          value.yearly==0 ? 'FREE':`₱${value.yearly}`
          }
          </CardTitle>
        <CardDescription>{value?.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[200px]">
        <div>
          {value.includes.map((include, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 h-[30px]"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {include}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
