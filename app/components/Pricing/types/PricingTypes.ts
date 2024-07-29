export interface PricingTypes {
  Seed: PricingContent
  Venturer: PricingContent
  Unicorn: PricingContent
}
  
export interface PricingContent {
  description:  string;
  monthly:  number;
  yearly:   number;
  includes: string[];
}
  
