import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import NavUser from "@/components/layouts/navbar/ui/nav-user";
import Path from "@/components/layouts/navbar/ui/path";

const Navbar = () => {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:!h-14">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator className="mr-2 h-4" orientation={"vertical"} />
        <Path />
      </div>
      <NavUser />
    </header>
  );
};

export default Navbar;
