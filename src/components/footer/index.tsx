import Image from "next/image";
import Link from "next/link";
import React, { type FunctionComponent } from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import footerWave from "~/assets/images/footerwave.svg";
import { cn } from "~/lib/utils";

export const social = [
  {
    link: "https://www.instagram.com/finiteloop_club_nmamit/",
    icon: <AiOutlineInstagram className="h-7 w-7 hover:-translate-y-1" />,
    name: "Instagram",
  },
  {
    link: "https://www.facebook.com/FiniteLoopClub.Nmamit/",
    icon: <AiOutlineFacebook className="h-7 w-7 hover:-translate-y-1" />,
    name: "Facebook",
  },
  {
    link: "https://www.linkedin.com/showcase/finite-loop-club",
    icon: <AiOutlineLinkedin className="h-7 w-7 hover:-translate-y-1" />,
    name: "LinkedIn",
  },
  {
    link: "mailto:finiteloopclub@gmail.com",
    icon: <AiOutlineMail className="h-7 w-7 hover:-translate-y-1" />,
    name: "E-mail",
  },
  {
    link: "tel:8197903771",
    icon: <AiOutlinePhone className="h-7 w-7 hover:-translate-y-1" />,
    name: "Call Us",
  },
];

export const Links = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/gallery" },
  { name: "Events", link: "/events" },
  { name: "Blogs", link: "/blogs" },
];

export const footLinks = [
  { name: "Privacy", link: "/docs/privacy-policy" },
  { name: "Terms and Conditions", link: "/docs/terms" },
  { name: "Refund & Cancellation", link: "/docs/refund" },
  { name: "Contact us", link: "/docs/contact-us" },
  { name: "Shipping", link: "/docs/shipping" },
];

const Footer: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <footer className={cn(className, "relative mt-60 bg-[#100020]")}>
      <Image
        width={800}
        height={200}
        priority={false}
        className="absolute bottom-[99%] z-30 w-full object-cover md:bottom-[70%] md:-z-10"
        src={footerWave as string}
        alt="footer wave"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/flc_logo.png"
              width={100}
              height={100}
              alt="flc_logo"
              priority
            />
            <a className="events-heading mt-3 flex cursor-pointer items-center text-lg md:text-xl">
              Finite Loop Club
            </a>
            <p className="events-heading mt-3 text-center md:text-left">
              NMAM Institute of Technology, Nitte, SH1, Karkala, Karnataka,
              KARKALA, NMAMIT 574110, IN
            </p>
          </div>

          <div className="line-break flex flex-col items-center py-28 md:items-end ">
            <ul className="mb-6 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {Links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="events-heading transition hover:text-gray-200/75"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mb-6 flex justify-center gap-4 md:gap-6 lg:gap-8">
              {social.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />
        <div className="mt-4 flex flex-col items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {footLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className="events-heading transition hover:text-gray-200/75"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
