import { PricingTypes } from "../types/PricingTypes";

export const pricing:PricingTypes = {
    "Seed": {
        "monthly":0,
        "yearly":0,
        "includes":["Inclusion1", "Inclusion2", "Inclusion3"]
    },
    "Venturer": {
        "monthly":200,
        "yearly":500,
        "includes":["1Inclusion1", "1Inclusion2", "1Inclusion3"]
    },
    "Unicorn": {
        "monthly":700,
        "yearly":1000,
        "includes":["2Inclusion1", "2Inclusion2", "2Inclusion3"]
    }
}

