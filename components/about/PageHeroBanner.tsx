import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroBannerProps {
  label: string;
  title: string;
  subCopy: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function PageHeroBanner({
  label,
  title,
  subCopy,
  breadcrumb,
  backgroundImage,
}: PageHeroBannerProps) {
  return (
    <section className="relative min-h-[340px] lg:min-h-[420px] flex items-center bg-primary overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 40%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div>
            <nav className="flex items-center gap-0 mb-6 flex-wrap">
              {breadcrumb.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center">
                  {i < breadcrumb.length - 1 ? (
                    <>
                      <Link
                        href={crumb.href}
                        className="text-xs text-white/50 hover:text-white/80 transition-colors tracking-wide"
                      >
                        {crumb.label}
                      </Link>
                      <span className="mx-2 text-white/30 text-xs">/</span>
                    </>
                  ) : (
                    <span className="text-xs text-white/70 tracking-wide">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* Label */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
              {label}
            </span>
          </div>

          {/* Title */}
          <AnimatedText
            text={title}
            as="h1"
            className="font-heading font-bold text-4xl lg:text-5xl text-white leading-tight mb-5"
            baseDelay={300}
            stagger={60}
            triggerOnScroll={false}
          />

          {/* Sub-copy */}
          <div>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              {subCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
