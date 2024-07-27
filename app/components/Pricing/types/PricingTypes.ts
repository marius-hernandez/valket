export interface PricingTypes {
  Seed: PricingContent
  Venturer: PricingContent
  Unicorn: PricingContent
}
  
export interface PricingContent {
  monthly:  number;
  yearly:   number;
  includes: string[];
}
  
