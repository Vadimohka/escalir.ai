import { articles } from "./articles";
import { industryLinks, informationLinks, platformLinks } from "./navigation";

export const INDEXED_ROUTES = [
  "/",
  ...platformLinks.map(link => link.href),
  "/industries/",
  ...industryLinks.map(link => link.href),
  ...informationLinks.map(link => link.href),
  "/privacy/",
];

export const UNLISTED_ROUTES = [
  "/about-us/",
  "/careers/",
  "/press/",
  "/blog/",
  ...articles.map(article => `/blog/${article.slug}/`),
];

export const SITE_ROUTES = [...INDEXED_ROUTES, ...UNLISTED_ROUTES];
