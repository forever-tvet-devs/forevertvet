"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/ui/AdminPageHeader";
import { Label } from "@/components/admin/ui/Label";
import { Textarea } from "@/components/admin/ui/Textarea";
import { Input } from "@/components/ui/input";
import { FloppyDisk } from "@phosphor-icons/react";

const initialData = {
  phone: "+250 788 123 456",
  email: "info@forevertvet.ac.rw",
  address: "KN 4 Ave, Kigali, Rwanda\nP.O. Box 1234 Kigali",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987...",
  officeHours: "Monday - Friday: 8:00 AM - 5:00 PM",
  facebookUrl: "https://facebook.com/forevertvet",
  twitterUrl: "https://twitter.com/forevertvet",
  instagramUrl: "https://instagram.com/forevertvet",
  youtubeUrl: "https://youtube.com/@forevertvet",
};

export default function ContactInfoPage() {
  const [form, setForm] = useState(initialData);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Contact Information"
        description="Manage the institute's contact details and social media links."
      />

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Contact Details</h2>
          <p className="text-xs text-slate-400 mt-0.5">Update contact information displayed on the website</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Phone Number</Label>
              <Input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+250 7XX XXX XXX"
              />
            </div>

            <div className="space-y-1.5">
              <Label>Email Address</Label>
              <Input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="info@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Physical Address</Label>
            <Textarea
              rows={2}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Enter the physical address..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Google Maps Embed URL</Label>
            <Input
              value={form.mapsUrl}
              onChange={(e) => update("mapsUrl", e.target.value)}
              placeholder="https://www.google.com/maps/embed?pb=..."
            />
          </div>

          <div className="space-y-1.5">
            <Label>Office Hours</Label>
            <Input
              value={form.officeHours}
              onChange={(e) => update("officeHours", e.target.value)}
              placeholder="e.g. Monday - Friday: 8:00 AM - 5:00 PM"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-semibold text-slate-900">Social Media Links</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage social media profile URLs</p>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label>Facebook URL</Label>
              <Input
                value={form.facebookUrl}
                onChange={(e) => update("facebookUrl", e.target.value)}
                placeholder="https://facebook.com/..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Twitter URL</Label>
              <Input
                value={form.twitterUrl}
                onChange={(e) => update("twitterUrl", e.target.value)}
                placeholder="https://twitter.com/..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>Instagram URL</Label>
              <Input
                value={form.instagramUrl}
                onChange={(e) => update("instagramUrl", e.target.value)}
                placeholder="https://instagram.com/..."
              />
            </div>

            <div className="space-y-1.5">
              <Label>YouTube URL</Label>
              <Input
                value={form.youtubeUrl}
                onChange={(e) => update("youtubeUrl", e.target.value)}
                placeholder="https://youtube.com/@..."
              />
            </div>
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
