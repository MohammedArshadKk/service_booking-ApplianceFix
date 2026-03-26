import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest pt-20 pb-12 border-t border-outline-variant/10" id="contact">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-headline font-extrabold text-on-surface block mb-6">ApplianceFix</span>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Professional doorstep appliance repair service. Trusted by families across Malappuram and Kozhikode for quality and speed.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">social_leaderboard</span>
            </Link>
            <Link href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-primary">Services</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="/ac-service-malappuram" className="hover:text-primary">AC Repair & Service</Link></li>
            <li><Link href="/fridge-repair-malappuram" className="hover:text-primary">Refrigerator Service</Link></li>
            <li><Link href="/washing-machine-service-kozhikode" className="hover:text-primary">Washing Machine Fix</Link></li>
            <li><Link href="#" className="hover:text-primary">Microwave Oven Repair</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-primary">Locations</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><Link href="#" className="hover:text-primary">Malappuram District</Link></li>
            <li><Link href="#" className="hover:text-primary">Kozhikode District</Link></li>
            <li><Link href="#" className="hover:text-primary">Manjeri & Nilambur</Link></li>
            <li><Link href="#" className="hover:text-primary">Tirur & Ponnani</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold mb-6 text-primary">Contact Info</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">call</span>
              <span>+91 85902 03732</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <span>support@appliancefix.com</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <span>Down Hill, Malappuram, Kerala</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
        <p>© 2024 ApplianceFix Digital Concierge. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
