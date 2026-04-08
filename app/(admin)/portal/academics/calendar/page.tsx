"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";

const initialEvents: ContentItem[] = [
  {
    id: "evt-1",
    label: "Term 1 Start",
    subtitle: "15 Jan 2026 — Term 1",
    status: "published",
    eventName: "Term 1 Start",
    startDate: "2026-01-15",
    endDate: "2026-01-15",
    term: "Term 1",
    description: "Official start of the first academic term for all students.",
  },
  {
    id: "evt-2",
    label: "Mid-Term Examinations",
    subtitle: "10 Mar — 20 Mar 2026 — Term 1",
    status: "published",
    eventName: "Mid-Term Examinations",
    startDate: "2026-03-10",
    endDate: "2026-03-20",
    term: "Term 1",
    description:
      "Mid-term assessment period covering all coursework from the first half of Term 1.",
  },
  {
    id: "evt-3",
    label: "End-of-Term Examinations",
    subtitle: "25 May — 06 Jun 2026 — Term 1",
    status: "published",
    eventName: "End-of-Term Examinations",
    startDate: "2026-05-25",
    endDate: "2026-06-06",
    term: "Term 1",
    description:
      "Final examinations for Term 1 across all departments and programs.",
  },
  {
    id: "evt-4",
    label: "Term 2 Start",
    subtitle: "06 Jul 2026 — Term 2",
    status: "draft",
    eventName: "Term 2 Start",
    startDate: "2026-07-06",
    endDate: "2026-07-06",
    term: "Term 2",
    description: "Official start of the second academic term.",
  },
  {
    id: "evt-5",
    label: "Industrial Attachment",
    subtitle: "01 Sep — 30 Nov 2026 — Term 2",
    status: "draft",
    eventName: "Industrial Attachment",
    startDate: "2026-09-01",
    endDate: "2026-11-30",
    term: "Term 2",
    description:
      "Students are placed with industry partners for hands-on work experience and practical skills development.",
  },
  {
    id: "evt-6",
    label: "Graduation Ceremony",
    subtitle: "18 Dec 2026 — Term 2",
    status: "draft",
    eventName: "Graduation Ceremony",
    startDate: "2026-12-18",
    endDate: "2026-12-18",
    term: "Term 2",
    description:
      "Annual graduation ceremony celebrating the achievements of completing students.",
  },
];

export default function CalendarPage() {
  const [events, setEvents] = useState(initialEvents);

  return (
    <ContentManager
      title="Academic Calendar"
      description="Manage academic calendar events, terms, and key dates."
      items={events}
      addLabel="Add Event"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Event Name</Label>
            <Input
              value={String(item.eventName ?? "")}
              onChange={(e) =>
                onChange({ ...item, eventName: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Start Date</Label>
            <Input
              type="date"
              value={String(item.startDate ?? "")}
              onChange={(e) => onChange({ ...item, startDate: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>End Date</Label>
            <Input
              type="date"
              value={String(item.endDate ?? "")}
              onChange={(e) => onChange({ ...item, endDate: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Term</Label>
            <Input
              value={String(item.term ?? "")}
              onChange={(e) => onChange({ ...item, term: e.target.value })}
              placeholder="e.g. Term 1"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              rows={3}
              value={String(item.description ?? "")}
              onChange={(e) =>
                onChange({ ...item, description: e.target.value })
              }
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `evt-${Date.now()}`,
          label: "New Event",
          status: "draft",
          eventName: "",
          startDate: "",
          endDate: "",
          term: "",
          description: "",
        };
        setEvents((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setEvents((prev) =>
          prev.map((e) => (e.id === item.id ? item : e))
        );
      }}
      onDeleteItem={(id) => {
        setEvents((prev) => prev.filter((e) => e.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setEvents((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        );
      }}
    />
  );
}
