import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { Star } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Meet the Headmaster — Forever Tvet Institute",
  description:
    "A personal message from the Headmaster of Forever Tvet Institute — the vision, values, and leadership that shape our students' futures.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Meet the Headmaster", href: "/about/headmaster" },
];

const letterParagraphs = [
  "When I joined Forever Tvet Institute, I made a promise to every student who walked through our doors: I will not let you leave this institution without the skills, the confidence, and the connections to build a life you are proud of.",
  "We live in a time of extraordinary opportunity in Rwanda. Industries are growing, infrastructure is being built, and technology is reshaping every field. But opportunity only reaches those who are prepared to meet it. That is why we exist. That is why we work as hard as we do.",
  "What makes this institution different is not just our curriculum or our facilities — though both are exceptional. It is the culture we have built together. A culture where every student is known by name, where instructors bring real industry experience into the classroom every single day, and where the relationship between learning and employment is not an aspiration but a structured guarantee.",
  "To every parent reading this: I understand the weight of the trust you place in us when you enroll your child here. I take that trust personally. Every policy we set, every program we design, every partnership we forge — it is all in service of that trust.",
  "To every prospective student: you belong here. Whatever your background, whatever your previous academic record, if you come with the willingness to work hard and learn, this institution will meet you more than halfway.",
];

export default function HeadmasterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="School Leadership"
          title="Meet the Headmaster"
          subCopy="A message from the heart of our school — the values, dreams, and direction that shape every student's journey."
          breadcrumb={breadcrumb}
          backgroundImage="/images/LandSurveyingLecturer.jpg"
        />

        {/* Profile + Message */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — portrait */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/me.png"
                      alt="Headmaster of Forever Tvet Institute"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="font-heading font-bold text-xl text-primary">IZABAYO Narcisse</p>
                  <p className="text-sm text-gray-500 mt-1">Headmaster, Forever Tvet Institute</p>
                </div>
              </div>

              {/* Right — message */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                    A Message from the Headmaster
                  </span>
                </div>

                <AnimatedText
                  text="From the Headmaster's Desk"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mb-8"
                  baseDelay={100}
                  stagger={60}
                />

                <div className="font-heading font-black text-7xl leading-none text-accent/20 select-none -mb-4" aria-hidden="true">
                  &ldquo;
                </div>

                <div className="space-y-5">
                  {letterParagraphs.map((para, i) => (
                    <div key={i}>
                      <p className={`text-base lg:text-lg text-gray-700 leading-relaxed ${i === 0 ? "italic font-medium" : ""}`}>
                        {para}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                  <p className="font-heading text-2xl italic text-primary font-bold">IZABAYO Narcisse</p>
                  <p className="text-sm text-gray-500 mt-1">Headmaster, Forever Tvet Institute</p>
                  <p className="text-xs text-gray-400 mt-0.5">Kigali, Rwanda · 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <Star size={36} className="text-accent mx-auto mb-4" />
            </div>
            <AnimatedText
              text="Meet the Full Leadership Team"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-4"
              baseDelay={100}
              stagger={60}
            />
            <div>
              <p className="text-base text-gray-500 mb-8">
                Beyond the headmaster, our institution is driven by a dedicated team of educators, department heads, and administrative staff.
              </p>
            </div>
            <div>
              <a
                href="/about/staff-faculty"
                className="bg-primary inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md"
              >
                Meet Staff & Faculty
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
