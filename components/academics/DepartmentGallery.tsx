"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface Props {
  photos: string[];
  name: string;
}

export default function DepartmentGallery({ photos, name }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = photos.map((src, i) => ({
    src,
    alt: `${name} — photo ${i + 1}`,
  }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="aspect-square rounded-xl overflow-hidden relative group block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={photo}
              alt={`${name} — photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Thumbnails, Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        thumbnails={{ position: "bottom", width: 80, height: 56, border: 2, borderRadius: 6, padding: 4, gap: 8 }}
        styles={{
          container: { backgroundColor: "rgba(0,0,0,0.92)" },
        }}
      />
    </>
  );
}
