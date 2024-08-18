import { type NextPage } from "next";
import React, { useEffect } from "react";

import NotFound from "~/pages/404";

import InnerProfile from "~/components/profile";
import { useUser } from "~/store";
import { api } from "~/utils/api";

const Profile: NextPage = () => {
  const { setUser } = useUser();
  const { data: user } = api.user.getUser.useQuery();
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
  if (!user) return <NotFound />;
  return <InnerProfile />;
};

export default Profile;
