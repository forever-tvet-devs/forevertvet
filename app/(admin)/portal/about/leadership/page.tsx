"use client";

import { useState } from "react";
import { ContentManager, type ContentItem } from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";

const initialLeaders: ContentItem[] = [
  {
    id: "leader-1",
    label: "Fan Qiangqiang",
    subtitle: "General Manager",
    status: "published",
    fullName: "Fan Qiangqiang",
    titlePosition: "General Manager",
    department: "Administration",
    bio: "<p>Experienced leader with a passion for vocational education and institutional growth.</p>",
    photoUrl: "/images/me.png",
  },
  {
    id: "leader-2",
    label: "Marie-Claire Uwimana",
    subtitle: "Deputy Headmaster, Academics",
    status: "published",
    fullName: "Marie-Claire Uwimana",
    titlePosition: "Deputy Headmaster, Academics",
    department: "Academic Affairs",
    bio: "<p>Dedicated academic leader overseeing curriculum development and teaching excellence.</p>",
    photoUrl: "/images/team3.jpg",
  },
  {
    id: "leader-3",
    label: "Emmanuel Habimana",
    subtitle: "Director of Technical Programs",
    status: "published",
    fullName: "Emmanuel Habimana",
    titlePosition: "Director of Technical Programs",
    department: "Technical Studies",
    bio: "<p>Technical education specialist driving hands-on learning and workshop modernization.</p>",
    photoUrl: "/images/me.png",
  },
  {
    id: "leader-4",
    label: "Alice Mukamana",
    subtitle: "Dean of Students",
    status: "draft",
    fullName: "Alice Mukamana",
    titlePosition: "Dean of Students",
    department: "Student Affairs",
    bio: "<p>Committed to student welfare, counseling, and extracurricular development.</p>",
    photoUrl: "/images/team3.jpg",
  },
  {
    id: "leader-5",
    label: "Patrick Niyonzima",
    subtitle: "Head of Partnerships & Placement",
    status: "published",
    fullName: "Patrick Niyonzima",
    titlePosition: "Head of Partnerships & Placement",
    department: "Industry Relations",
    bio: "<p>Building bridges between the institute and industry partners to ensure graduate employability.</p>",
    photoUrl: "/images/me.png",
  },
];

export default function LeadershipPage() {
  const [leaders, setLeaders] = useState<ContentItem[]>(initialLeaders);

  return (
    <ContentManager
      title="Leadership Team"
      description="Manage the institute's leadership and administrative team members."
      items={leaders}
      addLabel="Add Member"
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `leader-${Date.now()}`,
          label: "New Member",
          status: "draft",
          fullName: "",
          titlePosition: "",
          department: "",
          bio: "",
          photoUrl: "",
        };
        setLeaders((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setLeaders((prev) =>
          prev.map((l) => (l.id === item.id ? { ...l, ...item, label: item.fullName as string || item.label } : l))
        );
      }}
      onDeleteItem={(id) => {
        setLeaders((prev) => prev.filter((l) => l.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setLeaders((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status } : l))
        );
      }}
      renderForm={(item, onChange) => {
        const fullName = (item.fullName as string) ?? "";
        const titlePosition = (item.titlePosition as string) ?? "";
        const department = (item.department as string) ?? "";
        const bio = (item.bio as string) ?? "";
        const photoUrl = (item.photoUrl as string) ?? "";

        return (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label>Full Name</Label>
              <Input
                value={fullName}
                onChange={(e) => onChange({ ...item, fullName: e.target.value, label: e.target.value || "New Member" })}
                placeholder="e.g. Fan Qiangqiang"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Title / Position</Label>
              <Input
                value={titlePosition}
                onChange={(e) => onChange({ ...item, titlePosition: e.target.value, subtitle: e.target.value })}
                placeholder="e.g. General Manager"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Department</Label>
              <Input
                value={department}
                onChange={(e) => onChange({ ...item, department: e.target.value })}
                placeholder="e.g. Administration"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Bio</Label>
              <RichTextEditor
                defaultValue={bio}
                onChange={(html) => onChange({ ...item, bio: html })}
                placeholder="Write a brief biography..."
              />
            </div>

            <ImageUpload
              label="Photo"
              value={photoUrl}
              onChange={(url) => onChange({ ...item, photoUrl: url })}
              aspect="square"
            />
          </div>
        );
      }}
    />
  );
}
