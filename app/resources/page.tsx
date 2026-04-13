import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, FileText, BookOpen, Download, Shield } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Resources — Forever Tvet Institute",
  description:
    "Downloadable guides, handbooks, forms, and reference materials for students, parents, and prospective applicants.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "#" },
  { label: "Resources", href: "/resources" },
];

const categories = [
  {
    title: "For Prospective Students",
    icon: BookOpen,
    resources: [
      { name: "Admissions Guide 2026", type: "PDF", description: "Everything you need to know about applying to Forever Tvet Institute." },
      { name: "Programme Brochure", type: "PDF", description: "Detailed overview of all five departments and their curricula." },
      { name: "Fees Structure", type: "PDF", description: "Full breakdown of tuition fees for all programs." },
    ],
  },
  {
    title: "For Current Students",
    icon: FileText,
    resources: [
      { name: "Student Handbook 2025–2026", type: "PDF", description: "Campus policies, academic regulations, and student responsibilities." },
      { name: "Workshop Safety Manual", type: "PDF", description: "Mandatory safety protocols for all practical training sessions." },
    ],
  },
  {
    title: "For Parents & Guardians",
    icon: Shield,
    resources: [
      { name: "Parent Information Pack", type: "PDF", description: "An overview of the institute, contact points, and how to stay involved." },
      { name: "Progress Report Template", type: "PDF", description: "Sample of the termly progress report sent to parents." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Downloads & Guides"
          title="Resources"
          subCopy="Handbooks, guides, forms, and reference materials — everything you need in one place."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Resources */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">Library</span>
              <AnimatedText
                text="Downloadable Resources"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base text-gray-500 leading-relaxed mt-4 max-w-2xl">
                All resources below will be available for download once the backend integration is complete. For now, please contact the administration office for any documents you need.
              </p>
            </div>

            <div className="space-y-14">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-body">{cat.title}</h3>
                    </div>

                    <div className="space-y-0">
                      {cat.resources.map((res, j) => (
                        <div key={j} className={`flex items-start justify-between gap-4 py-5 ${j > 0 ? "border-t border-gray-100" : ""}`}>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-body text-sm">{res.name}</h4>
                              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                                {res.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">{res.description}</p>
                          </div>
                          <button
                            disabled
                            className="shrink-0 mt-1 w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-300 cursor-not-allowed"
                            title="Available soon"
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText
              text="Need a Document Not Listed Here?"
              as="h2"
              className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
              baseDelay={100}
              stagger={60}
            />
            <p className="text-base text-gray-600 leading-relaxed mt-4 mb-7">
              Contact our administration office and we will send you what you need directly.
            </p>
            <Link
              href="/contact"
              className="bg-primary inline-flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-sm"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
