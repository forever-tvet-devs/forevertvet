"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn } from "@/components/ui/Icons";
import gsap from "gsap";

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
      { label: "Our Partners", desc: "Industry & academic partnerships", href: "/about/partners" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "Curriculum Overview", desc: "What and how we teach", href: "/academics/curriculum" },
      { label: "Our Courses", desc: "All academic areas", href: "/academics/courses" },
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
      { label: "Announcements", desc: "Official school notices", href: "/announcements" },
      { label: "Events", desc: "Upcoming school happenings", href: "/school-life/events" },
      { label: "Resources", desc: "Downloadable guides & materials", href: "/resources" },
      { label: "Job Offers", desc: "Career & employment opportunities", href: "/jobs" },
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

  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const isScrolled = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // GSAP fullscreen menu animation
  const openMenu = useCallback(() => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.fromTo(
      overlayRef.current,
      { clipPath: "circle(0% at calc(100% - 40px) 35px)" },
      { clipPath: "circle(150% at calc(100% - 40px) 35px)", duration: 0.6, ease: "power3.inOut" }
    );

    tl.fromTo(
      menuItemsRef.current?.querySelectorAll(".mobile-nav-item") ?? [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      "-=0.25"
    );

    tl.fromTo(
      footerRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
      "-=0.15"
    );
  }, []);

  const closeMenu = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setMobileOpen(false);
        setMobileExpanded(null);
        document.body.style.overflow = "";
      },
    });

    tl.to(footerRef.current, { y: 20, opacity: 0, duration: 0.2, ease: "power2.in" });

    tl.to(
      menuItemsRef.current?.querySelectorAll(".mobile-nav-item") ?? [],
      { y: -20, opacity: 0, duration: 0.25, stagger: 0.03, ease: "power2.in" },
      "-=0.1"
    );

    tl.to(
      overlayRef.current,
      { clipPath: "circle(0% at calc(100% - 40px) 35px)", duration: 0.45, ease: "power3.inOut" },
      "-=0.1"
    );

    tlRef.current = tl;
  }, []);

  const toggleMenu = useCallback(() => {
    if (mobileOpen) closeMenu();
    else openMenu();
  }, [mobileOpen, openMenu, closeMenu]);

  const handleNavClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  // Animate sub-items when expanding
  const toggleExpanded = useCallback((label: string) => {
    setMobileExpanded((prev) => {
      const next = prev === label ? null : label;
      if (next) {
        requestAnimationFrame(() => {
          const container = menuItemsRef.current?.querySelector(`[data-sub="${label}"]`);
          if (container) {
            gsap.fromTo(
              container.querySelectorAll(".mobile-sub-item"),
              { x: -12, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: "power2.out" }
            );
          }
        });
      }
      return next;
    });
  }, []);

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
          isScrolled && !mobileOpen ? "bg-white shadow-sm" : mobileOpen ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo + School Name */}
            <Link href="/" className="flex items-center gap-3 shrink-0 relative z-50" onClick={mobileOpen ? handleNavClick : undefined}>
              <div className="relative shrink-0 h-12 w-12 sm:h-14 sm:w-14">
                <Image
                  src="/images/logo-og.png"
                  alt="Forever Tvet Institute"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className={`flex flex-col leading-tight transition-colors ${isScrolled || mobileOpen ? "text-primary" : "text-white"}`}>
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
                className="bg-primary flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-primary-dark transition-all"
              >
                <LogIn size={15} />
                Login
              </Link>
            </div>

            {/* Mobile hamburger — animated morph */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-md"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-[22px] h-[16px] relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                    isScrolled || mobileOpen ? "bg-gray-800" : "bg-white"
                  } ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-[2px] rounded-full transition-all duration-200 origin-center ${
                    isScrolled || mobileOpen ? "bg-gray-800" : "bg-white"
                  } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                    isScrolled || mobileOpen ? "bg-gray-800" : "bg-white"
                  } ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </div>
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

      {/* Mobile fullscreen menu */}
      <div
        ref={overlayRef}
        className={`lg:hidden fixed inset-0 z-40 bg-white ${mobileOpen ? "" : "pointer-events-none"}`}
        style={{ clipPath: "circle(0% at calc(100% - 40px) 35px)" }}
      >
        <div className="h-full flex flex-col pt-[70px]">
          {/* Scrollable nav items */}
          <div ref={menuItemsRef} className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="mobile-nav-item">
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="w-full flex items-center justify-between py-3.5 text-lg font-semibold text-gray-900 active:text-primary transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>

                    {mobileExpanded === item.label && (
                      <div data-sub={item.label} className="pb-3 pl-1">
                        <div className="border-l-2 border-primary/15 pl-4 space-y-0.5">
                          {item.dropdown.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={handleNavClick}
                              className="mobile-sub-item block py-2.5"
                            >
                              <span className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                                {child.label}
                              </span>
                              <span className="block text-xs text-gray-400 mt-0.5">
                                {child.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gray-100" />
                  </div>
                ) : (
                  <div key={item.href} className="mobile-nav-item">
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block py-3.5 text-lg font-semibold text-gray-900 active:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                    <div className="h-px bg-gray-100" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Footer CTA */}
          <div ref={footerRef} className="px-6 pb-8 pt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={handleNavClick}
              className="bg-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              <LogIn size={17} />
              Login
            </Link>
            <p className="text-center text-xs text-gray-400 mt-4">
              Forever Tvet Institute &middot; Kigali, Rwanda
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
