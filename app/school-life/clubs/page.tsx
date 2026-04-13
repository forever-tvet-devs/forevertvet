import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { clubs } from "@/components/school-life/clubsData";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Clubs & Extracurriculars — Forever Tvet Institute",
  description:
    "Student clubs and extracurricular activities at Forever Tvet Institute — technology, creative, sports, environment, and community clubs.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "School Life", href: "/school-life" },
  { label: "Clubs & Extracurriculars", href: "/school-life/clubs" },
];

export default function ClubsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Beyond the Classroom"
          title="Clubs & Extracurriculars"
          subCopy="Your skills extend far beyond your program. Clubs are where curiosity turns into capability — and where friendships last a lifetime."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Clubs List */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-16 lg:mb-20">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Our Clubs
                </span>
              </div>
              <AnimatedText
                text="Explore Our Clubs"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base lg:text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Each club is open to every student. Find one that matches your interests and get involved.
                </p>
              </div>
            </div>

            <div className="space-y-24 lg:space-y-32">
              {clubs.map((club, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={club.slug} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Content */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary leading-tight mb-3">
                        {club.name}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed mb-5">
                        {club.description}
                      </p>
                      <p className="text-sm text-gray-400 mb-6">
                        Meets: {club.meets}
                      </p>
                      <Link
                        href={`/school-life/clubs/${club.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors group shadow-sm"
                      >
                        View Full Details
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={club.image}
                          alt={club.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="More Than Training — A Community" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div><p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">Students who engage outside the classroom graduate with more. Apply and become part of it.</p></div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/school-life" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Student Life</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
