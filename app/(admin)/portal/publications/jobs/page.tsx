"use client"

import { useState } from "react"
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { Textarea } from "@/components/admin/ui/Textarea"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"

const initialItems: ContentItem[] = [
  { id: "1", label: "ICT Instructor", subtitle: "Information Technology", status: "published", jobTitle: "ICT Instructor", department: "Information Technology", type: "Full-time", deadline: "2026-04-30", description: "<p>We are seeking a qualified ICT Instructor to teach computer science and information technology courses to vocational students.</p>", requirements: "<p>Bachelor's degree in Computer Science or related field. Minimum 2 years teaching experience. Proficiency in programming languages and network administration.</p>", howToApply: "Submit your CV, cover letter, and copies of certificates to the HR office or email hr@forever.edu by the deadline." },
  { id: "2", label: "Administrative Assistant", subtitle: "Administration", status: "published", jobTitle: "Administrative Assistant", department: "Administration", type: "Full-time", deadline: "2026-04-25", description: "<p>An Administrative Assistant is needed to support daily office operations and provide administrative services to staff and students.</p>", requirements: "<p>Diploma in Office Administration or equivalent. Strong organizational and communication skills. Proficiency in Microsoft Office Suite.</p>", howToApply: "Send your application with CV to the Administration Department or apply online through our careers portal." },
  { id: "3", label: "Workshop Technician", subtitle: "Engineering", status: "draft", jobTitle: "Workshop Technician", department: "Engineering", type: "Part-time", deadline: "2026-05-10", description: "<p>A Workshop Technician is required to maintain workshop equipment and assist instructors during practical sessions.</p>", requirements: "<p>Certificate in Mechanical or Electrical Engineering. Hands-on experience with workshop tools and machinery. Knowledge of safety protocols.</p>", howToApply: "Apply in person at the Engineering Department office with your credentials and references." },
  { id: "4", label: "Library Intern", subtitle: "Library Services", status: "draft", jobTitle: "Library Intern", department: "Library Services", type: "Internship", deadline: "2026-05-15", description: "<p>We offer an internship opportunity in our library for students or recent graduates interested in library science and information management.</p>", requirements: "<p>Currently enrolled in or recently graduated from a Library Science programme. Basic computer literacy. Good interpersonal skills.</p>", howToApply: "Submit your internship application form along with a recommendation letter from your institution." },
  { id: "5", label: "Guidance & Counselling Officer", subtitle: "Student Affairs", status: "archived", jobTitle: "Guidance & Counselling Officer", department: "Student Affairs", type: "Full-time", deadline: "2026-03-31", description: "<p>A Guidance & Counselling Officer is needed to provide academic and personal counselling services to students.</p>", requirements: "<p>Degree in Psychology, Counselling, or related field. Experience in student counselling. Excellent listening and communication skills.</p>", howToApply: "Email your application package to studentaffairs@forever.edu with the subject line 'Counselling Officer Application'." },
]

export default function JobsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems)

  return (
    <ContentManager
      title="Job Listings"
      description="Manage job offers and vacancies."
      items={items}
      addLabel="Post Job"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: String(Date.now()),
          label: "New Job Listing",
          status: "draft",
          jobTitle: "",
          department: "",
          type: "",
          deadline: "",
          description: "",
          requirements: "",
          howToApply: "",
        }
        setItems((prev) => [...prev, newItem])
        return newItem
      }}
      onSaveItem={(item) => {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, ...item, label: String(item.jobTitle ?? item.label) } : i)))
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
            <Label>Job Title</Label>
            <Input
              value={String(item.jobTitle ?? "")}
              onChange={(e) => onChange({ ...item, jobTitle: e.target.value, label: e.target.value })}
              placeholder="Job title"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Department</Label>
            <Input
              value={String(item.department ?? "")}
              onChange={(e) => onChange({ ...item, department: e.target.value })}
              placeholder="Department name"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Type</Label>
            <Input
              value={String(item.type ?? "")}
              onChange={(e) => onChange({ ...item, type: e.target.value })}
              placeholder="Full-time / Part-time / Internship"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Deadline</Label>
            <Input
              type="date"
              value={String(item.deadline ?? "")}
              onChange={(e) => onChange({ ...item, deadline: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe the job role..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Requirements</Label>
            <RichTextEditor
              defaultValue={String(item.requirements ?? "")}
              onChange={(html) => onChange({ ...item, requirements: html })}
              placeholder="List the job requirements..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>How to Apply</Label>
            <Textarea
              rows={3}
              value={String(item.howToApply ?? "")}
              onChange={(e) => onChange({ ...item, howToApply: e.target.value })}
              placeholder="Application instructions..."
            />
          </div>
        </div>
      )}
    />
  )
}
