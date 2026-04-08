"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { RichTextEditor } from "@/components/admin/ui/RichTextEditor";
import { Input } from "@/components/ui/input";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  pageTitle: "Curriculum Overview — Forever Tvet Institute",
  introduction:
    "<p>Forever Tvet Institute delivers a competency-based curriculum aligned with Rwanda's national TVET standards. Our programs blend theoretical knowledge with extensive hands-on practice, ensuring graduates are job-ready from day one. Each course is designed in consultation with industry partners to reflect current workforce demands across construction, surveying, electrical, and technology sectors.</p>",
  teachingMethodology:
    "<p>Our teaching methodology centres on practical, project-based learning. Students spend over 60% of their training hours in workshops, labs, and real-world field placements. Instructors use a blend of demonstrations, guided practice, peer collaboration, and independent projects. Digital tools and simulation software supplement hands-on work, giving learners exposure to modern industry workflows before they enter the job market.</p>",
  assessmentApproach:
    "Assessment is continuous and competency-driven. Students are evaluated through practical demonstrations, written examinations, portfolio reviews, and workplace-based assessments during internships. A minimum competency threshold must be met in every module before progression.",
};

export default function CurriculumPage() {
  const [form, setForm] = useState(initialData);

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Curriculum Overview"
        description="Edit the curriculum overview content displayed on the public site."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">
            Page Content
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Update the fields below and save to publish changes.
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="space-y-1.5">
            <Label>Page Title</Label>
            <Input
              value={form.pageTitle}
              onChange={(e) => handleChange("pageTitle", e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Introduction</Label>
            <RichTextEditor
              defaultValue={form.introduction}
              onChange={(html) => handleChange("introduction", html)}
              placeholder="Write the introduction..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Teaching Methodology</Label>
            <RichTextEditor
              defaultValue={form.teachingMethodology}
              onChange={(html) => handleChange("teachingMethodology", html)}
              placeholder="Describe the teaching methodology..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Assessment Approach</Label>
            <Textarea
              rows={4}
              value={form.assessmentApproach}
              onChange={(e) =>
                handleChange("assessmentApproach", e.target.value)
              }
            />
          </div>

          <div className="pt-2">
            <button className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors cursor-pointer">
              <FloppyDisk size={15} weight="bold" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
