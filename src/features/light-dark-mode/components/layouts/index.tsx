import { FC } from "react";

import SettingSidebar from "@/features/light-dark-mode/components/layouts/sidebar";

import MobileMenu from "@/features/light-dark-mode/components/ui/mobile-menu";

import { PropsWithChildren } from "@/types/components";

const SettingLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="max-[500px]:hidden min-[500px]:w-2/6 sm:block sm:w-5/12 lg:w-60">
        <SettingSidebar />
      </aside>
      <div className="relative flex-1 pl-4 pt-2 max-[500px]:pl-0 lg:max-w-2xl">
        <MobileMenu />
        {children}
      </div>
    </div>
  );
};

export default SettingLayout;
