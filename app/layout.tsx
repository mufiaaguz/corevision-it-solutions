import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SupportBar from "@/components/SupportBar";

import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Managed IT Services & IT Support Klang Valley | CoreVision IT Solutions",
    template: "%s | CoreVision IT Solutions",
  },
  description:
    "Managed IT services, cybersecurity, and IT support for SMEs in Kuala Lumpur, Petaling Jaya, and across Klang Valley. CoreVision IT Solutions helps businesses stay secure and productive.",
  keywords: [
    "IT support Klang Valley",
    "Managed IT services Malaysia",
    "IT support Kuala Lumpur",
    "IT support Petaling Jaya",
    "Cybersecurity Malaysia",
    "SME IT support Malaysia",
  ],

  metadataBase: new URL("https://www.corevisionitsolutions.com"),

  openGraph: {
    title: "Managed IT Services & IT Support Klang Valley | CoreVision IT Solutions",
    description:
      "Reliable managed IT services, cybersecurity, and IT support for growing businesses across Klang Valley.",
    images: ["/og-image.jpg"],
    url: "https://www.corevisionitsolutions.com",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CoreVision IT Solutions | Managed IT Services",
    description:
      "Managed IT services and IT support for SMEs across Kuala Lumpur and Klang Valley.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.corevisionitsolutions.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "var(--surface-color)",
          color: "var(--text-color)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-093R9C2B80"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-093R9C2B80');
          `}
        </Script>

        {/* Structured Data Schema */}
        <Script
          id="corevision-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CoreVision IT Solutions",
              url: "https://www.corevisionitsolutions.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 28, Jalan Raja Jumaat, Taman Sri Istana",
                addressLocality: "Klang",
                addressRegion: "Selangor",
                postalCode: "41000",
                addressCountry: "MY",
              },
              areaServed: "Klang Valley, Malaysia",
              serviceType: "Managed IT Services",
              description:
                "CoreVision IT Solutions provides managed IT services, IT support, and infrastructure solutions for SMEs across Kuala Lumpur, Petaling Jaya, and Klang Valley.",
              provider: {
                "@type": "Organization",
                name: "CoreVision IT Solutions",
              },
            }),
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main
          style={{
            flex: 1,
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Elements */}
        <WhatsAppButton />
        <SupportBar />

      </body>
    </html>
  );
}