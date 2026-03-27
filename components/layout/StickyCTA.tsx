"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md z-50 p-4 pb-safe flex justify-around items-center border-t border-outline-variant/10 shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] rounded-t-3xl">
      <Link
        href="tel:+918590203732"
        onClick={() => trackEvent("click_call", { source: "sticky_cta" })}
        className="flex flex-col items-center justify-center text-on-surface-variant py-2 px-6 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined mb-1">call</span>
        <span className="font-headline text-[10px] font-bold uppercase tracking-wider">Call Now</span>
      </Link>
      <Link
        href="https://wa.me/918590203732"
        onClick={() => trackEvent("click_whatsapp", { source: "sticky_cta" })}
        className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-2xl py-2 px-8 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined mb-1">chat</span>
        <span className="font-headline text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </Link>
    </div>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <Link 
      href="https://wa.me/918590203732" 
      onClick={() => trackEvent("click_whatsapp", { source: "floating_whatsapp" })}
      className="fixed bottom-8 right-8 z-70 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      target="_blank"
    >
      <span className="material-symbols-outlined text-4xl filled-icon">chat</span>
      <span className="absolute right-full mr-4 bg-surface-container-lowest text-on-surface px-4 py-2 rounded-xl font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Experts
      </span>
    </Link>
  );
};
