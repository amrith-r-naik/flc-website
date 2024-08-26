import { type NextPage } from "next";
import React from "react";

import { api } from "~/utils/api";

const Core: NextPage = () => {
  const { data: core } = api.core.getCore.useQuery();
  return <div>{JSON.stringify(core)}</div>;
};

export default Core;
