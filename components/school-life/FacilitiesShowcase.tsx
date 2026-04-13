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
import { CheckCircle } from "@/components/ui/Icons";

interface Facility {
  name: string;
  description: string;
  features: string[];
  image: string;
}

const facilities: Facility[] = [
  {
    name: "Electrical Simulation Lab",
    image: "/images/image2(ElecticalControlCabinate).png",
    description: "The centrepiece of our electrical technology program. Equipped with full-scale switchboards, circuit breakers, motor control panels, and PLC training boards — mirroring what students will encounter in industry from day one.",
    features: [
      "12 individual training stations",
      "Motor control and PLC boards",
      "Real-world switchgear and breaker panels",
      "Lockout/tagout safety systems",
    ],
  },
  {
    name: "Solar Technology Yard",
    image: "/images/SolarPanelsTechnologyImage.png",
    description: "Rwanda's energy future is built on renewables. Our outdoor solar yard lets students install, wire, and commission real solar arrays under live conditions — practical experience that employers actively seek.",
    features: [
      "6 full solar installation bays",
      "Grid-tie and off-grid configurations",
      "Battery storage systems",
      "Real-time monitoring software",
    ],
  },
  {
    name: "Survey Field Site",
    image: "/images/LandSurveyingLecturer.jpg",
    description: "Land surveying is practiced outdoors. Our dedicated field site provides a controlled environment for total station work, leveling, traverse surveys, and boundary marking using professional-grade instruments.",
    features: [
      "Total station and GPS survey units",
      "Auto-levels and theodolites",
      "Marked field control points",
      "Digital data collection systems",
    ],
  },
  {
    name: "Computer Systems Lab",
    image: "/images/PeopleLookAtTrainingDevice.png",
    description: "30 workstations running professional software — from networking simulators to hardware diagnostic tools. Students work on real machines in a structured environment that replicates an industry IT department.",
    features: [
      "30 student workstations",
      "Cisco networking hardware",
      "Hardware diagnostics and repair bench",
      "Server room training rack",
    ],
  },
  {
    name: "Heavy Machinery Training Area",
    image: "/images/image4.jpg",
    description: "Operating heavy equipment safely requires structured practice before entering a live site. Our training area gives students supervised access to industry machinery in a controlled, safety-first environment.",
    features: [
      "Controlled operation and manoeuvring zones",
      "Pre-operation inspection training bays",
      "Safety briefing station",
      "Equipment maintenance and inspection stations",
    ],
  },
  {
    name: "Classrooms & Common Areas",
    image: "/images/image1.png",
    description: "Our classrooms are designed for focus and engagement — natural lighting, projectors, whiteboards, and comfortable seating for up to 25 students per group. The student common room is a hub for collaboration between classes.",
    features: [
      "6 dedicated classrooms",
      "Projector and whiteboard equipped",
      "Student common and collaboration room",
      "On-site student support office",
    ],
  },
];

export default function FacilitiesShowcase() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = facilities.map((f) => ({
    src: f.image,
    alt: f.name,
  }));

  return (
    <>
      <div className="divide-y divide-gray-100">
        {facilities.map((facility, i) => {
          const isEven = i % 2 === 1;
          return (
            <div key={facility.name} className="py-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <div className={isEven ? "lg:order-2" : ""}>
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="w-full rounded-2xl overflow-hidden aspect-[4/3] relative shadow-md group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>

                {/* Content */}
                <div className={isEven ? "lg:order-1" : ""}>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary mb-4 leading-tight">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <ul className="space-y-2.5">
                    {facility.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
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
