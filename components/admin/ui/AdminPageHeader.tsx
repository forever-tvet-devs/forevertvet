import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";

interface AdminPageHeaderProps {
  title: string;
  description: string;
  addLabel?: string;
  addHref?: string;
  onAdd?: () => void;
}

export function AdminPageHeader({ title, description, addLabel, addHref, onAdd }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
      {addLabel && (
        addHref ? (
          <Link
            href={addHref}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0"
          >
            <Plus size={15} weight="bold" />
            {addLabel}
          </Link>
        ) : (
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0 cursor-pointer"
          >
            <Plus size={15} weight="bold" />
            {addLabel}
          </button>
        )
      )}
    </div>
  );
}
