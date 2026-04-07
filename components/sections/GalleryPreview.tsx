"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { ArrowRight } from "@/components/ui/Icons";

const photos = [
  { label: "Machinery Training",  caption: "Simulator in action",         src: "/images/image1.png" },
  { label: "Computer Lab",        caption: "ICT & engineering",           src: "/images/image2.png" },
  { label: "Electrical Systems",  caption: "Control cabinet training",    src: "/images/image2(ElecticalControlCabinate).png" },
  { label: "Solar Technology",    caption: "Renewable energy systems",    src: "/images/SolarPanelsTechnologyImage.png" },
  { label: "Practical Training",  caption: "Hands-on instruction",        src: "/images/PeopleLookAtTrainingDevice.png" },
  { label: "Heavy Machinery",     caption: "Industry-grade equipment",    src: "/images/image1.png" },
  { label: "ICT Programme",       caption: "Software & networking",       src: "/images/image2.png" },
  { label: "Electrical Lab",      caption: "Wiring & maintenance",        src: "/images/image2(ElecticalControlCabinate).png" },
  { label: "Campus Facilities",   caption: "Our learning environment",    src: "/images/SolarPanelsTechnologyImage.png" },
];

const slides = photos.map((p) => ({
  src: p.src,
  alt: p.label,
  description: p.caption,
}));

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Life at FTI
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-body leading-tight mt-2">
            A Glimpse of Our Campus Life
          </h2>
          <p className="text-base text-gray-500 mt-3 max-w-xl mx-auto">
            Real moments from our classrooms, grounds, and halls — the energy of FTI captured.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.label}
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm leading-tight">{photo.label}</p>
                <p className="text-white/70 text-xs mt-0.5">{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/school-life/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            View Full Gallery
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

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
        styles={{ container: { backgroundColor: "rgba(0,0,0,0.92)" } }}
      />
    </section>
  );
}
