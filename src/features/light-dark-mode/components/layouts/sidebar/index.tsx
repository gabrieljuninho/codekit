"use client";

import { SETTING_MENU } from "@/features/light-dark-mode/constant/menu";

import Menu from "@/features/light-dark-mode/components/layouts/sidebar/ui/menu";

import { ISettingMenuProps } from "@/features/light-dark-mode/types/menu";

const SettingSidebar = () => {
  return (
    <nav className="flex h-[calc(100svh_-_56px)] border-r pr-4">
      {SETTING_MENU.map((item: ISettingMenuProps, index: number) => (
        <Menu key={index} {...item} />
      ))}
    </nav>
  );
};

export default SettingSidebar;
