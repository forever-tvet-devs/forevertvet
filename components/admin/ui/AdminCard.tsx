interface AdminCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function AdminCard({ title, subtitle, children, className = "" }: AdminCardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
