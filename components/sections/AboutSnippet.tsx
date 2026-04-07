import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export default function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Who We Are
            </span>

            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight">
              A Legacy of Academic Excellence
            </h2>

            <div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Founded in 2018 by China's Beijing Forever Technology Co., Ltd., Forever Tvet Institute
                was built with one purpose: to give Rwanda's youth practical, industry-ready skills
                that lead directly to well-paying employment.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
                We combine China's proven vocational teaching methodology with Rwanda's local industry
                needs — moving students from theory to simulation to hands-on operation, then into
                internships with partner companies before they graduate.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              Learn More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual column */}
          <div className="relative">
            {/* Decorative offset border */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/30 z-0" />

            {/* Main visual card */}
            <div
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Background photo */}
              <Image
                src="/images/PeopleLookAtTrainingDevice.png"
                alt="Students at Forever Tvet Institute"
                fill
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-primary/50" />

              {/* School emblem */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-accent/50 flex items-center justify-center backdrop-blur-sm bg-primary/30">
                  <span className="font-heading font-bold text-3xl text-accent">FTI</span>
                </div>
                <div className="text-center">
                  <p className="font-heading text-white/90 text-lg font-semibold">Forever Tvet Institute</p>
                  <p className="text-white/50 text-sm mt-1 italic">Est. 2018</p>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accent/60 via-accent to-accent/60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
