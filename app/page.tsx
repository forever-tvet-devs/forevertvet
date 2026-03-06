import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSnippet from "@/components/sections/AboutSnippet";
import AcademicsSnippet from "@/components/sections/AcademicsSnippet";
import LatestNews from "@/components/sections/LatestNews";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import ContactSnippet from "@/components/sections/ContactSnippet";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSnippet />
        <AcademicsSnippet />
        <LatestNews />
        <UpcomingEvents />
        <GalleryPreview />
        <Testimonials />
        <AdmissionsCTA />
        <ContactSnippet />
      </main>
      <Footer />
    </>
  );
}
