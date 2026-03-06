import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { BookOpen, Flask, Globe, GraduationCap, TrendingUp, ArrowRight } from "@/components/ui/Icons";

const departments = [
  {
    icon: TrendingUp,
    title: "Heavy Machinery Control",
    desc: "Operate and maintain heavy construction equipment — the only programme of its kind available in the region.",
  },
  {
    icon: Globe,
    title: "Land Survey & Mapping",
    desc: "Precision surveying and geospatial mapping for construction, infrastructure, and development projects.",
  },
  {
    icon: Flask,
    title: "Industrial Electricity",
    desc: "Electrical systems installation, wiring, and maintenance in industrial and commercial environments.",
  },
  {
    icon: BookOpen,
    title: "Road Construction",
    desc: "Theory, simulation, and hands-on training in road-building, earthworks, and civil infrastructure.",
  },
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    desc: "Practical IT, hardware, networking, and software skills aligned with the modern job market.",
  },
];

export default function AcademicsSnippet() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <FadeInBlur delay={0}>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              What We Teach
            </span>
          </FadeInBlur>
          <AnimatedText
            text="Five Industry-Ready Programmes"
            as="h2"
            baseDelay={100}
            stagger={60}
            className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-3"
          />
          <FadeInBlur delay={400}>
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed mt-4">
              Each programme moves from theory to simulation to practical operation, then into
              paid internships with large Rwandan and Chinese partner companies — so graduates
              enter the workforce ready on day one.
            </p>
          </FadeInBlur>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <FadeInBlur key={dept.title} delay={400 + i * 100}>
                <div className="group bg-white rounded-2xl border border-gray-100 p-6 h-full flex flex-col gap-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-body">{dept.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">{dept.desc}</p>
                  </div>
                </div>
              </FadeInBlur>
            );
          })}
        </div>

        {/* CTA */}
        <FadeInBlur delay={800}>
          <div className="mt-10 text-center">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              View Full Academics Overview
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInBlur>

      </div>
    </section>
  );
}
