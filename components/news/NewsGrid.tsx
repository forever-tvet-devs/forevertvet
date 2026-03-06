"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { Calendar, ArrowRight } from "@/components/ui/Icons";
import { posts } from "@/components/news/newsData";

type Category = "All" | "Academic" | "Community" | "Admissions" | "Events" | "Achievements" | "Partnerships";

const categories: Category[] = ["All", "Academic", "Community", "Admissions", "Events", "Achievements", "Partnerships"];

const gridPosts = posts.filter((p) => !p.featured);

interface NewsGridProps {
  excludeFeatured?: boolean;
}

export default function NewsGrid({ excludeFeatured = true }: NewsGridProps) {
  const [active, setActive] = useState<Category>("All");

  const displayed =
    active === "All"
      ? (excludeFeatured ? gridPosts : posts)
      : (excludeFeatured ? gridPosts : posts).filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <FadeInBlur delay={0}>
        <div className="overflow-x-auto -mx-4 px-4 pb-2 mb-8">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  active === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeInBlur>

      {/* Count */}
      <FadeInBlur delay={100}>
        <p className="text-xs text-gray-400 mb-6">Showing {displayed.length} article{displayed.length !== 1 ? "s" : ""}</p>
      </FadeInBlur>

      {/* Empty state */}
      {displayed.length === 0 && (
        <FadeInBlur delay={200}>
          <div className="text-center py-16 rounded-xl bg-white border border-gray-100">
            <p className="text-base font-semibold text-primary mb-2">No articles in this category yet</p>
            <p className="text-sm text-gray-400">Check back soon — we publish regularly.</p>
          </div>
        </FadeInBlur>
      )}

      {/* Grid */}
      <div key={active} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((post, i) => (
          <FadeInBlur key={post.slug} delay={i * 80}>
            <Link
              href={`/news/${post.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden relative flex-shrink-0">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Body */}
              <div className="p-5 space-y-3 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-semibold text-base text-body leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all mt-auto">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </FadeInBlur>
        ))}
      </div>
    </div>
  );
}
