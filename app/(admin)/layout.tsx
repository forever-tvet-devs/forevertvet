import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <NextTopLoader color="#214B82" height={2} showSpinner={false} />
        <div className="flex h-[100dvh] w-full overflow-hidden">
          <AdminSidebar />
          <div className="flex flex-1 flex-col h-full overflow-hidden min-w-0 bg-[#F8FAFC]">
            <AdminHeader />
            <main className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col" data-lenis-prevent>
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
      <Toaster position="top-right" />
    </TooltipProvider>
  );
}
