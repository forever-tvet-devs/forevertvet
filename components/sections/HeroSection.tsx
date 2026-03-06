import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { ArrowRight, ChevronDown } from "@/components/ui/Icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/image2.png"
        alt="Students training at Forever Tvet Institute"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Base dark tint */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(7,22,64,0.52)" }} />

      {/* Fade from top */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #071640 0%, transparent 45%)" }}
      />

      {/* Fade from bottom */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #071640 0%, transparent 45%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-[70px] pb-24">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Pre-heading badge */}
          <FadeInBlur delay={200} triggerOnScroll={false} className="flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
              Established 2018 · Accredited TVET Institution
            </span>
          </FadeInBlur>

          {/* School name */}
          <AnimatedText
            text="Forever Tvet Institute"
            as="h1"
            baseDelay={400}
            stagger={70}
            triggerOnScroll={false}
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight"
          />

          {/* Motto */}
          <FadeInBlur delay={900} triggerOnScroll={false}>
            <p className="text-xl lg:text-2xl text-white/70 font-heading italic">
              Knowledge, Character, Excellence
            </p>
          </FadeInBlur>

          {/* Supporting copy */}
          <FadeInBlur delay={1050} triggerOnScroll={false} className="flex justify-center">
            <p className="text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Rwanda&apos;s premier vocational school — combining China&apos;s proven teaching methodology
              with local industry needs to produce graduates who are workforce-ready from day one.
            </p>
          </FadeInBlur>

          {/* CTA buttons */}
          <FadeInBlur delay={1250} triggerOnScroll={false}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/admissions/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-accent text-white hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/60 text-white hover:bg-white/10 transition-all"
              >
                Explore the School
              </Link>
            </div>
          </FadeInBlur>

        </div>
      </div>

      {/* Scroll indicator */}
      <FadeInBlur delay={1500} triggerOnScroll={false} className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </FadeInBlur>

    </section>
  );
}
