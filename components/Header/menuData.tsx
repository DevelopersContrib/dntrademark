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
    title: "Features",
    newTab: false,
    path: "/#features"
  },
 
  {
    id: 3,
    title: "Docs",
    newTab: false,
    path: "/docs"
  },
 
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support"
  },
  {
    id: 5,
    title: "Sign In",
    newTab: false,
    path: "https://dash.dntrademark.com/auth/signin"
  },
  {
    id: 6,
    title: "Sign Up",
    newTab: false,
    path: "https://dash.dntrademark.com/auth/signup"
  }
];

export default menuData;
