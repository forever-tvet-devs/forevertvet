"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  fullName: "Fan Qiangqiang",
  titlePosition: "General Manager",
  photoUrl: "/images/me.png",
  message:
    "<p>Welcome to Forever TVET Institute. As we continue our journey toward educational excellence, I am proud of the strides we have made in shaping the futures of our students. Our commitment to practical, hands-on learning ensures that every graduate leaves our institution prepared to contribute meaningfully to Rwanda's workforce.</p><p>We believe that technical and vocational education is the cornerstone of sustainable development. At Forever TVET, we don't just teach skills — we nurture innovators, problem-solvers, and future leaders.</p><p>I invite you to explore our programs, meet our dedicated faculty, and discover why Forever TVET Institute is the right choice for your vocational education journey.</p>",
  qualifications:
    "MBA in Education Management\nMaster of Science in Technical Education\nCertified TVET Quality Assessor",
};

export default function HeadmasterPage() {
  const [form, setForm] = useState(initialData);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Headmaster's Message"
        description="Edit the headmaster's profile and welcome message."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Content Editor</h2>
          <p className="text-xs text-slate-400 mt-0.5">Update the headmaster profile and message</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Full Name</Label>
              <Input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="e.g. Fan Qiangqiang"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Title</Label>
              <Input
                value={form.titlePosition}
                onChange={(e) => update("titlePosition", e.target.value)}
                placeholder="e.g. General Manager"
              />
            </div>
          </div>

          <ImageUpload
            label="Photo"
            value={form.photoUrl}
            onChange={(url) => update("photoUrl", url)}
            aspect="square"
          />

          <div className="space-y-1.5">
            <Label>Message</Label>
            <RichTextEditor
              defaultValue={form.message}
              onChange={(html) => update("message", html)}
              placeholder="Write the headmaster's welcome message..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Qualifications</Label>
            <Textarea
              rows={3}
              value={form.qualifications}
              onChange={(e) => update("qualifications", e.target.value)}
              placeholder="List qualifications, one per line..."
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors cursor-pointer">
              <FloppyDisk size={16} weight="bold" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
