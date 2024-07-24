import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "How Its Done",
    newTab: false,
    path: "/how-its-done",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/services",
    submenu: [
      {
        id: 3.1,
        title: "HR Consulting",
        newTab: false,
        path: "/services/hr-consulting",
      },
      {
        id: 3.2,
        title: "Talent Sourcing & Recruitment",
        newTab: false,
        path: "/services/talent-sourcing",
      },
      {
        id: 3.3,
        title: "Onboarding",
        newTab: false,
        path: "/services/onboarding",
      },
      {
        id: 3.4,
        title: "Performance Management",
        newTab: false,
        path: "/services/performance-management",
      },
    ],
  },
  {
    id: 4,
    title: "Expertise",
    newTab: false,
    path: "/expertise",
    submenu: [
      {
        id: 4.1,
        title: "Software Development",
        newTab: false,
        path: "/expertise/software-development",
      },
      {
        id: 4.2,
        title: "Web Development",
        newTab: false,
        path: "/expertise/web-development",
      },
      {
        id: 4.3,
        title: "Mobile App Development",
        newTab: false,
        path: "/expertise/mobile-app-dev",
      },
      {
        id: 4.4,
        title: "IT Support",
        newTab: false,
        path: "/expertise/it-support",
      },
      {
        id: 4.5,
        title: "Data Analytics",
        newTab: false,
        path: "/expertise/data-analytics",
      },
      {
        id: 4.6,
        title: "Cloud Services",
        newTab: false,
        path: "/expertise/cloud-services",
      },
    ],
  },
  {
    id: 5,
    title: "Team",
    newTab: false,
    path: "/team",
  },
  {
    id: 6,
    title: "About",
    newTab: false,
    path: "/about",
  },
  // {
  //   id: 7,
  //   title: "Careers",
  //   newTab: false,
  //   path: "/careers",
  // },
  {
    id: 8,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  // {
  //   id: 6,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },

  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  // },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
