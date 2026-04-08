import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { Award, Star, Mail } from "@/components/ui/Icons";

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

const credentials = [
  "M.Ed., Educational Leadership",
  "B.Sc., Industrial Engineering",
  "16+ Years in TVET",
  "Rwanda Education Board Fellow",
];

const achievements = [
  {
    year: "2023",
    title: "TVET Leadership Award",
    body: "Rwanda Technical and Vocational Education Board",
  },
  {
    year: "2022",
    title: "Excellence in Industry Partnerships",
    body: "Rwanda Private Sector Federation",
  },
  {
    year: "2021",
    title: "Outstanding Educator Recognition",
    body: "Ministry of Education, Republic of Rwanda",
  },
  {
    year: "2020",
    title: "Sino-African Education Ambassador",
    body: "Beijing Forever Technology Co., Ltd.",
  },
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

        {/* Profile Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — portrait + name card */}
              <div>
                <div className="space-y-6">
                  {/* Portrait */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/25 z-0" />
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4", maxHeight: "480px" }}>
                      <Image
                        src="/images/LandSurveyingLecturer.jpg"
                        alt="Headmaster of Forever Tvet Institute"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority
                      />
                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-heading font-bold text-white text-lg leading-tight">Mr. Jean-Baptiste Nkurunziza</p>
                        <p className="text-white/70 text-sm mt-0.5">Headmaster, Forever Tvet Institute</p>
                      </div>
                    </div>
                  </div>

                  {/* Credentials strip */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {credentials.map((c) => (
                        <span
                          key={c}
                          className="text-xs rounded-full bg-primary/8 text-primary px-3 py-1.5 font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <a
                      href="mailto:headmaster@forevertvet.rw"
                      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                      headmaster@forevertvet.rw
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — bio */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                    School Leadership
                  </span>
                </div>

                <AnimatedText
                  text="Mr. Jean-Baptiste Nkurunziza, Headmaster"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                  baseDelay={100}
                  stagger={60}
                />

                <div>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    Mr. Nkurunziza brings over 16 years of experience in technical and vocational education, with a career that spans classroom instruction, curriculum design, and high-level industry partnership development across East Africa.
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    Before joining Forever Tvet Institute, he led the vocational training division at a major Rwandan infrastructure firm, where he developed the industry-embedded teaching model that now defines our entire program structure.
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    He holds a Master's in Educational Leadership and a Bachelor's in Industrial Engineering, and is a Fellow of the Rwanda Education Board. Under his leadership, Forever Tvet has achieved its highest-ever graduate employment rate and doubled its industry partnership roster.
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                    He is known across the institution not for his credentials, but for the fact that he knows every student by name — and means it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Headmaster's Letter */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-8 text-center">
                A Message from the Headmaster
              </span>
            </div>

            {/* Quote mark */}
            <div>
              <div className="font-heading font-black text-8xl leading-none text-accent/20 select-none mb-0" aria-hidden="true">
                "
              </div>
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
            <div>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                <p className="font-heading text-2xl italic text-primary font-bold">Jean-Baptiste Nkurunziza</p>
                <p className="text-sm text-gray-500 mt-1">Headmaster, Forever Tvet Institute</p>
                <p className="text-xs text-gray-400 mt-0.5">Kigali, Rwanda · 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Quote Strip */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <div className="font-heading font-black text-8xl leading-none text-accent/30 select-none mb-2" aria-hidden="true">
                "
              </div>
              <p className="font-heading text-2xl lg:text-3xl italic text-white leading-relaxed">
                The best investment any nation can make is not in infrastructure or technology — it is in the hands and minds of its young people.
              </p>
              <p className="text-sm text-white/50 mt-6">
                — Mr. Jean-Baptiste Nkurunziza, Headmaster
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Recognition
                </span>
              </div>
              <AnimatedText
                text="Awards & Professional Recognition"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((award, i) => (
                <div key={i}>
                  <div className="rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 bg-white h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Award size={22} className="text-accent" />
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{award.year}</span>
                    <h3 className="text-base font-semibold text-primary mt-2 mb-1 leading-snug">{award.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{award.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
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
