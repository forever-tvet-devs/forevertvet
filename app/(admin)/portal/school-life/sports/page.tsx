"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "Football", subtitle: "Team", status: "published", sportName: "Football", type: "Team", season: "Year-round", coach: "Coach Patrick Niyonzima", description: "Competitive football program with junior and senior teams.", achievements: "Inter-school champions 2024, Regional semi-finalists 2025." },
  { id: "2", label: "Basketball", subtitle: "Team", status: "published", sportName: "Basketball", type: "Team", season: "Term 1 & 2", coach: "Coach Diane Mutesi", description: "Boys and girls basketball teams competing in regional leagues.", achievements: "Zone B league runners-up 2024." },
  { id: "3", label: "Athletics", subtitle: "Individual", status: "published", sportName: "Athletics", type: "Individual", season: "Term 2", coach: "Mr. Samuel Bizimana", description: "Track and field events including sprints, relays, and field events.", achievements: "3 gold medals at State Athletics Championship 2025." },
  { id: "4", label: "Volleyball", subtitle: "Team", status: "draft", sportName: "Volleyball", type: "Team", season: "Term 1", coach: "Coach Yvonne Ingabire", description: "Mixed volleyball team participating in inter-school tournaments.", achievements: "Inter-school volleyball cup winners 2024." },
  { id: "5", label: "Table Tennis", subtitle: "Individual", status: "draft", sportName: "Table Tennis", type: "Individual", season: "Year-round", coach: "Mr. Eric Mugisha", description: "Individual and doubles table tennis training and competitions.", achievements: "State table tennis champion 2025 (singles)." },
]

export default function SportsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Sports Programs"
      description="Manage sports programs and athletic activities."
      items={items}
      addLabel="Add Sport"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Sport",
          status: "draft",
          sportName: "",
          type: "",
          season: "",
          coach: "",
          description: "",
          achievements: "",
        }
        setItems((prev) => [...prev, newItem])
        return newItem
      }}
      onSaveItem={(item) => {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, ...item, label: String(item.sportName ?? item.label) } : i)))
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
            <Label>Sport Name</Label>
            <Input
              value={String(item.sportName ?? "")}
              onChange={(e) => onChange({ ...item, sportName: e.target.value, label: e.target.value })}
              placeholder="Sport name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Type</Label>
            <Input
              value={String(item.type ?? "")}
              onChange={(e) => onChange({ ...item, type: e.target.value })}
              placeholder="Team / Individual"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Season</Label>
            <Input
              value={String(item.season ?? "")}
              onChange={(e) => onChange({ ...item, season: e.target.value })}
              placeholder="e.g. Year-round or Term 1 & 2"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Coach</Label>
            <Input
              value={String(item.coach ?? "")}
              onChange={(e) => onChange({ ...item, coach: e.target.value })}
              placeholder="Coach name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              rows={3}
              value={String(item.description ?? "")}
              onChange={(e) => onChange({ ...item, description: e.target.value })}
              placeholder="Describe this sports program..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Achievements</Label>
            <Textarea
              rows={3}
              value={String(item.achievements ?? "")}
              onChange={(e) => onChange({ ...item, achievements: e.target.value })}
              placeholder="Notable achievements and awards..."
            />
          </div>
        </div>
      )}
    />
  )
}
