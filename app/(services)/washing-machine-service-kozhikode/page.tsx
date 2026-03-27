import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata, generateSEO } from "@/lib/seo";

const seo = generateSEO({
  service: "Washing Machine Service",
  location: "Kozhikode",
  intent: "Call now",
});

export const metadata: Metadata = constructMetadata({
  title: seo.title,
  description: seo.description,
  canonical: "/washing-machine-service-kozhikode",
  keywords: seo.keywords,
});

export default function WashingMachineServiceKozhikode() {
  return (
    <div className="bg-surface">
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">local_laundry_service</span>
                Washing Machine Repair Kozhikode
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">Washing Machine Repair</span> & Service in Kozhikode
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Need reliable **Washing Machine Repair in Kozhikode**? From motor issues to board failures, 
                our expert technicians provide fast doorstep repair for all major brands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Motor Repair & Swap",
                  "PCB Board Fixes",
                  "Drum & Bearing Work",
                  "Pump & Inlet Repairs"
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
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Book Machine Repair</h3>
                <p className="text-on-surface-variant text-sm font-bold">Get a expert at your doorstep in 60 minutes.</p>
              </div>
              <BookingForm defaultService="Washing Machine Repair" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Reliable Washing Machine Solutions in Kozhikode"
        city="Kozhikode"
        service="Washing Machine Repair"
      />
    </div>
  );
}
