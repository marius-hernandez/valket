import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IdeaType } from "../types/IdeaType";
import Competitor from "./components/Competitor";

type IdeaStore= IdeaType &{
    setTargetMarket:(targetMarket:string)=>void
    setProblem:(problem:{assumption:string[], fact:string[]})=>void
    setSolution:(solution:string)=>void
    setSurveyMethod:(surveyMethod:string[])=>void
    setCompetitor:(competitor:string[])=>void
    setPrototype:(prototype:string)=>void
}

export const useIdeaStore = create<IdeaStore>()(
    persist(
        (set) => ({
            'Target Market':'',
            'Problem':{
                "Assumption":[
                    "Assumption1",
                    "Assumption2",
                    "Assumption3",
                    "Assumption4",
                    "Assumption1",
                    "Assumption2",
                    "Assumption3",
                    "Assumption4",
                ],
                "Fact":[
                    "Fact1",
                    "Fact2",
                    "Fact3",
                    "Fact4",
                    "Fact1",
                    "Fact2",
                    "Fact3",
                    "Fact4",
                ]
            },
            'Solution':'',
            'Survey Method':[''],
            'Competitor':[''],
            'Prototype':'',

            setTargetMarket: (targetMarket)=>{
                set({
                    "Target Market":targetMarket
                })
            },
            setProblem: (problem)=>{
                set({
                    "Problem":{
                        Assumption:problem.assumption,
                        Fact: problem.fact
                    }
                })
            },
            setSolution: (solution)=>{
                set({
                    "Solution":solution
                })
            },
            setSurveyMethod: (surveyMethod)=>{
                set({
                    "Survey Method":surveyMethod
                })
            },
            setCompetitor: (competitor)=>{
                set({
                    "Competitor":competitor
                })
            },
            setPrototype: (prototype)=>{
                set({
                    "Prototype":prototype
                })
            }
        }),
        {
            name: "idea-storage", // Name of the item in the storage
            // storage: () => localStorage, // You can also use sessionStorage or any custom storage
        }
    )
);