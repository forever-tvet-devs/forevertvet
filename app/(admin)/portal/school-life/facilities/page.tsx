"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/admin/ui/ImageUpload"

const initialItems: ContentItem[] = [
  { id: "1", label: "Electrical Engineering Lab", subtitle: "Lab", status: "published", name: "Electrical Engineering Lab", category: "Lab", capacity: "40", description: "<p>Fully equipped electronics lab with modern testing equipment and workstations.</p>", imageUrl: "/images/image2(ElecticalControlCabinate).png" },
  { id: "2", label: "Automotive Workshop", subtitle: "Workshop", status: "published", name: "Automotive Workshop", category: "Workshop", capacity: "30", description: "<p>Industrial-grade automotive workshop for practical hands-on training.</p>", imageUrl: "/images/PeopleLookAtTrainingDevice.png" },
  { id: "3", label: "ICT Classroom A", subtitle: "Classroom", status: "published", name: "ICT Classroom A", category: "Classroom", capacity: "50", description: "<p>Modern smart classroom with interactive whiteboard and projector system.</p>", imageUrl: "/images/SolarPanelsTechnologyImage.png" },
  { id: "4", label: "Main Sports Field", subtitle: "Field", status: "draft", name: "Main Sports Field", category: "Field", capacity: "200", description: "<p>Standard-size sports field with natural grass and spectator stands.</p>", imageUrl: "/images/image4.jpg" },
  { id: "5", label: "Welding Workshop", subtitle: "Workshop", status: "archived", name: "Welding Workshop", category: "Workshop", capacity: "25", description: "<p>Specialized welding workshop with industrial welding stations and safety equipment.</p>", imageUrl: "/images/image1.png" },
]

export default function FacilitiesPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Facilities"
      description="Manage campus facilities, labs, and workshops."
      items={items}
      addLabel="Add Facility"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Facility",
          status: "draft",
          name: "",
          category: "",
          capacity: "",
          description: "",
          imageUrl: "",
        }
        setItems((prev) => [...prev, newItem])
        return newItem
      }}
      onSaveItem={(item) => {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, ...item, label: String(item.name ?? item.label) } : i)))
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
            <Label>Name</Label>
            <Input
              value={String(item.name ?? "")}
              onChange={(e) => onChange({ ...item, name: e.target.value, label: e.target.value })}
              placeholder="Facility name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="Lab / Workshop / Classroom / Field"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Capacity</Label>
            <Input
              value={String(item.capacity ?? "")}
              onChange={(e) => onChange({ ...item, capacity: e.target.value })}
              placeholder="e.g. 40"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this facility..."
            />
          </div>
          <ImageUpload
            label="Facility Image"
            value={String(item.imageUrl ?? "")}
            onChange={(url) => onChange({ ...item, imageUrl: url })}
            aspect="video"
          />
        </div>
      )}
    />
  )
}
