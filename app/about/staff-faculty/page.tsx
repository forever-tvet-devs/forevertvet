import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Staff & Faculty — Forever Tvet Institute",
  description:
    "Meet the dedicated instructors and support staff who power Forever Tvet Institute's hands-on vocational training.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Staff & Faculty", href: "/about/staff-faculty" },
];

const departments = [
  {
    name: "Heavy Machinery Operation & Maintenance",
    staff: [
      { name: "Mr. Zhang Yong", role: "Head of Department", initials: "ZY" },
      { name: "Mr. Patrick Ndayisaba", role: "Senior Instructor", initials: "PN" },
      { name: "Mr. Eric Mugisha", role: "Workshop Supervisor", initials: "EM" },
    ],
  },
  {
    name: "Solar Technology",
    staff: [
      { name: "Mr. Wang Lei", role: "Head of Department", initials: "WL" },
      { name: "Mr. Théophile Nshuti", role: "Senior Instructor", initials: "TN" },
    ],
  },
  {
    name: "EV Cars",
    staff: [
      { name: "Mr. Li Jun", role: "Head of Department", initials: "LJ" },
      { name: "Mr. Fidèle Kamanzi", role: "Instructor — Diagnostics", initials: "FK" },
    ],
  },
  {
    name: "Land Surveying & Public Works",
    staff: [
      { name: "Ms. Diane Uwamahoro", role: "Head of Department — Surveying", initials: "DU" },
      { name: "Mr. Claude Habimana", role: "Head of Department — Public Works", initials: "CH" },
      { name: "Mr. Jean-Paul Mukiza", role: "Senior Instructor", initials: "JM" },
    ],
  },
  {
    name: "Electrical Technology",
    staff: [
      { name: "Mr. Wang Lei", role: "Head of Department", initials: "WL" },
      { name: "Mr. Jean de Dieu Niyonzima", role: "Senior Instructor", initials: "JN" },
      { name: "Mr. Samuel Tuyizere", role: "Lab Technician", initials: "ST" },
    ],
  },
  {
    name: "Computer Systems & Architecture",
    staff: [
      { name: "Ms. Chen Mei", role: "Head of Department", initials: "CM" },
      { name: "Mr. Yves Irambona", role: "Instructor — Networking", initials: "YI" },
      { name: "Ms. Aline Mukeshimana", role: "Instructor — Software", initials: "AM" },
    ],
  },
  {
    name: "Administration & Student Support",
    staff: [
      { name: "Ms. Grace Mukamana", role: "Finance & Administration", initials: "GM" },
      { name: "Mr. Emmanuel Nkurunziza", role: "Student Affairs", initials: "EN" },
      { name: "Ms. Josiane Nyiransabimana", role: "Registrar", initials: "JN" },
    ],
  },
];

export default function StaffFacultyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Our People"
          title="Staff & Faculty"
          subCopy="The experienced instructors and dedicated support staff behind every graduate's success."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Meet the Team
              </span>
              <AnimatedText
                text="Industry Experts Who Teach What They Know"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base lg:text-lg text-gray-500 mt-4 leading-relaxed">
                Every instructor at Forever Tvet Institute brings real industry experience to the classroom. Our faculty combines Rwandan educators with international specialists from China's leading technical institutions — a partnership that ensures our students learn from the best.
              </p>
            </div>

            {/* Department sections */}
            <div className="space-y-14">
              {departments.map((dept, i) => (
                <div key={i}>
                  <h3 className="font-heading font-bold text-xl text-body mb-6 pb-3 border-b border-gray-100">
                    {dept.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {dept.staff.map((person, j) => (
                      <div key={j} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3">
                          <span className="font-heading font-bold text-white text-sm">{person.initials}</span>
                        </div>
                        <h4 className="font-semibold text-body text-sm">{person.name}</h4>
                        <p className="text-xs text-primary mt-0.5">{person.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-dark py-14">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                { value: "40+", label: "Teaching Staff" },
                { value: "7", label: "Courses" },
                { value: "2", label: "Countries Represented" },
                { value: "100%", label: "Industry Experienced" },
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col items-center text-center lg:px-8 ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
                  <span className="font-heading font-bold text-4xl lg:text-5xl text-accent leading-none">{stat.value}</span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Interested in Joining Our Team?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
              We are always looking for passionate educators and skilled professionals. See our current openings or send a general application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md inline-flex items-center gap-2">
                View Job Offers <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
