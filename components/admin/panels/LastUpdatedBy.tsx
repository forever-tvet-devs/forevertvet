import { formatDistanceToNow } from "date-fns"

interface LastUpdatedByProps {
  timestamp: string
  name?: string
}

export function LastUpdatedBy({ timestamp, name }: LastUpdatedByProps) {
  const relative = formatDistanceToNow(new Date(timestamp), { addSuffix: true })

  return (
    <p className="text-xs text-slate-400">
      Last edited {relative}
      {name && <span> by {name}</span>}
    </p>
  )
}
