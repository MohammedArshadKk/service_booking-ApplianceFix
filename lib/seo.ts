import { Metadata } from "next";

export const SITE_NAME = "ApplianceFix";

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/+$/, "");

  // No env vars (local dev / other hosting). Keep a reasonable default.
  return "https://appliance-fix-nine.vercel.app";
}

export const SITE_URL = getSiteUrl();

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    openGraph: {
      title,
      description,
      url: canonical || SITE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || SITE_URL,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export const generateLocalBusinessSchema = (city: "Malappuram" | "Kozhikode") => {
  const address = city === "Malappuram" 
    ? { street: "Down Hill", city: "Malappuram", state: "Kerala", zip: "676505" }
    : { street: "Focus Mall Area", city: "Kozhikode", state: "Kerala", zip: "673001" };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${SITE_NAME} ${city}`,
    "image": `${SITE_URL}/logo.png`,
    "@id": `${SITE_URL}/#localbusiness-${city.toLowerCase()}`,
    "url": SITE_URL,
    "telephone": "+918590203732",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zip,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city === "Malappuram" ? 11.0510 : 11.2588,
      "longitude": city === "Malappuram" ? 76.0711 : 75.7804
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };
};

export const generateServiceSchema = (serviceName: string, description: string) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_NAME
    },
    "areaServed": [
      { "@type": "City", "name": "Malappuram" },
      { "@type": "City", "name": "Kozhikode" }
    ]
  };
};

export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};
