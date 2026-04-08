"use client"

import { useState, useCallback } from "react"
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager"
import { Label } from "@/components/admin/ui/Label"
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor"
import { Input } from "@/components/ui/input"
import { arrayMove } from "@dnd-kit/sortable"

/* ── Mock data ───────────────────────────────────────────── */

const initialFaqs: ContentItem[] = [
  {
    id: "faq-1",
    label: "What are the admission requirements?",
    subtitle: "Admissions — Order 1",
    status: "published",
    question: "What are the admission requirements for Forever Tvet Institute?",
    answer:
      "<p>Applicants must hold an Ordinary Level Certificate with at least five passes. Additional program-specific requirements may apply.</p>",
    category: "Admissions",
    displayOrder: "1",
  },
  {
    id: "faq-2",
    label: "How do I apply online?",
    subtitle: "Admissions — Order 2",
    status: "published",
    question: "How do I apply for admission online?",
    answer:
      "<p>Visit our website and click the \"Apply Now\" button. Fill in the application form, upload the required documents, and submit. You will receive a confirmation email within 48 hours.</p>",
    category: "Admissions",
    displayOrder: "2",
  },
  {
    id: "faq-3",
    label: "What is the tuition fee structure?",
    subtitle: "Fees — Order 3",
    status: "published",
    question: "What is the tuition fee structure for each program?",
    answer:
      "<p>Fee structures vary by program. Please visit the Fees section on our website or contact the admissions office for a detailed breakdown of tuition, registration, and lab fees.</p>",
    category: "Fees",
    displayOrder: "3",
  },
  {
    id: "faq-4",
    label: "Are scholarships available?",
    subtitle: "Fees — Order 4",
    status: "published",
    question: "Are there scholarships or financial aid options available?",
    answer:
      "<p>Yes, Forever Tvet Institute offers merit-based scholarships and need-based financial aid. Contact the financial aid office for eligibility criteria and application deadlines.</p>",
    category: "Fees",
    displayOrder: "4",
  },
  {
    id: "faq-5",
    label: "When does the next intake begin?",
    subtitle: "Programs — Order 5",
    status: "draft",
    question: "When does the next academic intake begin?",
    answer:
      "<p>Our main intake begins in September each year, with a mid-year intake in January for select programs. Check our academic calendar for exact dates.</p>",
    category: "Programs",
    displayOrder: "5",
  },
  {
    id: "faq-6",
    label: "Can I transfer credits?",
    subtitle: "Student Life — Order 6",
    status: "draft",
    question: "Can I transfer credits from another institution?",
    answer:
      "<p>Credit transfer is evaluated on a case-by-case basis. Submit your official transcripts and course syllabi to the registrar for assessment.</p>",
    category: "Student Life",
    displayOrder: "6",
  },
]

/* ── Page ─────────────────────────────────────────────────── */

export default function FaqsPage() {
  const [items, setItems] = useState<ContentItem[]>(initialFaqs)

  const handleCreate = useCallback((): ContentItem => {
    const maxOrder = items.reduce(
      (max, i) => Math.max(max, Number(i.displayOrder) || 0),
      0
    )
    const newItem: ContentItem = {
      id: `faq-${Date.now()}`,
      label: "New FAQ",
      subtitle: "",
      status: "draft",
      question: "",
      answer: "",
      category: "Admissions",
      displayOrder: String(maxOrder + 1),
    }
    setItems((prev) => [newItem, ...prev])
    return newItem
  }, [items])

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

  const handleReorder = useCallback(
    (oldIndex: number, newIndex: number) => {
      setItems((prev) => arrayMove(prev, oldIndex, newIndex))
    },
    []
  )

  return (
    <ContentManager
      title="Admissions FAQs"
      description="Manage frequently asked questions about admissions."
      items={items}
      addLabel="Add FAQ"
      reorderable
      onReorder={handleReorder}
      onCreateItem={handleCreate}
      onSaveItem={handleSave}
      onDeleteItem={handleDelete}
      onStatusChangeItem={handleStatusChange}
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Question</Label>
            <Input
              value={(item.question as string) ?? ""}
              onChange={(e) => {
                const q = e.target.value
                onChange({ question: q, label: q })
              }}
              placeholder="e.g. What are the admission requirements?"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Answer</Label>
            <RichTextEditor
              defaultValue={(item.answer as string) ?? ""}
              onChange={(html) => onChange({ answer: html })}
              placeholder="Write the answer..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={(item.category as string) ?? ""}
              onChange={(e) => {
                const cat = e.target.value
                onChange({
                  category: cat,
                  subtitle: `${cat} — Order ${(item.displayOrder as string) || ""}`,
                })
              }}
              placeholder="Admissions, Fees, Programs, or Student Life"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Display Order</Label>
            <Input
              type="number"
              value={(item.displayOrder as string) ?? ""}
              onChange={(e) => {
                const order = e.target.value
                onChange({
                  displayOrder: order,
                  subtitle: `${(item.category as string) || ""} — Order ${order}`,
                })
              }}
              placeholder="1"
            />
          </div>
        </div>
      )}
    />
  )
}
