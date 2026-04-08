import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import GalleryGrid from "@/components/school-life/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Forever Tvet Institute",
  description:
    "Photos from campus life at Forever Tvet Institute — labs, students, events, and facilities.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Gallery", href: "/school-life/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Campus Photos"
          title="Gallery"
          subCopy="A picture of life at Forever Tvet — our students, our facilities, our milestones."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Gallery */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">All Photos</span>
              </div>
              <AnimatedText text="Browse Our Campus Life" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl mx-auto">
                  Filter by category to find what interests you most — from lab work to outdoor sessions, events to everyday campus moments.
                </p>
              </div>
            </div>
            <div>
              <GalleryGrid />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Want to See It in Person?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Photos only tell part of the story. Visit us to experience campus life for yourself.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Book a Campus Visit</Link>
                <Link href="/school-life/virtual-tour" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Take Virtual Tour</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
