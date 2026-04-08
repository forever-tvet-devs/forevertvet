"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";

const initialMessages: ContentItem[] = [
  {
    id: "msg-1",
    label: "Alice Uwamahoro",
    subtitle: "Unread",
    status: "draft",
    senderName: "Alice Uwamahoro",
    email: "alice.uwamahoro@gmail.com",
    subject: "Inquiry about Electrical Engineering program",
    date: "2026-04-05",
    message:
      "Hello, I would like to learn more about the Electrical Engineering program. Could you please send me the curriculum and admission requirements? Thank you.",
    reply: "",
  },
  {
    id: "msg-2",
    label: "Jean-Pierre Habimana",
    subtitle: "Unread",
    status: "draft",
    senderName: "Jean-Pierre Habimana",
    email: "jphabimana@yahoo.com",
    subject: "Request for campus tour",
    date: "2026-04-04",
    message:
      "Good morning, I am interested in visiting the campus with my family. Is it possible to arrange a tour this coming Saturday?",
    reply: "",
  },
  {
    id: "msg-3",
    label: "Grace Mukamana",
    subtitle: "Read",
    status: "published",
    senderName: "Grace Mukamana",
    email: "grace.m@outlook.com",
    subject: "Partnership opportunity with local NGO",
    date: "2026-04-03",
    message:
      "We are an NGO focused on youth empowerment and would love to explore partnership opportunities with Forever Tvet Institute.",
    reply: "",
  },
  {
    id: "msg-4",
    label: "Emmanuel Nshuti",
    subtitle: "Unread",
    status: "draft",
    senderName: "Emmanuel Nshuti",
    email: "e.nshuti@company.rw",
    subject: "Feedback on recent graduation ceremony",
    date: "2026-04-01",
    message:
      "Congratulations on a wonderful graduation ceremony. The organization was excellent and the keynote speech was very inspiring.",
    reply: "",
  },
  {
    id: "msg-5",
    label: "Diane Ingabire",
    subtitle: "Read",
    status: "published",
    senderName: "Diane Ingabire",
    email: "dingabire@edu.rw",
    subject: "Transcript request for former student",
    date: "2026-03-29",
    message:
      "I am writing to request an official transcript for a former student, registration number FT-2023-0456. Please advise on the process.",
    reply: "",
  },
];

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <ContentManager
      title="Messages"
      description="You have 3 unread messages."
      items={messages}
      addLabel="Add Message"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Sender Name</Label>
            <Input
              value={String(item.senderName ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input
              value={String(item.email ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Subject</Label>
            <Input
              value={String(item.subject ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Date</Label>
            <Input
              value={String(item.date ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Message</Label>
            <Textarea
              rows={6}
              value={String(item.message ?? "")}
              readOnly
            />
          </div>
          <div className="space-y-1.5">
            <Label>Reply</Label>
            <Textarea
              rows={4}
              value={String(item.reply ?? "")}
              onChange={(e) => onChange({ ...item, reply: e.target.value })}
              placeholder="Type your reply here..."
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `msg-${Date.now()}`,
          label: "New Message",
          subtitle: "Unread",
          status: "draft",
          senderName: "",
          email: "",
          subject: "",
          date: "",
          message: "",
          reply: "",
        };
        setMessages((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setMessages((prev) =>
          prev.map((m) => (m.id === item.id ? item : m))
        );
      }}
      onDeleteItem={(id) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === id
              ? {
                  ...m,
                  status,
                  subtitle: status === "draft" ? "Unread" : "Read",
                }
              : m
          )
        );
      }}
    />
  );
}
