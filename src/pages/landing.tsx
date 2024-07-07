"use client"
import Link from "next/link";
import {type HTMLAttributes } from "react";
import BinarizedTextEffect from "~/components/BinarizedTextEffect/BinarizedTectEffect";
import NewNavBar from "~/components/navbar/NewNavBar";
import FixedSocialBar from "~/components/Footer/FixedSocialBar";

function AsciiBG() {
  return (
    <>
    </>
  )
}

function Hero() {
  return (
    <>
    </>
  )
}

export default function Home() {

  return (
    <>
      <main>
        <NewNavBar />
        <FixedSocialBar />
        <AsciiBG />
        <Hero />

        <div className="min bg-sky-600 bg-noise-filter w-[500px] skewed-box px-10 grid place-content-center text-center interactable " data-type="content-box">
          <BinarizedTextEffect trigger="appearAndHover" text="Lorem ipsum dolor sit amet" />
        </div>
      </main>
    </>
  );
}