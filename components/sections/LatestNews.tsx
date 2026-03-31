import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "@/components/ui/Icons";
import { posts } from "@/components/news/newsData";

const latestPosts = posts.slice(0, 3);

export default function LatestNews() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Stay Informed
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-2">
              Latest News & Updates
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group shrink-0"
          >
            View All News
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/news/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-body leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
