import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { PricingTypes } from "../types/PricingTypes"
import { pricing } from "../config/PricingContents"
import { PricingCard } from "./PricingCard"
import { Fragment } from "react"
import { KeySquare } from "lucide-react"

const tabs=["monthly", "yearly"]

export function Pricing() {
  return (
    <Tabs defaultValue="monthly" className="m-auto">
      <TabsList className="w-fit m-auto grid grid-cols-2">
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
        {tabs.map((tab, key)=>{
          return(
            <TabsContent value={tab} key={key}>
            <div className="grid grid-cols-3">
            { 
              Object.keys(pricing).map((key)=>{
                  return(
                    
                      <PricingCard key={key} tier={key} tab={tab} value={pricing[key as keyof PricingTypes]} />
                  )
                    
                })
            }
            </div>
            </TabsContent>
          )
        })

        }
      
    </Tabs>
  )
}
