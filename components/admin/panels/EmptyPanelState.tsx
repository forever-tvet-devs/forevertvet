import { type ReactNode } from "react"

interface EmptyPanelStateProps {
  icon: ReactNode
  title: string
  description?: string
}

export function EmptyPanelState({ icon, title, description }: EmptyPanelStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] px-6 text-center">
      <div className="text-slate-300 mb-3">{icon}</div>
      <h3 className="text-sm font-semibold text-slate-400">{title}</h3>
      {description && (
        <p className="text-xs text-slate-400 mt-1 max-w-xs">{description}</p>
      )}
    </div>
  )
}
