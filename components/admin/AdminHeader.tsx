"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowSquareOut, SignOut, UserCircle, List } from "@phosphor-icons/react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function formatSegment(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function AdminHeader() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const segments = pathname
    .replace("/portal", "")
    .split("/")
    .filter(Boolean);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-white px-4 lg:px-6">
      {/* Left: toggle + breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Toggle sidebar"
        >
          <List size={18} weight="bold" />
        </button>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/portal" />}>
                Portal
              </BreadcrumbLink>
            </BreadcrumbItem>
            {segments.map((segment, i) => {
              const href = `/portal/${segments.slice(0, i + 1).join("/")}`;
              const isLast = i === segments.length - 1;
              return (
                <span key={href} className="contents">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink render={<Link href={href} />}>
                        {formatSegment(segment)}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right: view site + user */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          View Site
          <ArrowSquareOut size={13} />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-white">AU</span>
            </div>
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-sm font-medium text-slate-700">Admin User</span>
              <span className="text-[11px] text-slate-400">admin@forevertvet.ac.rw</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <Link href="/portal/settings" className="flex items-center gap-2 w-full">
                <UserCircle size={14} />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
              <SignOut size={14} />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
