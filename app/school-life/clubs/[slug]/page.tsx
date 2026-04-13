import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import { clubs } from "@/components/school-life/clubsData";
import DepartmentGallery from "@/components/academics/DepartmentGallery";
import { ChevronLeft, ArrowRight, Clock } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clubs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const club = clubs.find((c) => c.slug === slug);
  if (!club) return { title: "Club Not Found — Forever Tvet Institute" };
  return {
    title: `${club.name} — Forever Tvet Institute`,
    description: club.description,
  };
}

export default async function ClubDetailPage({ params }: Props) {
  const { slug } = await params;
  const club = clubs.find((c) => c.slug === slug);
  if (!club) notFound();

  const otherClubs = clubs.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-[70px]">

        {/* Hero */}
        <div className="bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 py-16 lg:py-20">
            <div>
              <Link
                href="/school-life/clubs"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors mb-6"
              >
                <ChevronLeft size={14} /> Back to Clubs
              </Link>
            </div>

            <AnimatedText
              text={club.name}
              as="h1"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={200}
              stagger={40}
              triggerOnScroll={false}
            />

            <div>
              <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
                {club.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-5 mt-6">
              <span className="flex items-center gap-2 text-sm text-white/70">
                <Clock size={15} className="text-accent flex-shrink-0" />
                Meets: {club.meets}
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">About This Club</span>
                <AnimatedText
                  text="Club Overview"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mb-6"
                  baseDelay={100}
                  stagger={60}
                />
                <div className="space-y-5">
                  {club.overview.map((para, i) => (
                    <div key={i}>
                      <p className={`text-base lg:text-lg text-gray-600 leading-relaxed ${i === 0 ? "font-medium text-gray-700 border-l-4 border-accent pl-5" : ""}`}>
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Gallery</span>
              <AnimatedText
                text="Inside the Club"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>
            <DepartmentGallery photos={club.photos} name={club.name} />
          </div>
        </section>

        {/* Other Clubs */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-2">Explore More</span>
                <AnimatedText
                  text="Other Clubs"
                  as="h2"
                  className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                  baseDelay={100}
                  stagger={55}
                />
              </div>
              <div>
                <Link
                  href="/school-life/clubs"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group flex-shrink-0"
                >
                  View All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {otherClubs.map((other) => (
                <div key={other.slug}>
                  <Link
                    href={`/school-life/clubs/${other.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-primary text-base leading-snug group-hover:text-accent transition-colors mb-2">
                        {other.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">{other.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                        View Details <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready to Get Involved?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Apply to Forever Tvet Institute and discover everything campus life has to offer.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/school-life/clubs" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">All Clubs</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
