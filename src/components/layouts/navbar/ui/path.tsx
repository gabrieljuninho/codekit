"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";

const Path = () => {
  const pathname = usePathname();
  const path = pathname
    .split("/")
    .filter(Boolean)
    .map(
      (segment) =>
        segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
    );

  const { isMobile } = useSidebar();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.length === 1 && (
          <BreadcrumbItem>
            <BreadcrumbPage>{path[0]}</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {path.length === 2 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[0]}`}>{path[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{path[1]}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {path.length >= 3 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[0]}`}>{path[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            {isMobile ? (
              <>
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={"center"}>
                      {path.slice(1, -1).map((segment, index) => (
                        <DropdownMenuItem key={index}>
                          <BreadcrumbLink
                            href={`/${path.slice(0, index + 2).join("/")}`}
                          >
                            {segment}
                          </BreadcrumbLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : (
              path.slice(1, -1).map((segment, index) => (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/${path.slice(0, index + 2).join("/")}`}
                    >
                      {segment}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ))
            )}

            <BreadcrumbItem>
              <BreadcrumbPage>{path[path.length - 1]}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Path;
