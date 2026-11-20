import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rahnilehotel.com";

  const routes = [
    "",
    "/about",
    "/rooms",
    "/dining",
    "/facilities",
    "/explore",
    "/gallery",
    "/reviews",
    "/contact",
    "/book",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/rooms" || route === "/book" ? 0.9 : 0.8,
  }));
}
