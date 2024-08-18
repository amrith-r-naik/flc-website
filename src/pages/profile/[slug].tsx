import { type NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import NotFound from "~/pages/404";

import InnerProfile from "~/components/profile";
import { useUser } from "~/store";
import { api } from "~/utils/api";

const Profile: NextPage = () => {
  const { setUser } = useUser();
  const { query } = useRouter();
  const { data: user } = api.user.getUser.useQuery({
    userId: parseInt(
      query.slug instanceof Array ? (query.slug[0] ?? "") : (query.slug ?? ""),
    ),
  });
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
  if (!user) return <NotFound />;
  return <InnerProfile />;
};

export default Profile;
