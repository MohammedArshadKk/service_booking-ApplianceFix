import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata, generateFAQSchema, generateLocalBusinessSchema, generateSEO, generateServiceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const seo = generateSEO({
  service: "AC Service",
  location: "Malappuram",
  intent: "Book now",
});

export const metadata: Metadata = constructMetadata({
  title: seo.title,
  description: seo.description,
  canonical: "/ac-service-malappuram",
  keywords: [...seo.keywords, "AC gas charging Malappuram", "AC cleaning Malappuram"],
});

export default function ACServiceMalappuram() {
  const faqs = [
    { q: "How fast can you provide AC service in Malappuram?", a: "Most bookings get same-day slots based on technician availability and your exact area. We confirm ETA before dispatch." },
    { q: "Do you handle gas leak and charging?", a: "Yes. We do leak checks, pressure testing, and gas charging with proper safety procedures." },
    { q: "Do you provide warranty?", a: "Yes. We provide service warranty on labor and warranty on replaced spare parts (if any)." },
  ];

  const jsonLd = [
    generateLocalBusinessSchema("Malappuram"),
    generateServiceSchema("AC Service & Repair", metadata.description as string, "Malappuram"),
    generateFAQSchema(faqs),
  ];

  return (
    <div className="bg-surface">
      {jsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">ac_unit</span>
                AC Repair Malappuram
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">AC Repair</span> & Service in Malappuram
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Looking for reliable **AC Repair in Malappuram**? Our expert technicians provide 
                comprehensive repair, gas charging, and maintenance for all brands at your doorstep.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Split & Window AC Repair",
                  "Filter & Coil Cleaning",
                  "Gas Leakage & Charging",
                  "PCB & Motor Repair"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <span className="font-bold text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-2xl border border-outline-variant/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Book Your Service</h3>
                <p className="text-on-surface-variant text-sm font-bold">Get a expert at your doorstep in 60 minutes.</p>
              </div>
              <BookingForm defaultService="AC Service" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Comprehensive AC Solutions in Malappuram"
        city="Malappuram"
        service="AC Service & Repair"
      />
    </div>
  );
}
