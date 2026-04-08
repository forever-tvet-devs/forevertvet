"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import {
  UploadSimple,
  Trash,
  ArrowsClockwise,
  ImageSquare,
} from "@phosphor-icons/react"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
  aspect?: "video" | "square" | "banner"
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  banner: "aspect-[3/1]",
}

export function ImageUpload({
  value,
  onChange,
  label = "Image",
  aspect = "video",
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const dragCounter = useRef(0)

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return
      // Use local blob URL for preview — swap with real upload later
      const url = URL.createObjectURL(file)
      onChange(url)
    },
    [onChange]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
    e.target.value = ""
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current++
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    if (--dragCounter.current === 0) setDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current = 0
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleClear = () => {
    onChange("")
  }

  const hasImage = !!value

  return (
    <div className="space-y-1.5">
      <span className="text-xs font-medium text-slate-700">{label}</span>

      {hasImage ? (
        /* ── Preview state ── */
        <div className={`relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 ${aspectClasses[aspect]}`}>
          <Image
            src={value}
            alt={label}
            fill
            className="object-cover"
            unoptimized
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-slate-700 text-xs font-medium shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ArrowsClockwise size={14} weight="bold" />
              Replace
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-red-600 text-xs font-medium shadow-sm hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash size={14} weight="bold" />
              Remove
            </button>
          </div>
        </div>
      ) : (
        /* ── Empty / drop zone state ── */
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ${aspectClasses[aspect]} flex flex-col items-center justify-center cursor-pointer ${
            dragging
              ? "border-primary bg-primary/5"
              : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/50"
          }`}
          onClick={() => inputRef.current?.click()}
        >
          <div className={`flex flex-col items-center gap-2 transition-transform duration-200 ${dragging ? "scale-110" : ""}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
              dragging ? "bg-primary/10 text-primary" : "bg-slate-200/80 text-slate-400"
            }`}>
              {dragging ? (
                <UploadSimple size={24} weight="bold" />
              ) : (
                <ImageSquare size={24} weight="duotone" />
              )}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-600">
                {dragging ? "Drop image here" : "Drag & drop an image"}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">or click to browse</p>
            </div>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
      />
    </div>
  )
}
