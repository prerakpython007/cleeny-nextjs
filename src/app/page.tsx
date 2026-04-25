import Image from "next/image";
import HeroSection from "./_components/heroSection";
import AboutSection from "./_components/about";
import AppointmentAndServices from "./_components/appoinment";
import WorkingProcess from "./_components/workingprogress";
import PortfolioSection from "./_components/portfolio";
import CTABanner from "./_components/CTAbanner";
import PricingSection from "./_components/pricingsection";
import TestimonialsSection from "./_components/testimonials";
import BlogSection from "./_components/blogs";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <AboutSection/>
      <AppointmentAndServices/>
      <WorkingProcess/>
      <PortfolioSection/>
      <CTABanner/>
      <PricingSection/>
      <TestimonialsSection/>
      <BlogSection/>
      
    </div>
  );
}
