import { LayoutDashboard } from "lucide-react";

import { IMenuItemProps } from "@/common/types/menu";

export const MENU_ITEMS: IMenuItemProps[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard />,
  },
];
