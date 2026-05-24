import { AUTHOR_WEBSITE, BASE_URL } from "@/lib/variables";

// Primary Keywords for SEO
export const ROOTKEYWORDS = [
    "free invoice generator",
    "online invoice maker",
    "invoice generator with pdf",
    "gst invoice generator",
    "invoice generator app",
    "invoice generating",
    "invoice app",
    "create invoices online",
    "professional invoice template",
    "easy invoice maker",
];

// Schema.org Structured Data - Organization
export const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Invoify",
    url: BASE_URL,
    image: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
    description: "Free online invoice generator. Create professional invoices with GST, PDF export, and email delivery.",
    author: {
        "@type": "Person",
        name: "Ali Abbasov",
        url: AUTHOR_WEBSITE,
    },
    sameAs: [
        "https://github.com/al1abb/invoify",
    ],
};

// Schema.org Structured Data - SoftwareApplication
export const SOFTWARE_APPLICATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Invoify",
    applicationCategory: "BusinessApplication",
    description: "Free online invoice generator with PDF export, GST support, and email delivery. Create professional invoices instantly without signup.",
    url: BASE_URL,
    image: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
    operatingSystem: "Web-based (All operating systems)",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1250",
    },
    author: {
        "@type": "Person",
        name: "Ali Abbasov",
        url: AUTHOR_WEBSITE,
    },
};

// Schema.org Structured Data - FAQPage
export const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is Invoify really free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Invoify is completely free to use. No credit card required, no hidden fees. Create unlimited invoices with professional templates.",
            },
        },
        {
            "@type": "Question",
            name: "Does Invoify support GST invoices?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Invoify supports GST invoice generation. You can easily add GST details and calculate taxes automatically.",
            },
        },
        {
            "@type": "Question",
            name: "Can I export invoices as PDF?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can export invoices directly as PDF files. Download them instantly or send via email.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to sign up to use Invoify?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No signup required. Start creating invoices immediately without any account creation.",
            },
        },
        {
            "@type": "Question",
            name: "What file formats does Invoify support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Invoify supports PDF, Excel (XLSX), and CSV formats for exporting invoices.",
            },
        },
    ],
};

// Schema.org Structured Data - BreadcrumbList
export const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Invoice Generator",
            item: `${BASE_URL}/en`,
        },
    ],
};

// Schema.org Structured Data - Article (for blog posts)
export const createArticleSchema = (title: string, description: string, url: string, datePublished: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    author: {
        "@type": "Person",
        name: "Ali Abbasov",
        url: AUTHOR_WEBSITE,
    },
    image: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
});

// Main JSONLD - Website
export const JSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Invoify",
    url: BASE_URL,
    description: "Free online invoice generator with PDF export, GST support, and email delivery.",
    image: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/en?q={search_term_string}`,
        },
        query_input: "required name=search_term_string",
    },
};
