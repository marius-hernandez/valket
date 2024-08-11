import Competitor from "../components/Competitor";
import Problem from "../components/Problem";
import Prototype from "../components/Prototype";
import Solution from "../components/Solution";
import SurveyMethod from "../components/SurveyMethod";
import TargetMarket from "../components/TargetMarket";


export const steps:{title:string, component:React.ComponentType<any>, isCurr:boolean}[]=[
  { 
    title: "Target Market",
    component: TargetMarket,
    isCurr: true
  },
  { 
    title: "Problem",
    component: Problem,
    isCurr: false
  },
  { 
    title: "Solution",
    component: Solution,
    isCurr: false
  },
  { 
    title: "Survey Method",
    component: SurveyMethod,
    isCurr: false
  },
  { 
    title: "Prototype",
    component: Prototype,
    isCurr: false
  },
  { 
    title: "Competitor",
    component: Competitor,
    isCurr: false
  },
]
