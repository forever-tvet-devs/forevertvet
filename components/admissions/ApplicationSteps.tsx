import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

interface Step {
  number: number;
  title: string;
  duration: string;
  description: string;
  action?: { label: string; href: string };
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Your Program",
    duration: "~2 min",
    description:
      "Browse our five vocational programs and select the one that best matches your career goals. Each program leads directly to a specific set of roles in high-demand industries. If you are unsure, our admissions team can help you decide.",
    action: { label: "Explore Programs", href: "/academics/departments" },
  },
  {
    number: 2,
    title: "Check Requirements",
    duration: "~5 min",
    description:
      "Review the entry requirements for your chosen program. Requirements vary slightly by program level — RQF Level 3 programs have general academic requirements while Level 4 programs may ask for specific subjects.",
    action: { label: "View Requirements", href: "/admissions/requirements" },
  },
  {
    number: 3,
    title: "Complete the Online Form",
    duration: "~15 min",
    description:
      "Fill in the online application form with your personal details, education history, and program choice. You will need your national ID and school leaving certificate before you start.",
    action: { label: "Start Application", href: "/admissions/apply" },
  },
  {
    number: 4,
    title: "Submit Supporting Documents",
    duration: "~3 min",
    description:
      "Upload a copy of your national ID and school leaving certificate at the end of the form. Scanned copies or clear photographs taken with a smartphone are accepted.",
  },
  {
    number: 5,
    title: "Await Review",
    duration: "3–5 business days",
    description:
      "Our admissions team reviews every application manually — no automated rejections. You will receive an email update within 3–5 working days of submission, regardless of the outcome.",
  },
  {
    number: 6,
    title: "Receive Your Offer",
    duration: "~1 day",
    description:
      "Successful applicants receive a formal offer letter by email. Accept online, pay your registration fee, and your place is confirmed. We will then send you everything you need for Orientation Day.",
    action: { label: "View Fees", href: "/admissions/fees" },
  },
];

export default function ApplicationSteps() {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="flex gap-6 items-start">
            {/* Step indicator column */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shadow-md z-10">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-primary/20 mt-1" />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-2">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                <span className="text-xs rounded-full bg-gray-100 text-gray-500 px-3 py-1 whitespace-nowrap flex-shrink-0">
                  {step.duration}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              {step.action && (
                <Link
                  href={step.action.href}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-accent transition-colors group"
                >
                  {step.action.label}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
