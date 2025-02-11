"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

import { ISettingMenuItemProps } from "@/features/light-dark-mode/types/menu";

const MenuItem: FC<ISettingMenuItemProps> = ({ href, title }) => {
  const pathname = usePathname();
  const url = new URL(href, process.env.NEXT_PUBLIC_APP_URL);

  const isActive = pathname === url.pathname;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ size: "sm", variant: "ghost" }),
        isActive && "bg-muted hover:bg-muted",
        "justify-start"
      )}
    >
      {title}
    </Link>
  );
};

export default MenuItem;
