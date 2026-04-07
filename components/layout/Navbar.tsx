"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, LogIn } from "@/components/ui/Icons";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", desc: "The history of our school", href: "/about/our-story" },
      { label: "Vision & Mission", desc: "Our purpose and values", href: "/about/vision-mission" },
      { label: "Meet the Headmaster", desc: "A message from leadership", href: "/about/headmaster" },
      { label: "Our Leadership Team", desc: "The team guiding our institution", href: "/about/leadership" },
      { label: "Accreditation", desc: "Our certifications & standards", href: "/about/accreditations" },
      { label: "Our Partners", desc: "Industry & academic partnerships", href: "/about/partners" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "Curriculum Overview", desc: "What and how we teach", href: "/academics/curriculum" },
      { label: "Departments & Subjects", desc: "All academic areas", href: "/academics/departments" },
      { label: "Academic Calendar", desc: "Dates and schedules", href: "/academics/calendar" },
      { label: "Results & Achievements", desc: "Our track record", href: "/academics/results" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    dropdown: [
      { label: "Requirements", desc: "Entry requirements", href: "/admissions/requirements" },
      { label: "Fees Structure", desc: "Tuition and costs", href: "/admissions/fees" },
      { label: "FAQs", desc: "Common questions answered", href: "/admissions/faqs" },
    ],
  },
  {
    label: "School Life",
    href: "/school-life",
    dropdown: [
      { label: "Gallery", desc: "Photos from campus life", href: "/school-life/gallery" },
      { label: "360° Virtual Tour", desc: "Explore our facilities", href: "/school-life/virtual-tour" },
      { label: "Clubs & Extracurriculars", desc: "Beyond the classroom", href: "/school-life/clubs" },
      { label: "Facilities", desc: "Our world-class infrastructure", href: "/school-life/facilities" },
      { label: "Parents Corner", desc: "Resources for parents", href: "/parents" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    dropdown: [
      { label: "News", desc: "Latest updates & announcements", href: "/news" },
      { label: "Events", desc: "Upcoming school happenings", href: "/school-life/events" },
      { label: "Resources", desc: "Downloadable guides & materials", href: "/resources" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // On non-home pages the navbar is always in the white/scrolled state.
  // On the home page it starts transparent and switches on scroll.
  const isScrolled = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo + School Name */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative shrink-0 h-12 w-12 sm:h-14 sm:w-14">
                <Image
                  src="/images/logo-og.png"
                  alt="Forever Tvet Institute"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className={`hidden sm:flex flex-col leading-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
                <span className="font-heading font-bold text-sm lg:text-base tracking-wide">Forever Tvet</span>
                <span className="text-[10px] lg:text-xs tracking-widest uppercase opacity-70">Institute</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        isScrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                        style={{ minWidth: "240px", animation: "navDropIn 0.15s ease forwards" }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col px-4 py-3 hover:bg-primary/5 group/item transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-800 group-hover/item:text-primary transition-colors">
                              {child.label}
                            </span>
                            <span className="text-xs text-gray-400 mt-0.5">{child.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isScrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex shrink-0 items-center gap-3">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-all"
              >
                <LogIn size={15} />
                Login
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <style>{`
          @keyframes navDropIn {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 text-gray-400 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 border-l-2 border-primary/20 pl-4 mt-1 mb-2 space-y-1">
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}

          <div className="pt-6 border-t border-gray-100 mt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              <LogIn size={16} />
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
