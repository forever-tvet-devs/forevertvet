import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import NewsGrid from "@/components/news/NewsGrid";
import { posts } from "@/components/news/newsData";
import { Calendar, ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "News & Updates — Forever Tvet Institute",
  description:
    "The latest from Forever Tvet Institute — achievements, events, admissions, and community news.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
];

const featured = posts.find((p) => p.featured)!;

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Stay Informed"
          title="News & Updates"
          subCopy="The latest from Forever Tvet Institute — achievements, events, admissions, and community news."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Featured Article */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-6">Featured Story</span>
            </div>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div>
                <Link href={`/news/${featured.slug}`} className="group block rounded-2xl overflow-hidden aspect-video relative shadow-md">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </Link>
              </div>

              {/* Content */}
              <div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${featured.categoryColor}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={12} /> {featured.date}
                    </span>
                  </div>
                  <AnimatedText
                    text={featured.title}
                    as="h2"
                    className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-4"
                    baseDelay={0}
                    stagger={40}
                  />
                  <p className="text-base text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all group"
                  >
                    Read Full Story
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">All Articles</span>
              </div>
              <AnimatedText
                text="Browse All News"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-3 max-w-xl">
                  Filter by category to find what matters most to you.
                </p>
              </div>
            </div>
            <NewsGrid excludeFeatured={true} />
          </div>
        </section>

        {/* Newsletter Strip */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Stay Updated</span>
            </div>
            <AnimatedText
              text="Never Miss an Update"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <div>
              <p className="text-base text-gray-600 leading-relaxed mt-5 mb-7">
                Important news and announcements are shared directly with enrolled students and parents. If you would like to be notified of public events and intake openings, get in touch with our team.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-primary inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-sm"
              >
                Contact Us to Subscribe <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
      <Image
        src="/images/fti-bg-pattern.png"
        alt=""
        width={495}
        height={504}
        className="hidden lg:block absolute -bottom-44 -left-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Impressed by What We've Achieved?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Join the students and graduates building their futures at Forever Tvet Institute.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/academics/courses" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Explore Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
