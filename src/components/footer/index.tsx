import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "instagram",
    image: InstagramIcon,
    url: "https://www.instagram.com/finiteloop_club_nmamit/",
  },
  {
    name: "facebook",
    image: FacebookIcon,
    url: "https://www.facebook.com/FiniteLoopClub.Nmamit/",
  },
  {
    name: "phone",
    image: PhoneIcon,
    url: "tel:8197903771",
  },
  {
    name: "mail",
    image: MailIcon,
    url: "mailto:finiteloopclub@gmail.com",
  },
];

export const Links = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
];

export const footLinks = [
  { name: "Refund Policy", link: "/refund" },
  { name: "Terms & conditions", link: "/termsandConditions" },
  { name: "privacy & policy", link: "/privacyandpolicy" },
  { name: "Contact Us", link: "/contactus" },
  { name: "Shipping", link: "/shipping" },
];

function Footer() {
  return (
    <section className="relative mt-36">
      <div className="absolute bottom-96  left-0 z-20 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#000b76"
            fillOpacity="1"
            d="M0,256L24,240C48,224,96,192,144,160C192,128,240,96,288,112C336,128,384,192,432,218.7C480,245,528,235,576,213.3C624,192,672,160,720,160C768,160,816,192,864,202.7C912,213,960,203,1008,218.7C1056,235,1104,277,1152,288C1200,299,1248,277,1296,256C1344,235,1392,213,1416,202.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer className="relative bg-gradient-to-b from-[#000b76] via-blue-900 to-violet-900 text-white">
        <div className="relative z-10 py-8">
          <div className="content-container space-y-8">
            <h1 className="text-center text-4xl font-bold">FiniteLoop</h1>

            <ul className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link) => (
                <Link href={link.url} key={link.name}>
                  <link.image />
                </Link>
              ))}
            </ul>

            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                {footLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.link} className="">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <hr className="my-2 border-current" />
            <div className="flex flex-col items-center justify-between px-4 py-2 sm:flex-row">
              <div className="flex-1 text-left sm:text-left">
                <p className="underline">Made With 💙 By FLc TechTeam</p>
              </div>
              <div className="right-0 flex-1 text-center sm:text-right">
                <p className="text-center">
                  copyright @2024-FiniteLoopClub.co.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
