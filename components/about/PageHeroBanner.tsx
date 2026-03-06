import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import FadeInBlur from "@/components/ui/FadeInBlur";

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
  overlayOpacity?: number;
}

export default function PageHeroBanner({
  label,
  title,
  subCopy,
  breadcrumb,
  backgroundImage,
  overlayOpacity = 0.65,
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

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary"
        style={{ opacity: backgroundImage ? overlayOpacity : 1 }}
      />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4A843 0, #D4A843 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <FadeInBlur delay={100} triggerOnScroll={false}>
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
          </FadeInBlur>

          {/* Label */}
          <FadeInBlur delay={200} triggerOnScroll={false}>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-4">
              {label}
            </span>
          </FadeInBlur>

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
          <FadeInBlur delay={500} triggerOnScroll={false}>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              {subCopy}
            </p>
          </FadeInBlur>
        </div>
      </div>
    </section>
  );
}
