import { CalendarDays, ChartColumn, GalleryHorizontal, Home, Image, StickyNote, UsersRound } from "lucide-react";
import { type ReactElement } from "react";

type NavItem = {
  type: "nav" | "search" | "both";
  name: string;
  link: string;
  Icon?: ReactElement;
};

export const userNavItems: NavItem[] = [
  {
    type: "both",
    name: "Home",
    Icon:<Home />,
    link: "/",
  },
  {
    type: "both",
    name: "Gallery",
    link: "/gallery",
    Icon:<Image />
  },
  {
    type: "both",
    name: "Events",
    link: "/events",
    Icon:<CalendarDays />
  },
  {
    type: "both",
    name: "Blogs",
    link: "/blogs",
    Icon:<StickyNote />
  },
  {
    type: "both",
    name: "Leaderboard",
    link: "/leaderboard",
    Icon:<ChartColumn />
  },
  {
    type: "both",
    name: "Team",
    link: "/team",
    Icon:<UsersRound />
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
