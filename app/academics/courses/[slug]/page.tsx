import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import { departments } from "@/components/academics/departmentsData";
import DepartmentGallery from "@/components/academics/DepartmentGallery";
import { ChevronLeft, ArrowRight, CheckCircle, Clock, Award, Briefcase } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return { title: "Department Not Found — Forever Tvet Institute" };
  return {
    title: `${dept.name} — Forever Tvet Institute`,
    description: dept.descriptor,
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const Icon = dept.icon;
  const otherDepts = departments.filter((d) => d.slug !== slug).slice(0, 3);

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
                href="/academics/courses"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors mb-6"
              >
                <ChevronLeft size={14} /> Back to Courses
              </Link>
            </div>

            <AnimatedText
              text={dept.name}
              as="h1"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4"
              baseDelay={200}
              stagger={40}
              triggerOnScroll={false}
            />

            <div>
              <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
                {dept.descriptor}
              </p>
            </div>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-5 mt-6">
              <span className="flex items-center gap-2 text-sm text-white/70">
                <Clock size={15} className="text-accent flex-shrink-0" />
                {dept.duration}
              </span>
              <span className="flex items-center gap-2 text-sm text-white/70">
                <Award size={15} className="text-accent flex-shrink-0" />
                {dept.level}
              </span>
              <span className="flex items-center gap-2 text-sm text-white/70">
                <Briefcase size={15} className="text-accent flex-shrink-0" />
                Intake: {dept.intake}
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">About This Program</span>
              <AnimatedText
                text="Program Overview"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="space-y-5">
              {dept.overview.map((para, i) => (
                <div key={i}>
                  <p className={`text-base lg:text-lg text-gray-600 leading-relaxed ${i === 0 ? "font-medium text-gray-700 border-l-4 border-accent pl-5" : ""}`}>
                    {para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects & Careers */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Subjects */}
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Curriculum</span>
                <h3 className="font-heading font-bold text-2xl text-body leading-tight mb-6">Subjects & Modules</h3>
                <ul className="space-y-3">
                  {dept.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                      <span className="text-sm text-gray-700 font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">After Graduation</span>
                <h3 className="font-heading font-bold text-2xl text-body leading-tight mb-6">Career Pathways</h3>
                <ul className="space-y-3">
                  {dept.careers.map((career) => (
                    <li key={career} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                      <CheckCircle size={16} className="flex-shrink-0 text-primary" />
                      <span className="text-sm text-gray-700 font-medium">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Instructor */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Your Instructor</span>
              <AnimatedText
                text="Led by Industry Experience"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="max-w-sm mx-auto">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden text-center">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/images/me.png"
                    alt={dept.instructorName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <div className="p-6">
                  <p className="font-heading font-bold text-xl text-primary mb-1">{dept.instructorName}</p>
                  <p className="text-sm text-gray-500">{dept.instructorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Gallery</span>
              <AnimatedText
                text="Inside the Department"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <DepartmentGallery photos={dept.photos} name={dept.name} />
          </div>
        </section>

        {/* Other Courses */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-2">Explore More</span>
                <AnimatedText
                  text="Other Courses"
                  as="h2"
                  className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                  baseDelay={100}
                  stagger={55}
                />
              </div>
              <div>
                <Link
                  href="/academics/courses"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group flex-shrink-0"
                >
                  View All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {otherDepts.map((other) => {
                const OtherIcon = other.icon;
                return (
                  <div key={other.slug}>
                    <Link
                      href={`/academics/courses/${other.slug}`}
                      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="h-2 bg-primary" />
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                            <span className="text-primary"><OtherIcon size={20} /></span>
                          </div>
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{other.duration}</span>
                        </div>
                        <h3 className="font-heading font-semibold text-primary text-base leading-snug group-hover:text-accent transition-colors mb-2">
                          {other.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">{other.descriptor}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                          View Details <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready to Start Your Career?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Apply to the {dept.name} programme and take the first step towards a guaranteed career.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/contact" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
