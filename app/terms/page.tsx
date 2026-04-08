import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Terms of Use — Forever Tvet Institute",
  description:
    "The terms and conditions governing your use of the Forever Tvet Institute website.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Terms of Use", href: "/terms" },
];

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the Forever Tvet Institute website (foreverinternational.ac.rw), you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use our website.",
    ],
  },
  {
    title: "2. Use of the Website",
    content: [
      "You may use our website for lawful purposes only. You agree not to use it in any way that violates applicable local, national, or international law, or to transmit any material that is defamatory, offensive, or otherwise objectionable.",
      "You must not attempt to gain unauthorised access to our website, the servers on which it is hosted, or any database connected to it. You must not attack our website via a denial-of-service attack or similar means.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "All content on this website — including text, graphics, logos, images, photographs, videos, and software — is the property of Forever Tvet Institute or its content suppliers and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or republish any content from this website without our prior written consent, except for personal, non-commercial use such as printing a page for your own reference.",
    ],
  },
  {
    title: "4. Accuracy of Information",
    content: [
      "We make every effort to ensure the information on our website is accurate and up to date. However, we do not guarantee that all content is error-free, complete, or current at all times. Programme details, fees, dates, and other information are subject to change without notice.",
      "For the most up-to-date information regarding admissions, fees, or academic programmes, please contact us directly.",
    ],
  },
  {
    title: "5. Online Applications",
    content: [
      "Submitting an application through our website does not guarantee admission. All applications are subject to our standard admissions review process. By submitting an application, you confirm that the information provided is true and complete to the best of your knowledge.",
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      "Our website may contain links to external websites that are not operated by us. We have no control over the content, privacy practices, or availability of these sites. Inclusion of a link does not imply endorsement. We encourage you to review the terms and privacy policies of any third-party site you visit.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Forever Tvet Institute shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website. This includes but is not limited to loss of data, revenue, or anticipated savings.",
      "We do not guarantee that the website will be available at all times or that it will be free from viruses or other harmful components.",
    ],
  },
  {
    title: "8. Indemnification",
    content: [
      "You agree to indemnify and hold harmless Forever Tvet Institute, its directors, staff, and affiliates from any claims, damages, losses, or expenses arising from your use of the website or your violation of these Terms.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Use are governed by and construed in accordance with the laws of the Republic of Rwanda. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Rwanda.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      "We reserve the right to update or modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page. The \"Last updated\" date at the top of this page will be revised accordingly. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions about these Terms of Use, please contact us at info@foreverinternational.ac.rw or visit our campus at KG 15 Ave, Kigali, Rwanda.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Legal"
          title="Terms of Use"
          subCopy="The terms and conditions that govern your use of the Forever Tvet Institute website."
          breadcrumb={breadcrumb}
          backgroundImage="/images/image1.png"
        />

        {/* Last updated */}
        <section className="py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <p className="text-xs text-gray-400">
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
            <div className="mb-10">
              <AnimatedText
                text="Website Terms & Conditions"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5">
                Please read these Terms of Use carefully before using the Forever Tvet Institute website. By accessing or using our site, you agree to be bound by the following terms and conditions.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm text-gray-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
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
