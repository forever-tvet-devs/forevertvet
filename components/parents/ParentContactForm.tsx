"use client";

import { useState } from "react";
import { CheckCircle } from "@/components/ui/Icons";

interface FormData {
  parentName: string;
  studentName: string;
  relationship: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initialData: FormData = {
  parentName: "",
  studentName: "",
  relationship: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  consent: false,
};

const subjects = [
  "Academic Progress",
  "Fees & Payments",
  "Attendance or Conduct",
  "Internship & Placement",
  "Facilities or Safety",
  "General Enquiry",
];

const relationships = ["Parent", "Guardian", "Other"];

const inputClass = (error: boolean) =>
  `w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-primary ${
    error ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
  }`;

export default function ParentContactForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(() => `FTI-PC-2026-${String(Date.now()).slice(-4)}`);

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.parentName.trim()) e.parentName = "Required";
    if (!form.studentName.trim()) e.studentName = "Required";
    if (!form.relationship) e.relationship = "Please select";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 20) e.message = "Please provide at least 20 characters";
    if (!form.consent) e.consent = "You must confirm before submitting";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-4" />
        <p className="font-heading font-bold text-xl text-primary mb-2">Concern Submitted</p>
        <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{form.parentName}</strong>. Your concern regarding{" "}
          <strong>{form.subject}</strong> has been received. The Head Parent and Dean of Students will
          respond within 2 working days.
        </p>
        <p className="text-xs text-gray-400 mt-4 font-mono">Reference: {ref}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Parent name + Student name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.parentName}
            onChange={(e) => set("parentName", e.target.value)}
            placeholder="Parent or guardian name"
            className={inputClass(!!errors.parentName)}
          />
          {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Student&apos;s Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.studentName}
            onChange={(e) => set("studentName", e.target.value)}
            placeholder="Your child's full name"
            className={inputClass(!!errors.studentName)}
          />
          {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
        </div>
      </div>

      {/* Relationship + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Relationship <span className="text-red-500">*</span>
          </label>
          <select
            value={form.relationship}
            onChange={(e) => set("relationship", e.target.value)}
            className={inputClass(!!errors.relationship)}
          >
            <option value="">Select…</option>
            {relationships.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.relationship && <p className="text-xs text-red-500 mt-1">{errors.relationship}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+250 7XX XXX XXX"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-xs font-semibold text-gray-600 block mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="your@email.com"
          className={inputClass(!!errors.email)}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="text-xs font-semibold text-gray-600 block mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          value={form.subject}
          onChange={(e) => set("subject", e.target.value)}
          className={inputClass(!!errors.subject)}
        >
          <option value="">Select a topic…</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="text-xs font-semibold text-gray-600 block mb-1.5">
          Your Concern or Question <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          placeholder="Please describe your concern or question in detail…"
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        <p className="text-xs text-gray-400 mt-1">{form.message.trim().length} / 20 characters minimum</p>
        {errors.message && <p className="text-xs text-red-500 mt-0.5">{errors.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            I confirm that the information above is accurate and I consent to the school processing this enquiry.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-500 mt-1 ml-7">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="bg-primary w-full py-3 text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm shadow-sm mt-2"
      >
        Submit Concern
      </button>
      <p className="text-xs text-gray-400 text-center">We respond to all submissions within 2 working days.</p>
    </form>
  );
}
