import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WorkflowDiagramSection from "@/components/WorkflowDiagramSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import WhyMeSection from "@/components/WhyMeSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <ServicesSection />
      <ProcessSection />
      <BeforeAfterSection />
      <WorkflowDiagramSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <WhyMeSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
