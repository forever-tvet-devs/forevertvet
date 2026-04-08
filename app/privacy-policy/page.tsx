import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeroBanner from "@/components/about/PageHeroBanner";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Privacy Policy — Forever Tvet Institute",
  description:
    "Learn how Forever Tvet Institute collects, uses, and protects your personal information.",
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly when you apply for admission, register for events, subscribe to our newsletter, or contact us through our website. This may include your name, email address, phone number, national ID number, date of birth, academic records, and any other details you submit voluntarily.",
      "We also collect certain information automatically when you visit our website, including your IP address, browser type, device information, pages visited, and the date and time of your visit. This is gathered through cookies and similar technologies as described in our Cookies Policy.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to process admissions applications, communicate with prospective and current students, deliver educational services, improve our website and user experience, send relevant updates and newsletters (with your consent), comply with legal and regulatory obligations, and protect the safety and security of our community.",
    ],
  },
  {
    title: "3. Legal Basis for Processing",
    content: [
      "We process your personal data based on one or more of the following legal grounds: your consent, the performance of a contract (such as your enrolment agreement), compliance with legal obligations under Rwandan law, and our legitimate interests in operating and improving our institution — provided these do not override your fundamental rights.",
    ],
  },
  {
    title: "4. Data Sharing & Disclosure",
    content: [
      "We do not sell your personal information. We may share your data with trusted third parties only when necessary, including government and regulatory bodies (such as the Rwanda TVET Board), internship and employment partners (with your consent), technology service providers who help us operate our website and systems, and professional advisors such as auditors or legal counsel.",
      "All third-party processors are contractually required to handle your data securely and only for the purposes we specify.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by Rwandan law. Admissions records are retained for the duration of your studies and for a minimum of five years after graduation. Website analytics data is retained in anonymised form and is not linked back to individual users.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), restricted access to personal data on a need-to-know basis, regular security reviews of our systems, and secure storage of physical records on campus.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Depending on applicable law, you may have the right to access the personal data we hold about you, request correction of inaccurate or incomplete data, request deletion of your data (subject to legal retention requirements), withdraw your consent at any time where processing is based on consent, and lodge a complaint with the relevant data protection authority.",
      "To exercise any of these rights, please contact us using the details provided below.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our website is not directed at children under the age of 16. We do not knowingly collect personal information from children under 16 without parental or guardian consent. If you believe we have collected such information, please contact us immediately so we can take appropriate action.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will revise the \"Last updated\" date at the top of this page. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at: info@foreverinternational.ac.rw or visit our campus at KG 15 Ave, Kigali, Rwanda.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <PageHeroBanner
          label="Legal"
          title="Privacy Policy"
          subCopy="How we collect, use, and protect your personal information — explained transparently and in plain language."
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
                text="Your Privacy Matters to Us"
                as="h2"
                className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight"
                baseDelay={100}
                stagger={60}
              />
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-5">
                Forever Tvet Institute is committed to safeguarding the privacy of our students, prospective applicants, website visitors, and community members. This policy explains what information we collect, why we collect it, and how we protect it.
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
