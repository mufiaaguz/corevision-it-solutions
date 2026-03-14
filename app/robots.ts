import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://corevisionitsolutions.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}