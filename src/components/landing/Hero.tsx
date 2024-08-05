import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Button from "~/components/Button";

function Hero() {
    return (
        <section className=" w-full min-h-[70vh] grid place-content-center">
            <div className="content-container text-center  space-y-6">
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81]">FINITE LOOP CLUB</h1>
                <p className="max-w-sm text-center mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus numquam </p>
                <Button>
                    <Link href="/regsiter" className="flex gap-2 items-center"><span>Register</span><ArrowRight size={16} /></Link>
                </Button>
            </div>
        </section>
    )
}

export default Hero