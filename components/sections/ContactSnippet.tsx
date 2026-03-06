"use client";

import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Twitter, Youtube } from "@/components/ui/Icons";

const contactDetails = [
  {
    icon: MapPin,
    label: "KG 15 Ave, Kigali, Rwanda",
    href: null,
  },
  {
    icon: Phone,
    label: "+250 788 000 000",
    href: "tel:+250788000000",
  },
  {
    icon: Mail,
    label: "info@foreverinternational.ac.rw",
    href: "mailto:info@foreverinternational.ac.rw",
  },
  {
    icon: Clock,
    label: "Mon – Fri, 7:30 AM – 4:30 PM",
    href: null,
  },
];

const socials = [
  { icon: Facebook,  label: "Facebook",  href: "#" },
  { icon: Twitter,   label: "Twitter/X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube,   label: "YouTube",   href: "#" },
];

export default function ContactSnippet() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — contact info */}
          <div>
            <FadeInBlur delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Get In Touch
              </span>
            </FadeInBlur>

            <AnimatedText
              text="We're Here to Help"
              as="h2"
              baseDelay={100}
              stagger={60}
              className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-2"
            />

            <FadeInBlur delay={300}>
              <p className="font-semibold text-base text-body mt-4 mb-6">
                Forever Tvet Institute
              </p>
            </FadeInBlur>

            <div className="space-y-4">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <span className={`text-sm leading-relaxed ${item.href ? "text-primary hover:underline" : "text-gray-600"}`}>
                      {item.label}
                    </span>
                  </div>
                );
                return (
                  <FadeInBlur key={item.label} delay={300 + i * 100}>
                    {item.href ? (
                      <a href={item.href}>{content}</a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </FadeInBlur>
                );
              })}
            </div>

            {/* Socials */}
            <FadeInBlur delay={750}>
              <div className="flex items-center gap-2 mt-8">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </FadeInBlur>

            {/* Contact page link */}
            <FadeInBlur delay={850}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:gap-3 transition-all group"
              >
                Full Contact Page & Form
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInBlur>
          </div>

          {/* Right — map */}
          <FadeInBlur delay={300}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: "420px" }}>
              <iframe
                title="Forever Tvet Institute location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.341443131092!2d30.07997958260407!3d-1.8676015789512068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca1056ca54f0f%3A0xc2ec88f81b432f89!2sForever%20TVET%20Institute!5e1!3m2!1sen!2srw!4v1772828133636!5m2!1sen!2srw"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </FadeInBlur>

        </div>
      </div>
    </section>
  );
}
