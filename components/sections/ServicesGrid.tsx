"use client";

import React, { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { BookingForm } from "../booking/BookingForm";

const SERVICES = [
  {
    title: "AC Service",
    description: "Installation, repair, gas filling, and deep cleaning for all AC brands and models.",
    icon: "ac_unit",
    href: "/ac-service-malappuram"
  },
  {
    title: "Fridge Repair",
    description: "Fixing cooling issues, compressor faults, and gas leaks for single and double door units.",
    icon: "kitchen",
    href: "/fridge-repair-malappuram"
  },
  {
    title: "Washing Machine Fix",
    description: "Expert handling of PCB issues, drum repairs, and motor faults for top and front loads.",
    icon: "local_laundry_service",
    href: "/washing-machine-service-kozhikode"
  }
];

export const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="px-8 py-20 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Our Expertise</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Professional repair solutions for all major home appliances with guaranteed quality.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={i} className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-outline-variant/10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setSelectedService(service.title)}
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-2xl transition-all shadow-lg shadow-primary/10 active:scale-95"
                >
                  Book Now
                </button>
                <a 
                  href={service.href} 
                  className="block text-center text-sm font-bold text-primary hover:underline"
                >
                  View Repair Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        title={`Book ${selectedService}`}
      >
        <BookingForm 
          defaultService={selectedService || ""} 
          onSuccess={() => setSelectedService(null)} 
        />
      </Modal>
    </section>
  );
};
