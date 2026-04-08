"use client"

import { useState, useCallback } from "react"
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { Input } from "@/components/ui/input"

/* ── Mock data ───────────────────────────────────────────── */

const initialFees: ContentItem[] = [
  {
    id: "fee-1",
    label: "Electrical Installation",
    subtitle: "Tuition: 450,000 RWF",
    status: "published",
    programName: "Electrical Installation",
    tuitionFee: "450000",
    registrationFee: "25000",
    labFee: "35000",
    notes: "",
  },
  {
    id: "fee-2",
    label: "Culinary Arts",
    subtitle: "Tuition: 500,000 RWF",
    status: "published",
    programName: "Culinary Arts",
    tuitionFee: "500000",
    registrationFee: "25000",
    labFee: "45000",
    notes: "Includes kitchen supplies for the first semester.",
  },
  {
    id: "fee-3",
    label: "Automotive Mechanics",
    subtitle: "Tuition: 480,000 RWF",
    status: "published",
    programName: "Automotive Mechanics",
    tuitionFee: "480000",
    registrationFee: "25000",
    labFee: "40000",
    notes: "",
  },
  {
    id: "fee-4",
    label: "Information Technology",
    subtitle: "Tuition: 420,000 RWF",
    status: "draft",
    programName: "Information Technology",
    tuitionFee: "420000",
    registrationFee: "25000",
    labFee: "30000",
    notes: "Fee structure under review for next intake.",
  },
  {
    id: "fee-5",
    label: "Welding & Metal Fabrication",
    subtitle: "Tuition: 460,000 RWF",
    status: "published",
    programName: "Welding & Metal Fabrication",
    tuitionFee: "460000",
    registrationFee: "25000",
    labFee: "50000",
    notes: "",
  },
]

/* ── Page ─────────────────────────────────────────────────── */

export default function FeesPage() {
  const [items, setItems] = useState<ContentItem[]>(initialFees)

  const handleCreate = useCallback((): ContentItem => {
    const newItem: ContentItem = {
      id: `fee-${Date.now()}`,
      label: "New Program",
      subtitle: "",
      status: "draft",
      programName: "",
      tuitionFee: "",
      registrationFee: "",
      labFee: "",
      notes: "",
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
      title="Fee Structures"
      description="Manage tuition and fees for each program."
      items={items}
      addLabel="Add Fee Structure"
      onCreateItem={handleCreate}
      onSaveItem={handleSave}
      onDeleteItem={handleDelete}
      onStatusChangeItem={handleStatusChange}
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Program Name</Label>
            <Input
              value={(item.programName as string) ?? ""}
              onChange={(e) => {
                const name = e.target.value
                onChange({ programName: name, label: name })
              }}
              placeholder="e.g. Electrical Installation"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Tuition Fee</Label>
            <Input
              value={(item.tuitionFee as string) ?? ""}
              onChange={(e) => {
                const val = e.target.value
                onChange({
                  tuitionFee: val,
                  subtitle: val
                    ? `Tuition: ${Number(val).toLocaleString("en-RW")} RWF`
                    : "",
                })
              }}
              placeholder="e.g. 450000"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Registration Fee</Label>
            <Input
              value={(item.registrationFee as string) ?? ""}
              onChange={(e) => onChange({ registrationFee: e.target.value })}
              placeholder="e.g. 25000"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Lab Fee</Label>
            <Input
              value={(item.labFee as string) ?? ""}
              onChange={(e) => onChange({ labFee: e.target.value })}
              placeholder="e.g. 35000"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Notes</Label>
            <Textarea
              rows={3}
              value={(item.notes as string) ?? ""}
              onChange={(e) => onChange({ notes: e.target.value })}
              placeholder="Additional notes about this fee structure..."
            />
          </div>
        </div>
      )}
    />
  )
}
