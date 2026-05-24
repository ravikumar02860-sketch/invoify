import { ReactNode } from "react";
import "@/app/globals.css";
import { BASE_URL, GOOGLE_SC_VERIFICATION } from "@/lib/variables";
import type { Metadata, Viewport } from "next";

type Props = {
  children: ReactNode;
};

// Root Metadata - Applied to all locales
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Invoify - Free Online Invoice Generator with PDF",
    template: "%s | Invoify",
  },
  description:
    "Create professional invoices instantly for free. Invoify is the easiest online invoice maker with GST support, PDF export, and email delivery. No signup required.",
  keywords: [
    "free invoice generator",
    "online invoice maker",
    "invoice generator with pdf",
    "gst invoice generator",
    "professional invoice template",
    "easy invoice maker",
    "create invoices online",
    "invoice app",
    "invoice software",
    "billing software",
  ],
  authors: [
    {
      name: "Ali Abbasov",
      url: "https://aliabb.vercel.app",
    },
  ],
  creator: "Ali Abbasov",
  publisher: "Invoify",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: GOOGLE_SC_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Invoify",
    title: "Invoify - Free Online Invoice Generator with PDF",
    description:
      "Create professional invoices instantly for free with GST support, PDF export, and email delivery.",
    images: [
      {
        url: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
        width: 1200,
        height: 630,
        alt: "Invoify - Free Invoice Generator",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoify - Free Online Invoice Generator",
    description: "Create professional invoices instantly. Free, no signup required.",
    creator: "@aliabb_dev",
    site: "@aliabb_dev",
    images: [
      "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
    ],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": `${BASE_URL}/en`,
      "ar-SA": `${BASE_URL}/ar`,
      "de-DE": `${BASE_URL}/de`,
      "es-ES": `${BASE_URL}/es`,
      "fr-FR": `${BASE_URL}/fr`,
      "it-IT": `${BASE_URL}/it`,
      "ja-JP": `${BASE_URL}/ja`,
      "pt-BR": `${BASE_URL}/pt-BR`,
      "tr-TR": `${BASE_URL}/tr`,
      "zh-CN": `${BASE_URL}/zh-CN`,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="CKY8za9laVnO0ILSUFS0lLYwNyut-vzW6-TnMVL4XsM"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
