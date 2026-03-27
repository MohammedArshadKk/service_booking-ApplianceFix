import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata, generateSEO } from "@/lib/seo";

const seo = generateSEO({
  service: "AC Service",
  location: "Kozhikode",
  intent: "Book now",
});

export const metadata: Metadata = constructMetadata({
  title: seo.title,
  description: seo.description,
  canonical: "/ac-service-kozhikode",
  keywords: seo.keywords,
});

export default function ACServiceKozhikode() {
  return (
    <div className="bg-surface">
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">ac_unit</span>
                AC Repair Kozhikode
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">AC Repair</span> & Service in Kozhikode
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Need expert **AC Repair in Kozhikode**? Our certified technicians provide 
                fast and reliable service, gas leakage fixes, and deep cleaning for all AC brands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Split & Window AC Repair",
                  "Deep Cleaning & Service",
                  "Gas Level Top-up",
                  "Electrical Diagnostics"
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
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Book AC Repair</h3>
                <p className="text-on-surface-variant text-sm font-bold">Technician arrival in Kozhikode within 60 mins.</p>
              </div>
              <BookingForm defaultService="AC Service" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Professional AC Solutions in Kozhikode"
        city="Kozhikode"
        service="AC Service & Repair"
      />
    </div>
  );
}
