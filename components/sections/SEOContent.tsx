import React from "react";
import Link from "next/link";
import { CITIES } from "@/lib/seo-pages";

interface SEOContentProps {
  title: string;
  city: string;
  service: string;
}

export const SEOContent = ({ title, city, service }: SEOContentProps) => {
  const cityLower = city.toLowerCase();
  const internalLinks = [
    { href: `/ac-service-${cityLower}`, label: `AC service in ${city}` },
    { href: `/fridge-repair-${cityLower}`, label: `fridge repair in ${city}` },
    { href: `/washing-machine-service-${cityLower}`, label: `washing machine service in ${city}` },
    { href: `/ac-not-cooling-${cityLower}`, label: `AC not cooling fix in ${city}` },
    { href: `/fridge-not-working-${cityLower}`, label: `fridge not working fix in ${city}` },
  ];

  return (
    <section className="px-8 py-20 bg-surface border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-10 text-on-surface leading-tight">{title}</h2>
        
        <div className="space-y-12 text-on-surface-variant text-lg leading-relaxed font-medium">
          <div className="space-y-4">
            <p>
              Looking for reliable <strong>{service} in {city}</strong>? You've come to the right place. 
              At <span className="text-primary font-bold">ApplianceFix</span>, we understand how frustrating it is when your home appliances break down. 
              Whether it's a hot summer afternoon and your AC stopped cooling, or your fridge is leaking water, 
              our team of expert technicians is ready to help you with fast, affordable, and professional repair services.
            </p>
            <p>
              Many customers find us by searching <strong>“{service} near me”</strong>, <strong>“best {service} in {city}”</strong>, or urgent queries like
              <strong> “{city} appliance repair near your location”</strong>. If that’s you, just message us on WhatsApp with your area and symptom—our support team will confirm the nearest available technician and an ETA.
            </p>
          </div>

          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 space-y-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Why Choose Our {service}?</h3>
            <p className="text-on-surface-variant">
              We take pride in being the top choice for <strong>{service} near me</strong> in {city}. Our commitment to 
              quality and customer satisfaction sets us apart.
            </p>
            <ul className="space-y-6">
              {[
                { label: "Expert Technicians", desc: "Background-verified professionals with years of experience.", icon: "engineering" },
                { label: "Genuine Spare Parts", desc: "We only use high-quality, authentic parts for all replacements.", icon: "inventory_2" },
                { label: "Transparent Pricing", desc: "No hidden costs. Clear estimate before the work begins.", icon: "payments" },
                { label: "Same-Day Service", desc: "Repairs completed within 24 hours of booking.", icon: "schedule" },
                { label: "Full Warranty", desc: "Peace of mind with our service and parts guarantee.", icon: "verified" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-on-surface">{item.label}</strong> 
                    <span className="text-sm text-on-surface-variant">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Pricing & What You Pay For</h3>
            <p>
              Your final cost depends on the appliance brand, age, and the exact issue. We always share an estimate before starting the repair.
              Typical charges include inspection/visiting fee (adjusted if you proceed), labor, and spare parts (only if needed). If you’re searching for <strong>affordable {service} in {city}</strong>, ask us for the best option—we’ll recommend a repair-first approach whenever possible.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Service Areas Around {city}</h3>
            <p>
              We serve major neighborhoods and nearby towns around {city}. If you are slightly outside the city center, share your location on WhatsApp and we’ll confirm availability. This is how we fulfill “<strong>near me</strong>” requests quickly and reliably.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { step: "01", title: "Book Online", desc: "Use our simple WhatsApp form to share your details." },
                { step: "02", title: "Expert Consultation", desc: "Our technician will call you within 30 minutes." },
                { step: "03", title: "Doorstep Visit", desc: "A technician will visit at your preferred time." },
                { step: "04", title: "Repair & Verification", desc: "Issue fixed, and we ensure everything is perfect." }
              ].map((item, i) => (
                <div key={i} className="relative pl-14">
                  <span className="absolute left-0 top-0 text-5xl font-extrabold text-primary/10 leading-none">{item.step}</span>
                  <div className="relative">
                    <h4 className="font-bold text-on-surface mb-2">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-center bg-surface-container-lowest p-10 rounded-3xl">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Common Problems We Fix</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Power Issues", "Strange Noises", "Leakage Problems", 
                "Not Cooling", "PCB Errors", "Sensor Faults", 
                "Drum Issues", "Motor Failure"
              ].map((issue, i) => (
                <span key={i} className="px-6 py-2 bg-surface-container text-primary rounded-full text-sm font-bold">
                  {issue}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Explore related services</h3>
            <div className="flex flex-wrap gap-3">
              {internalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-colors text-sm font-bold text-on-surface"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="text-sm text-on-surface-variant">
              Tip: If you don’t see your exact issue here, try searching our site for the problem (for example “not cooling”, “leaking”, “error code”). We continuously add new pages for more locations in Kerala.
            </p>
          </div>

          <p className="text-center pt-8 border-t border-outline-variant/10 italic text-on-surface-variant/80">
            Don't let a faulty appliance ruin your day. Contact us now for the best <strong>{service} in {city}</strong>. 
            We are just a call or a message away!
          </p>
        </div>
      </div>
    </section>
  );
};
