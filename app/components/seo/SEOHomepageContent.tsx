import { Metadata } from "next";

/**
 * SEO-optimized homepage content component
 * Provides comprehensive SEO content with natural keyword integration
 * without keyword stuffing
 */
export default function SEOHomepageContent() {
  return (
    <section className="py-8 px-4 md:px-8 max-w-4xl mx-auto text-slate-700 dark:text-slate-300">
      {/* Main H1 - Primary keyword focus */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
        Free Online Invoice Generator - Create Professional Invoices Instantly
      </h1>

      {/* Introductory paragraph with LSI keywords */}
      <p className="text-lg mb-8 leading-relaxed">
        Invoify is the easiest and most powerful online invoice maker available today. Whether you're a freelancer, small business owner, or entrepreneur, our free invoice generator helps you create professional, customized invoices in seconds. No signup required, no credit card needed, and no complicated processes – just instant, high-quality invoice generation with full PDF support, GST invoice functionality, and direct email delivery capabilities.
      </p>

      {/* Section 1: What is Invoify */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          What Is Invoify? The Best Invoice Generator Online
        </h2>
        <p className="mb-4 leading-relaxed">
          Invoify is a completely free, web-based invoice generator that empowers businesses of all sizes to create professional invoices without any technical knowledge or setup. Our online invoice maker combines simplicity with powerful features, making it the perfect choice for freelancers, contractors, small businesses, and large enterprises alike.
        </p>
        <p className="mb-4 leading-relaxed">
          Unlike traditional invoicing software that requires expensive subscriptions, complicated installations, or lengthy onboarding processes, Invoify delivers instant results. Our free invoice generator with PDF export capabilities lets you create, customize, and send professional invoices in just a few minutes. Whether you need a basic invoice maker or advanced GST invoice functionality, Invoify covers all your invoicing needs without breaking the bank.
        </p>
      </div>

      {/* Section 2: Key Features - H2 with keywords */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Powerful Features of Our Invoice Generator with PDF
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              🎨 Professional Templates
            </h3>
            <p>
              Choose from multiple professionally designed invoice templates. Our free invoice generator includes beautiful, customizable designs that work for any business type.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              📄 PDF Export
            </h3>
            <p>
              Generate PDF invoices instantly with our online invoice maker. Download high-quality PDFs ready for printing or digital distribution to your clients.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              💰 GST Support
            </h3>
            <p>
              Create GST invoices effortlessly with our invoice generator. Automatic GST calculations, tax compliance, and proper formatting for Indian businesses.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              📧 Email Delivery
            </h3>
            <p>
              Send invoices directly to clients via email. Our invoice maker includes built-in email functionality for seamless communication with no extra tools needed.
            </p>
          </div>
          <div className="bg-pink-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              📊 Multiple Export Formats
            </h3>
            <p>
              Export invoices as PDF, Excel (XLSX), or CSV. Our free invoice generator supports all major file formats for maximum flexibility.
            </p>
          </div>
          <div className="bg-teal-50 dark:bg-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              🔐 100% Free & Secure
            </h3>
            <p>
              No hidden costs, no premium features locked behind paywalls. Our online invoice maker is completely free and respects your data privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Why Choose Invoify */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Why Choose Invoify as Your Free Invoice Generator?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Zero Registration Required:</strong> Start creating invoices immediately without any account setup or email verification. Our online invoice maker is ready to use right away.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Completely Free Forever:</strong> Never worry about subscription fees or hidden charges. Invoify's free invoice generator has no payment required, ever.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Professional Quality Invoices:</strong> Create invoices that look like they were designed by professionals. Our invoice generator with PDF support ensures perfectly formatted, business-ready documents.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>GST Invoice Compliance:</strong> Our invoice generator includes full GST support for Indian businesses, with automatic calculations and proper tax formatting.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Multi-Language Support:</strong> Available in 15+ languages, including English, Spanish, French, German, Chinese, and more. Use the online invoice maker in your preferred language.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Dark Mode & Accessibility:</strong> Our invoice generator supports dark mode and is designed with accessibility in mind for all users.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 font-bold mr-4">✓</span>
            <div>
              <strong>Mobile-Friendly Design:</strong> Access the free invoice generator from any device – desktop, tablet, or smartphone. The online invoice maker works seamlessly on all screen sizes.
            </div>
          </li>
        </ul>
      </div>

      {/* Section 4: How to Use */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          How to Use Our Free Invoice Generator - Simple Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
            <div>
              <strong>Fill in Your Details:</strong> Enter your business information, client details, and invoice specifics using our intuitive online invoice maker interface.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
            <div>
              <strong>Add Line Items:</strong> Include products, services, quantities, rates, and taxes. Our invoice generator automatically calculates totals and GST if applicable.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
            <div>
              <strong>Customize Your Invoice:</strong> Add your logo, choose a professional template, select your preferred colors, and adjust the layout using the free invoice generator's customization tools.
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
            <div>
              <strong>Preview & Download:</strong> See exactly how your invoice will look, then download as PDF or export in your preferred format (Excel, CSV).
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
            <div>
              <strong>Send to Clients:</strong> Email the invoice directly to your client or save for your records. Our online invoice maker handles all the heavy lifting.
            </div>
          </li>
        </ol>
      </div>

      {/* Section 5: Use Cases */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Who Uses Our Online Invoice Maker?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Freelancers & Consultants
            </h3>
            <p>
              Manage client billing efficiently. Our free invoice generator helps freelancers create professional invoices quickly, improving cash flow and client satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Small Businesses
            </h3>
            <p>
              Scale your operations without expensive accounting software. Our online invoice maker grows with your business and always remains free.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Service Providers
            </h3>
            <p>
              From plumbers to consultants, our invoice generator with GST support works for any service-based business. Create invoices that establish professionalism.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              E-commerce & Retail
            </h3>
            <p>
              Generate invoices for multiple line items and customer types. Our free invoice generator handles bulk exports and multiple transactions efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Non-Profits & NGOs
            </h3>
            <p>
              Track donations and provide receipts. Our online invoice maker helps non-profits maintain records without subscription costs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              Educational Institutions
            </h3>
            <p>
              Generate payment invoices and receipts. Our invoice generator is perfect for colleges, coaching centers, and educational organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: FAQ-like content */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          Common Questions About Our Free Invoice Generator
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              Is Invoify Really 100% Free?
            </h3>
            <p>
              Absolutely! Our free invoice generator has no hidden fees, no trial periods, and no premium features behind paywalls. Create unlimited invoices forever without spending a single penny.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              Can I Add Multiple Line Items to My Invoices?
            </h3>
            <p>
              Yes! Our online invoice maker supports unlimited line items. Add as many products or services as needed, and our invoice generator will automatically calculate totals, taxes, and GST if applicable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              Does the Free Invoice Generator Support Multiple Currencies?
            </h3>
            <p>
              Yes! Our invoice generator supports 150+ currencies from around the world. Choose your currency, and the online invoice maker handles all formatting and calculations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              Can I Customize the Invoice Template?
            </h3>
            <p>
              Completely! Our invoice generator lets you choose from multiple professional templates, add your logo, select colors, and customize fonts. Your brand identity matters, and our online invoice maker respects that.
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Creating Professional Invoices Today
        </h2>
        <p className="text-lg mb-6">
          Join thousands of businesses and freelancers using Invoify, the best free online invoice generator. No credit card, no signup – just instant, professional invoices.
        </p>
        <p className="text-base opacity-90">
          Our invoice generator with PDF support, GST functionality, and email delivery makes professional invoicing accessible to everyone.
        </p>
      </div>
    </section>
  );
}
