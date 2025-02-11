import { FC } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Navbar from "@/components/layouts/navbar";
import AppSidebar from "@/components/layouts/sidebar";

import { PropsWithChildren } from "@/types/components";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <div className="px-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
