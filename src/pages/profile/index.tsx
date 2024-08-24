import { type NextPage } from "next";
import React, { type FunctionComponent, useEffect } from "react";

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

const ProfileWrapper: FunctionComponent = () => {
  const { setUser } = useUser();
  const { addAsyncRefetch } = useRefetchContext("user");
  const {
    data: user,
    status,
    refetch: refetchUser,
  } = api.user.getUser.useQuery();
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
  useEffect(() => {
    addAsyncRefetch(refetchUser);
  }, [refetchUser, addAsyncRefetch]);
  if (status === "pending") return <Loader />;
  if (!user) return <NotFound />;
  return <InnerProfile />;
};

export default Profile;
