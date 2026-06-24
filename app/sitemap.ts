import type { MetadataRoute } from "next";

const BASE = "https://dntrademark.com";

const ROUTES = [
  "",
  "/about",
  "/faq",
  "/contact",
  "/support",
  "/partner",
  "/referral",
  "/invest",
  "/roadmap",
  "/betasignup",
  "/privacypolicy",
  "/termsofservice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
