"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "Robotics Club", subtitle: "Tech", status: "published", clubName: "Robotics Club", category: "Tech", advisor: "Mr. Jean-Paul Habimana", membersCount: "28", description: "<p>Building and programming robots for competitions and learning.</p>", meetingSchedule: "Fridays, 3:00 PM" },
  { id: "2", label: "Debate Society", subtitle: "Academic", status: "published", clubName: "Debate Society", category: "Academic", advisor: "Ms. Grace Uwimana", membersCount: "35", description: "<p>Developing public speaking and critical thinking through structured debates.</p>", meetingSchedule: "Mondays, 3:30 PM" },
  { id: "3", label: "Cultural Dance Troupe", subtitle: "Cultural", status: "published", clubName: "Cultural Dance Troupe", category: "Cultural", advisor: "Mr. Emmanuel Nsengiyumva", membersCount: "22", description: "<p>Preserving and showcasing traditional and contemporary dance forms.</p>", meetingSchedule: "Wednesdays, 4:00 PM" },
  { id: "4", label: "Basketball Team", subtitle: "Sports", status: "draft", clubName: "Basketball Team", category: "Sports", advisor: "Coach Patrick Niyonzima", membersCount: "15", description: "<p>Competitive basketball team representing the school in tournaments.</p>", meetingSchedule: "Mon, Wed, Fri - 4:00 PM" },
  { id: "5", label: "Coding Academy", subtitle: "Tech", status: "draft", clubName: "Coding Academy", category: "Tech", advisor: "Ms. Claudine Mukeshimana", membersCount: "42", description: "<p>Learning programming languages and building software projects together.</p>", meetingSchedule: "Tuesdays & Thursdays, 3:30 PM" },
]

export default function ClubsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Clubs & Societies"
      description="Manage student clubs and extracurricular organizations."
      items={items}
      addLabel="Add Club"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Club",
          status: "draft",
          clubName: "",
          category: "",
          advisor: "",
          membersCount: "",
          description: "",
          meetingSchedule: "",
        }
        setItems((prev) => [...prev, newItem])
        return newItem
      }}
      onSaveItem={(item) => {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, ...item, label: String(item.clubName ?? item.label) } : i)))
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
            <Label>Club Name</Label>
            <Input
              value={String(item.clubName ?? "")}
              onChange={(e) => onChange({ ...item, clubName: e.target.value, label: e.target.value })}
              placeholder="Club name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="Academic / Cultural / Sports / Tech"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Advisor</Label>
            <Input
              value={String(item.advisor ?? "")}
              onChange={(e) => onChange({ ...item, advisor: e.target.value })}
              placeholder="Staff advisor name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Members Count</Label>
            <Input
              value={String(item.membersCount ?? "")}
              onChange={(e) => onChange({ ...item, membersCount: e.target.value })}
              placeholder="e.g. 25"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this club..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Meeting Schedule</Label>
            <Input
              value={String(item.meetingSchedule ?? "")}
              onChange={(e) => onChange({ ...item, meetingSchedule: e.target.value })}
              placeholder="e.g. Tuesdays & Thursdays, 3:30 PM"
            />
          </div>
        </div>
      )}
    />
  )
}
