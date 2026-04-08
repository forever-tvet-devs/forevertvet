"use client"

import { useState, useCallback } from "react"
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"

/* ── Mock data ───────────────────────────────────────────── */

const initialRequirements: ContentItem[] = [
  {
    id: "req-1",
    label: "O-Level Certificate (minimum 5 passes)",
    subtitle: "All Programs — General",
    status: "published",
    requirementTitle: "O-Level Certificate (minimum 5 passes)",
    program: "All Programs",
    type: "General",
    description:
      "<p>Applicants must present an Ordinary Level Certificate with a minimum of five passes including English and Mathematics.</p>",
    documentsNeeded: "Original O-Level certificate\nCertified copy of transcript",
  },
  {
    id: "req-2",
    label: "National ID or Passport Copy",
    subtitle: "All Programs — General",
    status: "published",
    requirementTitle: "National ID or Passport Copy",
    program: "All Programs",
    type: "General",
    description:
      "<p>A valid national identification document or passport is required for identity verification during enrollment.</p>",
    documentsNeeded: "National ID copy\nPassport bio-data page (if applicable)",
  },
  {
    id: "req-3",
    label: "Physics & Mathematics Background",
    subtitle: "Electrical Installation — Program-Specific",
    status: "published",
    requirementTitle: "Physics & Mathematics Background",
    program: "Electrical Installation",
    type: "Program-Specific",
    description:
      "<p>Candidates should demonstrate basic knowledge of physics and mathematics through prior coursework or standardized test results.</p>",
    documentsNeeded: "Transcript showing physics and math grades",
  },
  {
    id: "req-4",
    label: "Food Hygiene Awareness Certificate",
    subtitle: "Culinary Arts — Program-Specific",
    status: "draft",
    requirementTitle: "Food Hygiene Awareness Certificate",
    program: "Culinary Arts",
    type: "Program-Specific",
    description:
      "<p>A food hygiene awareness certificate from a recognized institution is preferred but not mandatory.</p>",
    documentsNeeded: "Food hygiene certificate (if available)",
  },
  {
    id: "req-5",
    label: "Medical Fitness Proof",
    subtitle: "Automotive Mechanics — Program-Specific",
    status: "published",
    requirementTitle: "Medical Fitness Proof",
    program: "Automotive Mechanics",
    type: "Program-Specific",
    description:
      "<p>Applicants must provide proof of medical fitness from a certified physician, confirming they are physically able to participate in hands-on workshop activities.</p>",
    documentsNeeded:
      "Medical fitness certificate\nDoctor's clearance letter",
  },
]

/* ── Page ─────────────────────────────────────────────────── */

export default function RequirementsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialRequirements)

  const handleCreate = useCallback((): ContentItem => {
    const newItem: ContentItem = {
      id: `req-${Date.now()}`,
      label: "New Requirement",
      subtitle: "",
      status: "draft",
      requirementTitle: "",
      program: "",
      type: "General",
      description: "",
      documentsNeeded: "",
    }
    setItems((prev) => [newItem, ...prev])
    return newItem
  }, [])

  const handleSave = useCallback((item: ContentItem) => {
    setItems((prev) => prev.map((i) => (i.id === item.id ? item : i)))
  }, [])

  const handleDelete = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const handleStatusChange = useCallback((id: string, status: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, status: status as ContentItem["status"] } : i
      )
    )
  }, [])

  return (
    <ContentManager
      title="Admission Requirements"
      description="Manage entry requirements for each program."
      items={items}
      addLabel="Add Requirement"
      onCreateItem={handleCreate}
      onSaveItem={handleSave}
      onDeleteItem={handleDelete}
      onStatusChangeItem={handleStatusChange}
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Requirement Title</Label>
            <Input
              value={(item.requirementTitle as string) ?? ""}
              onChange={(e) =>
                onChange({
                  requirementTitle: e.target.value,
                  label: e.target.value,
                })
              }
              placeholder="e.g. O-Level Certificate"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Program</Label>
            <Input
              value={(item.program as string) ?? ""}
              onChange={(e) => {
                const program = e.target.value
                onChange({
                  program,
                  subtitle: `${program} — ${(item.type as string) || "General"}`,
                })
              }}
              placeholder="e.g. All Programs"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Type</Label>
            <Input
              value={(item.type as string) ?? ""}
              onChange={(e) => {
                const type = e.target.value
                onChange({
                  type,
                  subtitle: `${(item.program as string) || ""} — ${type}`,
                })
              }}
              placeholder="General or Program-Specific"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={(item.description as string) ?? ""}
              onChange={(html) => onChange({ description: html })}
              placeholder="Describe the requirement in detail..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Documents Needed</Label>
            <Textarea
              rows={3}
              value={(item.documentsNeeded as string) ?? ""}
              onChange={(e) => onChange({ documentsNeeded: e.target.value })}
              placeholder="List required documents, one per line..."
            />
          </div>
        </div>
      )}
    />
  )
}
