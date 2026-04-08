"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight } from "@/components/ui/Icons";

const partners = [
  { name: "Rwanda TVET Board", logo: "/images/Partners/rtb-logo.jpg", href: "https://www.rtb.gov.rw" },
  { name: "State Grid", logo: "/images/Partners/state_grid.jpg", href: "#" },
  { name: "Rwanda Energy Group", logo: "/images/Partners/REG-logo.png", href: "https://www.reg.rw" },
  { name: "NPD", logo: "/images/Partners/npd-logo.png", href: "#" },
  { name: "China Southern Power Grid", logo: "/images/Partners/china_southern_power_grid_company_limited_logo.jpg", href: "#" },
  { name: "WDA", logo: "/images/Partners/WDA.jpeg", href: "#" },
  { name: "JTJS", logo: "/images/Partners/jtjs0.png", href: "#" },
  { name: "CCCC", logo: "/images/Partners/cccc2-768x432.jpg", href: "#" },
  { name: "Beijing Forever Technology", logo: "/images/Partners/1361904.png", href: "http://www.ieforever.com/" },
  { name: "CECEP", logo: "/images/Partners/CECEP-logo.jpg", href: "#" },
  { name: "China Railway Group", logo: "/images/Partners/China_Railway_Group_logo.png", href: "#" },
  { name: "SNPTC", logo: "/images/Partners/State_Nuclear_Power_Technology_Company_(SNPTC).svg.png", href: "#" },
  { name: "SPIC", logo: "/images/Partners/spic-logo.png", href: "#" },
  { name: "China Datang Corporation", logo: "/images/Partners/ChinaDatangCorporationLogo.png", href: "#" },
  { name: "Zhengzhou University", logo: "/images/Partners/zhengzouh.jpg", href: "#" },
  { name: "Shanghai University of Electric Power", logo: "/images/Partners/Shanghai_University_of_Electric_Power_logo.png", href: "#" },
  { name: "Jinhua", logo: "/images/Partners/jinhua.webp", href: "#" },
  { name: "Xilin", logo: "/images/Partners/xilin.jpg", href: "#" },
  { name: "Swisscontact", logo: "/images/Partners/swis-contact.png", href: "#" },
  { name: "Horizon Energy", logo: "/images/Partners/horizon-energy.png", href: "#" },
  { name: "Fondazione Marcegaglia", logo: "/images/Partners/fondazione-marcegaglia.png", href: "#" },
  { name: "GIZ", logo: "/images/Partners/giz.jpg", href: "#" },
  { name: "Maison Shalom", logo: "/images/Partners/xmaison-shaloM.png", href: "#" },
  { name: "Real Contractors", logo: "/images/Partners/real-contractors.jpg", href: "#" },
  { name: "FDI", logo: "/images/Partners/fdi.jpg", href: "#" },
  { name: "Praxis Ruanda BIWE", logo: "/images/Partners/Praxis_Ruanda-BIWE_logo.gif", href: "#" },
];

export default function PartnersMarquee() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
              Trusted By Industry
            </span>
            <AnimatedText
              text="Our Partners"
              as="h2"
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <p className="text-base text-gray-500 leading-relaxed mt-3 max-w-lg">
              We collaborate with Rwanda&apos;s leading employers and institutions to connect graduates to real careers.
            </p>
          </div>
          <Link
            href="/about/partners"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group shrink-0"
          >
            View All Partners
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 overflow-hidden">
        <Marquee
          speed={35}
          gradient
          gradientColor="#F9FAFB"
          gradientWidth={80}
          pauseOnHover
          autoFill
        >
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 block opacity-80 hover:opacity-100 transition-all duration-300"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={72}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
