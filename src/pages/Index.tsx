import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";

import WorkflowDiagramSection from "@/components/WorkflowDiagramSection";
import UseCasesSection from "@/components/UseCasesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import WhyMeSection from "@/components/WhyMeSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WhyMeSection />
      <CaseStudiesSection />
      <AboutSection />
      <ProcessSection />
      
      <WorkflowDiagramSection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
