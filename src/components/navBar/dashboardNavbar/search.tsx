import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { type FunctionComponent, useState, useEffect } from "react";
import { LuMoreHorizontal } from "react-icons/lu";

import { Button } from "~/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import { KeyShortcut } from "~/components/ui/custom/key-shortcut";

import { adminNavItems, organiserNavItems, userNavItems } from "~/constants";

const Search: FunctionComponent = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [open, setOpen] = useState<boolean>(false);

  const navItems =
    session?.user.role === "ADMIN"
      ? adminNavItems
      : session?.user.role === "ORGANISER"
        ? organiserNavItems
        : userNavItems;

  useEffect(() => {
    const keyDownEventListener = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", keyDownEventListener);

    return () => {
      document.removeEventListener("keydown", keyDownEventListener);
    };
  });

  return (
    <div className="flex flex-1 justify-center md:grow-0">
      <Button
        variant={"outline"}
        className="w-full flex-row justify-between rounded-lg bg-transparent md:w-52 lg:w-72"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-muted-foreground">Search...</span>
        <KeyShortcut
          text={(() => {
            const os =
              (
                navigator as unknown as {
                  userAgentData: { platform: string } | undefined;
                }
              ).userAgentData?.platform ?? navigator.platform;
            return os.includes("Mac") || os.includes("mac") ? "S" : "Ctrl + S";
          })()}
          meta={(() => {
            const os =
              (
                navigator as unknown as {
                  userAgentData: { platform: string } | undefined;
                }
              ).userAgentData?.platform ?? navigator.platform;
            return os.includes("Mac") || os.includes("mac");
          })()}
        />
      </Button>
      <CommandDialog loop open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type something to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={"Pages"}>
            {navItems.map(
              ({ type, name, link, icon }, idx) =>
                type !== "nav" && (
                  <CommandItem
                    key={idx}
                    onSelect={() => {
                      // SEO optimized as we are using <Link/> as child
                      void router.push(link);
                      setOpen(false);
                    }}
                    asChild
                  >
                    <Link
                      href={link}
                      className="flex h-full w-full cursor-pointer gap-3"
                      onClick={() => setOpen(false)}
                    >
                      {icon ?? <LuMoreHorizontal />}
                      {name}
                    </Link>
                  </CommandItem>
                ),
            )}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Search;
