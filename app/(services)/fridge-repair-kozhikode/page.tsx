import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Fridge Repair Kozhikode | Expert Refrigerator Service",
  description: "Professional Fridge Repair in Kozhikode district. We fix all refrigerator brands and models. Instant cooling issue resolution and genuine parts replacement.",
  canonical: "/fridge-repair-kozhikode"
});

export default function FridgeRepairKozhikode() {
  return (
    <div className="bg-surface">
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">kitchen</span>
                Fridge Repair Kozhikode
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">Fridge Repair</span> Service in Kozhikode
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Searching for reliable **Fridge Repair in Kozhikode**? Our certified experts provide 
                fast doorstep service for all refrigerator brands and cooling problems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Compressor Replacement",
                  "Inverter Board Fixes",
                  "Gas Level Restoration",
                  "Defrost System Repair"
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
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">Book Fridge Repair</h3>
                <p className="text-on-surface-variant text-sm font-bold">Technician available in Kozhikode today.</p>
              </div>
              <BookingForm defaultService="Fridge Repair" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Professional Refrigerator Repair in Kozhikode"
        city="Kozhikode"
        service="Fridge Repair"
      />
    </div>
  );
}
