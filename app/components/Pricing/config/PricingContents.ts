import { PricingTypes } from "../../../types/PricingTypes";

export const pricing:PricingTypes = {
    "Seed": {
        "description":"YYYY",
        "monthly":0,
        "yearly":0,
        "includes":[
            "Starter validation through text surveys", 
            "Basic dashboard", 
            "Inclusion3"
        ]
    },
    "Venturer": {
        "description":"YYYY",
        "monthly":200,
        "yearly":500,
        "includes":[
            "Flexible survey options", 
            "Advanced dashboard", 
            "Promote surveys to the right market", 
            "Potential market size analysis", 
            "Can start without knowing the problem",
            "Fake door test on your cutting-edge solution"
        ]
    },
    "Unicorn": {
        "description":"YYYY",
        "monthly":700,
        "yearly":1000,
        "includes":[
            "Captures market sentiments through AI",
            "Advanced data visualization", 
            "Preview of hot touchpoints based on CTR(Click Through Rate) on your prototype"
        ]
    }
}

