import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "AC Not Cooling in Malappuram? Fast Repair & Gas Fill",
  description: "Is your AC not cooling correctly? We fix AC cooling issues in Malappuram within 60 minutes. Expert technicians and guaranteed results.",
  canonical: "https://servicebooking.com/ac-not-cooling-malappuram"
});

export default function ACNotCoolingMalappuram() {
  return (
    <div>
      <section className="bg-red-50 py-12 border-b border-red-100">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-6 text-red-600">
            AC Not Cooling in Malappuram?
          </h1>
          <p className="text-xl mb-8">
            Don't sweat it! Our experts can diagnose and fix your cooling issues today. 
            Most cooling problems are fixed on the spot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2">!</span>
                Common Causes
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Low refrigerant (gas) levels</li>
                <li>• Clogged air filters</li>
                <li>• Faulty compressor</li>
                <li>• Dirty condenser coils</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                Our Solution
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Instant diagnosis</li>
                <li>• Gas charging & leakage fix</li>
                <li>• Deep chemical cleaning</li>
                <li>• 30-day cooling warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Schedule a Cooling Checkup</h2>
            <BookingForm defaultService="AC Cooling Service" />
          </div>
        </div>
      </section>

      <SEOContent 
        title="Expert Fix for AC Not Cooling in Malappuram"
        city="Malappuram"
        service="AC Repair Solutions"
      />
    </div>
  );
}
