"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/admin/ui/ImageUpload";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  siteName: "Forever Tvet Institute",
  tagline: "Building Skills for a Better Future",
  logoUrl: "/images/logo-og.png",
  faviconUrl: "/favicon.ico",
  primaryColor: "#214B82",
  footerText:
    "Forever Technical and Vocational Education and Training Institute.\nAll rights reserved.",
  googleAnalyticsId: "G-XXXXXXXXXX",
};

export default function SettingsPage() {
  const [form, setForm] = useState(initialData);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="General Settings"
        description="Configure global website settings and branding."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Site Configuration</h2>
          <p className="text-xs text-slate-400 mt-0.5">Update site-wide settings and branding</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Site Name</Label>
              <Input
                value={form.siteName}
                onChange={(e) => update("siteName", e.target.value)}
                placeholder="Forever Tvet Institute"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Tagline</Label>
              <Input
                value={form.tagline}
                onChange={(e) => update("tagline", e.target.value)}
                placeholder="A short tagline for the site"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ImageUpload
              label="Site Logo"
              value={form.logoUrl}
              onChange={(url) => update("logoUrl", url)}
              aspect="square"
            />

            <ImageUpload
              label="Favicon"
              value={form.faviconUrl}
              onChange={(url) => update("faviconUrl", url)}
              aspect="square"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Primary Color</Label>
              <Input
                value={form.primaryColor}
                onChange={(e) => update("primaryColor", e.target.value)}
                placeholder="#214B82"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Google Analytics ID</Label>
              <Input
                value={form.googleAnalyticsId}
                onChange={(e) => update("googleAnalyticsId", e.target.value)}
                placeholder="G-XXXXXXXXXX"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Footer Text</Label>
            <Textarea
              rows={2}
              value={form.footerText}
              onChange={(e) => update("footerText", e.target.value)}
              placeholder="Footer text displayed at the bottom of every page..."
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors cursor-pointer">
              <FloppyDisk size={16} weight="bold" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
