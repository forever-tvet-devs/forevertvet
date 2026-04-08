"use client"

import { useState, useEffect, type ReactNode } from "react"
import { ArrowLeft } from "@phosphor-icons/react"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/admin/ui/resizable"

interface TwoPanelLayoutProps {
  listPanel: ReactNode
  detailPanel: ReactNode
  activePanel?: "list" | "detail"
  onBack?: () => void
}

export function TwoPanelLayout({
  listPanel,
  detailPanel,
  activePanel = "list",
  onBack,
}: TwoPanelLayoutProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (isMobile) {
    return (
      <div className="flex-1 min-h-0 flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-clip">
        {activePanel === "detail" && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-primary border-b border-slate-100 shrink-0 cursor-pointer"
          >
            <ArrowLeft size={14} weight="bold" />
            Back
          </button>
        )}
        <div className="flex-1 flex flex-col min-h-0">
          {activePanel === "list"
            ? <div data-lenis-prevent className="flex-1 overflow-y-auto">{listPanel}</div>
            : detailPanel}
        </div>
      </div>
    )
  }

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="flex-1 min-h-0 bg-white rounded-2xl border border-slate-200/80 shadow-sm"
    >
      <ResizablePanel defaultSize="30%" minSize="22%" maxSize="40%">
        <div data-lenis-prevent className="h-full overflow-y-auto border-r border-slate-100">
          {listPanel}
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize="70%" minSize="50%">
        <div className="h-full flex flex-col overflow-hidden">
          {detailPanel}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
