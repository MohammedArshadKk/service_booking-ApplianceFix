import { DEFAULT_META_DESCRIPTION, SupportedCity } from "@/lib/seo";

export type ServiceKey = "ac" | "fridge" | "washing-machine";
export type KeywordVariant = "local" | "near-me" | "problem" | "intent";

export interface SeoPageDefinition {
  slug: string;
  kind: "service" | "problem" | "near-me";
  city: SupportedCity;
  service?: ServiceKey;
  problemKey?: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  faqs: { q: string; a: string }[];
}

export const CITIES: SupportedCity[] = ["Malappuram", "Kozhikode"];

export const SERVICES: Record<
  ServiceKey,
  { label: string; serviceType: string; icon: string; baseKeywords: string[] }
> = {
  ac: {
    label: "AC Service",
    serviceType: "AC Service & Repair",
    icon: "ac_unit",
    baseKeywords: ["AC service", "AC repair", "AC gas charging", "AC cleaning"],
  },
  fridge: {
    label: "Fridge Repair",
    serviceType: "Refrigerator Repair",
    icon: "kitchen",
    baseKeywords: ["fridge repair", "refrigerator service", "compressor repair", "gas leak fix"],
  },
  "washing-machine": {
    label: "Washing Machine Service",
    serviceType: "Washing Machine Repair",
    icon: "local_laundry_service",
    baseKeywords: ["washing machine repair", "front load service", "top load service", "drum repair"],
  },
};

export const SERVICE_SLUGS: Record<ServiceKey, string> = {
  ac: "ac-service",
  fridge: "fridge-repair",
  "washing-machine": "washing-machine-service",
};

const NEAR_ME_SLUGS: Record<ServiceKey, string> = {
  ac: "ac-repair-near-me",
  fridge: "fridge-repair-near-me",
  "washing-machine": "washing-machine-repair-near-me",
};

export const PROBLEMS: Array<{
  key: string;
  service: ServiceKey;
  title: string;
  slugBase: string;
  causes: string[];
  fixes: string[];
}> = [
  {
    key: "ac-not-cooling",
    service: "ac",
    title: "AC Not Cooling",
    slugBase: "ac-not-cooling",
    causes: [
      "Low refrigerant / gas leak",
      "Dirty filters or clogged indoor coil",
      "Outdoor unit fan / capacitor issues",
      "Thermostat or sensor problems",
    ],
    fixes: [
      "Leak test + gas charging",
      "Deep cleaning of filters and coil",
      "Outdoor unit inspection and repair",
      "Thermostat calibration / replacement",
    ],
  },
  {
    key: "fridge-not-working",
    service: "fridge",
    title: "Fridge Not Working",
    slugBase: "fridge-not-working",
    causes: [
      "Power / stabilizer issues",
      "Thermostat malfunction",
      "Compressor relay / overload failure",
      "Gas leak or blocked condenser",
    ],
    fixes: [
      "Voltage check + wiring inspection",
      "Thermostat check and replacement",
      "Relay/overload replacement",
      "Leak detection + gas refill",
    ],
  },
];

function cityKeyword(city: SupportedCity) {
  return city === "Malappuram" ? "Malappuram" : "Kozhikode";
}

function canonicalSlug(parts: string[]) {
  return `/${parts.join("-")}`;
}

export function buildServicePage(city: SupportedCity, service: ServiceKey): SeoPageDefinition {
  const serviceLabel = SERVICES[service].label;
  const slug = canonicalSlug([SERVICE_SLUGS[service], city.toLowerCase()]);
  const cityName = cityKeyword(city);

  const title = `${serviceLabel} in ${cityName} | Fast & Affordable Repair Near You`;
  const description = `Book ${serviceLabel.toLowerCase()} in ${cityName}. Certified technicians, genuine spare parts, same-day support. Call now / WhatsApp to book your service.`;

  const primaryKeyword = `${serviceLabel} in ${cityName}`;
  const secondaryKeywords = [
    `${serviceLabel.toLowerCase()} near me`,
    `best ${serviceLabel.toLowerCase()} in ${cityName}`,
    `same day ${SERVICES[service].baseKeywords[0]} ${cityName}`,
    ...SERVICES[service].baseKeywords.map((k) => `${k} ${cityName}`),
  ];

  return {
    slug,
    kind: "service",
    city,
    service,
    title,
    description,
    h1: `${serviceLabel} in ${cityName}`,
    primaryKeyword,
    secondaryKeywords,
    faqs: [
      {
        q: `How fast can you provide ${serviceLabel.toLowerCase()} in ${cityName}?`,
        a: "Most bookings get same-day slots based on technician availability and your exact location. We confirm ETA on WhatsApp/call before dispatch.",
      },
      {
        q: "Do you provide warranty?",
        a: "Yes. We provide service warranty on labor and warranty on replaced spare parts (if any). Details are shared at the time of booking.",
      },
      {
        q: "Do you charge visiting fee?",
        a: "A small visiting/inspection fee may apply depending on the service; it is adjusted in the final bill if you proceed with the repair.",
      },
    ],
  };
}

