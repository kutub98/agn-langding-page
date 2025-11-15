"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const bullets = [
    "Affordable pricing with flexible plans",
    "Skilled professionals vetted & trained",
    "Easy onboarding — start within days",
    "Replacement guarantee + dedicated account manager",
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative floating blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl animate-slow-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Everything you need to confidently outsource repetitive work and scale
          faster.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/60 border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{b}</h3>
                <p className="text-gray-700 text-sm mt-1">
                  High-level supporting detail to build trust and credibility.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
