"use client";

import { useState } from "react";
import {
  ContentManager,
  type ContentItem,
} from "@/components/admin/panels/ContentManager";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";

const initialDepartments: ContentItem[] = [
  {
    id: "dept-1",
    label: "Heavy Machinery Operation & Maintenance",
    subtitle: "Short Course — Jean-Claude Habimana",
    status: "published",
    name: "Heavy Machinery Operation & Maintenance",
    level: "Level 4",
    head: "Jean-Claude Habimana",
    description:
      "<p>Hands-on training in the operation, maintenance, and safety of heavy construction equipment including excavators, bulldozers, and loaders.</p>",
    programs: "Excavator Operation\nBulldozer & Loader Operation\nCrane Operation",
  },
  {
    id: "dept-2",
    label: "Solar Technology",
    subtitle: "Short Course — Wang Lei",
    status: "published",
    name: "Solar Technology",
    level: "Certificate",
    head: "Wang Lei",
    description:
      "<p>Installation, maintenance, and commissioning of solar PV systems for residential, commercial, and off-grid applications.</p>",
    programs: "Solar PV Installation\nSystem Design & Sizing\nGrid-Tie & Off-Grid Systems",
  },
  {
    id: "dept-3",
    label: "EV Cars",
    subtitle: "Short Course — Li Jun",
    status: "published",
    name: "EV Cars",
    level: "Certificate",
    head: "Li Jun",
    description:
      "<p>Diagnosis, servicing, and maintenance of electric vehicles and their high-voltage battery and powertrain systems.</p>",
    programs: "EV Powertrain Diagnostics\nBattery Systems\nCharging Infrastructure",
  },
  {
    id: "dept-4a",
    label: "Land Surveying",
    subtitle: "Level 3–5 — Marie-Claire Uwimana",
    status: "published",
    name: "Land Surveying",
    level: "Level 5",
    head: "Marie-Claire Uwimana",
    description:
      "<p>Comprehensive surveying and geomatics program covering land measurement, mapping, and GIS technologies for modern infrastructure development.</p>",
    programs: "Topographic Surveying\nGIS & Remote Sensing",
  },
  {
    id: "dept-5",
    label: "Electrical Technology",
    subtitle: "Level 3–5 — Patrick Ndayisaba",
    status: "published",
    name: "Electrical Technology",
    level: "Level 4",
    head: "Patrick Ndayisaba",
    description:
      "<p>Training in industrial electrical installations, maintenance, and troubleshooting for manufacturing and construction environments.</p>",
    programs:
      "Electrical Installation\nIndustrial Wiring\nPLC Programming\nElectrical Maintenance",
  },
  {
    id: "dept-6",
    label: "Public Works",
    subtitle: "Level 3–5 — Emmanuel Mugisha",
    status: "draft",
    name: "Public Works",
    level: "Level 4",
    head: "Emmanuel Mugisha",
    description:
      "<p>Practical skills in road design, construction techniques, and maintenance procedures for Rwanda's growing road network.</p>",
    programs: "Road Construction Techniques\nAsphalt & Concrete Works",
  },
  {
    id: "dept-7",
    label: "Computer Systems & Architecture",
    subtitle: "Level 3–5 — Grace Ingabire",
    status: "draft",
    name: "Computer Systems & Architecture",
    level: "Level 5",
    head: "Grace Ingabire",
    description:
      "<p>Modern computer engineering program covering hardware, networking, and software fundamentals for the technology sector.</p>",
    programs:
      "Hardware & Networking\nSoftware Development\nIT Support & Administration",
  },
];

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState(initialDepartments);

  return (
    <ContentManager
      title="Departments"
      description="Manage academic departments and their programs."
      items={departments}
      addLabel="Add Department"
      renderForm={(item, onChange) => (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Department Name</Label>
            <Input
              value={String(item.name ?? "")}
              onChange={(e) =>
                onChange({ ...item, name: e.target.value, label: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label>Level</Label>
            <Input
              value={String(item.level ?? "")}
              onChange={(e) => onChange({ ...item, level: e.target.value })}
              placeholder="e.g. Level 5"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Head of Department</Label>
            <Input
              value={String(item.head ?? "")}
              onChange={(e) => onChange({ ...item, head: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <RichTextEditor
              defaultValue={String(item.description ?? "")}
              onChange={(html) => onChange({ ...item, description: html })}
              placeholder="Describe this department..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Programs</Label>
            <Textarea
              rows={3}
              value={String(item.programs ?? "")}
              onChange={(e) => onChange({ ...item, programs: e.target.value })}
              placeholder="One program per line"
            />
          </div>
        </div>
      )}
      onCreateItem={() => {
        const newItem: ContentItem = {
          id: `dept-${Date.now()}`,
          label: "New Department",
          status: "draft",
          name: "",
          level: "",
          head: "",
          description: "",
          programs: "",
        };
        setDepartments((prev) => [...prev, newItem]);
        return newItem;
      }}
      onSaveItem={(item) => {
        setDepartments((prev) =>
          prev.map((d) => (d.id === item.id ? item : d))
        );
      }}
      onDeleteItem={(id) => {
        setDepartments((prev) => prev.filter((d) => d.id !== id));
      }}
      onStatusChangeItem={(id, status) => {
        setDepartments((prev) =>
          prev.map((d) => (d.id === id ? { ...d, status } : d))
        );
      }}
    />
  );
}
