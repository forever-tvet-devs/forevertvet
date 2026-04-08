"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "Annual Career Fair 2026", subtitle: "Academic", status: "published", title: "Annual Career Fair 2026", date: "2026-05-12", time: "09:00 - 16:00", location: "Main Hall", category: "Academic", description: "<p>Connect with industry leaders and potential employers across multiple sectors. Open to all final-year students.</p>", registrationLink: "https://forever.edu/events/career-fair-2026" },
  { id: "2", label: "Inter-Department Football Tournament", subtitle: "Sports", status: "published", title: "Inter-Department Football Tournament", date: "2026-04-20", time: "14:00 - 18:00", location: "Sports Ground", category: "Sports", description: "<p>Annual inter-department football competition. All departments are encouraged to register their teams.</p>", registrationLink: "https://forever.edu/events/football-tournament" },
  { id: "3", label: "Cultural Night Celebration", subtitle: "Social", status: "draft", title: "Cultural Night Celebration", date: "2026-04-25", time: "18:00 - 22:00", location: "Auditorium", category: "Social", description: "<p>An evening of cultural performances, music, and dance celebrating the diversity of our student body.</p>", registrationLink: "" },
  { id: "4", label: "Guest Lecture: Future of Technology", subtitle: "Academic", status: "draft", title: "Guest Lecture: Future of Technology", date: "2026-05-05", time: "10:00 - 12:00", location: "Conference Room A", category: "Academic", description: "<p>A distinguished guest speaker will discuss emerging technology trends and their impact on vocational education.</p>", registrationLink: "https://forever.edu/events/guest-lecture" },
  { id: "5", label: "Alumni Networking Dinner", subtitle: "Social", status: "archived", title: "Alumni Networking Dinner", date: "2026-05-18", time: "19:00 - 21:30", location: "Dining Hall", category: "Social", description: "<p>An exclusive networking dinner bringing together current students and successful alumni for mentorship and career guidance.</p>", registrationLink: "https://forever.edu/events/alumni-dinner" },
]

export default function EventsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Events"
      description="Manage campus events and activities."
      items={items}
      addLabel="Add Event"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Event",
          status: "draft",
          title: "",
          date: "",
          time: "",
          location: "",
          category: "",
          description: "",
          registrationLink: "",
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
              placeholder="Event title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Date</Label>
            <Input
              type="date"
              value={String(item.date ?? "")}
              onChange={(e) => onChange({ ...item, date: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Time</Label>
            <Input
              value={String(item.time ?? "")}
              onChange={(e) => onChange({ ...item, time: e.target.value })}
              placeholder="e.g. 09:00 - 16:00"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Location</Label>
            <Input
              value={String(item.location ?? "")}
              onChange={(e) => onChange({ ...item, location: e.target.value })}
              placeholder="Event location"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="Academic / Social / Sports"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this event..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Registration Link</Label>
            <Input
              value={String(item.registrationLink ?? "")}
              onChange={(e) => onChange({ ...item, registrationLink: e.target.value })}
              placeholder="https://..."
            />
          </div>
        </div>
      )}
    />
  )
}
