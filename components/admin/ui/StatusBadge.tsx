interface StatusBadgeProps {
  status: "published" | "draft" | "pending" | "archived" | "read" | "unread" | "approved" | "rejected";
}

const styles: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  approved:  "bg-emerald-50 text-emerald-700 border-emerald-200",
  read:      "bg-slate-50 text-slate-500 border-slate-200",
  draft:     "bg-amber-50 text-amber-700 border-amber-200",
  pending:   "bg-blue-50 text-blue-700 border-blue-200",
  unread:    "bg-blue-50 text-blue-700 border-blue-200",
  archived:  "bg-slate-50 text-slate-400 border-slate-200",
  rejected:  "bg-red-50 text-red-700 border-red-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[11px] font-semibold capitalize ${styles[status] ?? styles.draft}`}>
      {status}
    </span>
  );
}
