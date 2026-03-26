"use client";

import React from "react";
import { BookingForm } from "../booking/BookingForm";

export const Contact = () => {
  return (
    <section className="px-8 py-20 bg-surface-container-low overflow-hidden" id="contact-us">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-extrabold mb-6">Get in Touch</h2>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Have a specific question or need a custom quote? Fill out the form and our team will get back to you on WhatsApp within 15 minutes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-outline-variant/10 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Quick Call</p>
                  <p className="font-headline font-bold text-lg">+91 85902 03732</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-outline-variant/10 shadow-sm">
                <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Working Hours</p>
                  <p className="font-headline font-bold text-lg">8:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-outline-variant/10 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Service Guarantee</p>
                  <p className="font-headline font-bold text-lg">30 Days Warranty</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="font-headline text-2xl font-extrabold mb-8 relative z-10">Direct Message</h3>
            <div className="relative z-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
