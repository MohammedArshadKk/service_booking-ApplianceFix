"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "How fast can you provide the service?",
    a: "We usually respond within 60 minutes of booking. Our technician will contact you to confirm the exact time."
  },
  {
    q: "Do you provide a warranty for the repairs?",
    a: "Yes, we provide a 30-day warranty on all our repair services and up to 90 days on specific spare parts."
  },
  {
    q: "Are the technicians verified?",
    a: "Absolutely. All our technicians are background-verified and have at least 5 years of experience in appliance repair."
  },
  {
    q: "What are your service charges?",
    a: "Our inspection charge starts at ₹199, which is waived if you proceed with the repair service."
  }
];

export const FAQ = () => {
  return (
    <section className="px-8 py-20 max-w-4xl mx-auto">
      <h2 className="font-headline text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="group bg-surface-container-low rounded-2xl overflow-hidden border-none" open>
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg group-open:bg-primary group-open:text-on-primary transition-colors">
            How quickly can you send a technician?
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
          </summary>
          <div className="p-6 text-on-surface-variant leading-relaxed">
            We offer same-day service for most requests made before 2 PM. Our technicians typically arrive within 2-4 hours of booking depending on your location.
          </div>
        </details>
        <details className="group bg-surface-container-low rounded-2xl overflow-hidden border-none">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg group-open:bg-primary group-open:text-on-primary transition-colors">
            Is there a service warranty provided?
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
          </summary>
          <div className="p-6 text-on-surface-variant leading-relaxed">
            Yes, we provide a 30-day warranty on labor and up to 90 days warranty on any spare parts replaced by our team.
          </div>
        </details>
        <details className="group bg-surface-container-low rounded-2xl overflow-hidden border-none">
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg group-open:bg-primary group-open:text-on-primary transition-colors">
            Do you charge for home visits?
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
          </summary>
          <div className="p-6 text-on-surface-variant leading-relaxed">
            We charge a nominal visiting fee of ₹250, which is fully adjusted against the final service bill if you choose to proceed with the repair.
          </div>
        </details>
      </div>
    </section>
  );
};
