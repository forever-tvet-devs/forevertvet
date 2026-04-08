"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";

const initialStaff: ContentItem[] = [
  {
    id: "staff-1",
    label: "Dr. Jean-Baptiste Mugabo",
    subtitle: "Headmaster — Administration",
    status: "published",
    fullName: "Dr. Jean-Baptiste Mugabo",
    titleRole: "Headmaster",
    department: "Administration",
    email: "jb.mugabo@forevertvet.ac.rw",
    phone: "+250 788 100 001",
    bio: "<p>Dr. Mugabo has over 20 years of experience in technical education and has led Forever Tvet Institute since its founding.</p>",
    photoUrl: "/images/me.png",
  },
  {
    id: "staff-2",
    label: "Marie-Claire Uwimana",
    subtitle: "Senior Instructor — Technical Studies",
    status: "published",
    fullName: "Marie-Claire Uwimana",
    titleRole: "Senior Instructor, Electrical Engineering",
    department: "Technical Studies",
    email: "mc.uwimana@forevertvet.ac.rw",
    phone: "+250 788 100 002",
    bio: "<p>Marie-Claire specializes in industrial electrical systems and has trained over 500 students in her career.</p>",
    photoUrl: "/images/team3.jpg",
  },
  {
    id: "staff-3",
    label: "Patrick Niyonzima",
    subtitle: "Workshop Supervisor — Mechanical Engineering",
    status: "published",
    fullName: "Patrick Niyonzima",
    titleRole: "Workshop Supervisor",
    department: "Mechanical Engineering",
    email: "p.niyonzima@forevertvet.ac.rw",
    phone: "+250 788 100 003",
    bio: "<p>Patrick oversees all mechanical engineering workshops and ensures hands-on training meets industry standards.</p>",
    photoUrl: "/images/me.png",
  },
  {
    id: "staff-4",
    label: "Ange Uwase",
    subtitle: "Instructor — ICT Department",
    status: "draft",
    fullName: "Ange Uwase",
    titleRole: "Instructor, Information Technology",
    department: "ICT Department",
    email: "a.uwase@forevertvet.ac.rw",
    phone: "+250 788 100 004",
    bio: "<p>Ange teaches software development and network administration with a focus on practical skills for the job market.</p>",
    photoUrl: "/images/team3.jpg",
  },
  {
    id: "staff-5",
    label: "Emmanuel Habimana",
    subtitle: "Director — Academic Affairs",
    status: "published",
    fullName: "Emmanuel Habimana",
    titleRole: "Director of Technical Programs",
    department: "Academic Affairs",
    email: "e.habimana@forevertvet.ac.rw",
    phone: "+250 788 100 005",
    bio: "<p>Emmanuel coordinates all technical programs and ensures curriculum alignment with national TVET standards.</p>",
    photoUrl: "/images/me.png",
  },
  {
    id: "staff-6",
    label: "Claudine Mukagatare",
    subtitle: "Registrar — Student Services",
    status: "published",
    fullName: "Claudine Mukagatare",
    titleRole: "Registrar",
    department: "Student Services",
    email: "c.mukagatare@forevertvet.ac.rw",
    phone: "+250 788 100 006",
    bio: "<p>Claudine manages student records, admissions processing, and academic transcripts for the institute.</p>",
    photoUrl: "/images/team3.jpg",
  },
];

export default function StaffPage() {
  const [staff, setStaff] = useState(initialStaff);

  return (
    <ContentManager
      title="Staff & Faculty"
      description="Manage all staff members and faculty of the institute."
      items={staff}
      addLabel="Add Staff"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Full Name</Label>
            <Input
              value={String(item.fullName ?? "")}
              onChange={(e) =>
                onChange({ ...item, fullName: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Title / Role</Label>
            <Input
              value={String(item.titleRole ?? "")}
              onChange={(e) => onChange({ ...item, titleRole: e.target.value })}
              placeholder="e.g. Senior Instructor"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Department</Label>
            <Input
              value={String(item.department ?? "")}
              onChange={(e) => onChange({ ...item, department: e.target.value })}
              placeholder="e.g. Technical Studies"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input
              value={String(item.email ?? "")}
              onChange={(e) => onChange({ ...item, email: e.target.value })}
              placeholder="name@forevertvet.ac.rw"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Phone</Label>
            <Input
              value={String(item.phone ?? "")}
              onChange={(e) => onChange({ ...item, phone: e.target.value })}
              placeholder="+250 7XX XXX XXX"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Bio</Label>
            <RichTextEditor
              defaultValue={String(item.bio ?? "")}
              onChange={(html) => onChange({ ...item, bio: html })}
              placeholder="Write a short biography..."
            />
          </div>
          <ImageUpload
            label="Photo"
            value={String(item.photoUrl ?? "")}
            onChange={(url) => onChange({ ...item, photoUrl: url })}
            aspect="square"
          />
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `staff-${Date.now()}`,
          label: "New Staff Member",
          subtitle: "",
          status: "draft",
          fullName: "",
          titleRole: "",
          department: "",
          email: "",
          phone: "",
          bio: "",
          photoUrl: "",
        };
        setStaff((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setStaff((prev) =>
          prev.map((s) => (s.id === item.id ? item : s))
        );
      }}
      onDeleteItem={(id) => {
        setStaff((prev) => prev.filter((s) => s.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setStaff((prev) =>
          prev.map((s) => (s.id === id ? { ...s, status } : s))
        );
      }}
    />
  );
}
