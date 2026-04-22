import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, Briefcase, MapPin, Clock } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Job Offers — Forever Tvet Institute",
  description:
    "Career opportunities at Forever Tvet Institute — join our team of educators and professionals shaping Rwanda's workforce.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "#" },
  { label: "Job Offers", href: "/jobs" },
];

const openings = [
  {
    title: "Instructor — Heavy Machinery Operation & Maintenance",
    department: "Heavy Machinery Operation & Maintenance",
    type: "Full-Time",
    location: "Kigali Campus",
    posted: "20 Mar 2026",
    summary:
      "We are looking for a qualified instructor with hands-on experience operating excavators, bulldozers, and cranes to lead practical training sessions.",
  },
  {
    title: "Instructor — Electrical Technology",
    department: "Electrical Technology",
    type: "Full-Time",
    location: "Kigali Campus",
    posted: "15 Mar 2026",
    summary:
      "Seeking an experienced electrician with teaching ability to deliver our Level 3–5 Electrical Technology curriculum.",
  },
  {
    title: "IT Support Technician",
    department: "Administration",
    type: "Full-Time",
    location: "Kigali Campus",
    posted: "10 Mar 2026",
    summary:
      "Manage campus IT infrastructure, support the student portal, and maintain computer labs across all departments.",
  },
  {
    title: "Student Recruitment Officer",
    department: "Admissions",
    type: "Full-Time",
    location: "Kigali & Nationwide",
    posted: "1 Mar 2026",
    summary:
      "Drive student recruitment across Rwanda through school visits, career fairs, and community outreach programmes.",
  },
];

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Careers"
          title="Job Offers"
          subCopy="Join a team that is shaping the next generation of skilled professionals in Rwanda."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Openings */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Opportunities</span>
              <AnimatedText
                text="Current Openings"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base text-gray-500 leading-relaxed mt-4">
                All positions are based at our Kigali campus unless stated otherwise. To apply, send your CV and cover letter to{" "}
                <a href="mailto:careers@foreverinternational.ac.rw" className="text-primary font-medium hover:underline">
                  careers@foreverinternational.ac.rw
                </a>.
              </p>
            </div>

            <div className="space-y-0">
              {openings.map((job, i) => (
                <div key={i} className={`py-7 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} /> Posted {job.posted}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-body mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{job.summary}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General application CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
      <Image
        src="/images/fti-bg-pattern.png"
        alt=""
        width={495}
        height={504}
        className="hidden lg:block absolute -top-44 -right-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none"
        aria-hidden="true"
      />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Don't See the Right Role?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
              We are always interested in hearing from talented educators and professionals. Send a general application and we will keep your details on file.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@foreverinternational.ac.rw" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                Send Your CV
              </a>
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
