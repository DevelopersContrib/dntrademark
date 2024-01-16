import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Roadmap",
    newTab: false,
    path: "https://roadmap.dntrademark.com"
  },
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "About",
        newTab: false,
        path: "/about",
      },
      {
        id: 34,
        title: "Blog",
        newTab: false,
        path: "https://blog.dntrademark.com",
      },
      {
        id: 35,
        title: "Partner",
        newTab: false,
        path: "/partner",
      },
      {
        id: 35,
        title: "FAQ",
        newTab: false,
        path: "/faq",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
         
    ],
  },
  {
    id: 3,
    title: "Join The Team",
    newTab: false,
    path: "https://www.contrib.com/brand/details/dntrademark.com"
  },
  {
    id: 4,
    title: "Buy DNT Tokens",
    newTab: false,
    path: "https://realtydao.com/dna/dntrademark.com"
  }

];

export default menuData;
