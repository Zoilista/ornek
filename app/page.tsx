import DemoNotice from "@/components/demo-notice";
import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import ProcessSection from "@/components/process-section";
import FaqSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <DemoNotice />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
