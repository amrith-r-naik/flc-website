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

export const links = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/gallery" },
  { name: "Events", link: "/events" },
  { name: "Blogs", link: "/blogs" },
];

export const footLinks = [
  { name: "Privacy", link: "/privacy-policy" },
  { name: "Terms and Conditions", link: "/terms" },
  { name: "Refund & Cancellation", link: "/refund" },
  { name: "Contact us", link: "/contact-us" },
  { name: "Shipping", link: "/shipping" },
];

const Footer: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <footer className={cn(className, "relative")}>
      <div className="line-break "></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ui/grid_bg.png"
          alt="Footer Background"
          fill
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative size-28">
              <Image src="/images/flc-logo-crop.png" alt="flc_logo" fill />
            </div>
            <p className="events-heading mb-3 mt-3 flex items-center font-sub-heading text-lg md:text-xl">
              Finite Loop Club
            </p>
            <div className="mb-4">
              <p className="events-heading text-center md:text-left">
                NMAM Institute of Technology
              </p>
              <p className="events-heading text-center md:text-left">
                Nitte, SH1, Karkala
              </p>
              <p className="events-heading text-center md:text-left">
                Karnataka, 574110, IN
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end ">
            <ul className="mb-6 flex flex-wrap justify-center gap-4 md:gap-6">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} className="events-heading">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mb-6 flex justify-center gap-4 md:gap-6">
              {social.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>{link.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />
        <div className="flex flex-col items-center gap-4 pt-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
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
