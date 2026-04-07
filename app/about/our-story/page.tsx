import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Story — Forever Tvet Institute",
  description:
    "Discover the history of Forever Tvet Institute — from its founding in 2018 to becoming Rwanda's leading vocational training institution.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Story", href: "/about/our-story" },
];

const timeline = [
  {
    year: "2018",
    title: "Foundation Year",
    desc: "Forever Tvet Institute was founded by Beijing Forever Technology Co., Ltd. with an inaugural cohort of 80 students across three programs.",
  },
  {
    year: "2019",
    title: "First Internship Placements",
    desc: "Our first cohort completed internships with 12 partner companies across Kigali, achieving a 94% absorption rate.",
  },
  {
    year: "2020",
    title: "Curriculum Expansion",
    desc: "Added Industrial Electricity and Road Construction programs, bringing our total to five vocational tracks.",
  },
  {
    year: "2021",
    title: "National Recognition",
    desc: "Received formal recognition from Rwanda's Technical and Vocational Education and Training (TVET) Board.",
  },
  {
    year: "2022",
    title: "New Training Facilities",
    desc: "Opened our expanded heavy machinery simulation lab and land survey training field — the most advanced of their kind in East Africa.",
  },
  {
    year: "2023",
    title: "500+ Graduates Placed",
    desc: "Celebrated placing over 500 graduates into full employment — with an average starting salary 40% above the national TVET average.",
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    desc: "Signed MoUs with 30 industry partners, guaranteeing internship pathways for every enrolled student.",
  },
];

const aboutStats = [
  { value: "2018", label: "Year Established" },
  { value: "500+", label: "Graduates Placed" },
  { value: "30+", label: "Industry Partners" },
  { value: "94%", label: "Employment Rate" },
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Our History"
          title="The Story of Forever Tvet Institute"
          subCopy="From humble beginnings to Rwanda's leading vocational institution — a story of purpose, grit, and the relentless belief that practical education changes lives."
          breadcrumb={breadcrumb}
          backgroundImage="/images/PeopleLookAtTrainingDevice.png"
        />

        {/* Founding Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text column */}
              <div className="space-y-6">
                <FadeInBlur delay={0}>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                    Where It All Began
                  </span>
                </FadeInBlur>

                <AnimatedText
                  text="Established with a Vision, Built on Values"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                  baseDelay={100}
                  stagger={60}
                />

                <FadeInBlur delay={400}>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    In 2018, Beijing Forever Technology Co., Ltd. saw an opportunity that others had overlooked: Rwanda's youth were brimming with potential, but the gap between classroom theory and industry-ready skills was leaving too many behind. They decided to do something about it.
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    Forever Tvet Institute was born with a single-minded purpose — to deliver vocational training that works in the real world. By marrying China's proven methodology with Rwanda's specific industrial needs, we built a curriculum that takes students from theory to simulation to hands-on operation, and directly into employment.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 mt-6">
                    <p className="text-lg italic text-gray-700 leading-relaxed">
                      "We didn't build a school. We built a bridge between ambition and opportunity."
                    </p>
                    <footer className="mt-2 text-sm text-gray-400 not-italic">— Founding Director, Forever Tvet Institute</footer>
                  </blockquote>

                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    Today, with over 500 graduates placed in meaningful employment and 30+ industry partners, that vision has become a living, growing reality across Kigali and beyond.
                  </p>
                </FadeInBlur>

                <FadeInBlur delay={600}>
                  <Link
                    href="/about/vision-mission"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                  >
                    Explore Our Vision & Mission
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </FadeInBlur>
              </div>

              {/* Image column */}
              <FadeInBlur delay={200}>
                <div className="relative">
                  {/* Decorative offset border */}
                  <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/30 z-0" />

                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src="/images/image1.png"
                      alt="Students training at Forever Tvet Institute"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Founding year badge */}
                  <div className="absolute -bottom-5 -left-5 z-20 bg-primary rounded-xl px-5 py-3 shadow-xl border border-primary-light">
                    <span className="font-heading font-bold text-accent text-2xl leading-none block">Est.</span>
                    <span className="font-heading font-bold text-white text-3xl leading-none">2018</span>
                  </div>
                </div>
              </FadeInBlur>

            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-16">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Milestones
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Seven Years of Growth & Impact"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/15 hidden sm:block" />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <FadeInBlur key={item.year} delay={300 + i * 120}>
                    <div className="flex gap-6 items-start">
                      {/* Year dot */}
                      <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md z-10">
                          <span className="text-xs font-bold text-white leading-none text-center">{item.year}</span>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="sm:hidden mb-2">
                          <span className="text-2xl font-bold font-heading text-accent">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeInBlur>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-primary-dark py-14">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {aboutStats.map((stat, i) => (
                <FadeInBlur key={stat.label} delay={i * 100}>
                  <div className={`flex flex-col items-center text-center lg:px-8 ${i < aboutStats.length - 1 ? "lg:border-r lg:border-white/10" : ""}`}>
                    <span className="font-heading font-bold text-4xl lg:text-5xl text-accent leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-2">
                      {stat.label}
                    </span>
                  </div>
                </FadeInBlur>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary">
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText
              text="Ready to Be Part of Our Story?"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <FadeInBlur delay={350}>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Join thousands of students who turned their ambition into a career. Applications for the next intake are now open.
              </p>
            </FadeInBlur>
            <FadeInBlur delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions/apply"
                  className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
