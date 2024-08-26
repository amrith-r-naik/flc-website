import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"
  import React from 'react'
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
  
  const DropDown = ({trigger}:{trigger:any}) => {
    const router = useRouter();
  const { data: session } = useSession();
    return (
        <DropdownMenu>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="z-[100] radial-gradient(50% 70.31% at 50% 0%, rgb(184 148 255 / 33%) 0%, rgba(126, 61, 255, 0) 100%), rgb(21 0 59 / 80%)">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href='/profile'>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
          { session?.user.role === "ADMIN" && (
        
          <Link href="/dashboard/admin">Dashboard</Link>
        
      )}
      {  session?.user.role === "ORGANISER" && (
        
          <Link href="/dashboard/organiser">Dashboard</Link>
       
      )}
            </DropdownMenuItem>
            <DropdownMenuItem>
            {session &&
        <Button
        size='sm'
          onClick={async () => {
            toast.loading("Signing out...");
            signOut({
              redirect: false,
            })
              .then(() => {
                toast.dismiss();
                toast.success("Signed out successfully");
                setTimeout(() => void router.push("/"), 1000);
              })
              .catch((e) => {
                toast.dismiss();
                console.error(e);
                toast.error("Failed to sign out");
              });
          }}
        >
          <LogOut size={18} className="mr-2" /> Sign out
        </Button>
  }
            </DropdownMenuItem>
            
          
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  /* {!inDashboard && session?.user.role === "ADMIN" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/admin">Dashboard</Link>
        </Button>
      )}
      {!inDashboard && session?.user.role === "ORGANISER" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/organiser">Dashboard</Link>
        </Button>
      )} */
  export default DropDown