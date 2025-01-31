"use client";

import { MENU_ITEMS } from "@/common/constant/menu";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";

import MenuItem from "@/components/layouts/sidebar/ui/menu-item";

import { IMenuItemProps } from "@/common/types/menu";

const Menu = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {MENU_ITEMS.map((item: IMenuItemProps, index: number) => (
          <MenuItem key={index} {...item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default Menu;
