import { useRouter } from "next/router";
import React from "react";

import DesktopVersion from "~/components/profile/desktopVersion";
import MobileVersion from "~/components/profile/mobileVersion";
import { api } from "~/utils/api";

const Profile = () => {
  const { query } = useRouter();

  const { data: user } = api.user.getUser.useQuery({
    userId: parseInt(
      query.slug instanceof Array ? (query.slug[0] ?? "") : (query.slug ?? ""),
    ),
  });

  if (!user) return null;

  return (
    <main className="top-0 -z-10 h-screen w-screen overflow-x-hidden bg-background ">
      <MobileVersion className="absolute sm:hidden" user={user} />
      <DesktopVersion className="hidden sm:flex" user={user} />
    </main>
  );
};

export default Profile;
