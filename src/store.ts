import { type inferProcedureOutput } from "@trpc/server";
import { create } from "zustand";

import { type AppRouter } from "~/server/api/root";

type User = inferProcedureOutput<AppRouter["user"]["getUser"]>;

type UserStore = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};

const useUser = create<UserStore>()((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

export { useUser, type User };
