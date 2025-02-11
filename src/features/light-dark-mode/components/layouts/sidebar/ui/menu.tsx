"use client";

import { FC } from "react";

import MenuItem from "@/features/light-dark-mode/components/layouts/sidebar/ui/menu-item";

import {
  ISettingMenuItemProps,
  ISettingMenuProps,
} from "@/features/light-dark-mode/types/menu";

const Menu: FC<ISettingMenuProps> = ({ label, items }) => {
  return (
    <div className="flex w-full min-w-0 flex-col pt-1">
      <div className="flex h-8 shrink-0 items-center px-0 text-xs font-medium text-sidebar-foreground/70 outline-none">
        {label}
      </div>
      {items.map((item: ISettingMenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;
