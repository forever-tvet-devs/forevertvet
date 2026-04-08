"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "Campus Closure: Easter Holiday Break", subtitle: "High", status: "published", title: "Campus Closure: Easter Holiday Break", priority: "High", content: "<p>The campus will be closed for the Easter holiday break. All students must vacate the premises by Friday evening.</p>", publishDate: "2026-03-30", expiryDate: "2026-04-08" },
  { id: "2", label: "Library Hours Extended During Exams", subtitle: "Medium", status: "published", title: "Library Hours Extended During Exams", priority: "Medium", content: "<p>The library will operate extended hours during the examination period to support student preparation.</p>", publishDate: "2026-03-25", expiryDate: "2026-04-15" },
  { id: "3", label: "Wi-Fi Maintenance Scheduled for Saturday", subtitle: "High", status: "archived", title: "Wi-Fi Maintenance Scheduled for Saturday", priority: "High", content: "<p>Scheduled Wi-Fi maintenance will take place on Saturday. Internet access may be intermittent throughout the day.</p>", publishDate: "2026-03-22", expiryDate: "2026-03-23" },
  { id: "4", label: "Student ID Card Collection Notice", subtitle: "Low", status: "draft", title: "Student ID Card Collection Notice", priority: "Low", content: "<p>New student ID cards are ready for collection at the administration office during working hours.</p>", publishDate: "2026-03-18", expiryDate: "2026-04-30" },
  { id: "5", label: "New Cafeteria Menu Starting Next Week", subtitle: "Low", status: "draft", title: "New Cafeteria Menu Starting Next Week", priority: "Low", content: "<p>The cafeteria will introduce a new menu starting next week with more diverse and healthier meal options.</p>", publishDate: "2026-03-15", expiryDate: "2026-06-01" },
]

export default function AnnouncementsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Announcements"
      description="Manage campus announcements and notices."
      items={items}
      addLabel="Add Announcement"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Announcement",
          status: "draft",
          title: "",
          priority: "",
          content: "",
          publishDate: "",
          expiryDate: "",
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
              placeholder="Announcement title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Priority</Label>
            <Input
              value={String(item.priority ?? "")}
              onChange={(e) => onChange({ ...item, priority: e.target.value })}
              placeholder="High / Medium / Low"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Content</Label>
            <RichTextEditor
              defaultValue={String(item.content ?? "")}
              onChange={(html) => onChange({ ...item, content: html })}
              placeholder="Write the announcement content..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Publish Date</Label>
            <Input
              type="date"
              value={String(item.publishDate ?? "")}
              onChange={(e) => onChange({ ...item, publishDate: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Expiry Date</Label>
            <Input
              type="date"
              value={String(item.expiryDate ?? "")}
              onChange={(e) => onChange({ ...item, expiryDate: e.target.value })}
            />
          </div>
        </div>
      )}
    />
  )
}
