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

const initialApplications: ContentItem[] = [
  {
    id: "app-1",
    label: "Jean-Pierre Mugabo",
    subtitle: "Electrical Installation",
    status: "pending" as ContentItem["status"],
    email: "jpmugabo@gmail.com",
    phone: "+250 788 100 200",
    program: "Electrical Installation",
    dob: "2005-06-15",
    previousSchool: "Lycée de Kigali",
    notes: "",
  },
  {
    id: "app-2",
    label: "Grace Uwimana",
    subtitle: "Culinary Arts",
    status: "published" as ContentItem["status"],
    email: "grace.uwi@yahoo.com",
    phone: "+250 788 200 300",
    program: "Culinary Arts",
    dob: "2004-11-22",
    previousSchool: "GS Remera",
    notes: "Strong recommendation letter attached.",
  },
  {
    id: "app-3",
    label: "Emmanuel Kayitare",
    subtitle: "Automotive Mechanics",
    status: "published" as ContentItem["status"],
    email: "ekayitare@outlook.com",
    phone: "+250 788 300 400",
    program: "Automotive Mechanics",
    dob: "2005-03-08",
    previousSchool: "Collège Saint-André",
    notes: "",
  },
  {
    id: "app-4",
    label: "Diane Iradukunda",
    subtitle: "Information Technology",
    status: "archived" as ContentItem["status"],
    email: "diane.irad@gmail.com",
    phone: "+250 788 400 500",
    program: "Information Technology",
    dob: "2004-09-30",
    previousSchool: "FAWE Girls School",
    notes: "Missing O-Level certificate.",
  },
  {
    id: "app-5",
    label: "Patrick Habimana",
    subtitle: "Electrical Installation",
    status: "pending" as ContentItem["status"],
    email: "phabimana@gmail.com",
    phone: "+250 788 500 600",
    program: "Electrical Installation",
    dob: "2005-01-12",
    previousSchool: "ES Muhanga",
    notes: "",
  },
  {
    id: "app-6",
    label: "Claudine Mukeshimana",
    subtitle: "Culinary Arts",
    status: "pending" as ContentItem["status"],
    email: "cmukeshi@yahoo.com",
    phone: "+250 788 600 700",
    program: "Culinary Arts",
    dob: "2004-07-04",
    previousSchool: "GS Nyamirambo",
    notes: "",
  },
]

/* ── Stat helpers ─────────────────────────────────────────── */

function countByStatus(items: ContentItem[], status: string) {
  return items.filter((i) => i.status === status).length
}

/* ── Page ─────────────────────────────────────────────────── */

export default function ApplicationsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialApplications)

  const stats = [
    { label: "Total", value: items.length },
    { label: "Pending", value: countByStatus(items, "pending") },
    { label: "Approved", value: countByStatus(items, "published") },
    { label: "Rejected", value: countByStatus(items, "archived") },
  ]

  const handleCreate = useCallback((): ContentItem => {
    const newItem: ContentItem = {
      id: `app-${Date.now()}`,
      label: "New Applicant",
      subtitle: "",
      status: "pending" as ContentItem["status"],
      email: "",
      phone: "",
      program: "",
      dob: "",
      previousSchool: "",
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
      prev.map((i) => (i.id === id ? { ...i, status: status as ContentItem["status"] } : i))
    )
  }, [])

  return (
    <div className="flex flex-col h-full">
      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-0 pb-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-slate-100 p-4"
          >
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content manager */}
      <div className="flex-1 min-h-0">
        <ContentManager
          title="Applications"
          description="Review and manage student applications."
          items={items}
          addLabel="Add Application"
          onCreateItem={handleCreate}
          onSaveItem={handleSave}
          onDeleteItem={handleDelete}
          onStatusChangeItem={handleStatusChange}
          renderForm={(item, onChange) => (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label>Applicant Name</Label>
                <Input
                  value={(item.label as string) ?? ""}
                  onChange={(e) => onChange({ label: e.target.value })}
                  placeholder="Full name"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={(item.email as string) ?? ""}
                  onChange={(e) => onChange({ email: e.target.value })}
                  placeholder="applicant@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Phone</Label>
                <Input
                  value={(item.phone as string) ?? ""}
                  onChange={(e) => onChange({ phone: e.target.value })}
                  placeholder="+250 7XX XXX XXX"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Program Applied</Label>
                <Input
                  value={(item.program as string) ?? ""}
                  onChange={(e) =>
                    onChange({ program: e.target.value, subtitle: e.target.value })
                  }
                  placeholder="e.g. Electrical Installation"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Date of Birth</Label>
                <Input
                  type="date"
                  value={(item.dob as string) ?? ""}
                  onChange={(e) => onChange({ dob: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Previous School</Label>
                <Input
                  value={(item.previousSchool as string) ?? ""}
                  onChange={(e) => onChange({ previousSchool: e.target.value })}
                  placeholder="Name of previous institution"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Notes</Label>
                <Textarea
                  rows={4}
                  value={(item.notes as string) ?? ""}
                  onChange={(e) => onChange({ notes: e.target.value })}
                  placeholder="Additional notes..."
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
