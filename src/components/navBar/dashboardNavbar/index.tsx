import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { type FunctionComponent } from "react";
import { LuLaptop, LuLogOut, LuMoon, LuSun } from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import NavCrumb from "./navCrumb";
import Search from "./search";

const NavBar: FunctionComponent = () => {
  const { data: session } = useSession();

  const { theme, setTheme } = useTheme();

  return (
    // NOTE: If height changed, update in <DashboardLayout/> as well
    <header className="flex h-14 min-h-14 w-full items-center gap-4 border-0 border-b bg-transparent p-4 md:px-6">
      <NavCrumb className="flex-grow" />

      <div className="flex flex-1 justify-center md:grow-0">
        <Search />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Avatar>
                <AvatarImage
                  alt="Profile Pic"
                  src={session?.user.image ?? "/pfp.png"}
                />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="theme" className="border-none">
              <DropdownMenuLabel asChild>
                <AccordionTrigger className="py-1.5 hover:no-underline">
                  Theme{" "}
                  {theme === "light" ? (
                    <LuSun className="mr-2 !rotate-0" />
                  ) : theme === "dark" ? (
                    <LuMoon className="mr-2 !rotate-0" />
                  ) : (
                    <LuLaptop className="mr-2 !rotate-0" />
                  )}
                </AccordionTrigger>
              </DropdownMenuLabel>
              <AccordionContent>
                <DropdownMenuRadioGroup
                  value={theme}
                  onValueChange={(value) => setTheme(value)}
                >
                  <DropdownMenuRadioItem value="light">
                    <LuSun className="mr-2" />
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    <LuMoon className="mr-2" />
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    <LuLaptop className="mr-2" />
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </AccordionContent>
            </AccordionItem>

            <DropdownMenuSeparator />
          </Accordion>

          <DropdownMenuSeparator />

          {session && (
            <DropdownMenuItem
              onClick={async () => {
                await signOut();
              }}
            >
              <LuLogOut className="mr-2" />
              Logout
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default NavBar;
