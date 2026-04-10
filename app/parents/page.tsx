import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import ParentContactForm from "@/components/parents/ParentContactForm";
import {
  Calendar, Phone, Mail, Users, Shield, CheckCircle, ArrowRight,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Parents Corner — Forever Tvet Institute",
  description:
    "Resources and communication channels for parents and guardians of Forever Tvet Institute students. Meet the Head Parent and submit concerns directly.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Parents Corner", href: "/parents" },
];

const committeeRoles = [
  { icon: Users,  role: "Head Parent",                              desc: "Overall representative. Chairs all meetings. Direct liaison with school administration." },
  { icon: Shield, role: "Deputy Head Parent (Short Courses)",       desc: "Represents parents of Heavy Machinery, Solar Technology, and EV Cars students." },
  { icon: Shield, role: "Deputy Head Parent (3-Year Programmes)",  desc: "Represents parents of Computer Systems & Architecture, Electrical Technology, Land Surveying, and Public Works students." },
  { icon: Users,  role: "Class Representatives (×5)",              desc: "One per program. Collects and escalates class-level concerns to the Head Parent." },
  { icon: Mail,   role: "Secretary",                                desc: "Records minutes and manages communication with the broader parent body between meetings." },
];

const channels = [
  {
    icon: Calendar,
    title: "Monthly Parent Meetings",
    desc: "Held on the last Friday of every month, 4:00 PM – 5:30 PM on campus. All parents are welcome. Agenda published 3 days prior.",
    cta: "View Events Calendar",
    href: "/school-life/events",
  },
  {
    icon: Phone,
    title: "Direct Contact — Head Parent",
    desc: "For concerns that require parent-to-administration escalation, contact the Head Parent directly by phone or email.",
    cta: "+250 788 000 001",
    href: "tel:+250788000001",
  },
  {
    icon: Mail,
    title: "School Administration",
    desc: "For academic matters, fees, attendance, or urgent concerns, contact the Dean of Students or the relevant department directly.",
    cta: "Contact the School",
    href: "/contact",
  },
];

const keyContacts = [
  { role: "Dean of Students",   desc: "Day-to-day welfare, attendance, conduct",       email: "deanofstudents@forevertvet.rw" },
  { role: "Admissions Office",  desc: "Enrolment, documents, deferrals",               email: "admissions@forevertvet.rw" },
  { role: "Finance Office",     desc: "Fees, payments, receipts, sponsors",            email: "finance@forevertvet.rw" },
  { role: "Head Parent",        desc: "Parent concerns and committee matters",         email: "headparent2026@forevertvet.rw" },
  { role: "Headmaster's Office",desc: "Governance and formal complaints",              email: "headmaster@forevertvet.rw" },
  { role: "General Enquiries",  desc: "All other questions",                           email: "info@foreverinternational.ac.rw" },
];

