// ... الاستدعاءات الأخرى
import FloatingButton from "@/components/sections/FloatingButton";
import AboutSection from "@/components/sections/About";

import NavBar from '../components/sections/NavBar';

import Particles from '../components/sections/Particles';

import Hero from "../components/sections/Hero";

import AdvantageSection from "@/components/sections/Advantage";

import ServicesSection from "@/components/sections/Services";


import TechStack from "@/components/sections/Tech";
import BlogSection from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import StackedScrollSection from "@/components/sections/StackedScroll";
import StrategicPartnerSection from "@/components/sections/StrategicPartner";

export default function Home() {
  return (
    <div className="cursor-default">
      <Particles />
      <NavBar />
      <Hero />
      <PartnerMarquee />
      <ServicesSection />
      <AboutSection />
      <StackedScrollSection />
      <StrategicPartnerSection />
      <AdvantageSection />
     
      <TechStack />
      <BlogSection />
      <Footer />
      
      {/* أضف الزر هنا */}
      <FloatingButton />
    </div>
  );
}