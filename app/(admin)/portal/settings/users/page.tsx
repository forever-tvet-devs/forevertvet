"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Input } from "@/components/ui/input";

const initialUsers: ContentItem[] = [
  {
    id: "user-1",
    label: "Prince Chrix",
    subtitle: "Admin",
    status: "published",
    fullName: "Prince Chrix",
    email: "prince@forevertvet.ac.rw",
    role: "Admin",
    password: "",
  },
  {
    id: "user-2",
    label: "Marie Uwimana",
    subtitle: "Editor",
    status: "published",
    fullName: "Marie Uwimana",
    email: "m.uwimana@forevertvet.ac.rw",
    role: "Editor",
    password: "",
  },
  {
    id: "user-3",
    label: "Jean Habimana",
    subtitle: "Editor",
    status: "published",
    fullName: "Jean Habimana",
    email: "j.habimana@forevertvet.ac.rw",
    role: "Editor",
    password: "",
  },
  {
    id: "user-4",
    label: "Alice Mukamana",
    subtitle: "Viewer",
    status: "archived",
    fullName: "Alice Mukamana",
    email: "a.mukamana@forevertvet.ac.rw",
    role: "Viewer",
    password: "",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <ContentManager
      title="Admin Users"
      description="Manage user accounts and access permissions."
      items={users}
      addLabel="Invite User"
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
            <Label>Email</Label>
            <Input
              value={String(item.email ?? "")}
              onChange={(e) => onChange({ ...item, email: e.target.value })}
              placeholder="name@forevertvet.ac.rw"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Role</Label>
            <Input
              value={String(item.role ?? "")}
              onChange={(e) => onChange({ ...item, role: e.target.value })}
              placeholder="Admin / Editor / Viewer"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Password</Label>
            <Input
              type="password"
              value={String(item.password ?? "")}
              onChange={(e) => onChange({ ...item, password: e.target.value })}
              placeholder="Leave blank to keep current"
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `user-${Date.now()}`,
          label: "New User",
          subtitle: "",
          status: "draft",
          fullName: "",
          email: "",
          role: "",
          password: "",
        };
        setUsers((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setUsers((prev) =>
          prev.map((u) => (u.id === item.id ? item : u))
        );
      }}
      onDeleteItem={(id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setUsers((prev) =>
          prev.map((u) => (u.id === id ? { ...u, status } : u))
        );
      }}
    />
  );
}
