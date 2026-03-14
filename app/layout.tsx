import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SupportBar from "@/components/SupportBar";

import Script from "next/script";

export const metadata: Metadata = {
  title: "CoreVision IT Solutions | IT Support Klang Valley",
  description:
    "CoreVision provides managed IT services, IT support, and infrastructure solutions for SMEs across Klang Valley.",
  keywords:
    "IT support Klang Valley, Managed IT services Malaysia, SME IT support Malaysia, IT support Kuala Lumpur",

  openGraph: {
    title: "CoreVision IT Solutions",
    description:
      "Reliable managed IT services and IT support for growing businesses.",
    images: ["/og-image.jpg"],
    url: "https://corevisionitsolutions.com",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CoreVision IT Solutions | IT Support Klang Valley",
    description:
      "Managed IT services and IT support for SMEs across Klang Valley.",
    images: ["/og-image.jpg"],
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
              "@type": "ITService",
              name: "CoreVision IT Solutions",
              url: "https://corevisionitsolutions.com",
              areaServed: "Klang Valley, Malaysia",
              serviceType: "Managed IT Services",
              description:
                "CoreVision IT Solutions provides managed IT services, IT support, and infrastructure solutions for SMEs across Klang Valley.",
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