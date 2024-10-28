import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IdeaType } from "../types/IdeaType";
import Competitor from "./components/Competitor";

type IdeaStore= IdeaType &{
    setTargetMarket:(targetMarket:string)=>void
    // setProblem:(assumption:string, fact:string)=>void
    setAssumption:(assumption:string)=>void
    setFact:(fact:string)=>void
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
                "Assumption":[],
                "Fact":[]
            },
            'Solution':'',
            'Survey Method':[''],
            'Competitor':[''],
            'Prototype':'',

            setTargetMarket: (targetMarket)=>{
                set({
                    "Target Market": targetMarket
                })
            },
            setAssumption: (assumption)=>{
                set((state)=>({
                    "Problem":{
                        ...state.Problem,
                        Assumption:[...state.Problem.Assumption, assumption]
                       
                    }
                }))
            },
            setFact: (fact)=>{
                set((state)=>({
                    "Problem":{
                        ...state.Problem,
                        Fact:[...state.Problem.Fact, fact]
                       
                    }
                }))
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