import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata, generateFAQSchema, generateLocalBusinessSchema, generateServiceSchema } from "@/lib/seo";
import { getAllSeoPages, getSeoPageBySlug, SERVICES, ServiceKey } from "@/lib/seo-pages";

export async function generateStaticParams() {
  return getAllSeoPages()
    .map((p) => p.slug)
    .filter((slug) => slug !== "/")
    .map((slug) => ({ slug: slug.replace(/^\//, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(`/${slug}`);
  if (!page) return {};

  const keywords = Array.from(
    new Set([page.primaryKeyword, ...page.secondaryKeywords, "appliance service", "repair near me", "Kerala"])
  );

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: page.slug,
    keywords,
  });
}

function defaultInternalLinks(city: "Malappuram" | "Kozhikode") {
  const cityLower = city.toLowerCase();
  return [
    { href: `/ac-service-${cityLower}`, label: `AC service in ${city}` },
    { href: `/fridge-repair-${cityLower}`, label: `fridge repair in ${city}` },
    { href: `/washing-machine-service-${cityLower}`, label: `washing machine service in ${city}` },
    { href: `/ac-repair-near-me-${cityLower}`, label: `AC repair near me in ${city}` },
  ];
}

export default async function SeoSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPageBySlug(`/${slug}`);
  if (!page) notFound();

  const serviceKey = page.service as ServiceKey | undefined;
  const serviceLabel = serviceKey ? SERVICES[serviceKey].serviceType : "Appliance Service";
  const city = page.city;
  const links = defaultInternalLinks(city);

  const jsonLd = [
    generateLocalBusinessSchema(city),
    generateServiceSchema(serviceLabel, page.description, city),
    generateFAQSchema(page.faqs),
  ];

  return (
    <div className="bg-surface">
      {jsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}

      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">
                  {serviceKey ? SERVICES[serviceKey].icon : "home_repair_service"}
                </span>
                {page.kind === "problem" ? "Problem Fix" : "Service Booking"}
              </div>

              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
                {page.h1}
              </h1>

              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                {page.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {page.secondaryKeywords.slice(0, 10).map((k) => (
                  <span key={k} className="px-4 py-1.5 bg-surface-container text-primary rounded-full text-xs font-bold">
                    {k}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-headline font-bold text-on-surface mb-3">Quick links</h2>
                <div className="flex flex-wrap gap-3">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/10 hover:bg-surface-container transition-colors text-sm font-bold text-on-surface"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-2xl border border-outline-variant/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">Book Now</h3>
                <p className="text-on-surface-variant text-sm font-bold">WhatsApp booking + quick callback.</p>
              </div>
              <BookingForm defaultService={serviceKey ? SERVICES[serviceKey].label : "AC Service"} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-surface border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto space-y-10 text-on-surface-variant text-lg leading-relaxed font-medium">
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Why choose us in {city}?</h2>
            <p>
              If you’re searching for <strong>{page.primaryKeyword}</strong> or <strong>{page.secondaryKeywords[0]}</strong>,
              you usually want three things: fast response, honest pricing, and a technician who fixes it the first time.
              ApplianceFix is built for local service in {city} with WhatsApp booking, clear estimates, and genuine parts where needed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Common issues we handle</h2>
            <p>
              From routine maintenance to sudden breakdowns, we handle the typical issues customers report across {city}.
              Share your exact symptom on WhatsApp (noise, leakage, not cooling, error code), and we’ll guide you to the right service.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not cooling / poor performance</li>
              <li>Power trips, fuse issues, and wiring faults</li>
              <li>Water leakage, bad smells, and deep cleaning</li>
              <li>PCB / sensor errors and motor failures</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Pricing & estimates</h2>
            <p>
              Pricing depends on the appliance type, brand, and what we find during inspection. We share an estimate before repair.
              For “near me” urgent calls in {city}, we prioritize the nearest technician to reduce waiting time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">Service areas in {city}</h2>
            <p>
              We cover major neighborhoods and nearby towns. If you’re slightly outside the main city area, message us your locality and we’ll confirm availability.
              This helps your “{serviceLabel.toLowerCase()} near me” request match the nearest service zone.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">FAQs</h2>
            <div className="space-y-4">
              {page.faqs.map((f) => (
                <div key={f.q} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                  <div className="font-headline font-bold text-on-surface">{f.q}</div>
                  <div className="text-on-surface-variant mt-2 text-base leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center pt-6 border-t border-outline-variant/10 italic text-on-surface-variant/80">
            Ready to book? Tap <strong>Call Now</strong> or <strong>WhatsApp</strong> and we’ll confirm the earliest slot in {city}.
          </p>
        </div>
      </section>
    </div>
  );
}

