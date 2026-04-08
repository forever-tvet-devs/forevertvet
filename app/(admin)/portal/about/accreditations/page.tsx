"use client";

import { useState } from "react";
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";

const initialAccreditations: ContentItem[] = [
  {
    id: "accred-1",
    label: "TVET Level 5 Accreditation",
    subtitle: "Rwanda TVET Board (RTB)",
    status: "published",
    name: "TVET Level 5 Accreditation",
    issuingBody: "Rwanda TVET Board (RTB)",
    yearAwarded: "2021",
    description: "Full accreditation for Level 5 technical and vocational programs across all departments.",
    certificateUrl: "/documents/rtb-accreditation.pdf",
  },
  {
    id: "accred-2",
    label: "ISO 21001:2018 Certification",
    subtitle: "International Organization for Standardization",
    status: "published",
    name: "ISO 21001:2018 Certification",
    issuingBody: "International Organization for Standardization",
    yearAwarded: "2022",
    description: "International standard for educational organizations management systems.",
    certificateUrl: "/documents/iso-21001.pdf",
  },
  {
    id: "accred-3",
    label: "National Qualifications Framework Approval",
    subtitle: "Higher Education Council (HEC)",
    status: "published",
    name: "National Qualifications Framework Approval",
    issuingBody: "Higher Education Council (HEC)",
    yearAwarded: "2020",
    description: "Approval under the national qualifications framework for recognized credential pathways.",
    certificateUrl: "/documents/nqf-approval.pdf",
  },
  {
    id: "accred-4",
    label: "East African Community TVET Recognition",
    subtitle: "East African Community Secretariat",
    status: "draft",
    name: "East African Community TVET Recognition",
    issuingBody: "East African Community Secretariat",
    yearAwarded: "2023",
    description: "Regional recognition enabling graduate mobility across East African member states.",
    certificateUrl: "/documents/eac-recognition.pdf",
  },
];

export default function AccreditationsPage() {
  const [accreditations, setAccreditations] = useState<ContentItem[]>(initialAccreditations);

  return (
    <ContentManager
      title="Accreditations"
      description="Manage institutional accreditations and certifications."
      items={accreditations}
      addLabel="Add Accreditation"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `accred-${Date.now()}`,
          label: "New Accreditation",
          status: "draft",
          name: "",
          issuingBody: "",
          yearAwarded: "",
          description: "",
          certificateUrl: "",
        };
        setAccreditations((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setAccreditations((prev) =>
          prev.map((a) => (a.id === item.id ? { ...a, ...item, label: (item.name as string) || item.label } : a))
        );
      }}
      onDeleteItem={(id) => {
        setAccreditations((prev) => prev.filter((a) => a.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setAccreditations((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status } : a))
        );
      }}
      renderForm={(item, onChange) => {
        const name = (item.name as string) ?? "";
        const issuingBody = (item.issuingBody as string) ?? "";
        const yearAwarded = (item.yearAwarded as string) ?? "";
        const description = (item.description as string) ?? "";
        const certificateUrl = (item.certificateUrl as string) ?? "";

        return (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => onChange({ ...item, name: e.target.value, label: e.target.value || "New Accreditation" })}
                placeholder="e.g. TVET Level 5 Accreditation"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Issuing Body</Label>
              <Input
                value={issuingBody}
                onChange={(e) => onChange({ ...item, issuingBody: e.target.value, subtitle: e.target.value })}
                placeholder="e.g. Rwanda TVET Board (RTB)"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Year Awarded</Label>
              <Input
                value={yearAwarded}
                onChange={(e) => onChange({ ...item, yearAwarded: e.target.value })}
                placeholder="e.g. 2023"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Description</Label>
              <Textarea
                rows={3}
                value={description}
                onChange={(e) => onChange({ ...item, description: e.target.value })}
                placeholder="Describe this accreditation..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Certificate URL</Label>
              <Input
                value={certificateUrl}
                onChange={(e) => onChange({ ...item, certificateUrl: e.target.value })}
                placeholder="/documents/certificate.pdf"
              />
            </div>
          </div>
        );
      }}
    />
  );
}
