import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Washing Machine Repair Malappuram | Expert Service",
  description: "Professional Washing Machine Repair in Malappuram district. Fast doorstep service for front-load and top-load machines. Certified experts and genuine spare parts.",
  canonical: "/washing-machine-service-malappuram"
});

export default function WashingMachineServiceMalappuram() {
  return (
    <div className="bg-surface">
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
                <span className="material-symbols-outlined text-[18px] filled-icon">local_laundry_service</span>
                Washing Machine Repair Malappuram
              </div>
              
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight">
                Top-Rated <span className="text-primary">Washing Machine Repair</span> in Malappuram
              </h1>
              
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Need **Washing Machine Repair in Malappuram**? Our expert team provides 
                fast and reliable doorstep repairs for all major machine brands and models.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Automatic Machine Repair",
                  "Motor & PCB Service",
                  "Drum & Spin Solutions",
                  "Inlet & Drain Fixes"
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
                <p className="text-on-surface-variant text-sm font-bold">Quick visit scheduled in Malappuram.</p>
              </div>
              <BookingForm defaultService="Washing Machine Repair" />
            </div>
          </div>
        </div>
      </section>

      <SEOContent 
        title="Professional Washing Machine Solutions in Malappuram"
        city="Malappuram"
        service="Washing Machine Repair"
      />
    </div>
  );
}
