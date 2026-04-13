import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Partners — Forever Tvet Institute",
  description:
    "Discover the industry and academic partners who help Forever Tvet Institute connect graduates to real-world careers.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Partners", href: "/about/partners" },
];

const partners = [
  { name: "Rwanda TVET Board", logo: "/images/Partners/rtb-logo.jpg", url: "#" },
  { name: "State Grid", logo: "/images/Partners/state_grid.jpg", url: "#" },
  { name: "Rwanda Energy Group", logo: "/images/Partners/REG-logo.png", url: "#" },
  { name: "NPD", logo: "/images/Partners/npd-logo.png", url: "#" },
  { name: "China Southern Power Grid", logo: "/images/Partners/china_southern_power_grid_company_limited_logo.jpg", url: "#" },
  { name: "WDA", logo: "/images/Partners/WDA.jpeg", url: "#" },
  { name: "JTJS", logo: "/images/Partners/jtjs0.png", url: "#" },
  { name: "CCCC", logo: "/images/Partners/cccc2-768x432.jpg", url: "#" },
  { name: "Beijing Forever Technology", logo: "/images/Partners/1361904.png", url: "#" },
  { name: "CECEP", logo: "/images/Partners/CECEP-logo.jpg", url: "#" },
  { name: "China Railway Group", logo: "/images/Partners/China_Railway_Group_logo.png", url: "#" },
  { name: "SNPTC", logo: "/images/Partners/State_Nuclear_Power_Technology_Company_(SNPTC).svg.png", url: "#" },
  { name: "SPIC", logo: "/images/Partners/spic-logo.png", url: "#" },
  { name: "China Datang Corporation", logo: "/images/Partners/ChinaDatangCorporationLogo.png", url: "#" },
  { name: "Zhengzhou University", logo: "/images/Partners/zhengzouh.jpg", url: "#" },
  { name: "Shanghai University of Electric Power", logo: "/images/Partners/Shanghai_University_of_Electric_Power_logo.png", url: "#" },
  { name: "Jinhua", logo: "/images/Partners/jinhua.webp", url: "#" },
  { name: "Xilin", logo: "/images/Partners/xilin.jpg", url: "#" },
  { name: "Swisscontact", logo: "/images/Partners/swis-contact.png", url: "#" },
  { name: "Horizon Energy", logo: "/images/Partners/horizon-energy.png", url: "#" },
  { name: "Fondazione Marcegaglia", logo: "/images/Partners/fondazione-marcegaglia.png", url: "#" },
  { name: "GIZ", logo: "/images/Partners/giz.jpg", url: "#" },
  { name: "Maison Shalom", logo: "/images/Partners/xmaison-shaloM.png", url: "#" },
  { name: "Real Contractors", logo: "/images/Partners/real-contractors.jpg", url: "#" },
  { name: "FDI", logo: "/images/Partners/fdi.jpg", url: "#" },
  { name: "Praxis Ruanda BIWE", logo: "/images/Partners/Praxis_Ruanda-BIWE_logo.gif", url: "#" },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Partnerships"
          title="Our Partners"
          subCopy="We work with Rwanda's leading employers and institutions to ensure every graduate steps into a real career on day one."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Partners Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-16">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Trusted By Industry
                </span>
              </div>
              <AnimatedText
                text="Companies & Institutions We Work With"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={56}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold text-primary leading-snug">{partner.name}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText
              text="Become a Partner"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight mb-3"
              baseDelay={0}
              stagger={60}
            />
            <div>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                Interested in partnering with Forever Tvet Institute? We welcome new industry and academic collaborations that benefit our students and Rwanda's workforce.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
