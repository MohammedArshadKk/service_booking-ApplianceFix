"use client";

import React, { useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FAQ } from "@/components/sections/FAQ";
import { getNearestBranch, Location } from "@/lib/geo";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [nearestBranch, setNearestBranch] = useState<any>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLoc: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const branch = getNearestBranch(userLoc);
        setNearestBranch(branch);
      });
    }
  }, []);

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {nearestBranch && (
        <div className="bg-primary text-on-primary py-4 animate-in fade-in slide-in-from-top duration-500">
          <div className="container-custom text-center text-sm font-bold tracking-wide uppercase">
            📍 Service center found in <span className="underline decoration-2 underline-offset-4">{nearestBranch.name}</span>! 
            <Link href={nearestBranch.path} className="ml-3 px-4 py-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-all">
              View Local Services
            </Link>
          </div>
        </div>
      )}
      
      <Hero />
      <ServicesGrid />
      <Locations />
      <Contact />
      <FAQ />
    </div>
  );
}
