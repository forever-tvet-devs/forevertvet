"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";

const initialResults: ContentItem[] = [
  {
    id: "res-1",
    label: "National TVET Examination Pass Rate",
    subtitle: "2025 — Exam Results — 94% pass rate",
    status: "published",
    title: "National TVET Examination Pass Rate",
    year: "2025",
    category: "Exam Results",
    value: "94%",
    description:
      "<p>Our students achieved a 94% pass rate in the 2025 national TVET examinations, reflecting the quality of instruction and hands-on training provided across all departments.</p>",
  },
  {
    id: "res-2",
    label: "Best TVET Institution Award — Eastern Province",
    subtitle: "2025 — Awards — 1st Place",
    status: "published",
    title: "Best TVET Institution Award — Eastern Province",
    year: "2025",
    category: "Awards",
    value: "1st Place",
    description:
      "<p>Forever Tvet Institute was recognized as the best TVET institution in the Eastern Province for outstanding performance in student outcomes and industry partnerships.</p>",
  },
  {
    id: "res-3",
    label: "Graduate Employment Within 6 Months",
    subtitle: "2025 — Employment — 89%",
    status: "published",
    title: "Graduate Employment Within 6 Months",
    year: "2025",
    category: "Employment",
    value: "89%",
    description:
      "<p>89% of our 2025 graduates secured employment within six months of completing their programs, demonstrating strong industry demand for our trained professionals.</p>",
  },
  {
    id: "res-4",
    label: "Skills Competition — Heavy Machinery Operation & Maintenance",
    subtitle: "2024 — Awards — Gold Medal",
    status: "draft",
    title: "Skills Competition — Heavy Machinery Operation & Maintenance",
    year: "2024",
    category: "Awards",
    value: "Gold Medal",
    description:
      "<p>Our heavy machinery students won a gold medal at the national TVET skills competition, showcasing exceptional practical competency.</p>",
  },
  {
    id: "res-5",
    label: "Internship Placement Rate",
    subtitle: "2025 — Employment — 100%",
    status: "draft",
    title: "Internship Placement Rate",
    year: "2025",
    category: "Employment",
    value: "100%",
    description:
      "<p>Every student in the 2025 cohort was successfully placed with an industry partner for their internship period, ensuring real-world experience before graduation.</p>",
  },
];

export default function ResultsPage() {
  const [results, setResults] = useState(initialResults);

  return (
    <ContentManager
      title="Results & Achievements"
      description="Manage published results, awards, and achievement metrics."
      items={results}
      addLabel="Add Result"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input
              value={String(item.title ?? "")}
              onChange={(e) =>
                onChange({ ...item, title: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Year</Label>
            <Input
              value={String(item.year ?? "")}
              onChange={(e) => onChange({ ...item, year: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Input
              value={String(item.category ?? "")}
              onChange={(e) => onChange({ ...item, category: e.target.value })}
              placeholder="Exam Results / Awards / Employment"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Value / Metric</Label>
            <Input
              value={String(item.value ?? "")}
              onChange={(e) => onChange({ ...item, value: e.target.value })}
              placeholder="e.g. 94%"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this result or achievement..."
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `res-${Date.now()}`,
          label: "New Result",
          status: "draft",
          title: "",
          year: "",
          category: "",
          value: "",
          description: "",
        };
        setResults((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setResults((prev) =>
          prev.map((r) => (r.id === item.id ? item : r))
        );
      }}
      onDeleteItem={(id) => {
        setResults((prev) => prev.filter((r) => r.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setResults((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status } : r))
        );
      }}
    />
  );
}
