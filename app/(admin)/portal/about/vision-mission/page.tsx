"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  vision:
    "To be the leading Technical and Vocational Education and Training institution in East Africa, recognized for producing highly skilled, innovative, and employable graduates who drive sustainable economic growth.",
  mission:
    "Forever TVET Institute is committed to delivering quality, industry-aligned vocational training that equips students with practical skills, entrepreneurial mindsets, and professional values. Through partnerships with industry and community, we create pathways to meaningful employment and self-reliance.",
  coreValues:
    "<ul><li><strong>Excellence</strong> — Striving for the highest standards in teaching and learning</li><li><strong>Integrity</strong> — Upholding honesty and ethical conduct in all we do</li><li><strong>Innovation</strong> — Embracing creativity and new approaches to problem-solving</li><li><strong>Inclusivity</strong> — Welcoming learners of all backgrounds and abilities</li><li><strong>Collaboration</strong> — Working together with industry, community, and partners</li><li><strong>Accountability</strong> — Taking responsibility for our actions and outcomes</li><li><strong>Lifelong Learning</strong> — Fostering a culture of continuous growth and development</li><li><strong>Community Service</strong> — Contributing positively to the communities we serve</li></ul>",
};

export default function VisionMissionPage() {
  const [form, setForm] = useState(initialData);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Vision & Mission"
        description="Manage the institute's vision, mission statement, and core values."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Content Editor</h2>
          <p className="text-xs text-slate-400 mt-0.5">Update vision, mission, and core values</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="space-y-1.5">
            <Label>Vision Statement</Label>
            <Textarea
              rows={4}
              value={form.vision}
              onChange={(e) => update("vision", e.target.value)}
              placeholder="Enter the institute's vision statement..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Mission Statement</Label>
            <Textarea
              rows={4}
              value={form.mission}
              onChange={(e) => update("mission", e.target.value)}
              placeholder="Enter the institute's mission statement..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Core Values</Label>
            <RichTextEditor
              defaultValue={form.coreValues}
              onChange={(html) => update("coreValues", html)}
              placeholder="Enter core values as a bullet list..."
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
