"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";

const initialMedia: ContentItem[] = [
  {
    id: "media-1",
    label: "campus-aerial.jpg",
    subtitle: "2.4 MB",
    status: "published",
    fileName: "campus-aerial.jpg",
    altText: "Aerial view of Forever Tvet Institute campus",
    url: "/uploads/campus-aerial.jpg",
    fileType: "image/jpeg",
    fileSize: "2.4 MB",
    description: "Drone shot of the main campus grounds and buildings.",
  },
  {
    id: "media-2",
    label: "workshop-electrical.png",
    subtitle: "1.8 MB",
    status: "published",
    fileName: "workshop-electrical.png",
    altText: "Electrical engineering workshop",
    url: "/uploads/workshop-electrical.png",
    fileType: "image/png",
    fileSize: "1.8 MB",
    description: "Students working in the electrical engineering workshop.",
  },
  {
    id: "media-3",
    label: "graduation-2025.jpg",
    subtitle: "3.1 MB",
    status: "published",
    fileName: "graduation-2025.jpg",
    altText: "Graduation ceremony 2025",
    url: "/uploads/graduation-2025.jpg",
    fileType: "image/jpeg",
    fileSize: "3.1 MB",
    description: "Annual graduation ceremony held in December 2025.",
  },
  {
    id: "media-4",
    label: "logo-dark.svg",
    subtitle: "24 KB",
    status: "published",
    fileName: "logo-dark.svg",
    altText: "Forever Tvet Institute logo dark variant",
    url: "/uploads/logo-dark.svg",
    fileType: "image/svg+xml",
    fileSize: "24 KB",
    description: "Dark version of the institute logo for light backgrounds.",
  },
  {
    id: "media-5",
    label: "students-lab.jpg",
    subtitle: "2.9 MB",
    status: "published",
    fileName: "students-lab.jpg",
    altText: "Students in computer lab",
    url: "/uploads/students-lab.jpg",
    fileType: "image/jpeg",
    fileSize: "2.9 MB",
    description: "Students during a practical session in the ICT lab.",
  },
  {
    id: "media-6",
    label: "headmaster-portrait.png",
    subtitle: "1.2 MB",
    status: "published",
    fileName: "headmaster-portrait.png",
    altText: "Headmaster official portrait",
    url: "/uploads/headmaster-portrait.png",
    fileType: "image/png",
    fileSize: "1.2 MB",
    description: "Official portrait of the headmaster for the about page.",
  },
  {
    id: "media-7",
    label: "campus-map.pdf",
    subtitle: "540 KB",
    status: "draft",
    fileName: "campus-map.pdf",
    altText: "Campus map document",
    url: "/uploads/campus-map.pdf",
    fileType: "application/pdf",
    fileSize: "540 KB",
    description: "Downloadable campus map for visitors.",
  },
  {
    id: "media-8",
    label: "banner-homepage.jpg",
    subtitle: "4.5 MB",
    status: "published",
    fileName: "banner-homepage.jpg",
    altText: "Homepage banner image",
    url: "/uploads/banner-homepage.jpg",
    fileType: "image/jpeg",
    fileSize: "4.5 MB",
    description: "Hero banner displayed on the website homepage.",
  },
];

export default function MediaPage() {
  const [media, setMedia] = useState(initialMedia);

  return (
    <ContentManager
      title="Media Library"
      description="8 files — 16.4 MB total storage"
      items={media}
      addLabel="Upload Media"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>File Name</Label>
            <Input
              value={String(item.fileName ?? "")}
              onChange={(e) =>
                onChange({ ...item, fileName: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Alt Text</Label>
            <Input
              value={String(item.altText ?? "")}
              onChange={(e) => onChange({ ...item, altText: e.target.value })}
              placeholder="Describe the image for accessibility"
            />
          </div>
          <div className="space-y-1.5">
            <Label>URL</Label>
            <Input
              value={String(item.url ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>File Type</Label>
            <Input
              value={String(item.fileType ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>File Size</Label>
            <Input
              value={String(item.fileSize ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              rows={2}
              value={String(item.description ?? "")}
              onChange={(e) => onChange({ ...item, description: e.target.value })}
              placeholder="Brief description of this file"
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `media-${Date.now()}`,
          label: "New File",
          subtitle: "0 KB",
          status: "draft",
          fileName: "",
          altText: "",
          url: "",
          fileType: "",
          fileSize: "0 KB",
          description: "",
        };
        setMedia((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setMedia((prev) =>
          prev.map((m) => (m.id === item.id ? item : m))
        );
      }}
      onDeleteItem={(id) => {
        setMedia((prev) => prev.filter((m) => m.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setMedia((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status } : m))
        );
      }}
    />
  );
}
