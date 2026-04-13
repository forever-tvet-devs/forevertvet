import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, BookOpen, Shield, Lightbulb, Heart, Star, Users, CheckCircle } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Vision & Mission — Forever Tvet Institute",
  description:
    "The principles guiding every decision at Forever Tvet Institute — our mission, vision, and the six core values that define our community.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Mission", href: "/about/vision-mission" },
];

const coreValues = [
  {
    icon: BookOpen,
    name: "Academic Excellence",
    desc: "We pursue rigorous standards and celebrate intellectual curiosity. Every program is designed to produce graduates who are genuinely job-ready.",
  },
  {
    icon: Shield,
    name: "Integrity",
    desc: "Honesty and ethical conduct are the foundation of everything we do — from how we teach to how we partner with industry.",
  },
  {
    icon: Users,
    name: "Inclusivity",
    desc: "Every student belongs. We celebrate diversity and foster a culture where background is never a barrier to ambition.",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    desc: "We encourage creative thinking and embrace new ways of learning, ensuring our curriculum stays ahead of industry demands.",
  },
  {
    icon: Heart,
    name: "Community",
    desc: "We build lasting relationships between students, families, staff, and the wider industry. Success here is always shared.",
  },
  {
    icon: Star,
    name: "Leadership",
    desc: "We develop confident, responsible leaders who leave our institution ready to make a positive impact on Rwanda's economy.",
  },
];

const strategicGoals = [
  {
    title: "Expand Program Offerings",
    desc: "Introduce five new vocational tracks aligned with Rwanda's Vision 2050 economic priorities by 2027.",
  },
  {
    title: "Deepen Industry Integration",
    desc: "Guarantee a confirmed internship placement for every enrolled student before they complete their first semester.",
  },
  {
    title: "Achieve International Accreditation",
    desc: "Secure internationally recognised qualifications that allow our graduates to work across Africa and beyond.",
  },
  {
    title: "Invest in Instructor Excellence",
    desc: "Send 100% of faculty through advanced industrial training every two years to keep skills current and industry-relevant.",
  },
  {
    title: "Build the Future Campus",
    desc: "Develop a purpose-built 10-acre campus with state-of-the-art simulation labs, dormitories, and green energy systems.",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Purpose & Direction"
          title="Vision & Mission"
          subCopy="The principles that guide every decision, every lesson, and every relationship within our school community."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Mission Statement */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-8">
                Our Mission
              </span>
            </div>

            {/* Decorative quote mark */}
            <div>
              <div className="font-heading font-black text-9xl leading-none text-accent/15 select-none mb-2" aria-hidden="true">
                "
              </div>
            </div>

            <div>
              <p className="font-heading text-2xl lg:text-3xl italic text-primary leading-relaxed">
                To deliver world-class vocational education that closes the gap between ambition and employment — equipping Rwanda's youth with the technical skills, professional discipline, and industry connections they need to build prosperous futures for themselves and their country.
              </p>
            </div>

            <div>
              <div className="w-16 h-1 bg-primary mx-auto mt-10 rounded-full" />
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/20 z-0" />
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src="/images/SolarPanelsTechnologyImage.png"
                      alt="Students engaged in technical training"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                    Our Vision
                  </span>
                </div>

                <AnimatedText
                  text="To Be East Africa's Most Impactful Vocational Institution"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                  baseDelay={100}
                  stagger={60}
                />

                <div>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    We envision a future where no Rwandan youth has to choose between education and employment because our programs deliver both simultaneously. A future where Forever Tvet graduates are the first call every industry employer makes — trusted, skilled, and ready.
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    We are building toward a campus and a reputation that attracts learners, instructors, and partners from across the continent — making Rwanda a model for practical, industry-integrated education in the developing world.
                  </p>
                </div>

                <div>
                  <Link
                    href="/about/our-story"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                  >
                    Read Our Full Story
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  What We Stand For
                </span>
              </div>
              <AnimatedText
                text="Six Values That Shape Everything"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i}>
                    <div className="group rounded-xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-200">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{value.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Looking Forward
                </span>
              </div>
              <AnimatedText
                text="Our Strategic Goals for 2025–2030"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4 max-w-2xl">
                  Our five-year strategic plan keeps us moving toward our vision with clear, measurable commitments to our students, partners, and Rwanda.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {strategicGoals.map((goal, i) => (
                <div key={i}>
                  <div className="flex items-start gap-5 bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                      {i + 1}
                    </div>
                    <div key={i}>
                      <h3 className="font-semibold text-primary text-base mb-1">{goal.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{goal.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle size={40} className="text-accent" />
              </div>
            </div>
            <AnimatedText
              text="Our Values in Action — Every Day"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                See how our mission plays out in the classroom and on the job. Explore our programs or visit us to see it for yourself.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions/apply"
                  className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  Apply Now
                </Link>
                <Link
                  href="/academics"
                  className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
