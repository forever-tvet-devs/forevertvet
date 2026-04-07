import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import VirtualTourEmbed from "@/components/school-life/VirtualTourEmbed";
import {
  Cpu, Building, Globe, BookOpen, Users, Zap,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Virtual Tour — Forever Tvet Institute",
  description:
    "Take a 360° virtual tour of Forever Tvet Institute. Explore our labs, classrooms, and campus from anywhere in the world.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Virtual Tour", href: "/school-life/virtual-tour" },
];

const highlights = [
  { icon: Zap,      label: "Simulation Labs",       desc: "Industrial-grade equipment and hands-on training stations" },
  { icon: BookOpen, label: "Classrooms",             desc: "Modern, well-lit learning environments designed for focus" },
  { icon: Cpu,      label: "Computer Lab",           desc: "30+ workstations with professional software pre-installed" },
  { icon: Globe,    label: "Outdoor Training Area",  desc: "Solar installation pads and survey field sites" },
  { icon: Users,    label: "Student Common Areas",   desc: "Spaces to collaborate, relax, and connect between classes" },
  { icon: Building, label: "Administrative Block",   desc: "Admissions, finance, and student support offices" },
];

export default function VirtualTourPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Explore Remotely"
          title="360° Virtual Tour"
          subCopy="Can't visit in person? Walk through our labs, classrooms, and campus from anywhere in the world."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Tour embed */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Interactive Tour</span>
              </FadeInBlur>
              <AnimatedText text="Explore Our Campus" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl mx-auto">
                  Step inside our facilities without leaving your home. Or book a physical visit below — our team is always happy to show you around.
                </p>
              </FadeInBlur>
            </div>
            <FadeInBlur delay={400}>
              <VirtualTourEmbed />
            </FadeInBlur>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Highlights</span>
              </FadeInBlur>
              <AnimatedText text="What You'll See" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <FadeInBlur key={h.label} delay={300 + i * 80}>
                    <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">{h.label}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </FadeInBlur>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready to Join Our Community?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <FadeInBlur delay={350}><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">You have seen the campus — now take the next step toward making it yours.</p></FadeInBlur>
            <FadeInBlur delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/school-life/facilities" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Facilities</Link>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
