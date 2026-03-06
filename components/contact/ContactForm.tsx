"use client";

import { useState } from "react";
import { CheckCircle } from "@/components/ui/Icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

const subjects = [
  "Admissions & Applications",
  "Fees & Payments",
  "Program Information",
  "Facilities & Campus Visit",
  "Partnerships & Sponsorships",
  "Media & Press",
  "Other",
];

const inputClass = (error: boolean) =>
  `w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-primary ${
    error ? "border-red-300 bg-red-50" : "border-gray-200 bg-white focus:bg-white"
  }`;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(() => `FTI-${String(Date.now()).slice(-5)}`);

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 20) e.message = "Please provide at least 20 characters";
    if (!form.consent) e.consent = "You must agree before submitting";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
        <CheckCircle size={40} className="text-green-600 mb-4" />
        <p className="font-heading font-bold text-xl text-primary mb-2">Message Sent</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Thank you, <strong>{form.firstName}</strong>. We have received your message regarding{" "}
          <strong>{form.subject}</strong> and will respond to{" "}
          <strong>{form.email}</strong> within 1 working day.
        </p>
        <p className="text-xs text-gray-400 font-mono mb-5">Ref: {ref}</p>
        <button
          onClick={() => { setForm(initialData); setErrors({}); setSubmitted(false); }}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <p className="font-heading font-bold text-xl text-primary mb-1">Send Us a Message</p>
        <p className="text-sm text-gray-500 mb-5">
          Fill in the form below and the right person will get back to you within 1 working day.
        </p>
      </div>

      {/* First + Last name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            placeholder="First name"
            className={inputClass(!!errors.firstName)}
          />
          {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            placeholder="Last name"
            className={inputClass(!!errors.lastName)}
          />
          {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
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
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">
            Phone <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+250 7XX XXX XXX"
            className={inputClass(false)}
          />
        </div>
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
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          placeholder="Tell us what you need to know or how we can help…"
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        <p className="text-xs text-gray-400 mt-1">{form.message.trim().length} / 20 characters minimum</p>
        {errors.message && <p className="text-xs text-red-500 mt-0.5">{errors.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            I agree to Forever Tvet Institute processing my enquiry and contacting me at the email or phone number provided.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-500 mt-1 ml-7">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
