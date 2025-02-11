"use client";

import { Menu } from "lucide-react";

import { SETTING_MENU } from "@/features/light-dark-mode/constant/menu";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import MenuItem from "@/features/light-dark-mode/components/layouts/sidebar/ui/menu-item";

import {
  ISettingMenuItemProps,
  ISettingMenuProps,
} from "@/features/light-dark-mode/types/menu";

const MobileMenu = () => {
  return (
    <div className="absolute right-0 top-2 hidden max-[500px]:block">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-4">
            {SETTING_MENU.map((item: ISettingMenuProps, index: number) => (
              <div key={index} className="flex w-full min-w-0 flex-col pt-1">
                <div className="flex h-8 shrink-0 items-center px-0 text-xs font-medium text-sidebar-foreground/70 outline-none">
                  {item.label}
                </div>
                {item.items.map(
                  (item: ISettingMenuItemProps, index: number) => (
                    <MenuItem key={index} {...item} />
                  )
                )}
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
