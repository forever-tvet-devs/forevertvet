"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/admin/ui/ImageUpload"

const initialItems: ContentItem[] = [
  { id: "1", label: "Forever Tvet Institute Launches New ICT Lab", subtitle: "General", status: "published", title: "Forever Tvet Institute Launches New ICT Lab", category: "General", author: "Admin", date: "2026-03-28", excerpt: "The institute inaugurates a state-of-the-art ICT laboratory.", body: "<p>The institute officially opened its new ICT laboratory, equipped with modern computers and digital tools for enhanced learning experiences.</p>", featuredImageUrl: "/images/SolarPanelsTechnologyImage.png" },
  { id: "2", label: "Second Semester Registration Now Open", subtitle: "Academic", status: "published", title: "Second Semester Registration Now Open", category: "Academic", author: "Jean-Pierre M.", date: "2026-03-20", excerpt: "Registration for the second semester is now open for all students.", body: "<p>All students are encouraged to complete their registration for the upcoming semester before the deadline.</p>", featuredImageUrl: "/images/image1.png" },
  { id: "3", label: "Annual Career Fair Scheduled for May", subtitle: "Events", status: "draft", title: "Annual Career Fair Scheduled for May", category: "Events", author: "Grace U.", date: "2026-03-15", excerpt: "The annual career fair will bring together employers and students.", body: "<p>This year's career fair promises to connect students with industry leaders and potential employers across multiple sectors.</p>", featuredImageUrl: "/images/PeopleLookAtTrainingDevice.png" },
  { id: "4", label: "Student Success: Top Performers Recognised", subtitle: "Academic", status: "draft", title: "Student Success: Top Performers Recognised", category: "Academic", author: "Admin", date: "2026-03-10", excerpt: "Outstanding students honoured for exceptional academic performance.", body: "<p>The institute held a special ceremony to recognise and celebrate the achievements of top-performing students this term.</p>", featuredImageUrl: "/images/image2.png" },
  { id: "5", label: "Community Outreach Programme Recap", subtitle: "General", status: "archived", title: "Community Outreach Programme Recap", category: "General", author: "Emmanuel K.", date: "2026-02-28", excerpt: "A look back at the successful community outreach programme.", body: "<p>Our community outreach programme engaged over 200 community members in skills development workshops and health awareness campaigns.</p>", featuredImageUrl: "/images/LandSurveyingLecturer.jpg" },
]

export default function NewsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="News Articles"
      description="Manage news articles and institute updates."
      items={items}
      addLabel="Add Article"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Article",
          status: "draft",
          title: "",
          category: "",
          author: "",
          date: "",
          excerpt: "",
          body: "",
          featuredImageUrl: "",
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
              placeholder="Article title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="General / Academic / Events"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Author</Label>
            <Input
              value={String(item.author ?? "")}
              onChange={(e) => onChange({ ...item, author: e.target.value })}
              placeholder="Author name"
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
            <Label>Excerpt</Label>
            <Textarea
              rows={2}
              value={String(item.excerpt ?? "")}
              onChange={(e) => onChange({ ...item, excerpt: e.target.value })}
              placeholder="Brief summary of the article..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Body</Label>
            <RichTextEditor
              defaultValue={String(item.body ?? "")}
              onChange={(html) => onChange({ ...item, body: html })}
              placeholder="Write the full article content..."
            />
          </div>
          <ImageUpload
            label="Featured Image"
            value={String(item.featuredImageUrl ?? "")}
            onChange={(url) => onChange({ ...item, featuredImageUrl: url })}
            aspect="video"
          />
        </div>
      )}
    />
  )
}
