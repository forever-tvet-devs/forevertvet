import type { Metadata } from "next";
import { DM_Sans, Aboreto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/ui/SmoothScroll"
import CookieConsent from "@/components/ui/CookieConsent"
import SplashScreen from "@/components/ui/SplashScreen"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forever Tvet Institute — Vocational Training in Kigali, Rwanda",
  description:
    "Founded in 2018, Forever Tvet Institute provides industry-ready vocational training — short courses in heavy machinery, solar technology, and EV cars, plus 3-year programmes in computer systems, electrical technology, land surveying, and public works. Enrolment now open.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${aboreto.variable} font-sans antialiased`}>
        <SplashScreen />
        <SmoothScroll />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
