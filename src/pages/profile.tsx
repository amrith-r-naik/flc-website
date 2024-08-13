import { type GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "sonner";

import { getServerAuthSession } from "~/server/auth";

import DesktopVersion from "~/components/profile/desktopVersion";
import MobileVersion from "~/components/profile/mobileVersion";

// TODO
// 1. make gsap animations proper (especially see more option in mobileVersion)
// 2. carousel scroll option
// 3. Certificates
// 4. Handle no images situation in carousels (both events and certificates)
// 5. mobile version backend integration
// 6. change colors
// 7. adjust spacing between all the information in the desktop version right side block
// 8. redirect clicking on each event to event slug
// 9. LIGHT MODE COLORS!

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};
const Profile = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated" && typeof window !== "undefined")
      router.push("/");
  }, [status, router]);

  return (
    <main className="absolute top-0 -z-10 h-screen w-screen overflow-x-hidden bg-background ">
      {/* The background design */}
      {/* <div className="BackgroundDesign absolute z-0 h-[40dvh] w-full">
        <iframe
          className=" hover:cursor-pointer"
          src="https://my.spline.design/waves-154a3cc8dbc6ed08cdd227da718b6aed/"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}

      <Toaster position="bottom-center" />
      <MobileVersion className="absolute sm:hidden" />
      <DesktopVersion className="hidden sm:flex" />
    </main>
  );
};

export default Profile;
