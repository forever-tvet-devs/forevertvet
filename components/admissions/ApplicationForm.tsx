"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Pencil } from "@/components/ui/Icons";

type FormData = {
  firstName: string; lastName: string; dob: string; gender: string;
  nationalId: string; phone: string; email: string; district: string;
  schoolName: string; yearCompleted: string; certType: string;
  subjects: string[]; priorVocational: string; priorVocationalDetail: string;
  program: string; secondChoice: string; intake: string;
  payment: string; scholarship: string; scholarshipReason: string; hearAboutUs: string;
  declaration: boolean;
};

const empty: FormData = {
  firstName: "", lastName: "", dob: "", gender: "", nationalId: "", phone: "", email: "", district: "",
  schoolName: "", yearCompleted: "", certType: "", subjects: [], priorVocational: "", priorVocationalDetail: "",
  program: "", secondChoice: "", intake: "", payment: "", scholarship: "", scholarshipReason: "", hearAboutUs: "",
  declaration: false,
};

const programs = [
  "Heavy Machinery Operation (RQF Level 3)",
  "Land Survey & Geomatics (RQF Level 3)",
  "Industrial Electricity (RQF Level 4)",
  "Road Construction Technology (RQF Level 3)",
  "Computer Engineering (RQF Level 4)",
];

const subjectOptions = ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Geography", "History", "English", "French", "Other"];

const rwandaDistricts = ["Bugesera", "Burera", "Gakenke", "Gasabo", "Gatsibo", "Gicumbi", "Gisagara", "Huye", "Kamonyi", "Karongi", "Kayonza", "Kicukiro", "Kirehe", "Muhanga", "Musanze", "Ngoma", "Ngororero", "Nyabihu", "Nyagatare", "Nyamagabe", "Nyamasheke", "Nyanza", "Nyarugenge", "Nyaruguru", "Rubavu", "Ruhango", "Rulindo", "Rusizi", "Rutsiro", "Rwamagana"];

const inputCls = "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";
const labelCls = "text-sm font-medium text-gray-700 block mb-1.5";
const selectCls = inputCls + " cursor-pointer";

