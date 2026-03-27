import React from "react";
import { Metadata } from "next";
import { SEOContent } from "@/components/sections/SEOContent";
import { BookingForm } from "@/components/booking/BookingForm";
import { constructMetadata, generateSEO } from "@/lib/seo";

const seo = generateSEO({
  service: "Fridge Not Working Repair",
  location: "Kozhikode",
  intent: "Call now",
});

export const metadata: Metadata = constructMetadata({
  title: seo.title,
  description: seo.description,
  canonical: "/fridge-not-working-kozhikode",
  keywords: seo.keywords,
});

export default function FridgeNotWorkingKozhikode() {
  return (
    <div>
      <section className="bg-red-50 py-12 border-b border-red-100">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-6 text-red-600">
            Fridge Not Turning On in Kozhikode?
          </h1>
          <p className="text-xl mb-8">
            Don't let your food go to waste! Our technicians in Kozhikode provide 
            instant repair services for all refrigerator problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2">!</span>
                Common Problems
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• No cooling at all</li>
                <li>• Compressor not starting</li>
                <li>• Strange clicking sounds</li>
                <li>• Display screen error codes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                Our Response
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Same-day repair service</li>
                <li>• Guaranteed genuine parts</li>
                <li>• Certified experts</li>
                <li>• 30-day service warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Schedule Instant Fix</h2>
            <BookingForm defaultService="Fridge Repair" />
          </div>
        </div>
      </section>

      <SEOContent 
        title="Expert Solutions for Fridge Problems in Kozhikode"
        city="Kozhikode"
        service="Refrigerator Fixes"
      />
    </div>
  );
}
