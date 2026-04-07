import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import {
  CheckCircle,
  Award,
  TrendingUp,
  FileText,
  Download,
  ArrowRight,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Accreditations — Forever Tvet Institute",
  description:
    "Forever Tvet Institute's accreditations, memberships, and compliance standards — independently verified excellence in vocational education.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Accreditations", href: "/about/accreditations" },
];

const whyItMattersFeatures = [
  {
    icon: CheckCircle,
    text: "Your child's qualifications are nationally and internationally recognised — opening doors across Africa and beyond.",
  },
  {
    icon: Award,
    text: "Our curriculum meets the highest Rwandan TVET standards, verified through regular independent audits.",
  },
  {
    icon: TrendingUp,
    text: "Accreditation is not a one-time achievement — we are continuously reviewed to ensure ongoing improvement.",
  },
];

const primaryAccreditations = [
  {
    acronym: "WDA",
    name: "Workforce Development Authority",
    body: "Republic of Rwanda — Ministry of Education",
    since: "Accredited since 2019",
    status: "Active",
    desc: "The primary national body overseeing technical and vocational education. WDA accreditation certifies that our programs meet Rwanda's national occupational standards and that our graduates qualify for national certification.",
  },
  {
    acronym: "RQF",
    name: "Rwanda Qualifications Framework",
    body: "Rwanda Education Board (REB)",
    since: "Registered since 2020",
    status: "Active",
    desc: "Our qualifications are registered on the RQF, ensuring graduates receive level-recognised credentials that are understood by employers and further education institutions across Rwanda.",
  },
  {
    acronym: "TVET Board",
    name: "Technical & Vocational Education Board",
    body: "Ministry of Education, Rwanda",
    since: "Accredited since 2021",
    status: "Renewed 2024",
    desc: "The TVET Board accreditation validates our instructional staff qualifications, facility standards, and student welfare provisions — ensuring a safe and effective learning environment.",
  },
];

const affiliations = [
  "African TVET Network",
  "East Africa Business Council",
  "Rwanda Private Sector Federation",
  "Sino-African Education Exchange Programme",
  "Association of TVET Institutions — East Africa",
  "Rwanda ICT Chamber",
  "Kigali Chamber of Commerce",
  "CETA — Construction Education & Training Authority",
  "Rwanda Green Building Council",
  "Africa Skills Alliance",
  "ILO Better Work Programme",
  "UNHCR Education Partners Network",
];

const reports = [
  { name: "Annual Quality Assurance Report 2024", year: "2024", href: "#" },
  { name: "Curriculum Compliance Audit 2023", year: "2023", href: "#" },
  { name: "Graduate Employment Outcomes Report 2023", year: "2023", href: "#" },
  { name: "Facilities & Safety Inspection Certificate 2024", year: "2024", href: "#" },
  { name: "Instructor Qualifications Register 2024", year: "2024", href: "#" },
];

export default function AccreditationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Standards & Recognition"
          title="Accreditations & Partnerships"
          subCopy="Our commitment to excellence is verified by the most respected educational bodies — independently, rigorously, and on an ongoing basis."
          breadcrumb={breadcrumb}
          backgroundImage="/images/SolarPanelsTechnologyImage.png"
        />

        {/* Why Accreditation Matters */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                Why It Matters
              </span>
            </FadeInBlur>

            <AnimatedText
              text="Independently Verified. Consistently Excellent."
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />

            <FadeInBlur delay={400}>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-6 text-left sm:text-center">
                Accreditation means that our institution, our programs, and our qualifications have been independently assessed against national and international standards — and found to meet or exceed them. It is not self-declared excellence; it is verified excellence.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4 text-left sm:text-center">
                For students and parents, accreditation means that the qualification you earn here will be recognised by employers, government agencies, and further education institutions — not just in Rwanda, but across the region and beyond.
              </p>
            </FadeInBlur>

            {/* 3-feature row */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {whyItMattersFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <FadeInBlur key={i} delay={500 + i * 100}>
                    <div className="bg-gray-50 rounded-xl p-6 text-left h-full">
                      <Icon size={24} className="text-accent mb-3" />
                      <p className="text-sm text-gray-600 leading-relaxed">{feat.text}</p>
                    </div>
                  </FadeInBlur>
                );
              })}
            </div>
          </div>
        </section>

        {/* Primary Accreditations */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-14">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Official Accreditations
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Certified by Rwanda's Leading Educational Bodies"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {primaryAccreditations.map((acc, i) => (
                <FadeInBlur key={acc.acronym} delay={300 + i * 120}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                    {/* Logo placeholder */}
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-5 flex-shrink-0">
                      <span className="font-heading font-bold text-base text-white text-center leading-tight px-1">
                        {acc.acronym}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-primary mb-1">{acc.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{acc.body}</p>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{acc.since}</span>
                      <span className="rounded-full bg-green-100 text-green-700 text-xs px-3 py-1 font-medium">
                        {acc.status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{acc.desc}</p>
                  </div>
                </FadeInBlur>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships & Affiliations — logo wall */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Memberships & Affiliations
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Part of a Wider Network of Excellence"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
                  We are proud members of a broad network of educational, industry, and civic organisations that keep us connected, relevant, and accountable.
                </p>
              </FadeInBlur>
            </div>

            <FadeInBlur delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {affiliations.map((name) => (
                  <div
                    key={name}
                    className="rounded-xl border border-gray-100 p-4 flex items-center justify-center bg-white hover:shadow-sm hover:border-primary/20 transition-all duration-200 min-h-[72px]"
                  >
                    <p className="text-xs font-medium text-gray-500 text-center leading-snug">{name}</p>
                  </div>
                ))}
              </div>
            </FadeInBlur>
          </div>
        </section>

        {/* Compliance & Reports */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <FadeInBlur delay={0}>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Transparency
                </span>
              </FadeInBlur>
              <AnimatedText
                text="Compliance Reports & Documents"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <FadeInBlur delay={350}>
                <p className="text-base text-gray-500 leading-relaxed mt-4">
                  We believe transparency is part of accountability. Our key compliance reports are available for download — for parents, prospective students, partners, and regulators.
                </p>
              </FadeInBlur>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {reports.map((report, i) => (
                <FadeInBlur key={report.name} delay={300 + i * 80}>
                  <div className={`flex items-center justify-between px-6 py-4 hover:bg-primary/3 transition-colors ${i < reports.length - 1 ? "border-b border-gray-100" : ""}`}>
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText size={18} className="text-accent flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-primary leading-snug truncate">{report.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{report.year}</p>
                      </div>
                    </div>
                    <a
                      href={report.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/30 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Download size={12} />
                      Download
                    </a>
                  </div>
                </FadeInBlur>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <FadeInBlur delay={0}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center">
                  <Award size={26} className="text-accent" />
                </div>
              </div>
            </FadeInBlur>

            <AnimatedText
              text="Accredited. Trusted. Ready for Your Child."
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={0}
              stagger={55}
            />

            <FadeInBlur delay={350}>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Join a school where excellence is not a claim — it is a verified, independently certified standard. Enrolment is now open.
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
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Download size={16} />
                  Download Prospectus
                </a>
              </div>
            </FadeInBlur>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
