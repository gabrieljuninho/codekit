"use client";

import { ComponentProps, FC } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import Menu from "@/components/layouts/sidebar/ui/menu";

const AppSidebar: FC<ComponentProps<typeof Sidebar>> = ({ ...props }) => {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex select-none items-center gap-1.5">
          <Image
            src={"/images/75024751.png"}
            alt="Logo"
            width={28}
            height={28}
            priority
          />
          <span
            className={cn(
              "text-base font-semibold transition-[display] duration-200 ease-linear",
              open ? "inline-block" : "hidden"
            )}
          >
            CodeKit
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
