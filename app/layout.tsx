import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA, FloatingWhatsApp } from "@/components/layout/StickyCTA";
import { DEFAULT_META_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AC & Appliance Service in Kerala",
    template: "%s | AC & Appliance Service in Kerala",
  },
  description: DEFAULT_META_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "AC & Appliance Service in Kerala",
    description: DEFAULT_META_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-image.jpg` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC & Appliance Service in Kerala",
    description: DEFAULT_META_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  verification: {
    google: "sKBE63og-HL4ZizPasLXpjeM0OUezCujsEe8_3YcDxo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <Script id="ga4">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
