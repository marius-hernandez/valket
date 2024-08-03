import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Pricing } from "./components/Pricing/components/Pricing";
import { PricingCard } from "./components/Pricing/components/PricingCard";
import { Navbar } from "./global/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      {/* <Footer /> */}
    </main>
  );
}
