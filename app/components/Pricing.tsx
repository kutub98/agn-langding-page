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
      featured: true,
    },
    {
      name: "Scale",
      priceText: "Custom",
      features: ["Advanced workflows", "Team of VAs", "SLA & onboarding"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Simple Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          Flexible plans starting at <strong>$8 / hour</strong>. No hidden fees.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <Card
                className={`p-8 text-left rounded-3xl border ${
                  p.featured
                    ? "bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-blue-500/20 border-blue-500 shadow-2xl"
                    : "bg-white/80 border-gray-200 shadow-lg"
                } hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs rounded-full font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`text-2xl font-bold mb-6 ${
                    p.featured ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {p.priceText}
                </motion.div>

                <ul className="mb-6 text-sm space-y-3">
                  {p.features.map((f, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <span className="text-blue-500 font-bold">✔</span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full rounded-full px-8 ${
                    p.featured
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-white border border-blue-500 text-blue-600 hover:bg-blue-50"
                  } transition-colors duration-300`}
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
