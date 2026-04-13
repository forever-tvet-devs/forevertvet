import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Our Leadership Team — Forever Tvet Institute",
  description:
    "Meet the experienced leaders who guide Forever Tvet Institute's vision, operations, and academic excellence.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Leadership Team", href: "/about/leadership" },
];

const leaders = [
  { name: "Dr. Chen Wei",            role: "Executive Director",              image: "/images/me.png" },
  { name: "Ms. Amina Uwimana",       role: "Academic Director",              image: "/images/me.png" },
  { name: "Mr. Jean-Paul Habimana",  role: "Director of Operations",         image: "/images/me.png" },
  { name: "Ms. Liu Fang",            role: "Head of Partnerships",           image: "/images/me.png" },
  { name: "Mr. Emmanuel Nkurunziza", role: "Head of Student Affairs",        image: "/images/me.png" },
  { name: "Ms. Grace Mukamana",      role: "Finance & Administration Manager", image: "/images/me.png" },
];

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        {/* Hero */}
        <PageHeroBanner
          label="Leadership"
          title="Our Leadership Team"
          subCopy="The experienced professionals driving our mission to deliver Rwanda's finest vocational education."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image2.png"
        />

        {/* Leadership Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="text-center mb-16">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
                  Who We Are
                </span>
              </div>
              <AnimatedText
                text="Guided by Experience, Driven by Purpose"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <div key={i}>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-heading font-bold text-lg text-primary">{leader.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{leader.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
