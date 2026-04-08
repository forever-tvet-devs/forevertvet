"use client"

import { useEffect, useCallback } from "react"
import { Warning, SpinnerGap } from "@phosphor-icons/react"

interface ConfirmDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  message?: string
  loading?: boolean
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title = "Delete item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  loading = false,
}: ConfirmDialogProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) {
        onClose()
      }
    },
    [onClose, loading]
  )

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, handleKeyDown])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => {
          if (!loading) onClose()
        }}
      />

      {/* Dialog card */}
      <div className="relative z-10 w-full max-w-sm mx-4 bg-white rounded-xl shadow-xl border border-slate-200 p-6 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center size-12 rounded-full bg-red-50 mb-4">
            <Warning size={24} weight="fill" className="text-red-500" />
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-slate-500 mb-6">{message}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onConfirm}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-sm font-medium text-white hover:bg-red-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading && (
              <SpinnerGap size={16} className="animate-spin" />
            )}
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
