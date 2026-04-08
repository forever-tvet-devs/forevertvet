"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "forever-cookie-consent";
const EXIT_DURATION = 400;

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setMounted(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = useCallback((choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setLeaving(true);
    setTimeout(() => setMounted(false), EXIT_DURATION);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:p-6 ${
          leaving
            ? "animate-[slideDown_0.4s_ease-in_forwards]"
            : "animate-[slideUp_0.5s_ease-out]"
        }`}
      >
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-.5 4 4 0 0 1-.5-5A10 10 0 0 0 12 2Z"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path
                  d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-.5 4 4 0 0 1-.5-5A10 10 0 0 0 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="10" r="1.2" fill="currentColor" />
                <circle cx="12" cy="14" r="1.2" fill="currentColor" />
                <circle cx="9" cy="17" r="1" fill="currentColor" />
                <circle cx="15" cy="11" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-[0.95rem] font-semibold text-gray-900">
              We value your privacy
            </h3>
          </div>
          <button
            onClick={() => dismiss("declined")}
            className="mt-0.5 rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Dismiss cookie notice"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <p className="mb-4 text-[0.82rem] leading-relaxed text-gray-500">
          We use cookies to enhance your browsing experience, serve personalized
          content, and analyze our traffic. By clicking &ldquo;Accept&rdquo;, you
          consent to our use of cookies. Read our{" "}
          <Link href="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/cookies" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">Cookies Policy</Link>.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => dismiss("accepted")}
            className="bg-primary rounded-lg px-4 py-2 text-[0.82rem] font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={() => dismiss("declined")}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-[0.82rem] font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
