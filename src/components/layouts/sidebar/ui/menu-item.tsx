"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import { IMenuItemProps } from "@/common/types/menu";

const MenuItem: FC<IMenuItemProps> = ({ title, href, icon }) => {
  const pathname = usePathname();
  const url = new URL(href, process.env.NEXT_PUBLIC_APP_URL!);

  const isActive = pathname === url.pathname;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="!h-10"
        isActive={isActive}
        tooltip={title}
        asChild
      >
        <Link href={href}>
          {icon}
          {title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MenuItem;
