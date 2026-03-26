"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

const SERVICES = [
  { name: "AC Service", href: "/ac-service-malappuram" },
  { name: "Fridge Repair", href: "/fridge-repair-malappuram" },
  { name: "Washing Machine", href: "/washing-machine-service-kozhikode" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-sm no-line">
      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-headline font-extrabold tracking-tight text-on-surface">ApplianceFix</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-on-surface-variant hover:text-primary font-medium transition-all">Services</Link>
          <Link href="#locations" className="text-on-surface-variant hover:text-primary font-medium transition-all">Locations</Link>
          <Link href="#contact" className="text-on-surface-variant hover:text-primary font-medium transition-all">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="tel:+918590203732" 
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-2xl font-bold transition-all hover:opacity-90 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            Call Now
          </Link>
          <Link 
            href="https://wa.me/918590203732" 
            className="flex items-center gap-2 px-6 py-2.5 border-2 border-primary text-primary rounded-2xl font-bold transition-all hover:bg-primary/5 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            WhatsApp
          </Link>
        </div>
      </nav>
    </header>
  );
};
