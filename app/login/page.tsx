import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In — Forever Tvet Institute",
  description: "Sign in to your Forever Tvet Institute account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">

      {/* ── Left panel: image + overlay text (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[58%] relative flex-col overflow-hidden">
        <Image
          src="/images/PeopleLookAtTrainingDevice.png"
          alt="Forever Tvet Institute students in training"
          fill
          priority
          sizes="58vw"
          className="object-cover"
        />

        {/* Dark gradient so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Top-left logo */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/">
            <Image
              src="/images/forever_tvet_transparent.png"
              alt="Forever Tvet Institute"
              width={140}
              height={48}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Bottom-left text */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-10 xl:p-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-3">
            Forever Tvet Institute
          </span>
          <h2 className="font-heading font-bold text-3xl xl:text-4xl text-white leading-tight mb-4">
            Shaping Rwanda's<br />Next Generation of<br />Technical Professionals
          </h2>
          <p className="text-sm text-white/65 leading-relaxed max-w-sm">
            Join thousands of students who have launched careers in construction,
            electricity, surveying, IT, and more.
          </p>

          {/* Stat strip */}
          <div className="flex gap-8 mt-8 pt-8 border-t border-white/15">
            {[
              { value: "30+", label: "Industry Partners" },
              { value: "95%", label: "Employment Rate" },
              { value: "5", label: "Programmes" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-2xl text-accent leading-none">{s.value}</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex-1 flex flex-col min-h-screen bg-white">

        {/* Mobile logo bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 lg:hidden">
          <Link href="/">
            <Image
              src="/images/forever_tvet_transparent.png"
              alt="Forever Tvet Institute"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-[400px]">

            <div className="mb-8">
              <h1 className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight">
                Welcome back
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Sign in to your student or staff portal.
              </p>
            </div>

            <LoginForm />

            <p className="text-xs text-gray-400 text-center mt-8">
              Don&apos;t have an account?{" "}
              <Link href="/admissions/apply" className="text-primary font-semibold hover:text-accent transition-colors">
                Apply Now
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Forever Tvet Institute
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs text-gray-400 hover:text-primary transition-colors">Help</Link>
            <Link href="/" className="text-xs text-gray-400 hover:text-primary transition-colors">Back to site</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
