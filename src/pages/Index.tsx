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
<BookingSection />
<div className="flex justify-center py-16 px-4">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-2">Get Your Free Guide</h2>
    <p className="text-center mb-6">5 Workflows Every Solo Coach Should Automate in 2026</p>
    <div className="ml-embedded" data-form="uFCDoS"></div>
  </div>
</div>
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
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
