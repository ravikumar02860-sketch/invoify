// Components
import { BaseFooter, BaseNavbar } from "@/app/components";
// ShadCn
import { Toaster } from "@/components/ui/toaster";
// Contexts
import Providers from "@/contexts/Providers";
// Fonts
import {
    alexBrush,
    dancingScript,
    greatVibes,
    outfit,
    parisienne,
} from "@/lib/fonts";
// SEO
import { BREADCRUMB_SCHEMA, FAQ_SCHEMA, JSONLD, ORGANIZATION_SCHEMA, ROOTKEYWORDS, SOFTWARE_APPLICATION_SCHEMA } from "@/lib/seo";
// Variables
import { BASE_URL, GOOGLE_SC_VERIFICATION, LOCALES } from "@/lib/variables";
// Favicon
import Favicon from "@/public/assets/favicon/favicon.ico";
// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
// Next Intl
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Invoify | Free Online Invoice Generator with PDF & GST Support",
    description:
        "Create professional invoices instantly for free. Invoify is the best online invoice maker with GST support, PDF export, and email delivery. No signup required.",
    icons: [{ rel: "icon", url: Favicon.src }],
    keywords: ROOTKEYWORDS,
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
    },
    alternates: {
        canonical: BASE_URL,
    },
    authors: [
        {
            name: "Ali Abbasov",
            url: "https://aliabb.vercel.app",
        },
    ],
    verification: {
        google: GOOGLE_SC_VERIFICATION,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: BASE_URL,
        siteName: "Invoify",
        title: "Invoify - Free Online Invoice Generator",
        description: "Create professional invoices instantly. GST support, PDF export, email delivery.",
        images: [
            {
                url: "https://invoify.vercel.app/_next/static/media/invoify-logo.7ef8fa33.svg",
                width: 1200,
                height: 630,
                alt: "Invoify Invoice Generator",
                type: "image/svg+xml",
            },
        ],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export function generateStaticParams() {
    // Next.js expects an array of objects: [{ locale: 'en' }, ...]
    const locales = LOCALES.map((locale) => ({ locale: locale.code }));
    return locales;
}

export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const params = await props.params;

    const { locale } = params;

    const { children } = props;

    let messages;
    try {
        messages = (await import(`@/i18n/locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <head suppressHydrationWarning>
                {/* Main Website Schema */}
                <script
                    type="application/ld+json"
                    id="json-ld-website"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
                />
                
                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    id="json-ld-organization"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
                />
                
                {/* Software Application Schema */}
                <script
                    type="application/ld+json"
                    id="json-ld-software"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_SCHEMA) }}
                />
                
                {/* FAQ Schema */}
                <script
                    type="application/ld+json"
                    id="json-ld-faq"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
                />
                
                {/* Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    id="json-ld-breadcrumb"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
                />
                
                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="aliabb" data-description="Support me on Buy me a coffee!" data-message="Thank you for using Invoify" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
            </head>
            <body
                className={`${outfit.className} ${dancingScript.variable} ${parisienne.variable} ${greatVibes.variable} ${alexBrush.variable} antialiased bg-slate-100 dark:bg-slate-800`}
                suppressHydrationWarning
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Providers>
                        <BaseNavbar />

                        <div className="flex flex-col">{children}</div>

                        <BaseFooter />

                        {/* Toast component */}
                        <Toaster />

                        {/* Vercel analytics */}
                        <Analytics />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
