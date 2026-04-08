"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/admin/ui/ImageUpload"

const initialItems: ContentItem[] = [
  { id: "1", label: "Campus Aerial View", subtitle: "Campus", status: "published", category: "Campus", imageUrl: "/images/image1.png", altText: "Aerial view of school campus", description: "A stunning aerial photograph of the entire campus grounds." },
  { id: "2", label: "Workshop Training", subtitle: "Training", status: "published", category: "Training", imageUrl: "/images/PeopleLookAtTrainingDevice.png", altText: "Students in workshop training", description: "Hands-on workshop training session with students." },
  { id: "3", label: "Graduation Ceremony 2025", subtitle: "Events", status: "published", category: "Events", imageUrl: "/images/image2.png", altText: "Graduation ceremony 2025", description: "Annual graduation ceremony celebrating student achievements." },
  { id: "4", label: "Sports Day Highlights", subtitle: "Sports", status: "draft", category: "Sports", imageUrl: "/images/image4.jpg", altText: "Sports day activities", description: "Highlights from the annual inter-house sports day." },
  { id: "5", label: "Computer Lab Session", subtitle: "Training", status: "published", category: "Training", imageUrl: "/images/SolarPanelsTechnologyImage.png", altText: "Students in computer lab", description: "Students learning IT skills in the modern computer lab." },
  { id: "6", label: "Cultural Day Festival", subtitle: "Events", status: "draft", category: "Events", imageUrl: "/images/LandSurveyingLecturer.jpg", altText: "Cultural day celebrations", description: "Colorful cultural day celebrations showcasing diversity." },
]

export default function GalleryPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Media Gallery"
      description="Manage photos and media for the school gallery."
      items={items}
      addLabel="Add Photo"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Photo",
          status: "draft",
          category: "",
          imageUrl: "",
          altText: "",
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
              value={String(item.title ?? item.label ?? "")}
              onChange={(e) => onChange({ ...item, title: e.target.value, label: e.target.value })}
              placeholder="Photo title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="Campus / Training / Events / Sports"
            />
          </div>
          <ImageUpload
            label="Image"
            value={String(item.imageUrl ?? "")}
            onChange={(url) => onChange({ ...item, imageUrl: url })}
            aspect="video"
          />
          <div className="space-y-1.5">
            <Label>Alt Text</Label>
            <Input
              value={String(item.altText ?? "")}
              onChange={(e) => onChange({ ...item, altText: e.target.value })}
              placeholder="Descriptive alt text for accessibility"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              rows={3}
              value={String(item.description ?? "")}
              onChange={(e) => onChange({ ...item, description: e.target.value })}
              placeholder="Brief description of this photo"
            />
          </div>
        </div>
      )}
    />
  )
}
