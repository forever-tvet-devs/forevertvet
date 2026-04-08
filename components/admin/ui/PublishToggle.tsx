"use client"

import { cn } from "@/lib/utils"

type ContentStatus = "published" | "draft" | "archived"

interface PublishToggleProps {
  status: ContentStatus
  onChange?: (status: ContentStatus) => void
}

export function PublishToggle({ status, onChange }: PublishToggleProps) {
  if (status === "archived") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-400 text-xs font-semibold select-none">
        <span className="size-1.5 rounded-full bg-slate-400" />
        Archived
      </span>
    )
  }

  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5">
      <button
        type="button"
        onClick={() => onChange?.("draft")}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer",
          status === "draft"
            ? "bg-white text-amber-700 shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full transition-colors",
            status === "draft" ? "bg-amber-500" : "bg-slate-300"
          )}
        />
        Draft
      </button>
      <button
        type="button"
        onClick={() => onChange?.("published")}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer",
          status === "published"
            ? "bg-white text-emerald-700 shadow-sm"
            : "text-slate-400 hover:text-slate-600"
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full transition-colors",
            status === "published" ? "bg-emerald-500" : "bg-slate-300"
          )}
        />
        Public
      </button>
    </div>
  )
}
