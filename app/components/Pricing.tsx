"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      priceText: "From $8/hr",
      features: ["General admin", "Email support", "Flexible hours"],
    },
    {
      name: "Pro",
      priceText: "From $12/hr",
      features: [
        "Ecommerce & socials",
        "Priority matching",
        "Dedicated manager",
      ],
    },
    {
      name: "Scale",
      priceText: "Custom",
      features: ["Advanced workflows", "Team of VAs", "SLA & onboarding"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-600 mb-8">
          Flexible plans starting at <strong>$8 / hour</strong>. No hidden fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-6"
            >
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <div className="text-2xl font-bold mb-4">{p.priceText}</div>

                <ul className="mb-6 text-sm space-y-2">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {f}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() =>
                    document
                      .getElementById("lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Full Pricing
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
