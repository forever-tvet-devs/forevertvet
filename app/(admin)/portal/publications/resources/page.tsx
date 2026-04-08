"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "Student Handbook 2026", subtitle: "PDF", status: "published", title: "Student Handbook 2026", type: "PDF", fileUrl: "/files/student-handbook-2026.pdf", fileSize: "2.4 MB", description: "Comprehensive guide covering student policies, procedures, and campus information." },
  { id: "2", label: "Academic Calendar - Semester 2", subtitle: "PDF", status: "published", title: "Academic Calendar - Semester 2", type: "PDF", fileUrl: "/files/academic-calendar-s2.pdf", fileSize: "540 KB", description: "Complete academic calendar with key dates, holidays, and examination schedules." },
  { id: "3", label: "Internship Application Guide", subtitle: "Guide", status: "draft", title: "Internship Application Guide", type: "Guide", fileUrl: "/files/internship-guide.pdf", fileSize: "1.1 MB", description: "Step-by-step guide for students applying to internship programmes with partner organisations." },
  { id: "4", label: "Fee Structure & Payment Policy", subtitle: "Document", status: "published", title: "Fee Structure & Payment Policy", type: "Document", fileUrl: "/files/fee-structure.pdf", fileSize: "380 KB", description: "Detailed breakdown of tuition fees, payment deadlines, and financial aid options." },
  { id: "5", label: "Campus Safety & Regulations", subtitle: "PDF", status: "draft", title: "Campus Safety & Regulations", type: "PDF", fileUrl: "/files/campus-safety.pdf", fileSize: "780 KB", description: "Campus safety guidelines, emergency procedures, and conduct regulations for all students and staff." },
]

export default function ResourcesPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Resources"
      description="Manage downloadable files and documents."
      items={items}
      addLabel="Add Resource"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Resource",
          status: "draft",
          title: "",
          type: "",
          fileUrl: "",
          fileSize: "",
          description: "",
        }
        setItems((prev) => [...prev, newItem])
        return newItem
      }}
      onSaveItem={(item) => {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, ...item, label: String(item.title ?? item.label) } : i)))
      }}
      onDeleteItem={(id) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
      }}
      onStatusChangeItem={(id, status) => {
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)))
      }}
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input
              value={String(item.title ?? "")}
              onChange={(e) => onChange({ ...item, title: e.target.value, label: e.target.value })}
              placeholder="Resource title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Type</Label>
            <Input
              value={String(item.type ?? "")}
              onChange={(e) => onChange({ ...item, type: e.target.value })}
              placeholder="PDF / Document / Guide"
            />
          </div>
          <div className="space-y-1.5">
            <Label>File URL</Label>
            <Input
              value={String(item.fileUrl ?? "")}
              onChange={(e) => onChange({ ...item, fileUrl: e.target.value })}
              placeholder="/files/document.pdf"
            />
          </div>
          <div className="space-y-1.5">
            <Label>File Size</Label>
            <Input
              value={String(item.fileSize ?? "")}
              onChange={(e) => onChange({ ...item, fileSize: e.target.value })}
              placeholder="e.g. 2.4 MB"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              rows={3}
              value={String(item.description ?? "")}
              onChange={(e) => onChange({ ...item, description: e.target.value })}
              placeholder="Brief description of this resource..."
            />
          </div>
        </div>
      )}
    />
  )
}
