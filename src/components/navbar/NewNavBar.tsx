"use client"
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { LogIn, MoveUpRight } from "lucide-react";
import BinarizedTextEffect from "../BinarizedTextEffect/BinarizedTectEffect";

function NewNavBar() {
    const { data: session, status } = useSession()
    return (
        <header className="fixed top-0 w-full left-0 py-3 z-10 bg-background">
            <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex justify-between items-center ">
                <Logo />
                <MenuBar />

                {
                    (status == "authenticated") ? (
                        // todo: profile icon
                        <Link href="/">
                            <span>Profile</span>
                            <MoveUpRight />
                        </Link>
                    ) : (
                        <Link
                            href="/"
                            className="skewed-box flex gap-3  text-sm font-light text-black no-underline rounded border border-border bg-white  px-3 py-2"
                        >
                            <LogIn size={18} />
                            <BinarizedTextEffect trigger="hover" text="Login" />
                        </Link>
                    )
                }
            </div>
        </header>
    )
}

export default NewNavBar