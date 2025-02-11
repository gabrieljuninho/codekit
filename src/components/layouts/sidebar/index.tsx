"use client";

import { ComponentProps, FC } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { OTHER_MENU_ITEMS } from "@/common/constant/menu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

import Menu from "@/components/layouts/sidebar/ui/menu";
import MenuItem from "@/components/layouts/sidebar/ui/menu-item";

import { IMenuItemProps } from "@/common/types/menu";

const AppSidebar: FC<ComponentProps<typeof Sidebar>> = ({ ...props }) => {
  const { open } = useSidebar();

  const { resolvedTheme } = useTheme();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex select-none items-center gap-1.5">
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/93714358.png"
                : "/images/75024751.png"
            }
            alt="Logo"
            width={28}
            height={28}
            className="h-auto w-auto"
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
        <SidebarGroup>
          <SidebarMenu>
            {OTHER_MENU_ITEMS.map((item: IMenuItemProps, index: number) => (
              <MenuItem key={index} {...item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
