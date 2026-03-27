import { Metadata } from "next";

export const SITE_NAME = "ApplianceFix";
export const DEFAULT_META_DESCRIPTION =
  "Book AC, fridge, and washing machine services in Malappuram & Kozhikode. Fast, reliable, and affordable service near you.";

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/+$/, "");

  // No env vars (local dev / other hosting). Keep a reasonable default.
  return "https://appliance-fix-nine.vercel.app";
}

export const SITE_URL = getSiteUrl();

export function toAbsoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  if (pathOrUrl.startsWith("/")) return `${SITE_URL}${pathOrUrl}`;
  return `${SITE_URL}/${pathOrUrl}`;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateSEO({
  service,
  location,
  intent = "Book now",
}: {
  service: string;
  location: SupportedCity;
  intent?: string;
}) {
  const normalizedService = service.trim();
  const normalizedLocation = location.trim() as SupportedCity;
  const title = `${normalizedService} in ${normalizedLocation} | Fast Repair Near You`;
  const description = `${normalizedService} in ${normalizedLocation}. Fast, reliable, and affordable doorstep support. ${intent} via WhatsApp or call now.`;
  const keywords = [
    `${normalizedService} in ${normalizedLocation}`,
    `${normalizedService} near me`,
    `${normalizedService} ${normalizedLocation}`,
    "appliance repair near me",
    "same day appliance service",
  ];

  return { title, description, keywords };
}

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
  keywords,
}: SEOProps): Metadata {
  const canonicalAbs = toAbsoluteUrl(canonical);
  const ogImageAbs = toAbsoluteUrl(ogImage);

  return {
    title: `${title} | AC & Appliance Service in Kerala`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalAbs,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageAbs,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
    alternates: {
      canonical: canonicalAbs,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export type SupportedCity = "Malappuram" | "Kozhikode";

const CITY_DATA: Record<
  SupportedCity,
  { street: string; city: string; state: string; zip: string; latitude: number; longitude: number }
> = {
  Malappuram: {
    street: "Down Hill",
    city: "Malappuram",
    state: "Kerala",
    zip: "676505",
    latitude: 11.051,
    longitude: 76.0711,
  },
  Kozhikode: {
    street: "Focus Mall Area",
    city: "Kozhikode",
    state: "Kerala",
    zip: "673001",
    latitude: 11.2588,
    longitude: 75.7804,
  },
};

export const generateLocalBusinessSchema = (city: SupportedCity) => {
  const address = CITY_DATA[city];

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
      "latitude": address.latitude,
      "longitude": address.longitude
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

export const generateServiceSchema = (serviceName: string, description: string, city?: SupportedCity) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_NAME
    },
    "areaServed": city
      ? [{ "@type": "City", "name": city }]
      : [{ "@type": "City", "name": "Malappuram" }, { "@type": "City", "name": "Kozhikode" }]
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
