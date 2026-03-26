import React from "react";
import Image from "next/image";

export const Locations = () => {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto" id="locations">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-headline text-3xl font-extrabold mb-6">Expert Appliance Repair in Malappuram & Kozhikode</h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            At ApplianceFix, we understand the inconvenience of a broken home appliance. Our team of certified technicians provides reliable and efficient repair services across the Malappuram and Kozhikode districts. We specialize in diagnosing complex issues and providing long-lasting solutions.
          </p>
          <h3 className="font-headline text-xl font-bold mb-4">Why Choose ApplianceFix?</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">done_all</span>
              <span className="text-on-surface-variant"><strong>Wide Coverage:</strong> Serving all major towns in Malappuram and Kozhikode including Manjeri, Tirur, and Calicut City.</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">done_all</span>
              <span className="text-on-surface-variant"><strong>Expert Technicians:</strong> Our staff is trained to handle premium brands like LG, Samsung, Whirlpool, and Daikin.</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">done_all</span>
              <span className="text-on-surface-variant"><strong>Transparent Pricing:</strong> No hidden charges. Get a clear estimate before the work begins.</span>
            </li>
          </ul>
        </div>
        <div className="bg-surface-container rounded-3xl p-8">
          <h3 className="font-headline text-2xl font-bold mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-semibold">Malappuram</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-semibold">Kozhikode</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-semibold">Manjeri</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-semibold">Tirur</span>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl h-48 relative">
            <Image 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop"
              alt="abstract stylized map showing urban topography"
              fill
              className="object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-primary text-on-primary px-4 py-2 rounded-full font-bold text-sm">We are active here!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
