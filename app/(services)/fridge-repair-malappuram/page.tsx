import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Fridge Repair Malappuram | Professional Refrigerator Service",
  description: "Expert Fridge Repair in Malappuram. We fix cooling issues, compressor problems, and provide gas charging for all brands. Professional, same-day refrigerator service at your doorstep.",
  canonical: "/fridge-repair-malappuram"
});

export default function FridgeRepairMalappuram() {
  return (
    <div className="bg-surface">
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">kitchen</span>
                Fridge Repair Malappuram
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">Fridge Repair</span> Service in Malappuram
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Looking for the best **Fridge Repair in Malappuram**? Our expert technicians provide 
                comprehensive repair, compressor replacement, and gas charging for all brands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Compressor Replacement",
                  "Gas Leakage Fix",
                  "Door Seal Repairs",
                  "Thermostat Calibration"
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
                <p className="text-on-surface-variant text-sm font-bold">Get a expert at your doorstep in 60 minutes.</p>
              </div>
              <BookingForm defaultService="Fridge Repair" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Trusted Refrigerator Repair Services in Malappuram"
        city="Malappuram"
        service="Fridge Repair"
      />
    </div>
  );
}
