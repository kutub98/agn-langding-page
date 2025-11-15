"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WhyChooseUs() {
  const bullets = [
    "Affordable pricing with flexible plans",
    "Skilled professionals vetted & trained",
    "Easy onboarding — start within days",
    "Replacement guarantee + dedicated account manager",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Everything you need to confidently outsource repetitive work and scale
          faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bullets.map((b, i) => (
            <Card key={i} className="p-6 flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">{b}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  High-level supporting detail to build trust.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
