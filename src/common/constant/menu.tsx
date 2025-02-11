import { LayoutDashboard, Settings } from "lucide-react";

import { IMenuItemProps } from "@/common/types/menu";

export const MENU_ITEMS: IMenuItemProps[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard />,
  },
];

export const OTHER_MENU_ITEMS: IMenuItemProps[] = [
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings />,
  },
];
