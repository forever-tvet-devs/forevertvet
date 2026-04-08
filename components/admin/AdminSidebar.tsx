"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CaretRight } from "@phosphor-icons/react";
import { adminNavGroups, type AdminNavItem } from "@/lib/admin-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

function NavItem({
  item,
  pathname,
  isOpen,
  onToggle,
}: {
  item: AdminNavItem;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  const isChildActive = item.children?.some((c) => pathname === c.href) ?? false;
  const isActive = pathname === item.href || isChildActive;

  if (item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={item.title}
          isActive={isActive}
          onClick={onToggle}
          className="cursor-pointer"
        >
          {Icon && <Icon size={18} />}
          <span>{item.title}</span>
          <CaretRight
            size={14}
            className={`ml-auto transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
          />
        </SidebarMenuButton>

        <div
          className="overflow-hidden transition-all duration-200 ease-in-out"
          style={{
            maxHeight: isOpen ? `${(item.children.length) * 40}px` : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <SidebarMenuSub className="border-l border-white/10 ml-4 pl-3">
            {item.children.map((child) => (
              <SidebarMenuSubItem key={child.href}>
                <SidebarMenuSubButton
                  isActive={pathname === child.href}
                  render={<Link href={child.href} />}
                  className="text-white/50 hover:text-white data-[active=true]:text-white"
                >
                  <span>{child.title}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </div>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        isActive={pathname === item.href}
        render={<Link href={item.href} />}
      >
        {Icon && <Icon size={18} />}
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();

  // Find which item should be open based on current route
  const allItems = adminNavGroups.flatMap((g) => g.items);
  const activeItem = allItems.find(
    (item) =>
      item.children &&
      (pathname === item.href || item.children.some((c) => pathname === c.href))
  );
  const [openItem, setOpenItem] = useState<string | null>(activeItem?.title ?? null);

  useEffect(() => {
    if (activeItem) setOpenItem(activeItem.title);
  }, [activeItem]);

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="px-4 py-4">
        <Link href="/portal" className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="relative shrink-0 h-9 w-9 group-data-[collapsible=icon]:h-7 group-data-[collapsible=icon]:w-7">
            <Image
              src="/images/forever_tvet_white_transparent.png"
              alt="Forever Tvet"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-bold tracking-wide text-white">
              Forever Tvet
            </span>
            <span className="text-[10px] text-white/40 tracking-widest uppercase">
              Admin Portal
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {adminNavGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-white/30 uppercase text-[10px] tracking-widest">
              {group.label}
            </SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <NavItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                  isOpen={openItem === item.title}
                  onToggle={() =>
                    setOpenItem((prev) => (prev === item.title ? null : item.title))
                  }
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-white">A</span>
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-medium text-white">Admin</span>
            <span className="text-[11px] text-white/40">admin@forevertvet.ac.rw</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
