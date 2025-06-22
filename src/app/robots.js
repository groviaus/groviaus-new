import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.groviaus.com/sitemap.xml",
  };
}
