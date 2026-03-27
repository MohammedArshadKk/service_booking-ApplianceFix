"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "../ui/Modal";
import { BookingForm } from "../booking/BookingForm";
import { trackEvent } from "@/lib/analytics";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative px-8 py-20 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full mb-6">
            <span className="flex -space-x-2">
              <span className="material-symbols-outlined text-tertiary filled-icon">star</span>
            </span>
            <span className="text-sm font-bold text-on-surface">⭐ 4.8 Rating • 1000+ Services Completed</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-6">
            Fast AC, Fridge & Washing Machine Service <span className="text-primary">Near You</span>
          </h1>
          
          <p className="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            Expert technicians in Malappuram & Kozhikode. Get professional appliance repair at your doorstep today. Book instantly via WhatsApp for same-day service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                trackEvent("click_book_service_now", { source: "hero" });
                setIsModalOpen(true);
              }}
              className="px-8 py-4 bg-primary text-on-primary rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Book Service Now
            </button>
            <Link
              href="tel:+918590203732"
              onClick={() => trackEvent("click_call", { source: "hero" })}
              className="px-8 py-4 bg-surface-container-low text-on-surface rounded-2xl font-bold text-lg transition-all hover:bg-surface-container-high active:scale-95 text-center"
            >
              Call Now
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span className="text-sm font-medium">Same-day service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span className="text-sm font-medium">Certified experts</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Professional AC technician at work"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-header rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">verified_user</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">Authorized Spare Parts</p>
              <p className="text-xs text-on-surface-variant">We only use genuine components for all repairs.</p>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Book Your Repair"
      >
        <BookingForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};
