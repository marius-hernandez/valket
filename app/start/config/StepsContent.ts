import Competitor from "../components/Competitor";
import Problem from "../components/Problem";
import Prototype from "../components/Prototype";
import Solution from "../components/Solution";
import SurveyMethod from "../components/SurveyMethod";
import TargetMarket from "../components/TargetMarket";




export const steps:{ [key: string]: [React.ComponentType<any>, boolean] }={
  "Target Market":[TargetMarket, true],
  "Problem": [Problem, false],
  "Solution": [Solution, false],
  "Survey Method":[SurveyMethod,false],
  "Prototype":[Prototype, false],
  "Competitor": [Competitor, false]
}