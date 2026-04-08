"use client"

import { useState, type ReactNode } from "react"
import { FloppyDisk, Trash, SpinnerGap } from "@phosphor-icons/react"
import { PublishToggle } from "@/components/admin/ui/PublishToggle"
import { ConfirmDialog } from "@/components/admin/ui/ConfirmDialog"
import { LastUpdatedBy } from "@/components/admin/panels/LastUpdatedBy"

type ContentStatus = "published" | "draft" | "archived"

interface FormPanelProps {
  label?: string
  status: ContentStatus
  updatedAt?: string
  updatedBy?: string
  onStatusChange?: (status: ContentStatus) => void
  onSave?: () => void
  onDelete?: () => void
  saving?: boolean
  children: ReactNode
}

export function FormPanel({
  label,
  status,
  updatedAt,
  updatedBy,
  onStatusChange,
  onSave,
  onDelete,
  saving = false,
  children,
}: FormPanelProps) {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await onDelete?.()
    } finally {
      setDeleting(false)
      setDeleteOpen(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50/50 shrink-0 flex-wrap">
        <div className="flex items-center gap-3">
          <PublishToggle status={status} onChange={onStatusChange} />
          {label && (
            <span className="text-xs font-medium text-slate-400 hidden sm:inline">
              {label}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onSave && (
            <button
              type="button"
              onClick={onSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
            >
              {saving ? (
                <SpinnerGap size={14} className="animate-spin" />
              ) : (
                <FloppyDisk size={14} weight="bold" />
              )}
              Save
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={() => setDeleteOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-semibold hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash size={14} weight="bold" />
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Scrollable form content */}
      <div className="flex-1 overflow-auto px-4 py-4">
        {children}
      </div>

      {/* Footer */}
      {updatedAt && (
        <div className="px-4 py-2.5 border-t border-slate-100 shrink-0">
          <LastUpdatedBy timestamp={updatedAt} name={updatedBy} />
        </div>
      )}

      {/* Delete confirmation */}
      <ConfirmDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </div>
  )
}
