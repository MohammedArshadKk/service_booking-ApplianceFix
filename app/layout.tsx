import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA, FloatingWhatsApp } from "@/components/layout/StickyCTA";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-headline",
});

export const metadata: Metadata = constructMetadata({
  title: "ApplianceFix | Premium Repair Service in Malappuram & Kozhikode",
  description: "Expert AC, Fridge & Washing Machine repair services in Malappuram & Kozhikode. Fast response, certified experts, and same-day service.",
});

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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
