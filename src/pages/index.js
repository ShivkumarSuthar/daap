// pages/index.js

import About from "@/components/sections/AboutOverview";
import BrandMarquee from "@/components/sections/BrandMarquee";
import FAQSection from "@/components/sections/FAQSection";
import Home from "@/components/sections/HeroSectionOverview";
import Services from "@/components/sections/ServicesOverview";
import TechNews from "@/components/sections/TechNews";
import TechStack from "@/components/sections/TechStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function index() {
  return (
    <main className="all__pages">
      <Home/>
      <About/>
      <Services/>
      <TechStack/>
      <WhyChooseUs/>
      <FAQSection/>
      {/* <BrandMarquee/> */}
      {/* <TechNews/> */}
    </main>
  );
}