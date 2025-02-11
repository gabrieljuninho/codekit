"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import useHasMounted from "@/hooks/use-has-mounted";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      <RadioGroup
        className="grid w-full grid-cols-1 gap-4 min-[300px]:grid-cols-2 lg:grid-cols-3"
        defaultValue={resolvedTheme}
        onValueChange={(value) => setTheme(value)}
      >
        <div className="flex h-full w-full flex-col gap-1">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#e4e4e7] bg-white [&:has([data-state=checked])]:border-primary">
            <RadioGroupItem
              className="peer absolute bottom-2 left-2 dark:border-muted"
              id="light"
              value="light"
            />
            <Label
              htmlFor="light"
              className="h-full w-full cursor-pointer overflow-hidden rounded-2xl outline-none outline-offset-0"
            >
              <div className="flex h-full w-full overflow-hidden rounded-2xl">
                <div className="h-full w-14 bg-[#fafafa] p-1">
                  <Image
                    src={"/images/75024751.png"}
                    alt=""
                    width={10}
                    height={10}
                  />
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#18181b]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                  </div>
                </div>
                <div className="h-full w-[calc(100%_-_3.5rem)] p-2">
                  <div className="flex items-center justify-end">
                    <div className="h-2 w-1/2 rounded-md bg-[#f4f4f5]"></div>
                  </div>
                  <div className="my-2 h-14 w-full rounded-md border border-[#e4e4e7] p-1">
                    <div className="h-2 w-1/2 rounded-md bg-[#f4f4f5]"></div>
                    <div className="mt-2 grid h-[calc(100%_-_1rem)] w-full grid-cols-3 gap-2 px-0.5 pb-1 lg:px-2">
                      <div className="border border-[#e4e4e7]"></div>
                      <div className="border border-[#e4e4e7]"></div>
                      <div className="border border-[#e4e4e7]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="h-2 w-1/2 rounded-md bg-[#f4f4f5]"></div>
                  </div>
                </div>
              </div>
            </Label>
          </div>
          <p
            className={cn(
              "text-sm font-normal",
              resolvedTheme === "light"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Light
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-1">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#27272a] bg-[#09090b] [&:has([data-state=checked])]:border-white">
            <RadioGroupItem
              className="peer absolute bottom-2 left-2 border-muted dark:border-foreground [&_svg]:dark:text-foreground"
              id="dark"
              value="dark"
            />
            <Label
              htmlFor="dark"
              className="h-full w-full cursor-pointer overflow-hidden rounded-2xl outline-none outline-offset-0"
            >
              <div className="flex h-full w-full overflow-hidden rounded-2xl">
                <div className="h-full w-14 bg-[#18181b] p-1">
                  <Image
                    src={"/images/93714358.png"}
                    alt=""
                    width={10}
                    height={10}
                  />
                  <div className="mt-2 flex flex-col gap-1">
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#fafafa]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#27272a]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#27272a]"></div>
                    <div className="h-2 w-full rounded-[0.125rem] bg-[#27272a]"></div>
                  </div>
                </div>
                <div className="h-full w-[calc(100%_-_3.5rem)] p-2">
                  <div className="flex items-center justify-end">
                    <div className="h-2 w-1/2 rounded-md bg-[#27272a]"></div>
                  </div>
                  <div className="my-2 h-14 w-full rounded-md border border-[#27272a] p-1">
                    <div className="h-2 w-1/2 rounded-md bg-[#27272a]"></div>
                    <div className="mt-2 grid h-[calc(100%_-_1rem)] w-full grid-cols-3 gap-2 px-0.5 pb-1 lg:px-2">
                      <div className="border border-[#27272a]"></div>
                      <div className="border border-[#27272a]"></div>
                      <div className="border border-[#27272a]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="h-2 w-1/2 rounded-md bg-[#27272a]"></div>
                  </div>
                </div>
              </div>
            </Label>
          </div>
          <p
            className={cn(
              "text-sm font-normal",
              resolvedTheme === "dark"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Dark
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-1">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#e4e4e7] [&:has([data-state=checked])]:border-primary">
            <RadioGroupItem
              className="peer absolute bottom-2 left-2 dark:border-muted"
              id="system"
              value="system"
            />
            <Label
              htmlFor="system"
              className="h-full w-full cursor-pointer overflow-hidden rounded-2xl outline-none outline-offset-0"
            >
              <div className="flex h-full w-full overflow-hidden rounded-2xl">
                <div className="flex h-full w-1/2 overflow-hidden bg-white">
                  <div className="h-full w-14 shrink-0 bg-[#fafafa] p-1">
                    <Image
                      src={"/images/75024751.png"}
                      alt=""
                      width={10}
                      height={10}
                    />
                    <div className="mt-2 flex flex-col gap-1">
                      <div className="h-2 w-full rounded-[0.125rem] bg-[#18181b]"></div>
                      <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                      <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                      <div className="h-2 w-full rounded-[0.125rem] bg-[#f4f4f5]"></div>
                    </div>
                  </div>
                  <div className="h-full w-[calc(100%_-_3.5rem)] shrink-0 py-2 pl-2">
                    <div className="mt-4 h-14 w-full rounded-bl-md rounded-tl-md border-y border-l border-[#e4e4e7] py-1 pl-1">
                      <div className="h-2 w-full rounded-bl-md rounded-tl-md bg-[#f4f4f5]"></div>
                      <div className="mt-2 flex h-[calc(100%_-_1rem)] w-full items-center gap-2 pb-1 pl-2">
                        <div className="h-full w-full border-y border-l border-[#e4e4e7]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full w-1/2 overflow-hidden bg-[#09090b]">
                  <div className="h-full w-full py-2 pl-0 pr-2">
                    <div className="flex items-center justify-end">
                      <div className="h-2 w-1/2 rounded-md bg-[#27272a]"></div>
                    </div>
                    <div className="my-2 flex items-center justify-end">
                      <div className="h-14 w-full rounded-br-md rounded-tr-md border-y border-r border-[#27272a] py-1 pr-1">
                        <div className="-ml-4 h-2 w-1/2 rounded-br-md rounded-tr-md bg-[#27272a]"></div>
                        <div className="mt-2 flex h-[calc(100%_-_1rem)] w-full items-center gap-2 px-2 pb-1">
                          <div className="-ml-9 h-full w-16 border-y border-r border-[#27272a]"></div>
                          <div className="h-full w-16 border border-[#27272a]"></div>
                          <div className="h-full w-16 border border-[#27272a]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="h-2 w-1/2 rounded-md bg-[#27272a]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Label>
          </div>
          <p
            className={cn(
              "text-sm font-normal",
              resolvedTheme === "system"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            System
          </p>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ToggleTheme;
