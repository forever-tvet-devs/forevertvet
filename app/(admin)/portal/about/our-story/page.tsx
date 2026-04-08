"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  title: "Our Story",
  content:
    "<p>Forever Technical and Vocational Education and Training (TVET) Institute was founded with a clear mission: to bridge the gap between education and employment in Rwanda. Since our establishment in 2018, we have grown from a small training center into one of the most respected TVET institutions in the region.</p><p>Our journey began with a handful of dedicated instructors and a commitment to providing practical, industry-relevant skills to young Rwandans. Over the years, we have expanded our programs, built state-of-the-art facilities, and forged partnerships with leading employers across East Africa.</p><p>Today, Forever TVET Institute stands as a beacon of quality vocational education, producing graduates who are not only skilled but also innovative, entrepreneurial, and ready to contribute to Rwanda's growing economy.</p>",
  foundingYear: "2018",
  featuredImageUrl: "/images/image1.png",
};

export default function OurStoryPage() {
  const [form, setForm] = useState(initialData);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Our Story"
        description="Edit the institute's founding story and background information."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Content Editor</h2>
          <p className="text-xs text-slate-400 mt-0.5">Update the Our Story page content</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Page title"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Content</Label>
            <RichTextEditor
              defaultValue={form.content}
              onChange={(html) => update("content", html)}
              placeholder="Write the story of the institute..."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Founding Year</Label>
              <Input
                value={form.foundingYear}
                onChange={(e) => update("foundingYear", e.target.value)}
                placeholder="e.g. 2018"
              />
            </div>

            <ImageUpload
              label="Featured Image"
              value={form.featuredImageUrl}
              onChange={(url) => update("featuredImageUrl", url)}
              aspect="banner"
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
