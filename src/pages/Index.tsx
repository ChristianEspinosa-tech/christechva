import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WorkflowDiagramSection from "@/components/WorkflowDiagramSection";
import UseCasesSection from "@/components/UseCasesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import WhyMeSection from "@/components/WhyMeSection";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TrustBar />
      <AboutSection />
      <ProcessSection />
      <BeforeAfterSection />
      <WorkflowDiagramSection />
      <UseCasesSection />
      <PricingSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <WhyMeSection />
      <BookingSection />
     <div className="flex justify-center py-16 px-4">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Get Your Free Guide</h2>
          <p className="mb-6">5 Workflows Every Solo Coach Should Automate in 2026</p>
      <a href="https://preview.mailerlite.io/forms/2422357/189881116051637256/share" 
         target="_blank" 
         className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400">
        Send Me the Free Guide
      </a>
        </div>
      </div>
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
