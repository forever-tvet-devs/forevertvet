"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";

const initialPartners: ContentItem[] = [
  {
    id: "partner-1",
    label: "Rwanda Polytechnic",
    subtitle: "Academic",
    status: "published",
    orgName: "Rwanda Polytechnic",
    type: "Academic",
    websiteUrl: "https://rp.ac.rw",
    logoUrl: "/images/Partners/rtb-logo.jpg",
    description:
      "<p>National institution for polytechnic education, collaborating on curriculum development and student exchanges.</p>",
  },
  {
    id: "partner-2",
    label: "GIZ Rwanda",
    subtitle: "NGO",
    status: "published",
    orgName: "GIZ Rwanda",
    type: "NGO",
    websiteUrl: "https://giz.de/rwanda",
    logoUrl: "/images/Partners/giz.jpg",
    description:
      "<p>German development agency supporting TVET reform and skills development programs across Rwanda.</p>",
  },
  {
    id: "partner-3",
    label: "MTN Rwanda",
    subtitle: "Industry",
    status: "published",
    orgName: "MTN Rwanda",
    type: "Industry",
    websiteUrl: "https://mtn.co.rw",
    logoUrl: "/images/Partners/REG-logo.png",
    description:
      "<p>Telecommunications leader providing internship opportunities and ICT infrastructure support.</p>",
  },
  {
    id: "partner-4",
    label: "Enabel Rwanda",
    subtitle: "NGO",
    status: "draft",
    orgName: "Enabel Rwanda",
    type: "NGO",
    websiteUrl: "https://enabel.be",
    logoUrl: "/images/Partners/swis-contact.png",
    description:
      "<p>Belgian development agency funding vocational training equipment and instructor capacity building.</p>",
  },
  {
    id: "partner-5",
    label: "Bank of Kigali",
    subtitle: "Industry",
    status: "published",
    orgName: "Bank of Kigali",
    type: "Industry",
    websiteUrl: "https://bk.rw",
    logoUrl: "/images/Partners/WDA.jpeg",
    description:
      "<p>Financial institution sponsoring student scholarships and entrepreneurship development programs.</p>",
  },
  {
    id: "partner-6",
    label: "University of Rwanda",
    subtitle: "Academic",
    status: "published",
    orgName: "University of Rwanda",
    type: "Academic",
    websiteUrl: "https://ur.ac.rw",
    logoUrl: "/images/Partners/fdi.jpg",
    description:
      "<p>National university collaborating on research initiatives and bridging programs for TVET graduates.</p>",
  },
];

export default function PartnersPage() {
  const [partners, setPartners] = useState(initialPartners);

  return (
    <ContentManager
      title="Partner Organizations"
      description="Manage partner organizations and collaborators."
      items={partners}
      addLabel="Add Partner"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Organization Name</Label>
            <Input
              value={String(item.orgName ?? "")}
              onChange={(e) =>
                onChange({ ...item, orgName: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Type</Label>
            <Input
              value={String(item.type ?? "")}
              onChange={(e) => onChange({ ...item, type: e.target.value })}
              placeholder="Industry / Academic / NGO"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Website URL</Label>
            <Input
              value={String(item.websiteUrl ?? "")}
              onChange={(e) => onChange({ ...item, websiteUrl: e.target.value })}
              placeholder="https://example.com"
            />
          </div>
          <ImageUpload
            label="Logo"
            value={String(item.logoUrl ?? "")}
            onChange={(url) => onChange({ ...item, logoUrl: url })}
            aspect="square"
          />
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this partner organization..."
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `partner-${Date.now()}`,
          label: "New Partner",
          subtitle: "",
          status: "draft",
          orgName: "",
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
          prev.map((p) => (p.id === item.id ? item : p))
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
    />
  );
}
