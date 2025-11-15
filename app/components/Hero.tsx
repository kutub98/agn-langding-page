"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900"
      >
        Hire a Skilled Virtual Assistant. <br /> Save Time. Grow Faster.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl"
      >
        Affordable, trained, and reliable VAs ready to support your business
        today.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <Button size="lg" className="rounded-full px-8">
          Book a Free
        </Button>

        <Button size="lg" variant="outline" className="rounded-full px-8">
          Get Pricing
        </Button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Trusted by <strong>150+ Businesses</strong>
      </p>
    </section>
  );
}
