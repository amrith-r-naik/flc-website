import { type ReactElement } from "react";

type NavItem = {
  type: "nav" | "search" | "both";
  name: string;
  link: string;
  icon?: ReactElement;
};

export const userNavItems: NavItem[] = [
  {
    type: "both",
    name: "Home",
    link: "/",
  },
  {
    type: "both",
    name: "Gallery",
    link: "/gallery",
  },
  {
    type: "both",
    name: "Events",
    link: "/events",
  },
  {
    type: "both",
    name: "Blogs",
    link: "/blogs",
  },
  {
    type: "both",
    name: "Leaderboard",
    link: "/leaderboard",
  },
  {
    type: "both",
    name: "Team",
    link: "/team",
  },
];

export const organiserNavItems: NavItem[] = [
  {
    type: "both",
    name: "Events",
    link: "/dashboard/organiser/events",
  },
  {
    type: "both",
    name: "Quiz",
    link: "/dashboard/organiser/quiz",
  },
  {
    type: "both",
    name: "Blogs",
    link: "/dashboard/organiser/blogs",
  },
];

export const adminNavItems: NavItem[] = [
  {
    type: "both",
    name: "Gallery",
    link: "/dashboard/admin/gallery",
  },
  {
    type: "both",
    name: "Blogs",
    link: "/dashboard/admin/blogs",
  },
];
