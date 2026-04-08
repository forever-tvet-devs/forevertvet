import Link from "next/link";
import {
  UsersThree,
  GraduationCap,
  FileText,
  TrendUp,
  ArrowRight,
  Clock,
  CalendarDots,
  Newspaper,
  Image as ImageIcon,
  UserPlus,
  CreditCard,
  PencilSimpleLine,
} from "@phosphor-icons/react/dist/ssr";

const stats = [
  { label: "Total Students", value: "342", icon: UsersThree, featured: true },
  { label: "Active Programs", value: "5", icon: GraduationCap, featured: false },
  { label: "Applications", value: "87", icon: FileText, featured: false },
  { label: "Employment Rate", value: "94%", icon: TrendUp, featured: false },
];

const recentActivity = [
  {
    action: "New application submitted",
    user: "Jean-Pierre M.",
    time: "2 min ago",
    icon: UserPlus,
  },
  {
    action: "Article published",
    user: "Admin",
    time: "1 hour ago",
    icon: PencilSimpleLine,
  },
  {
    action: "Fee payment received",
    user: "Grace U.",
    time: "3 hours ago",
    icon: CreditCard,
  },
  {
    action: "Student enrolled",
    user: "Emmanuel K.",
    time: "5 hours ago",
    icon: UserPlus,
  },
  {
    action: "Event created",
    user: "Admin",
    time: "Yesterday",
    icon: CalendarDots,
  },
];

const quickActions = [
  {
    label: "New Article",
    desc: "Publish news or updates",
    href: "/portal/publications/news",
    icon: Newspaper,
  },
  {
    label: "Applications",
    desc: "Review pending entries",
    href: "/portal/admissions/applications",
    icon: FileText,
  },
  {
    label: "Upload Media",
    desc: "Add photos to gallery",
    href: "/portal/media",
    icon: ImageIcon,
  },
  {
    label: "Manage Events",
    desc: "Create or edit events",
    href: "/portal/publications/events",
    icon: CalendarDots,
  },
];

export default function DashboardPage() {
  const now = new Date();
  const greeting =
    now.getHours() < 12 ? "Good morning" : now.getHours() < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {greeting}, Admin
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Here&apos;s what&apos;s happening at Forever Tvet Institute today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Clock size={13} />
          {now.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          if (stat.featured) {
            return (
              <div
                key={stat.label}
                className="relative overflow-hidden bg-primary rounded-2xl p-5"
              >
                {/* Corner pattern */}
                <div className="absolute -top-6 -right-6 pointer-events-none" aria-hidden="true">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="50" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="35" stroke="white" strokeOpacity="0.06" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="20" stroke="white" strokeOpacity="0.04" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Recent activity */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Recent Activity</h2>
              <p className="text-xs text-slate-400 mt-0.5">Latest actions across the portal</p>
            </div>
            <Link
              href="/portal"
              className="text-xs font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
            >
              View all
              <ArrowRight size={11} weight="bold" />
            </Link>
          </div>

          <div>
            {recentActivity.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-6 py-4 hover:bg-slate-50/60 transition-colors ${
                    i < recentActivity.length - 1 ? "border-b border-slate-50" : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 font-medium truncate">
                      {item.action}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.user}</p>
                  </div>
                  <span className="text-[11px] text-slate-400 shrink-0 font-medium">
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick actions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">Quick Actions</h2>
            <p className="text-xs text-slate-400 mt-0.5">Jump to common tasks</p>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-200 group/action"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-2.5 shadow-sm group-hover/action:shadow transition-shadow">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-tight">
                    {action.label}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {action.desc}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
