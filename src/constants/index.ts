// TODO(Omkar): Add meta data
export const siteMetaData = {
  title: "Finite Loop Club",
  shortTitle: "FLC",
  name: "Finite Loop Club",
  email: "",
  address: "",
  author: "FLC Tech Team",
};

export const teamTabs = [
  "Year2017to2020",
  "Year2020to2021",
  "Year2021to2022",
  "Year2022to2023",
  "Year2023to2024",
  "Year2024to2025",
  "Faculty",
];

export const adminLinks = [
  {
    label: "Events",
    sublinks: [
      { label: "All Events", url: "/admin/all-events" },
      { label: "Create Event", url: "/admin/create-event" },
    ],
  },
  { label: "Gallery", url: "/admin/add-gallery" },
  { label: "Blogs", url: "/admin/add-blogs" },
  { label: "Quiz", url: "/admin/create-quiz" },
];

export const userLinks = [
  { label: "Gallery", url: "/gallery" },
  { label: "Events", url: "/events" },
  { label: "Blogs", url: "/blogs" },
  { label: "Team", url: "/team" },
];
