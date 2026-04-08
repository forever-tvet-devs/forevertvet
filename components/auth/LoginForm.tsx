"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormState {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.password) {
      e.password = "Password is required.";
    } else if (form.password.length < 6) {
      e.password = "Password must be at least 6 characters.";
    }
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    router.push("/portal");
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* General error */}
      {errors.general && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-sm text-red-600">{errors.general}</p>
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
          className={`w-full px-4 py-3 rounded-lg border text-sm text-body placeholder-gray-400 outline-none transition-all
            ${errors.email
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
              : "border-gray-200 bg-gray-50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
            }`}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <a href="#" className="text-xs text-primary hover:text-accent transition-colors font-medium">
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="••••••••"
            className={`w-full px-4 py-3 pr-11 rounded-lg border text-sm text-body placeholder-gray-400 outline-none transition-all
              ${errors.password
                ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200"
                : "border-gray-200 bg-gray-50 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
              }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
        {errors.password && <p className="text-xs text-red-500 mt-1.5">{errors.password}</p>}
      </div>

      {/* Remember me */}
      <label className="flex items-center gap-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 accent-primary cursor-pointer"
        />
        <span className="text-sm text-gray-600">Remember me for 30 days</span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-primary w-full py-3.5 text-white font-semibold text-sm rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
            </svg>
            Signing in…
          </>
        ) : (
          "Sign In"
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Portal type hint */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center">
          <p className="text-xs font-semibold text-primary">Student Portal</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Use your student ID email</p>
        </div>
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center">
          <p className="text-xs font-semibold text-primary">Staff Portal</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Use your staff email</p>
        </div>
      </div>

    </form>
  );
}
