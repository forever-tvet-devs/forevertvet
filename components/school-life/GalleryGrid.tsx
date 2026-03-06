"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

type Category = "All" | "Labs" | "Students" | "Events" | "Facilities" | "Outdoor";

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  caption?: string;
}

const photos: GalleryItem[] = [
  { src: "/images/PeopleLookAtTrainingDevice.png",        alt: "Students at training device",       category: "Labs",       caption: "Hands-on training in our simulation lab" },
  { src: "/images/image2(ElecticalControlCabinate).png",  alt: "Electrical control cabinet",        category: "Labs",       caption: "Industrial electricity control cabinet training" },
  { src: "/images/SolarPanelsTechnologyImage.png",        alt: "Solar panels technology",            category: "Outdoor",    caption: "Solar installation practical session" },
  { src: "/images/LandSurveyingLecturer.jpg",             alt: "Land surveying lecturer",            category: "Outdoor",    caption: "Field work during land surveying program" },
  { src: "/images/image1.png",                            alt: "Campus life",                        category: "Students",   caption: "Students collaborating on campus" },
  { src: "/images/image2.png",                            alt: "Campus facilities",                  category: "Facilities", caption: "Our modern training facilities" },
  { src: "/images/image4.jpg",                            alt: "Campus environment",                 category: "Facilities", caption: "Campus environment" },
  { src: "/images/PeopleLookAtTrainingDevice.png",        alt: "Training session",                  category: "Students",   caption: "Students during a practical training session" },
  { src: "/images/image2(ElecticalControlCabinate).png",  alt: "Electrical lab",                    category: "Facilities", caption: "Our state-of-the-art electrical simulation lab" },
  { src: "/images/SolarPanelsTechnologyImage.png",        alt: "Solar technology",                   category: "Labs",       caption: "Students working on solar panel installation" },
  { src: "/images/image1.png",                            alt: "Campus event",                       category: "Events",     caption: "Annual cultural day celebration" },
  { src: "/images/LandSurveyingLecturer.jpg",             alt: "Field training",                     category: "Outdoor",    caption: "Land survey field practicals" },
];

const categories: Category[] = ["All", "Labs", "Students", "Events", "Facilities", "Outdoor"];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  // YARL expects { src, title, description } slides
  const slides = filtered.map((p) => ({
    src: p.src,
    alt: p.alt,
    description: p.caption,
  }));

  return (
    <div>
      {/* Category filter */}
      <div className="overflow-x-auto -mx-4 px-4 pb-2 mb-8">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-gray-400 mb-4">Showing {filtered.length} of {photos.length} photos</p>

      {/* Grid */}
      <div key={activeCategory} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((photo, i) => (
          <button
            key={`${photo.src}-${photo.category}-${i}`}
            onClick={() => setLightboxIndex(i)}
            className="aspect-square rounded-xl overflow-hidden relative group block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium leading-snug">{photo.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Captions, Thumbnails, Zoom, Counter]}
        captions={{ showToggle: true, descriptionMaxLines: 2 }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        thumbnails={{ position: "bottom", width: 80, height: 56, border: 2, borderRadius: 6, padding: 4, gap: 8 }}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.92)" },
        }}
      />

      {/* Footer note */}
      <p className="text-xs text-gray-400 mt-6 text-center italic">
        New photos added regularly. Follow us on social media for the latest.
      </p>
    </div>
  );
}
