import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
export const metadata: Metadata = {
  title: "Our Leadership Team — Forever Tvet Institute",
  description:
    "Meet the experienced leaders who guide Forever Tvet Institute's vision, operations, and academic excellence.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Leadership Team", href: "/about/leadership" },
];

const leaders = [
  {
    name: "Dr. Chen Wei",
    role: "Executive Director",
    department: "Executive",
    bio: "With over 20 years of experience in vocational education across Asia and Africa, Dr. Chen Wei founded Forever Tvet Institute to bridge the skills gap in Rwanda's growing industrial sector.",
    initials: "CW",
  },
  {
    name: "Ms. Amina Uwimana",
    role: "Academic Director",
    department: "Academics",
    bio: "Ms. Uwimana oversees all academic programs and curriculum development, ensuring every course meets both local industry needs and international standards.",
    initials: "AU",
  },
  {
    name: "Mr. Jean-Paul Habimana",
    role: "Director of Operations",
    department: "Operations",
    bio: "Mr. Habimana manages the day-to-day operations of the institute, from facilities management to student services, ensuring a seamless learning environment.",
    initials: "JH",
  },
  {
    name: "Ms. Liu Fang",
    role: "Head of Partnerships",
    department: "Partnerships",
    bio: "Ms. Liu leads our industry partnership strategy, maintaining relationships with 30+ employers who provide internship and employment pathways for our graduates.",
    initials: "LF",
  },
  {
    name: "Mr. Emmanuel Nkurunziza",
    role: "Head of Student Affairs",
    department: "Student Affairs",
    bio: "Mr. Nkurunziza champions the student experience from enrollment through graduation, providing pastoral support, career guidance, and welfare services.",
    initials: "EN",
  },
  {
    name: "Ms. Grace Mukamana",
    role: "Finance & Administration Manager",
    department: "Finance",
    bio: "Ms. Mukamana ensures the financial sustainability of the institute, managing budgets, fees structures, and administrative systems with precision and care.",
    initials: "GM",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Leadership"
          title="Our Leadership Team"
          subCopy="The experienced professionals driving our mission to deliver Rwanda's finest vocational education."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="max-w-3xl mb-16">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Who We Are
                </span>
              </div>
              <AnimatedText
                text="Guided by Experience, Driven by Purpose"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <div>
                <p className="text-base lg:text-lg text-gray-500 mt-4 leading-relaxed">
                  Our leadership team combines decades of expertise in vocational education, industry partnerships, and institutional management. Together, they ensure Forever Tvet Institute remains at the forefront of practical skills training in Rwanda.
                </p>
              </div>
            </div>

            {/* Leadership Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <div key={i}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-white text-lg">{leader.initials}</span>
                    </div>

                    <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-1">
                      {leader.department}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-body mb-0.5">{leader.name}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{leader.role}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-primary-dark py-14">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                { value: "20+", label: "Years Combined Experience" },
                { value: "6", label: "Leadership Members" },
                { value: "3", label: "Countries Represented" },
                { value: "100%", label: "Industry Background" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`flex flex-col items-center text-center lg:px-8 ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
                    <span className="font-heading font-bold text-4xl lg:text-5xl text-accent leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-2">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
