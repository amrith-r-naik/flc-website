import React from "react";

import DesktopVersion from "~/components/profile/desktopVersion";
import MobileVersion from "~/components/profile/mobileVersion";
import { api } from "~/utils/api";

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

const Profile = () => {
  const { data: user } = api.user.getUser.useQuery();

  if (!user) return null;

  return (
    <main className="top-0 -z-10 h-screen w-screen overflow-x-hidden bg-background ">
      <MobileVersion className="absolute sm:hidden" user={user} />
      <DesktopVersion className="hidden sm:flex" user={user} />
    </main>
  );
};

export default Profile;