export function buildNearMePage(city: SupportedCity, service: ServiceKey): SeoPageDefinition {
  const serviceLabel = SERVICES[service].label;
  const slug = canonicalSlug([NEAR_ME_SLUGS[service], city.toLowerCase()]);
  const cityName = cityKeyword(city);

  const title = `${serviceLabel} Near Me in ${cityName} | Doorstep Repair & Same-Day Support`;
  const description = `Need ${serviceLabel.toLowerCase()} near you in ${cityName}? Book doorstep repair with quick ETA, transparent pricing, and WhatsApp booking.`;

  return {
    slug,
    kind: "near-me",
    city,
    service,
    title,
    description,
    h1: `${serviceLabel} Near Me in ${cityName}`,
    primaryKeyword: `${serviceLabel} near me`,
    secondaryKeywords: [
      `${serviceLabel.toLowerCase()} near your location`,
      `${serviceLabel.toLowerCase()} near me ${cityName}`,
      `emergency ${serviceLabel.toLowerCase()} ${cityName}`,
    ],
    faqs: [
      {
        q: "What does “near me” service mean?",
        a: "It means we try to assign the nearest available technician within our service zones around your city to reduce waiting time.",
      },
      {
        q: "How do you confirm availability in my area?",
        a: "Share your area/pincode on WhatsApp. We confirm technician availability and ETA before booking is finalized.",
      },
      {
        q: "Can I book without calling?",
        a: "Yes. You can book via WhatsApp and we’ll confirm details and schedule.",
      },
    ],
  };
}

export function buildProblemPage(city: SupportedCity, problemKey: string): SeoPageDefinition | null {
  const problem = PROBLEMS.find((p) => p.key === problemKey);
  if (!problem) return null;

  const cityName = cityKeyword(city);
  const serviceLabel = SERVICES[problem.service].label;
  const slug = canonicalSlug([problem.slugBase, city.toLowerCase()]);

  const title = `${problem.title} Fix in ${cityName} | ${serviceLabel} Experts Near You`;
  const description = `Facing ${problem.title.toLowerCase()} in ${cityName}? We diagnose the root cause and fix it fast. Book on WhatsApp for same-day repair.`;

  return {
    slug,
    kind: "problem",
    city,
    service: problem.service,
    problemKey: problem.key,
    title,
    description,
    h1: `${problem.title} Fix in ${cityName}`,
    primaryKeyword: `${problem.title.toLowerCase()} fix ${cityName}`,
    secondaryKeywords: [
      `${problem.title.toLowerCase()} repair near me`,
      `${serviceLabel.toLowerCase()} near me ${cityName}`,
      `${problem.title.toLowerCase()} service ${cityName}`,
    ],
    faqs: [
      {
        q: `Is ${problem.title.toLowerCase()} urgent?`,
        a: "Yes—continuing to run an appliance with a major fault can cause higher power usage and further damage. It’s best to get it checked early.",
      },
      {
        q: "Do you provide diagnosis first?",
        a: "Yes. We inspect the appliance, explain the issue, share an estimate, and proceed only after approval.",
      },
      {
        q: "How do I book quickly?",
        a: "Use the WhatsApp booking option and share your issue + area. We’ll confirm the earliest available slot.",
      },
    ],
  };
}

export function getAllSeoPages(): SeoPageDefinition[] {
  const pages: SeoPageDefinition[] = [];

  for (const city of CITIES) {
    for (const service of Object.keys(SERVICES) as ServiceKey[]) {
      pages.push(buildServicePage(city, service));
      pages.push(buildNearMePage(city, service));
    }
    for (const problem of PROBLEMS) {
      const page = buildProblemPage(city, problem.key);
      if (page) pages.push(page);
    }
  }

  // Ensure at least a helpful default; also keeps sitemap robust.
  if (pages.length === 0) {
    pages.push({
      slug: "/",
      kind: "service",
      city: "Malappuram",
      service: "ac",
      title: "AC & Appliance Service in Kerala",
      description: DEFAULT_META_DESCRIPTION,
      h1: "AC & Appliance Service in Kerala",
      primaryKeyword: "appliance service",
      secondaryKeywords: [],
      faqs: [],
    });
  }

  return pages;
}

export function getSeoPageBySlug(slug: string): SeoPageDefinition | null {
  const normalized = slug.startsWith("/") ? slug : `/${slug}`;
  return getAllSeoPages().find((p) => p.slug === normalized) ?? null;
}

