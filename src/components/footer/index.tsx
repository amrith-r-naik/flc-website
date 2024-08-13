import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import pythonIcon from "~/assets/icons/python.svg";
import footerWave from "~/assets/images/footerwave.svg";

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
  { name: "Privacy", link: "/privacyandpolicy" },
  { name: "Terms and Conditions", link: "/termsandConditions" },
  { name: "Refund & Cancellation", link: "/refund" },
  { name: "Contact us", link: "/contactus" },
  { name: "Shipping", link: "/shipping" },
];

function Footer() {
  return (
    <footer className="relative  mt-60 bg-[#FCAF3C] text-black">
      <Image
        width={800}
        height={200}
        priority={false}
        className="absolute bottom-[70%] -z-10 w-full object-cover"
        src={footerWave as string}
        alt="footer wave"
      />
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

        <hr className="border-current" />
        <p className="text-center">copyright @2024</p>
      </div>
    </footer>
  );
}

export default Footer;
