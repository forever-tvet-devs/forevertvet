import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedText from "@/components/ui/AnimatedText";
import { posts } from "@/components/news/newsData";
import { Calendar, Clock, ArrowRight, ChevronLeft } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found — Forever Tvet Institute" };
  return {
    title: `${post.title} — Forever Tvet Institute`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related: same category, excluding current, max 3
  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  // Fallback: fill from other posts if not enough
  const fallbackRelated =
    related.length >= 2
      ? related
      : [
          ...related,
          ...posts.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length),
        ];

  return (
    <>
      <Navbar />
      <main className="pt-[70px]">

        {/* Hero */}
        <div className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden bg-primary">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 py-16 lg:py-20 flex flex-col justify-end min-h-[420px] lg:min-h-[520px]">
            <div>
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors mb-6"
              >
                <ChevronLeft size={14} /> Back to News
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>

            <AnimatedText
              text={post.title}
              as="h1"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl text-white leading-tight max-w-4xl"
              baseDelay={200}
              stagger={40}
              triggerOnScroll={false}
            />
          </div>
        </div>

        {/* Article body */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">

            {/* Excerpt — styled as lead paragraph */}
            <div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-accent pl-5 mb-10">
                {post.excerpt}
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-6">
              {post.body.map((para, i) => (
                <div key={i}>
                  <p className="text-base text-gray-600 leading-relaxed">{para}</p>
                </div>
              ))}
            </div>

            {/* Divider + meta */}
            <div>
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-white">FT</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Forever Tvet Institute</p>
                    <p className="text-xs text-gray-400">Published {post.date}</p>
                  </div>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group"
                >
                  <ChevronLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                  All News
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {fallbackRelated.length > 0 && (
          <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-2">More from Us</span>
                  </div>
                  <AnimatedText
                    text="Related Articles"
                    as="h2"
                    className="font-heading font-bold text-2xl lg:text-3xl text-body leading-tight"
                    baseDelay={100}
                    stagger={55}
                  />
                </div>
                <div>
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all group flex-shrink-0"
                  >
                    View All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {fallbackRelated.map((rel, i) => (
                  <div key={i}>
                    <Link
                      href={`/news/${rel.slug}`}
                      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden relative flex-shrink-0">
                        <Image
                          src={rel.imageSrc}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1 gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${rel.categoryColor}`}>
                            {rel.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={11} /> {rel.date}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-body leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                          {rel.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all mt-auto">
                          Read More <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4A843 0,#D4A843 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4 text-center">
            <AnimatedText text="Ready to Be Part of the Story?" as="h2" className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight mb-4" baseDelay={0} stagger={55} />
            <div>
              <p className="text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-8">
                Apply to Forever Tvet Institute and join a community that achieves results.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions/apply" className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">Apply Now</Link>
                <Link href="/news" className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">Back to News</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
