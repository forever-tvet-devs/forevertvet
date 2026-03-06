import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { ArrowRight } from "@/components/ui/Icons";

export default function AdmissionsCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #071640 0%, #0C2461 50%, #1A3D7C 100%)",
        }}
      />

      {/* Subtle dot overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top right, rgba(212,168,67,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <FadeInBlur delay={0}>
          <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
            Academic Year 2026–2027
          </span>
        </FadeInBlur>

        <AnimatedText
          text="Admissions Are Now Open"
          as="h2"
          baseDelay={0}
          stagger={55}
          className="font-heading font-bold text-4xl lg:text-5xl text-white leading-tight mt-4"
        />

        <FadeInBlur delay={350}>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed mt-5 max-w-xl mx-auto">
            Gain a vocational qualification that leads to real employment — graduates earn
            between 100,000 and 500,000 RWF per month. Applications are rolling, don&apos;t wait.
          </p>
        </FadeInBlur>

        <FadeInBlur delay={550}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <Link
              href="/admissions/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold text-base hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              Download Prospectus
            </Link>
          </div>
        </FadeInBlur>

      </div>
    </section>
  );
}
