import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export default function AdmissionsCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #163560 0%, #214B82 50%, #3A6BA8 100%)",
        }}
      />

    

      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top right, rgba(212,168,67,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Decorative patterns */}
  
      <Image
        src="/images/fti-bg-pattern.png"
        alt=""
        width={495}
        height={504}
        className="hidden lg:block absolute -top-44 -right-40 w-[780px] h-auto opacity-[0.05] pointer-events-none select-none z-[1]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
          Academic Year 2026–2027
        </span>

        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white leading-tight mt-4">
          Admissions Are Now Open
        </h2>

        <p className="text-base lg:text-lg text-white/70 leading-relaxed mt-5 max-w-xl mx-auto">
          Gain a vocational qualification that leads to real employment — graduates earn
          between 100,000 and 500,000 RWF per month. Applications are rolling, don&apos;t wait.
        </p>

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
      </div>
    </section>
  );
}
