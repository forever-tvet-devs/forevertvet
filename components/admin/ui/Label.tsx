export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <label className={`text-xs font-medium text-slate-700 ${className}`}>
      {children}
    </label>
  );
}