const stepLabels = ["Personal Details", "Education", "Program Choice", "Review & Submit"];

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Step {step} of 4</span>
        <span className="text-xs text-gray-400">{stepLabels[step - 1]}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        {stepLabels.map((label, i) => (
          <span key={label} className={`text-xs hidden sm:block ${i + 1 === step ? "text-primary font-semibold" : "text-gray-300"}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(() => "FTI-" + Math.floor(100000 + Math.random() * 900000));

  const set = (field: keyof FormData, value: string | boolean | string[]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleSubject = (s: string) =>
    set("subjects", data.subjects.includes(s) ? data.subjects.filter((x) => x !== s) : [...data.subjects, s]);

  // Basic per-step validation
  const canNext = () => {
    if (step === 1) return data.firstName && data.lastName && data.email && data.phone && data.nationalId && data.dob && data.gender;
    if (step === 2) return data.schoolName && data.yearCompleted && data.certType && data.priorVocational;
    if (step === 3) return data.program && data.intake && data.payment && data.hearAboutUs;
    if (step === 4) return data.declaration;
    return true;
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
        <h2 className="font-heading font-bold text-2xl text-primary mb-3">Application Submitted!</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
          Thank you. We have received your application and will review it within 3–5 working days. Check your email — we will send a confirmation and keep you updated at every step.
        </p>
        <p className="text-xs text-gray-400 mt-4 font-mono">Application reference: {ref}</p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ProgressBar step={step} />

      {/* Step 1 — Personal Details */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="First Name *">
              <input className={inputCls} value={data.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="e.g. Jean-Baptiste" />
            </Field>
            <Field label="Last Name *">
              <input className={inputCls} value={data.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="e.g. Nkurunziza" />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Date of Birth *">
              <input type="date" className={inputCls} value={data.dob} onChange={(e) => set("dob", e.target.value)} />
            </Field>
            <Field label="Gender *">
              <select className={selectCls} value={data.gender} onChange={(e) => set("gender", e.target.value)}>
                <option value="">Select…</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
          </div>
          <Field label="National ID / Passport Number *">
            <input className={inputCls} value={data.nationalId} onChange={(e) => set("nationalId", e.target.value)} placeholder="e.g. 1199980012345678" />
          </Field>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone Number *">
              <input type="tel" className={inputCls} value={data.phone} onChange={(e) => set("phone", e.target.value)} placeholder="e.g. +250 78 000 0000" />
            </Field>
            <Field label="Email Address *">
              <input type="email" className={inputCls} value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="e.g. jean@email.com" />
            </Field>
          </div>
          <Field label="Home District">
            <select className={selectCls} value={data.district} onChange={(e) => set("district", e.target.value)}>
              <option value="">Select district…</option>
              {rwandaDistricts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </Field>
        </div>
      )}

      {/* Step 2 — Education */}
      {step === 2 && (
        <div className="space-y-5">
          <Field label="Secondary School Name *">
            <input className={inputCls} value={data.schoolName} onChange={(e) => set("schoolName", e.target.value)} placeholder="e.g. Lycée de Kigali" />
          </Field>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Year of Completion *">
              <select className={selectCls} value={data.yearCompleted} onChange={(e) => set("yearCompleted", e.target.value)}>
                <option value="">Select year…</option>
                {Array.from({ length: 11 }, (_, i) => 2025 - i).map((y) => <option key={y}>{y}</option>)}
              </select>
            </Field>
            <Field label="Certificate Type *">
              <select className={selectCls} value={data.certType} onChange={(e) => set("certType", e.target.value)}>
                <option value="">Select…</option>
                <option>Rwanda S6 Certificate</option>
                <option>Equivalent Foreign Certificate</option>
                <option>Other</option>
              </select>
            </Field>
          </div>
          <div>
            <p className={labelCls}>Subjects Studied</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {subjectOptions.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer p-2.5 rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.subjects.includes(s)}
                    onChange={() => toggleSubject(s)}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{s}</span>
                </label>
              ))}
            </div>
          </div>
          <Field label="Prior Vocational Training? *">
            <select className={selectCls} value={data.priorVocational} onChange={(e) => set("priorVocational", e.target.value)}>
              <option value="">Select…</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
          {data.priorVocational === "Yes" && (
            <Field label="Please describe briefly">
              <textarea
                className={inputCls + " resize-none"}
                rows={3}
                value={data.priorVocationalDetail}
                onChange={(e) => set("priorVocationalDetail", e.target.value)}
                placeholder="Name of institution, program, and year completed…"
              />
            </Field>
          )}
        </div>
      )}

      {/* Step 3 — Program Choice */}
      {step === 3 && (
        <div className="space-y-5">
          <Field label="Preferred Program *">
            <select className={selectCls} value={data.program} onChange={(e) => set("program", e.target.value)}>
              <option value="">Select program…</option>
              {programs.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Second Choice Program">
            <select className={selectCls} value={data.secondChoice} onChange={(e) => set("secondChoice", e.target.value)}>
              <option value="">No second choice</option>
              {programs.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Intake Preference *">
              <select className={selectCls} value={data.intake} onChange={(e) => set("intake", e.target.value)}>
                <option value="">Select intake…</option>
                <option>January 2026</option>
                <option>July 2026</option>
              </select>
            </Field>
            <Field label="Payment Plan *">
              <select className={selectCls} value={data.payment} onChange={(e) => set("payment", e.target.value)}>
                <option value="">Select…</option>
                <option>Full Payment (save RWF 20,000)</option>
                <option>Two Instalments</option>
              </select>
            </Field>
          </div>
          <Field label="Applying for a Scholarship? *">
            <select className={selectCls} value={data.scholarship} onChange={(e) => set("scholarship", e.target.value)}>
              <option value="">Select…</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
          {data.scholarship === "Yes" && (
            <Field label="Scholarship motivation (max 150 words) *">
              <textarea
                className={inputCls + " resize-none"}
                rows={4}
                value={data.scholarshipReason}
                onChange={(e) => set("scholarshipReason", e.target.value)}
                placeholder="Briefly explain your financial situation and why you are applying for scholarship consideration…"
                maxLength={900}
              />
            </Field>
          )}
          <Field label="How did you hear about us? *">
            <select className={selectCls} value={data.hearAboutUs} onChange={(e) => set("hearAboutUs", e.target.value)}>
              <option value="">Select…</option>
              {["Social Media", "Friend", "Family", "School", "Employer", "Advertisement", "Other"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </Field>
        </div>
      )}

      {/* Step 4 — Review & Submit */}
      {step === 4 && (
        <div className="space-y-4">
          {[
            {
              title: "Personal Details", goTo: 1,
              rows: [
                ["Full Name", `${data.firstName} ${data.lastName}`],
                ["Date of Birth", data.dob],
                ["Gender", data.gender],
                ["National ID", data.nationalId],
                ["Phone", data.phone],
                ["Email", data.email],
                ["District", data.district || "—"],
              ],
            },
            {
              title: "Education", goTo: 2,
              rows: [
                ["School", data.schoolName],
                ["Year Completed", data.yearCompleted],
                ["Certificate", data.certType],
                ["Subjects", data.subjects.join(", ") || "None selected"],
                ["Prior TVET", data.priorVocational],
              ],
            },
            {
              title: "Program Choice", goTo: 3,
              rows: [
                ["Preferred Program", data.program],
                ["Second Choice", data.secondChoice || "None"],
                ["Intake", data.intake],
                ["Payment Plan", data.payment],
                ["Scholarship", data.scholarship],
                ["Heard Via", data.hearAboutUs],
              ],
            },
          ].map((section) => (
            <div key={section.title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-primary text-sm">{section.title}</p>
                <button
                  onClick={() => setStep(section.goTo)}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors font-medium cursor-pointer"
                >
                  <Pencil size={12} />
                  Edit
                </button>
              </div>
              <div className="space-y-1.5">
                {section.rows.map(([label, value]) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-gray-400 w-36 flex-shrink-0">{label}</span>
                    <span className="text-gray-800 font-medium">{value || "—"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Declaration */}
          <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors mt-2">
            <input
              type="checkbox"
              checked={data.declaration}
              onChange={(e) => set("declaration", e.target.checked)}
              className="w-4 h-4 mt-0.5 accent-primary cursor-pointer flex-shrink-0"
            />
            <span className="text-sm text-gray-600 leading-relaxed">
              I confirm that all information provided in this application is true and accurate to the best of my knowledge. I understand that providing false information may result in my application being rejected or my enrolment being cancelled.
            </span>
          </label>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 gap-4">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            ← Previous
          </button>
        ) : (
          <div />
        )}
        {step < 4 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className="px-8 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!canNext()}
            className="flex-1 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-colors shadow-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Submit Application
          </button>
        )}
      </div>

      {step === 4 && (
        <p className="text-xs text-gray-400 text-center mt-3">
          By submitting, you agree to our Privacy Policy. Your data will only be used for admissions processing.
        </p>
      )}
    </div>
  );
}
