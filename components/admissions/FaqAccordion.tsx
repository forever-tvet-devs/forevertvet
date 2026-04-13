"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/Icons";

type Category = "All" | "Eligibility" | "Application" | "Fees & Payment" | "Programs" | "Student Life";

interface Faq {
  category: Exclude<Category, "All">;
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  // Eligibility
  { category: "Eligibility", question: "Do I need previous experience in my chosen field?", answer: "No prior experience is required. All five programs are designed to teach from the ground up. You will learn everything from scratch in a structured, supportive environment — that is the whole point of vocational training." },
  { category: "Eligibility", question: "Is there a minimum age requirement?", answer: "Yes. All applicants must be at least 17 years old as of the intake start date. There is no upper age limit — we welcome adult learners who are career-switching or upskilling." },
  { category: "Eligibility", question: "Can I apply if I did not complete secondary school?", answer: "The minimum requirement is a secondary school leaving certificate (S6 or equivalent). If your situation is unusual — for example, you completed schooling in another country — contact our admissions team to discuss your options directly." },
  { category: "Eligibility", question: "Do you accept international students?", answer: "Yes. We welcome applications from students across East Africa and beyond. International applicants follow the same process but must submit certified translations of any documents not in English or French." },

  // Application
  { category: "Application", question: "How long does the application take?", answer: "The online form takes approximately 15–20 minutes to complete. You can save your progress and return to it within 7 days — so there is no need to rush." },
  { category: "Application", question: "Can I apply for more than one program?", answer: "You can indicate a first and second preference on your application. If your first choice program is full for the selected intake, you will automatically be considered for your second choice." },
  { category: "Application", question: "When will I receive a response after applying?", answer: "Our admissions team reviews applications within 3–5 working days. You will receive an email update regardless of the outcome — we do not leave applicants waiting without a response." },
  { category: "Application", question: "Can I change my program choice after submitting?", answer: "Yes, if the intake is not yet full for your preferred program. Contact the admissions team as soon as possible after submitting if you wish to change your selection." },
  { category: "Application", question: "Is there an interview as part of the process?", answer: "There is no formal interview. Some programs include a short practical assessment at orientation, but this is not a gate — it helps us understand your starting point and place you in the right support group." },

  // Fees & Payment
  { category: "Fees & Payment", question: "What does the total fee include?", answer: "The total fee covers full program tuition, all lab and equipment usage, learning materials, your internship placement service, the national RQF certification exam fee, and certificate issuance. There are no hidden extras." },
  { category: "Fees & Payment", question: "Is the registration fee refundable?", answer: "No. The registration fee of RWF 50,000 is non-refundable. It is deducted from your total program fee once you enrol. It secures your place in the intake." },
  { category: "Fees & Payment", question: "Can fees be paid by a sponsor or employer?", answer: "Yes. Corporate or institutional sponsors can pay on behalf of a student. Contact our finance office for a sponsorship invoice and the details of our bank account. We issue official receipts for all payments." },

  // Programs
  { category: "Programs", question: "Which program is best for me if I am not sure?", answer: "Our admissions team offers a free 15-minute guidance conversation — in person or by phone. Contact us or visit during office hours (Monday to Friday, 8:00 AM – 4:00 PM) and we will help you choose." },
  { category: "Programs", question: "Can I switch programs after I have started?", answer: "Program transfers are possible within the first two weeks of Phase 1, subject to availability in your target program. After that, you would need to complete the current intake and re-apply for the new program at the next intake." },
  { category: "Programs", question: "Are the programs full-time or part-time?", answer: "All programs are full-time. Classes run Monday to Friday, 8:00 AM – 4:00 PM. We do not currently offer part-time or evening options, though we hope to in future." },
  { category: "Programs", question: "Is the internship guaranteed?", answer: "Yes. Every enrolled student receives a confirmed internship placement with one of our 30+ industry partners. It is a structural part of every program — not optional, not competitive. If you are enrolled, you have an internship." },
  { category: "Programs", question: "What qualification will I receive at the end?", answer: "A National TVET Certificate registered on the Rwanda Qualifications Framework (RQF) at Level 3 or Level 4, depending on your program. The certificate is issued by the Rwanda Workforce Development Authority and is nationally recognised." },

  // Student Life
  { category: "Student Life", question: "Is accommodation available on campus?", answer: "We do not currently offer on-campus accommodation. However, we maintain a list of recommended nearby lodgings for students who are relocating to Kigali for study. Contact us for the current list." },
  { category: "Student Life", question: "What are the class hours?", answer: "Monday to Friday, 8:00 AM – 4:00 PM. Some programs may have occasional Saturday sessions for intensive lab work — these are scheduled in advance and communicated at the start of the intake." },
  { category: "Student Life", question: "Is there a student support service?", answer: "Yes. We have a dedicated student counsellor and a Dean of Students. Support is available for academic, personal, and career concerns. You do not need an appointment — drop in during support hours or contact the Dean's office directly." },
  { category: "Student Life", question: "What happens during the internship phase?", answer: "You are placed with a partner company for approximately 6 weeks. You work full-time during normal business hours, may receive a stipend from the employer, and are assessed by both the company supervisor and our faculty. We monitor all placements actively." },
  { category: "Student Life", question: "Will I have access to the alumni network after graduating?", answer: "Yes. All graduates are added to the Forever Tvet alumni network, which includes job postings, industry networking events, mentorship connections, and continued career support. Alumni access is free and lifelong." },
];

const categories: Category[] = ["All", "Eligibility", "Application", "Fees & Payment", "Programs", "Student Life"];

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  return (
    <div>
      {/* Category filter */}
      <div>
        <div className="overflow-x-auto -mx-4 px-4 pb-2 mb-8">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className={`${i < filtered.length - 1 ? "border-b border-gray-100" : ""}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50/60 transition-colors group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-primary text-sm pr-4 group-hover:text-accent transition-colors duration-150">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
