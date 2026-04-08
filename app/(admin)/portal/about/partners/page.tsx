"use client";

import { useState } from "react";
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";

const initialPartners: ContentItem[] = [
  {
    id: "partner-1",
    label: "Volkswagen Rwanda",
    subtitle: "Industry",
    status: "published",
    name: "Volkswagen Rwanda",
    type: "Industry",
    websiteUrl: "https://www.vw.rw",
    logoUrl: "/images/Partners/rtb-logo.jpg",
    description: "Strategic partner providing automotive training equipment and internship placements for mechanical students.",
  },
  {
    id: "partner-2",
    label: "Rwanda Polytechnic (RP)",
    subtitle: "Academic",
    status: "published",
    name: "Rwanda Polytechnic (RP)",
    type: "Academic",
    websiteUrl: "https://www.rp.ac.rw",
    logoUrl: "/images/Partners/REG-logo.png",
    description: "Academic collaboration on curriculum alignment and student exchange programs.",
  },
  {
    id: "partner-3",
    label: "Bank of Kigali",
    subtitle: "Industry",
    status: "published",
    name: "Bank of Kigali",
    type: "Industry",
    websiteUrl: "https://www.bk.rw",
    logoUrl: "/images/Partners/giz.jpg",
    description: "Financial literacy training partner and scholarship sponsor for outstanding students.",
  },
  {
    id: "partner-4",
    label: "University of Rwanda - College of Science",
    subtitle: "Academic",
    status: "draft",
    name: "University of Rwanda - College of Science",
    type: "Academic",
    websiteUrl: "https://ur.ac.rw",
    logoUrl: "/images/Partners/swis-contact.png",
    description: "Joint research initiatives and pathway programs for advanced technical education.",
  },
  {
    id: "partner-5",
    label: "Positivo BGH",
    subtitle: "Industry",
    status: "published",
    name: "Positivo BGH",
    type: "Industry",
    websiteUrl: "https://www.positivobgh.com",
    logoUrl: "/images/Partners/WDA.jpeg",
    description: "Technology partner supplying computing equipment and ICT training resources.",
  },
  {
    id: "partner-6",
    label: "GIZ Rwanda",
    subtitle: "Industry",
    status: "published",
    name: "GIZ Rwanda",
    type: "Industry",
    websiteUrl: "https://www.giz.de/rwanda",
    logoUrl: "/images/Partners/fdi.jpg",
    description: "Development cooperation partner supporting TVET capacity building and instructor training.",
  },
];

export default function PartnersPage() {
  const [partners, setPartners] = useState<ContentItem[]>(initialPartners);

  return (
    <ContentManager
      title="Partners"
      description="Manage industry and academic partnerships."
      items={partners}
      addLabel="Add Partner"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `partner-${Date.now()}`,
          label: "New Partner",
          status: "draft",
          name: "",
          type: "",
          websiteUrl: "",
          logoUrl: "",
          description: "",
        };
        setPartners((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setPartners((prev) =>
          prev.map((p) => (p.id === item.id ? { ...p, ...item, label: (item.name as string) || item.label } : p))
        );
      }}
      onDeleteItem={(id) => {
        setPartners((prev) => prev.filter((p) => p.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setPartners((prev) =>
          prev.map((p) => (p.id === id ? { ...p, status } : p))
        );
      }}
      renderForm={(item, onChange) => {
        const name = (item.name as string) ?? "";
        const type = (item.type as string) ?? "";
        const websiteUrl = (item.websiteUrl as string) ?? "";
        const logoUrl = (item.logoUrl as string) ?? "";
        const description = (item.description as string) ?? "";

        return (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => onChange({ ...item, name: e.target.value, label: e.target.value || "New Partner" })}
                placeholder="e.g. Volkswagen Rwanda"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Type</Label>
              <Input
                value={type}
                onChange={(e) => onChange({ ...item, type: e.target.value, subtitle: e.target.value })}
                placeholder="Industry or Academic"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Website URL</Label>
              <Input
                value={websiteUrl}
                onChange={(e) => onChange({ ...item, websiteUrl: e.target.value })}
                placeholder="https://example.com"
              />
            </div>

            <ImageUpload
              label="Logo"
              value={logoUrl}
              onChange={(url) => onChange({ ...item, logoUrl: url })}
              aspect="square"
            />

            <div className="space-y-1.5">
              <Label>Description</Label>
              <Textarea
                rows={3}
                value={description}
                onChange={(e) => onChange({ ...item, description: e.target.value })}
                placeholder="Describe the partnership..."
              />
            </div>
          </div>
        );
      }}
    />
  );
}
