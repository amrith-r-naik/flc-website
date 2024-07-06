"use client"
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, useRef } from "react";
import { Instagram, DropletIcon, Drum, Menu } from "lucide-react"
import BinarizedTextEffect from "~/components/BinarizedTextEffect/BinarizedTectEffect";

type FunkyButtonProps = HTMLAttributes<HTMLButtonElement> & {
    color?: string;
};

function FunkyButton({children,...rest}:FunkyButtonProps){
  return (
    <button className="" {...rest}>
      {children}
    </button>
  )
}

function MenuBar() {
  const menuDialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <nav className="bg-black w-fit px-6 pt-2 pb-3 menu-bar flex gap-2 items-center" onClick={() => menuDialogRef.current?.showModal()}>
        <Menu />
        <span className="text-lg">menu</span>
      </nav>

      <dialog ref={menuDialogRef} className="menu-dialog">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nulla tempora nesciunt et laboriosam? Culpa, veritatis doloribus saepe laborum odio impedit repellendus, omnis commodi quos consequuntur in, voluptate amet minima.
        </div>
      </dialog>
    </>
  )
}

function FixedSocialBar() {
  return (
    <>
      <nav className="bg-black w-fit px-4 pt-3 pb-2 social-bar flex gap-2 items-center">
        <span>Join Our Community :</span>
        <ul className="flex gap-2">
          {/* svg filter maynot work on svgs on chromium browsers ->if not working change images to other than svg */}
          <li><Link href="/"><Instagram className="social-link" /></Link></li>
          <li><Link href="/"><Drum className="social-link" /></Link></li>
          <li><Link href="/"><DropletIcon className="social-link" /></Link></li>
        </ul>
      </nav>
    </>
  )
}

function AsciiBG(){
  return (
    <>
    </>
  )
}

function Hero(){
  return (
    <>
    </>
  )
}

export default function Home() {

  return (
    <>
      <main>
        <MenuBar />
        <FixedSocialBar />
        <AsciiBG/>
        <Hero/>

        <div className="min-h-80 bg-sky-600 bg-noise-filter w-[500px] flat-side-box px-10 grid place-content-center text-center interactable " data-type="content-box">
          <BinarizedTextEffect  triggerType="appearAndHover" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit animi nihil ab quae eius praesentium distinctio, non omnis rerum soluta iure reprehenderit incidunt optio inventore alias blanditiis. Id!"/>
        </div>
        
      </main>
    </>
  );
}