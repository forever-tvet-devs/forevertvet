import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import ContactForm from "@/components/contact/ContactForm";
import {
  Phone, Mail, MapPin, Clock, GraduationCap, Users,
  Briefcase, Shield, Facebook, Instagram, Twitter, Youtube, ArrowRight,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us — Forever Tvet Institute",
  description:
    "Get in touch with Forever Tvet Institute. Find our address, phone, email, and contact the right department directly.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const quickTiles = [
  { icon: Phone,        label: "Call Us",       value: "+250 788 000 000",               sub: "Mon – Fri, 7:30 AM – 4:30 PM", href: "tel:+250788000000" },
  { icon: Mail,         label: "Email Us",       value: "info@foreverinternational.ac.rw", sub: "Response within 1 working day",  href: "mailto:info@foreverinternational.ac.rw" },
  { icon: MapPin,       label: "Visit Us",       value: "KG 15 Ave, Kigali",             sub: "Mon – Fri, 8:00 AM – 4:00 PM",  href: "#map" },
  { icon: GraduationCap,label: "Admissions",     value: "admissions@forevertvet.rw",      sub: "For application questions",      href: "mailto:admissions@forevertvet.rw" },
];

const officeHours = [
  { day: "Monday – Friday", hours: "7:30 AM – 4:30 PM" },
  { day: "Saturday",        hours: "9:00 AM – 12:00 PM (by appointment)" },
  { day: "Sunday",          hours: "Closed" },
];

const directContacts = [
  { label: "Admissions",       email: "admissions@forevertvet.rw" },
  { label: "Finance",          email: "finance@forevertvet.rw" },
  { label: "Dean of Students", email: "deanofstudents@forevertvet.rw" },
  { label: "Head Parent",      email: "headparent2026@forevertvet.rw" },
  { label: "Headmaster",       email: "headmaster@forevertvet.rw" },
];

const socials = [
  { icon: Facebook,  label: "Facebook",  href: "#" },
  { icon: Twitter,   label: "Twitter/X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube,   label: "YouTube",   href: "#" },
];

const departments = [
  {
    icon: GraduationCap,
    name: "Admissions Office",
    for: "Applications, enrolment, deferrals, offer letters",
    email: "admissions@forevertvet.rw",
    hours: "Mon – Fri, 8:00 AM – 4:00 PM",
  },
  {
    icon: Briefcase,
    name: "Finance Office",
    for: "Fee payments, receipts, sponsorship invoices",
    email: "finance@forevertvet.rw",
    hours: "Mon – Fri, 8:00 AM – 3:30 PM",
  },
  {
    icon: Users,
    name: "Dean of Students",
    for: "Academic concerns, attendance, student welfare, conduct",
    email: "deanofstudents@forevertvet.rw",
    hours: "Mon – Fri, 8:00 AM – 4:00 PM",
  },
  {
    icon: Shield,
    name: "Headmaster's Office",
    for: "Formal complaints, governance, institutional partnerships",
    email: "headmaster@forevertvet.rw",
    hours: "By appointment — call to schedule",
  },
  {
    icon: Users,
    name: "Head Parent (Parent Committee)",
    for: "Parent concerns, committee agenda items, parent-school escalations",
    email: "headparent2026@forevertvet.rw",
    hours: "By appointment",
  },
  {
    icon: Mail,
    name: "General Enquiries",
    for: "All other questions, media, press, general information",
    email: "info@foreverinternational.ac.rw",
    hours: "Mon – Fri, 7:30 AM – 4:30 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Get in Touch"
          title="Contact Us"
          subCopy="Whether you have a question about admissions, fees, programs, or anything else — we are here and we respond promptly."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Quick Contact Strip */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickTiles.map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <div key={i}>
                    <a
                      href={tile.href}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-5 flex flex-col items-center text-center group hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon size={22} className="text-accent" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{tile.label}</p>
                      <p className="font-semibold text-primary text-sm leading-snug mb-1">{tile.value}</p>
                      <p className="text-xs text-gray-400">{tile.sub}</p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form + Sidebar */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* Form */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
                  <ContactForm />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-4 lg:sticky lg:top-24">

                {/* Office Hours */}
                <div>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Clock size={16} className="text-accent" />
                      <p className="font-semibold text-primary text-sm">Office Hours</p>
                    </div>
                    <div className="space-y-2">
                      {officeHours.map((h) => (
                        <div key={h.day} className="flex justify-between items-start py-1.5 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-500">{h.day}</span>
                          <span className="text-xs font-medium text-primary text-right ml-2">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Walk-ins welcome during office hours.</p>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                    <p className="font-semibold text-primary text-sm mb-4">Direct Contacts</p>
                    <div className="space-y-2">
                      {directContacts.map((c) => (
                        <a
                          key={c.email}
                          href={`mailto:${c.email}`}
                          className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 group"
                        >
                          <div>
                            <p className="text-xs font-medium text-gray-700 group-hover:text-primary transition-colors">{c.label}</p>
                            <p className="text-xs text-gray-400 group-hover:text-accent transition-colors truncate max-w-[180px]">{c.email}</p>
                          </div>
                          <ArrowRight size={12} className="text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <div className="bg-primary rounded-xl p-5">
                    <p className="font-semibold text-white text-sm mb-1">Follow Us</p>
                    <p className="text-xs text-white/60 leading-relaxed mb-4">Stay updated on news, events, and achievements.</p>
                    <div className="flex items-center gap-2">
                      {socials.map((s) => {
                        const Icon = s.icon;
                        return (
                          <a
                            key={s.label}
                            href={s.href}
                            aria-label={s.label}
                            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all"
                          >
                            <Icon size={16} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-8">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Our Location</span>
              </div>
              <AnimatedText text="Find Us" as="h2" className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <MapPin size={15} className="text-accent flex-shrink-0" />
                  <p className="text-sm text-gray-600">KG 15 Ave, Kigali, Rwanda</p>
                  <a
                    href="https://maps.app.goo.gl/forever-tvet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent font-medium hover:underline ml-1"
                  >
                    Get directions ↗
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "480px" }}>
                <iframe
                  title="Forever Tvet Institute location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.341443131092!2d30.07997958260407!3d-1.8676015789512068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca1056ca54f0f%3A0xc2ec88f81b432f89!2sForever%20TVET%20Institute!5e1!3m2!1sen!2srw!4v1772828133636!5m2!1sen!2srw"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">Approximately 10 minutes from Kigali city centre by taxi.</p>
            </div>
          </div>
        </section>

        {/* Department Directory */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Our Courses</span>
              </div>
              <AnimatedText text="Contact the Right Department" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight" baseDelay={100} stagger={60} />
              <div>
                <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-xl mx-auto">
                  Know exactly who you need? Go straight to the right person.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, i) => {
                const Icon = dept.icon;
                return (
                  <div key={i}>
                    <div className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                      <div className="h-0.5 bg-primary" />
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon size={17} className="text-accent" />
                          </div>
                          <p className="font-semibold text-primary text-sm leading-snug">{dept.name}</p>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed mb-3 flex-1">
                          <span className="font-medium text-gray-500">For:</span> {dept.for}
                        </p>
                        <div className="border-t border-gray-50 pt-3 space-y-1">
                          <a href={`mailto:${dept.email}`} className="block text-xs text-accent hover:underline font-medium truncate">{dept.email}</a>
                          <p className="text-xs text-gray-400">{dept.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
