import { type NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import NotFound from "~/pages/404";

import Loader from "~/components/loader";
import InnerProfile from "~/components/profile";
import { RefetchProvider, useRefetchContext } from "~/context/refetchContext";
import { useUser } from "~/store";
import { api } from "~/utils/api";

const Profile: NextPage = () => {
  return (
    <RefetchProvider uid="user">
      <ProfileWrapper />
    </RefetchProvider>
  );
};

const ProfileWrapper: NextPage = () => {
  const { query } = useRouter();
  const { setUser } = useUser();
  const { addAsyncRefetch } = useRefetchContext("user");
  const {
    data: user,
    status,
    refetch: refetchUser,
  } = api.user.getUser.useQuery({
    userId: parseInt(
      query.slug instanceof Array ? (query.slug[0] ?? "") : (query.slug ?? ""),
    ),
  });
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
  useEffect(() => {
    addAsyncRefetch(refetchUser);
  }, [refetchUser, addAsyncRefetch]);
  if (status === "pending") return <Loader />;
  if (!user) return <NotFound />;
  return <InnerProfile notMine />;
};

export default Profile;
