/**
 * SEO Utilities - Reusable functions and helpers for SEO optimization
 */

/**
 * Generate schema.org Organization JSON-LD
 */
export const createOrganizationSchema = (options: {
  name: string;
  url: string;
  image?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    type: string;
    telephone?: string;
    email?: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  ...options,
});

/**
 * Generate schema.org LocalBusiness JSON-LD
 */
export const createLocalBusinessSchema = (options: {
  name: string;
  image: string;
  description: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...options,
});

/**
 * Generate schema.org Product JSON-LD
 */
export const createProductSchema = (options: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  ...options,
});

/**
 * Generate Open Graph meta tags object
 */
export const createOpenGraphTags = (options: {
  type: "website" | "article" | "product";
  title: string;
  description: string;
  url: string;
  image?: string;
  locale?: string;
  siteName?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}) => options;

/**
 * Generate Twitter Card meta tags object
 */
export const createTwitterCard = (options: {
  card: "summary" | "summary_large_image" | "app" | "player";
  title: string;
  description: string;
  image?: string;
  creator?: string;
  site?: string;
}) => options;

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (baseUrl: string, path: string) => {
  const url = new URL(path, baseUrl);
  return url.toString();
};

/**
 * Generate hreflang links for multilingual content
 */
export const createHrefLangLinks = (
  baseUrl: string,
  path: string,
  locales: { code: string; name: string }[]
) => {
  return {
    default: getCanonicalUrl(baseUrl, `${path}`),
    locales: locales.map((locale) => ({
      locale: locale.code,
      url: getCanonicalUrl(baseUrl, `/${locale.code}${path}`),
    })),
  };
};

/**
 * Generate metadata keywords from multiple keyword groups
 */
export const generateKeywords = (...keywordGroups: (string | string[])[]): string[] => {
  return keywordGroups.flatMap((group) => (Array.isArray(group) ? group : [group]));
};

/**
 * Calculate reading time for content
 */
export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Generate SEO-friendly slug from text
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Create breadcrumb schema for navigation
 */
export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * SEO meta tags for better indexing
 */
export const getSEOMetaTags = () => ({
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  googlebot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
});