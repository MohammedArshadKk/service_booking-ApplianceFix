import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "AC Repair Malappuram | Expert Service & Gas Charging",
  description: "Professional AC Repair in Malappuram. Fast gas charging, filter cleaning, and complete maintenance by certified experts. Same-day service available across Malappuram district.",
  canonical: "/ac-service-malappuram"
});

export default function ACServiceMalappuram() {
  return (
    <div className="bg-surface">
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
