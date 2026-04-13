import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Cookies Policy — Forever Tvet Institute",
  description:
    "Understand how Forever Tvet Institute uses cookies and similar technologies on our website.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Cookies Policy", href: "/cookies" },
];

const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    description:
      "These cookies are strictly necessary for the website to function. They enable core features such as page navigation, secure areas, and form submissions. The website cannot operate properly without them.",
    examples: ["Session management", "Security tokens", "Cookie consent preferences"],
  },
  {
    name: "Analytics Cookies",
    required: false,
    description:
      "We use analytics cookies to understand how visitors interact with our website. This data helps us improve site performance, content relevance, and the overall user experience. All analytics data is aggregated and anonymised.",
    examples: ["Vercel Web Analytics", "Page view tracking", "Referral source analysis"],
  },
  {
    name: "Functional Cookies",
    required: false,
    description:
      "Functional cookies remember your preferences and choices to provide a more personalised experience. For example, they may remember your language selection or whether you have dismissed a notification.",
    examples: ["Language preferences", "Dismissed banners", "Form auto-fill"],
  },
];

const sections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better browsing experience, and give site owners useful information about how their site is being used.",
  },
  {
    title: "How Long Do Cookies Last?",
    content:
      "Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually. Our persistent cookies expire after a maximum of 12 months.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some cookies are placed by third-party services that appear on our pages. We use Vercel Web Analytics to measure site performance. These services may set their own cookies. We do not control third-party cookies — please refer to their respective privacy policies for more information.",
  },
  {
    title: "Managing Your Cookies",
    content:
      "Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies at any time. Please note that disabling essential cookies may affect the functionality of certain parts of our website. You can also withdraw your cookie consent at any time by clearing your browser cookies for this site — the consent banner will reappear on your next visit.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Cookies Policy from time to time. When changes are made, we will update the \"Last updated\" date at the top of this page. We encourage you to check back periodically.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about our use of cookies, please contact us at info@foreverinternational.ac.rw or visit our campus at KG 15 Ave, Kigali, Rwanda.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Legal"
          title="Cookies Policy"
          subCopy="A clear explanation of how and why we use cookies on the Forever Tvet Institute website."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Last updated */}
        <section className="py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <p className="text-xs text-gray-400">
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-12">
              <AnimatedText
                text="How We Use Cookies"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5">
                This policy explains the types of cookies used on our website, their purpose, and how you can manage your preferences. We believe in transparency — you should always know what data is being collected and why.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="mb-14">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-accent block mb-6">
                Types of Cookies We Use
              </h3>
              <div className="space-y-5">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className="rounded-xl border border-gray-100 bg-gray-50/50 p-6"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h4 className="text-sm font-semibold text-primary">
                        {cookie.name}
                      </h4>
                      {cookie.required ? (
                        <span className="text-[0.7rem] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                          Always active
                        </span>
                      ) : (
                        <span className="text-[0.7rem] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {cookie.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs bg-white border border-gray-100 rounded-lg px-2.5 py-1 text-gray-500"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
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
