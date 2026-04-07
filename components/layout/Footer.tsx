import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "@/components/ui/Icons";

const about = [
  { label: "Our Story",        href: "/about/our-story" },
  { label: "Vision & Mission", href: "/about/vision-mission" },
  { label: "Headmaster",       href: "/about/headmaster" },
  { label: "Staff & Faculty",  href: "/about/staff-faculty" },
  { label: "Accreditations",   href: "/about/accreditations" },
];

const programmes = [
  { label: "Curriculum Overview",   href: "/academics/curriculum" },
  { label: "Departments",           href: "/academics/departments" },
  { label: "Academic Calendar",     href: "/academics/calendar" },
  { label: "Results",               href: "/academics/results" },
];

const admissions = [
  { label: "How to Apply",     href: "/admissions/how-to-apply" },
  { label: "Apply Online",     href: "/admissions/apply" },
  { label: "Requirements",     href: "/admissions/requirements" },
  { label: "Fees & Finance",   href: "/admissions/fees" },
  { label: "FAQs",             href: "/admissions/faqs" },
];

const schoolLife = [
  { label: "School Life",      href: "/school-life" },
  { label: "Gallery",          href: "/school-life/gallery" },
  { label: "Events",           href: "/school-life/events" },
  { label: "Clubs",            href: "/school-life/clubs" },
  { label: "Sports",           href: "/school-life/sports" },
  { label: "Facilities",       href: "/school-life/facilities" },
  { label: "Virtual Tour",     href: "/school-life/virtual-tour" },
];

const socials = [
  { icon: Facebook,  label: "Facebook",  href: "#" },
  { icon: Twitter,   label: "Twitter/X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube,   label: "YouTube",   href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#163560" }}>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* Brand column — spans 2 on lg */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/images/forever_tvet_white_transparent.png"
                alt="Forever Tvet Institute"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Nationally accredited TVET programmes in Heavy Machinery, Land Survey, Industrial Electricity,
              Road Construction, and Computer Engineering. Preparing Rwanda's workforce since 2018.
            </p>

            {/* Contact snippet */}
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5 text-accent/60" />
                KG 15 Ave, Kigali, Rwanda
              </li>
              <li>
                <a href="tel:+250788000000" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone size={14} className="shrink-0 text-accent/60" />
                  +250 788 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@foreverinternational.ac.rw" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                  <Mail size={14} className="shrink-0 text-accent/60" />
                  info@foreverinternational.ac.rw
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">About</h4>
            <ul className="space-y-2.5">
              {about.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Academics</h4>
            <ul className="space-y-2.5">
              {programmes.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Admissions</h4>
            <ul className="space-y-2.5">
              {admissions.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Life */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">School Life</h4>
            <ul className="space-y-2.5">
              {schoolLife.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mt-7 mb-4">More</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/news" className="text-sm text-white/55 hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link href="/parents" className="text-sm text-white/55 hover:text-white transition-colors">Parents Corner</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/55 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-white/55 hover:text-white transition-colors">Student / Staff Login</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} Forever Tvet Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Contact
            </Link>
            <Link href="/admissions/faqs" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              FAQs
            </Link>
            <Link href="/admissions/apply" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>

        {/* Oversized brand name */}
        <div className="overflow-hidden px-3 sm:px-4 md:px-4 lg:px-4 select-none pointer-events-none text-center" aria-hidden="true">
          <p
            className="font-heading font-bold leading-none tracking-tighter whitespace-nowrap"
            style={{
              fontSize: "clamp(16px, 7.5vw, 192px)",
              color: "rgba(255,255,255,0.07)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 100%)",
              paddingBottom: "0.08em",
            }}
          >
            Forever Tvet Institute
          </p>
        </div>
      </div>

    </footer>
  );
}
