import { LOCALES } from "@/lib/variables";

const BASE_URL = "https://invoify.vercel.app";

export default function sitemap() {
  // Generate static routes
  const routes = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  // Add locale-specific routes
  LOCALES.forEach((locale) => {
    routes.push({
      url: `${BASE_URL}/${locale.code}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    });

    // Add blog/article routes for each locale
    routes.push({
      url: `${BASE_URL}/${locale.code}/blog/how-to-generate-invoice-from-amazon`,
      lastModified: new Date("2024-05-24"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    });
  });

  // Add English blog post without locale prefix
  routes.push({
    url: `${BASE_URL}/blog/how-to-generate-invoice-from-amazon`,
    lastModified: new Date("2024-05-24"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  });

  return routes;
}
