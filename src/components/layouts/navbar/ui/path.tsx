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
  const path = pathname.split("/").filter(Boolean);

  const { isMobile } = useSidebar();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.length === 1 && (
          <BreadcrumbItem>
            <BreadcrumbPage>
              {path[0].charAt(0).toUpperCase() + path[0].slice(1).toLowerCase()}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {path.length === 2 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[0].toLowerCase()}`}>
                {path[0].charAt(0).toUpperCase() +
                  path[0].slice(1).toLowerCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {path[1].charAt(0).toUpperCase() +
                  path[1].slice(1).toLowerCase()}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {path.length >= 3 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${path[0].toLowerCase()}`}>
                {path[0].charAt(0).toUpperCase() +
                  path[0].slice(1).toLowerCase()}
              </BreadcrumbLink>
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
                            href={`/${path
                              .slice(0, index + 2)
                              .join("/")
                              .toLowerCase()}`}
                          >
                            {segment.charAt(0).toUpperCase() +
                              segment.slice(1).toLowerCase()}
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
                      href={`/${path
                        .slice(0, index + 2)
                        .join("/")
                        .toLowerCase()}`}
                    >
                      {segment.charAt(0).toUpperCase() +
                        segment.slice(1).toLowerCase()}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ))
            )}

            <BreadcrumbItem>
              <BreadcrumbPage>
                {path[path.length - 1].charAt(0).toUpperCase() +
                  path[path.length - 1].slice(1).toLowerCase()}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Path;