export default function ParentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Parent Community"
          title="Parents Corner"
          subCopy="Parents are partners in every student's success. This is your space — to connect, to raise concerns, and to stay informed about everything happening at Forever Tvet Institute."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Welcome Message */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">
              {/* Left */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">A Message to Our Parent Community</span>
                </div>
                <AnimatedText text="You Are Part of This" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
                <div>
                  <p className="text-base text-gray-600 leading-relaxed mt-5">
                    At Forever Tvet Institute, we believe that a student's success is a shared responsibility — shared between the student, the school, and their family. We do not treat parents as passive observers. You are active participants in your child's journey, and we have built the structures to make that real.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mt-4">
                    This page is your resource hub. You will find the people to speak to, the channels to use, and the meetings to attend. If something concerns you, we want to hear it early — not after it has grown.
                  </p>
                </div>
              </div>

              {/* Right — quote card */}
              <div>
                <div className="rounded-2xl bg-primary/5 border border-accent/20 p-7">
                  <p className="text-4xl font-black text-accent/40 leading-none mb-3">&ldquo;</p>
                  <p className="text-base text-gray-700 leading-relaxed italic">
                    The relationship between parents and the school is a partnership — not a transaction. Your child's growth is our shared mission.
                  </p>
                  <p className="text-xs font-semibold text-gray-400 mt-4 uppercase tracking-wide">— The Headmaster, Forever Tvet Institute</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Head Parent */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Your Representative</span>
              </div>
              <AnimatedText text="Meet the Head Parent" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-start">
              {/* Photo */}
              <div>
                <div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-md">
                    <Image
                      src="/images/image1.png"
                      alt="Mme. Chantal Uwimana — Head Parent"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                  <div className="mt-3 rounded-xl bg-primary text-white px-4 py-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-0.5">Head Parent</p>
                    <p className="text-sm font-bold">2026 Academic Year</p>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-3">Head Parent — Intake 2026</span>
                </div>
                <AnimatedText
                  text="Mme. Chantal Uwimana"
                  as="h3"
                  className="font-heading font-bold text-3xl lg:text-4xl text-primary leading-tight"
                  baseDelay={100}
                  stagger={55}
                />
                <div>
                  <p className="text-base text-gray-600 leading-relaxed mt-5">
                    Mme. Uwimana is a qualified accountant with over 15 years of experience in Rwanda's public and private sectors. She is the parent of a current Electrical Technology student at Forever Tvet Institute.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mt-4">
                    As Head Parent, she chairs the monthly Parent Committee meetings, liaises directly with the Headmaster and Dean of Students on all parent-raised concerns, and formally represents the parent body at school governance events.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mt-4">
                    She was elected unanimously by the Intake 2026 parent body at Orientation Day. Her priority for the year is improving parent communication channels and ensuring every concern is acknowledged within 48 hours.
                  </p>
                </div>

                {/* Contact card */}
                <div>
                  <div className="mt-6 rounded-xl bg-white border border-gray-100 shadow-sm p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Direct Contact</p>
                    <a href="tel:+250788000001" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Phone size={14} className="text-primary" />
                      </div>
                      +250 788 000 001
                    </a>
                    <a href="mailto:headparent2026@forevertvet.rw" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Mail size={14} className="text-primary" />
                      </div>
                      headparent2026@forevertvet.rw
                    </a>
                    <p className="text-xs text-gray-400 border-t border-gray-100 pt-3 mt-3">
                      <strong className="text-gray-500">Office hours:</strong> By appointment — contact via phone or email to schedule.
                      Use the form below first for general concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Structure */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — copy */}
              <div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Governance</span>
                </div>
                <AnimatedText text="How the Parent Committee Works" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
                <div>
                  <p className="text-base text-gray-600 leading-relaxed mt-5">
                    The Parent Committee is constituted at the start of each academic year. It includes the Head Parent, two Deputy Head Parents (one per program group), and class representatives. The committee meets monthly with the Dean of Students and quarterly with the Headmaster.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mt-4">
                    Meetings are minuted, and outcomes are communicated to all parents within 5 working days of each session. Any parent may raise an agenda item by submitting it to the Head Parent at least 3 days before the scheduled meeting.
                  </p>
                </div>
              </div>

              {/* Right — roles */}
              <div className="space-y-3">
                {committeeRoles.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i}>
                      <div className="flex items-start gap-4 rounded-xl bg-gray-50 border border-gray-100 p-4">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={17} className="text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary text-sm">{r.role}</p>
                          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{r.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Communication Channels */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Stay Connected</span>
              </div>
              <AnimatedText text="How to Reach Us" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <div key={i}>
                    <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col h-full">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="font-semibold text-primary text-sm mb-2">{ch.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed flex-1">{ch.desc}</p>
                      <a
                        href={ch.href}
                        className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary hover:gap-2.5 transition-all group"
                      >
                        {ch.cta} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Submit a Concern */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-10">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">We&apos;re Listening</span>
              </div>
              <AnimatedText text="Submit a Concern or Question" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4">
                  All submissions are reviewed by the Head Parent and the Dean of Students. You will receive a response within 2 working days.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 lg:p-8">
                <ParentContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Key School Contacts */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Who to Call</span>
              </div>
              <AnimatedText text="Key Contacts at Forever Tvet" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {keyContacts.map((c, i) => (
                <div key={i}>
                  <div className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden flex">
                    <div className="w-1 bg-primary flex-shrink-0" />
                    <div className="p-4 flex-1">
                      <p className="font-semibold text-primary text-sm">{c.role}</p>
                      <p className="text-xs text-gray-400 mt-0.5 mb-2">{c.desc}</p>
                      <a href={`mailto:${c.email}`} className="text-xs text-accent hover:underline font-medium">
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Invested in Your Child's Future" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                So are we. Every enrolled student has a team of educators, mentors, and a parent community working for their success.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Contact the School</Link>
                <Link href="/academics/departments" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">View Academic Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
