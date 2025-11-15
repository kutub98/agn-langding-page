"use client";

import { useEffect } from "react";

export default function BookingCTA() {
  // Replace with your actual Calendly link
  const calendlyUrl = "https://calendly.com/your-username/15min";

  useEffect(() => {
    // load Calendly widget script
    const id = "calendly-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <section id="calendly-embed" className="py-16 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">
          Book a Free 15-Minute Consultation
        </h2>
        <p className="text-gray-600 mb-6">
          Pick a time that suits you — no obligations.
        </p>

        <div className="mx-auto" style={{ minHeight: 560 }}>
          <div
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: "320px", height: "560px" }}
          />
        </div>
      </div>
    </section>
  );
}
