"use client";

import { useState } from "react";
import { Play, CheckCircle } from "@/components/ui/Icons";

export default function VirtualTourEmbed() {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const e: Partial<typeof formData> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.date) e.date = "Please choose a preferred date";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  return (
    <div>
      {/* Tour embed placeholder */}
      <div className="rounded-2xl overflow-hidden bg-gray-900 relative aspect-video mb-6">
        {/* Diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }}
        />
        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-5 shadow-xl">
            <Play size={32} className="text-white ml-1" />
          </div>
          <p className="text-white font-heading font-bold text-2xl lg:text-3xl mb-2">Interactive 360° Tour</p>
          <p className="text-white/60 text-sm max-w-md leading-relaxed">
            Virtual tour launching soon. In the meantime, book a physical campus visit below — we would love to show you around in person.
          </p>
        </div>
      </div>

      {/* Visit booking form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 max-w-xl mx-auto">
          <p className="font-heading font-bold text-xl text-primary mb-1">Book a Campus Visit</p>
          <p className="text-sm text-gray-500 mb-6">Our admissions team will confirm your visit within 1 working day.</p>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Your Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-primary ${errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+250 7XX XXX XXX"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-primary ${errors.phone ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Preferred Visit Date <span className="text-red-500">*</span></label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 outline-none transition-colors focus:border-primary ${errors.date ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
              />
              {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
          >
            Request Visit
          </button>
          <p className="text-xs text-gray-400 mt-3 text-center">Campus visits run Monday – Friday, 9:00 AM – 3:00 PM.</p>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
          <CheckCircle size={36} className="text-green-600 mx-auto mb-3" />
          <p className="font-heading font-bold text-xl text-primary mb-2">Visit Request Received</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Our admissions team will call you within 1 working day to confirm your visit on <strong>{new Date(formData.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
