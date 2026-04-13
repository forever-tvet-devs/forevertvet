import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { Phone, Mail, Star } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Parents Corner — Forever Tvet Institute",
  description:
    "A message from the Head Parent of Forever Tvet Institute — representing all parents and guardians in the school community.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Parents Corner", href: "/parents" },
];

const messageParagraphs = [
  "As parents, the decision to entrust our children's education and future to an institution is one of the most significant choices we make. I want you to know that at Forever Tvet Institute, that trust is taken seriously — by every teacher, every administrator, and by the parent community that I have the honour of representing.",
  "My role as Head Parent is simple: to be your voice. Whether you have a concern about your child's progress, a question about school policy, or a suggestion for how we can improve, I am here to listen and to ensure that the school leadership hears you clearly.",
  "Since the Parent Committee was established, we have built a culture of open communication between families and the school. Monthly meetings, direct access to the Dean of Students, and a clear process for raising concerns — these are not formalities. They are commitments that we hold the school to, and that the school holds itself to.",
  "I encourage every parent to stay engaged. Attend the meetings when you can. Reach out to your class representative or to me directly when something is on your mind. The more involved we are as parents, the better the outcomes for our children.",
  "Together with the school, we are building more than qualifications — we are building futures. And that is a responsibility I carry with pride.",
];

export default function ParentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Parent Community"
          title="Parents Corner"
          subCopy="Parents are partners in every student's success. This is your space — to connect, to raise concerns, and to stay informed."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Head Parent Profile + Message */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — portrait */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/me.png"
                      alt="Head Parent of Forever Tvet Institute"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="font-heading font-bold text-xl text-primary">Mme. Chantal Uwimana</p>
                  <p className="text-sm text-gray-500 mt-1">Head Parent, Forever Tvet Institute</p>
                </div>
              </div>

              {/* Right — message */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                    A Message from the Head Parent
                  </span>
                </div>

                <AnimatedText
                  text="From the Head Parent's Desk"
                  as="h2"
                  className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mb-8"
                  baseDelay={100}
                  stagger={60}
                />

                <div className="font-heading font-black text-7xl leading-none text-accent/20 select-none -mb-4" aria-hidden="true">
                  &ldquo;
                </div>

                <div className="space-y-5">
                  {messageParagraphs.map((para, i) => (
                    <div key={i}>
                      <p className={`text-base lg:text-lg text-gray-700 leading-relaxed ${i === 0 ? "italic font-medium" : ""}`}>
                        {para}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                  <p className="font-heading text-2xl italic text-primary font-bold">Chantal Uwimana</p>
                  <p className="text-sm text-gray-500 mt-1">Head Parent, Forever Tvet Institute</p>
                  <p className="text-xs text-gray-400 mt-0.5">Kigali, Rwanda · 2026</p>
                </div>

                {/* Contact */}
                <div className="mt-8 rounded-xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Reach the Head Parent</p>
                  <a href="tel:+250788000001" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-primary" />
                    </div>
                    +250 788 000 001
                  </a>
                  <a href="mailto:headparent2026@forevertvet.rw" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-primary" />
                    </div>
                    headparent2026@forevertvet.rw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <div>
              <Star size={36} className="text-accent mx-auto mb-4" />
            </div>
            <AnimatedText
              text="Get in Touch"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-4"
              baseDelay={100}
              stagger={60}
            />
            <div>
              <p className="text-base text-gray-500 mb-8">
                Have a question or concern? Reach out to the school administration or the Head Parent directly.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-primary inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md"
              >
                Contact the School
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
