import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.corevisionitsolutions.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/managed-it`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/it-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/it-support-kuala-lumpur`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/it-support-petaling-jaya`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/managed-it-klang-valley`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/network-infrastructure`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/office-it-setup`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/pbx-phone-systems`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/automation-solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/business-tools-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/system-integrations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/website-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/mobile-app-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/custom-software-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}