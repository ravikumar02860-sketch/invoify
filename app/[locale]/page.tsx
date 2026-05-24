// Components
import { InvoiceMain } from "@/app/components";
import SEOHomepageContent from "@/app/components/seo/SEOHomepageContent";

// Metadata
import { Metadata } from "next";
import { BASE_URL } from "@/lib/variables";

export const metadata: Metadata = {
    title: "Free Online Invoice Generator | Invoify",
    description: "Create professional invoices instantly with Invoify. Free invoice generator with PDF export, GST support, and email delivery. No signup required. GST invoice maker available.",
    keywords: [
        "free invoice generator",
        "online invoice maker",
        "invoice generator with pdf",
        "gst invoice generator",
        "invoice generator app",
        "create invoices online",
        "professional invoice template",
    ],
    openGraph: {
        title: "Free Online Invoice Generator | Invoify",
        description: "Create professional invoices instantly. Free invoice generator with PDF export, GST support, and email delivery.",
        url: `${BASE_URL}/en`,
        type: "website",
    },
};

export default function Home() {
    return (
        <main className="flex flex-col">
            {/* SEO Content Section - Above Invoice Form */}
            <div className="bg-white dark:bg-slate-900">
                <SEOHomepageContent />
            </div>

            {/* Invoice Generator Section */}
            <div className="py-10 lg:container">
                <InvoiceMain />
            </div>
        </main>
    );
}
